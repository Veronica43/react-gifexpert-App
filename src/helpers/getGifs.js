export const getGifs = async (category) => {
  const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=20&api_key=${API_KEY}`;
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
