import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const parameter = router.query.slug;
  return <h1>{parameter}</h1>;
}

// export const getStaticPaths = async () => {
//     const
// }
