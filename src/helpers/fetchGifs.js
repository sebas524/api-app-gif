//!api fetching:
export const fetchGifs = async (category) => {
  const myUrl = `https://api.giphy.com/v1/gifs/search?api_key=MOEx1XwsO0OVU6G41nub4m5mdqDECiCb&q=${category}&limit=5`;
  const resp = await fetch(myUrl);
  const { data } = await resp.json();
  const selectedInfos = data.map((info) => {
    return {
      id: info.id,
      title: info.title,
      url: info.images.downsized_medium.url,
    };
  });

  return selectedInfos;
};
