export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=20&api_key=uUPQRPYJ5J7mctQnfFqE8SVbaVk55wp5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,

      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
