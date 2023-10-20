export const getPost = async ({
  nttId = 0,
  boardId,
  bbsId,
}: {
  nttId: number;
  bbsId: string;
  boardId: string;
}) => {
  const res = await fetch(
    "https://dankook.sen.hs.kr/dggb/module/board/selectBoardDetailAjax.do",
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.9,ko;q=0.8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Cookie: process.env.DKSH_COOKIE as string,
        Origin: "https://dankook.sen.hs.kr",
        Pragma: "no-cache",
        // Referer: "https://dankook.sen.hs.kr/63361/subMenu.do",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua":
          '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
      body: `bbsId=${bbsId}&bbsTyCode=${boardId}&customRecordCountPerPage=10&pageIndex=1&nttId=${nttId}&ifNttId=${Buffer.from(
        nttId.toString()
      ).toString("base64")}`,
      next: {
        revalidate: false,
      },
    }
  );
  return await res.text();
};
