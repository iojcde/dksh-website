export const getCalendar = async ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  const res = await fetch("https://dankook.sen.hs.kr/86278/subMenu.do", {
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
      Referer: "https://dankook.sen.hs.kr/63361/subMenu.do",
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
    body: `siteId=SEI_00001178&viewType=calendar&arrSchdulId=0&srhSchdulYear=${year}&srhSchdulMonth=${month}`,
    next: {
      revalidate: 0,
    },
  });
  return await res.text();
};
