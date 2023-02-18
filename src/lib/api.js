export async function fetcher(url, options = {}) {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    console.log('options: ', options);
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
}
