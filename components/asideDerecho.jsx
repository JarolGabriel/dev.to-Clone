import { usePost } from "@/hooks/usePost";
import { useRouter } from "next/router";
import Tags from "./tags";

export default function AsideDerecho({
  nameAuthor,
  parrafo,
  parrafo1,
  parrafo2,
  parrafo3,
  style,
  comments,
}) {
  const router = useRouter();

  const { id } = router.query;
  const { post } = usePost(id);

  if (!post) return <p>Loading...</p>;
  if (!post.author) return <p>Author data not available</p>;
  return (
    <div className="border rounded-xl px-3 mt-4 bg-white">
      <h1 className="mt-3">
        <span className="text-lg font-bold">{parrafo1} </span>
        <span className="text-xl font-bold text-morado-azulado cursor-pointer px-2 inline-block rounded-lg">
          {nameAuthor}
        </span>
      </h1>
      <div className="border-t mt-3">
        <p className={style}>{comments}</p>
        <p className="mt-3 hover:text-morado-azulado">{parrafo}</p>

        <Tags tags={post.tags} />
        <hr />
        <p className="mt-3 hover:text-morado-azulado">{parrafo2}</p>
        <p className={style}>{comments}</p>
        <ul className="flex mt-1 flex-wrap ">
          <Tags tags={post.tags} />
        </ul>

        <p className="mt-3 hover:text-morado-azulado border-t">{parrafo3}</p>
        <p className={style}>{comments}</p>
        <ul className="flex mt-3 flex-wrap ">
          <Tags tags={post.tags} />
        </ul>
      </div>
    </div>
  );
}
