import { getPost } from "@/actions/board/get-post";
import { JSDOM } from "jsdom";
import { addFileEmbeds } from "../../file-embeds";

const removeEl = (document: Document, queryselector: string) => {
  document.querySelectorAll(queryselector).forEach((el) => {
    el.remove();
  });
};

const Announcements = async ({
  params: { nttId },
}: {
  params: { nttId: number };
}) => {
  const data = await getPost({
    boardId: "notice",
    nttId,
    bbsId: "BBSMSTR_000000007187",
  });
  const dom = new JSDOM(data);
  const document = dom.window.document;

  const fileTitles = data.matchAll(/serverFileObj\["name"\] = "(.*?)";/g);
  const fileSizes = data.matchAll(/serverFileObj\["size"\] = "(.*?)";/g);

  addFileEmbeds(
    document,
    [...fileTitles].map((match) => match[1]),
    [...fileSizes].map(
      (match) => Math.round((parseInt(match[1]) / 1024 / 1024) * 100) / 100
    )
  );

  removeEl(document, "script");
  removeEl(document, ".board_type01_pagenate");
  removeEl(document, ".board_header");
  removeEl(document, ".board_type01_table_top");
  removeEl(document, ".fl");

  document.querySelectorAll("img").forEach((el) => {
    if (el.src.startsWith("/")) el.src = "https://dankook.sen.hs.kr" + el.src;
  });

  return (
    <div className="container mt-16">
      <h1 className="text-3xl font-bold">공지사항</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: dom.serialize() }}
      />
    </div>
  );
};
export default Announcements;
