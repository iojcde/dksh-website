import { JSDOM } from "jsdom";

export const getMeal = async (): Promise<{
  meal: string[] | string;
  img: string | null;
}> => {
  let dish: {
    meal: string[] | string;
    img: string | null;
  } = {
    meal: "급식 정보가 없습니다.",
    img: null,
  };

  const res = await fetch("https://dankook.sen.hs.kr/175819/subMenu.do", {
    body: "viewType=list&siteId=SEI_00001178&pageIndex=2&arrMlsvId=0&srhMlsvYear=2023&srhMlsvMonth=10",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    next: {
      revalidate: 60 * 60,
    },
  }).then((res) => res.text());

  const dom = new JSDOM(res);

  const document = dom.window.document;

  const today = new Date().toISOString().slice(0, 10).replaceAll("-", ".");

  const trs = document.querySelectorAll("tr");

  for (const tr of trs) {
    if (tr.querySelector("td:first-child")?.textContent?.trim() == today) {
      const anchor = tr
        .querySelector("td:nth-child(3) a")
        ?.getAttribute("onclick") as string;

      const tmpId = anchor.match(/\('(\d+)'\)/);
      if (!tmpId) {
        return dish;
      }

      const id = tmpId[1];

      const dishPopup = await fetch(
        "https://dankook.sen.hs.kr/dggb/module/mlsv/selectMlsvDetailPopup.do",
        {
          method: "POST",
          body: `mlsvId=${id}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      ).then((res) => res.text());

      const popupDom = new JSDOM(dishPopup);
      const popupDocument = popupDom.window.document;

      const tmpdish = popupDocument
        .querySelector("tr:nth-child(4) td")
        ?.textContent?.replace(/[\n\t]+/g, "\n")
        .trim()
        .split("\n");

      if (tmpdish) {
        dish.meal = tmpdish.map((d) => d.trim());
      }

      const img = popupDocument.querySelector("img")?.getAttribute("src");

      if (img && !img.includes("btn_popClose.gif")) {
        dish.img = "https://dankook.sen.hs.kr" + img;
      }
    }
  }

  return dish;
};
