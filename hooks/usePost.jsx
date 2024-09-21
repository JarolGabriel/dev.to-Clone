import { useEffect, useState } from "react";
import { getPost } from "@/utils/api";

export function usePost(id) {
  const [post, setPost] = useState({});

  useEffect(() => {
    if (!id) return;
    getPost(id)
      .then((data) => setPost(data))
      .catch((error) => console.log("[usePost]", error));
  }, [id]);

  // if (!id) return { product };

  return { post };
}
