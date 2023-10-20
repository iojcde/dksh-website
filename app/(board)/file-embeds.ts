export const addFileEmbeds = (
  document: Document,
  fileTitles: string[],
  fileSizes: number[]
) => {
  const fileId = (
    document.querySelector('input[name="atchFileId"]') as HTMLInputElement
  ).value;

  const fileCount = parseInt(
    (document.querySelector('input[name="fileListCnt"') as HTMLInputElement)
      .value
  );

  const tbody = document.querySelector("#fileListTable tbody");

  for (let fileSn = 0; fileSn < fileCount; fileSn++) {
    tbody?.appendChild(document.createElement("tr"));
    const tr = tbody?.lastElementChild as HTMLTableRowElement;
    const filename =
      fileTitles[fileSn].substring(0, fileTitles[fileSn].lastIndexOf(".")) ||
      fileTitles[fileSn];

    const previewLink = `http://viewhosting.ssem.or.kr:8080/SynapDocViewServer/job?fid=${fileId}_fileSn&filePath=https://dankook.sen.hs.kr:443/dggb/cnvrFileDown.do?atchFileId=${fileId}:${fileSn}&convertType=0&fileType=URL&sync=true`;
    const downloadLink = `https://dankook.sen.hs.kr/dggb/board/boardFile/downFile.do?atchFileId=${fileId}&fileSn=${fileSn}`;
    tr.insertAdjacentHTML(
      "beforeend",
      `<td>${fileSn}</td>
      <td>
        ${fileTitles[fileSn]}
      </td>

      <td>
        ${fileTitles[fileSn].replace(`${filename}.`, "")}
      </td>

      <td>
          ${fileSizes[fileSn]}MB
      </td>

      <td class='flex gap-2 items-center'>
        <a href=${previewLink} target="_blank"> 미리보기 </a>

        <a href=${downloadLink} target="_blank"> 다운로드 </a>
      </td>
      `
    );
  }
};
