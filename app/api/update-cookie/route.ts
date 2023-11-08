const GET = async () => {
  const res = await fetch(`https://dankook.sen.hs.kr/index.do`);

  const cookie = res.headers.get("set-cookie");

  console.log(cookie);

  return new Response(cookie?.split(";")[0]);
};

export { GET };
