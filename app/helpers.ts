export async function getStarWarsPeople(page: number) {
  const data = await Promise.all(
    Array.from(Array(10).keys()).map(async (_, i) => {
      const res = await fetch(
        `https://swapi.dev/api/people/${page * 10 + i + 1}/`
      );
      return res.json();
    })
  );
  return data;
}
