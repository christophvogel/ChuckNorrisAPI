export async function getRandomJoke() {
  const response = await fetch(`https://api.icndb.com/jokes/random`);
  const result = await response.json();
  return result;
}
