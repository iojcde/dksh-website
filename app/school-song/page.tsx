const SchoolSongPage = () => {
  return (
    <div className="container  pb-20 prose mt-16 prose-xl">
      <h2>교가</h2>
      <audio
        controls
        crossOrigin="anonymous"
        src="https://dankook.sen.hs.kr/crosseditor/binary/files/schoolsong/SEI_00001178/schoolSong.mp3"
      ></audio>
      <p>
        영기찬 백두산의 정기를 받고
        <br /> 한양성 배움터에 모여든 학도
        <br /> 젊은 피 끓는 가슴 부둥켜 안고
        <br /> 찬연한 앞을 향해 뛰어나간다
      </p>

      <p>
        받들라 혜당 여사 높은 그 뜻을
        <br /> 빛내라 단국대학 우리의 모교 <br />
        받들라 범정선생 굳센 그 뜻을 <br />
        빛내라 단국학원 우리의 모교
      </p>
    </div>
  );
};
export default SchoolSongPage;
