import { fetcher } from "./api";

const getPosts = async () => {
  const result = await fetcher("https://pokeapi.co/api/v2/pokemon");
  return {
    posts: result,
  };
};

export default getPosts;
