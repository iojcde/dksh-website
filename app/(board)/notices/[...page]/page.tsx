import { getPosts } from "@/actions/board/get-posts";
import { JSDOM } from "jsdom";
import { useEffect } from "react";
import { Opener } from "../../opener";
import BoardNavigation from "../../navigation";

const removeEl = (document: Document, queryselector: string) => {
  document.querySelectorAll(queryselector).forEach((el) => {
    el.remove();
  });
};

const Announcements = async ({
  params: { page: pageNumber },
}: {
  params: { page: number };
}) => {
  const data = await getPosts({
    index: pageNumber,
    boardId: "notice",
    bbsId: "BBSMSTR_000000007187",
  });

  const dom = new JSDOM(data);
  const document = dom.window.document;
  removeEl(document, "script");
  removeEl(document, ".board_type01_pagenate");
  removeEl(document, ".board_header");
  removeEl(document, ".board_type01_table_top");
  removeEl(document, ".fl");

  document.querySelectorAll("img").forEach((el) => {
    el.src = "https://dankook.sen.hs.kr" + el.src;
  });

  return (
    <div className="container mt-16">
      <h1 className="text-3xl font-bold">공지사항</h1>
      <span className="mt-2 text-sm text-gray-11">{pageNumber} 페이지</span>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: dom.serialize() }}
      />
      <Opener boardName="notices" />
      <BoardNavigation boardName="notices" />
    </div>
  );
};
export default Announcements;
