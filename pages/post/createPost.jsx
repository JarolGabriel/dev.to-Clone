import NavarCreatePost from "@/components/navbarCrearPost";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { CreatePost } from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateNewPost() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    setIsSubmitting(true);

    try {
      const post = await CreatePost({
        tags: data.tags
          .split(/[,\s]+/)
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
        image: data.addImage,
        title: data.title,
        body: data.body,
      });
      console.log("Post created successfully:", post);
      router.push("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  return (
    <div className=" container max-auto">
      <NavarCreatePost />
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border max-w-[878px] sm:min-h-[777px] min-h-[400px] bg-white flex items-start rounded-lg flex-col overflow-hidden">
            <div className="text-center mt-8 ml-8">
              <label htmlFor="addImage" className=""></label>
              <input
                placeholder="Add a URL image"
                id="addImage"
                type="text"
                className="cursor-pointer px-4 py-2 font-semibold rounded-lg border-2 hover:border-morado-azulado focus:border-morado-azulado focus:outline-none"
                {...register("addImage")}
              />
            </div>
            <div className="text-center sm:ml-4">
              <input
                placeholder="New post title here...."
                id="title"
                type="text"
                className={clsx(
                  "focus:outline-none w-full px-2 sm:h-20 h-10 font-bold  sm:text-5xl text-2xl ",
                  {
                    "bg-red-500/10 border-red-500 mt-4 ": errors.title,
                  }
                )}
                {...register("title", {
                  required: {
                    value: true,
                    message: "title is required",
                  },
                })}
              />

              {errors.title && (
                <span className="text-xs text-red-600 mt-3 bg-red-200/50 py-2 px-3 rounded-lg">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="text-center ml-4">
              <input
                placeholder="add up 4 tags.."
                id="tags"
                type="text"
                className={clsx("focus:outline-none w-full px-2 text-lg", {
                  "bg-red-500/10 border-red-500": errors.tag,
                })}
                {...register("tags", {
                  required: {
                    value: true,
                    message: "maximo 4 tags separados por coma(,) is required.",
                  },
                })}
              />

              {errors.tags && (
                <span className="text-xs text-red-600 bg-red-200/50 py-2 px-3 rounded-lg">
                  {errors.tags.message}
                </span>
              )}
            </div>
            <div className="bg-gray-100 h-14 w-full flex justify-evenly items-center mt-4 ">
              <div className="flex sm:space-x-2 flex-grow-[5] text-2xl ml-5 cursor-pointer">
                <i className="bi font-semibold py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-type-bold"></i>
                <i className="bi font-semibold py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-type-italic"></i>
                <i className="bi font-semibold py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-list-ul"></i>
                <i className="bi font-semibold py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-list-ol"></i>
                <i className="bi font-semibold sm:block hidden py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-type-h1"></i>
                <i className="bi font-semibold sm:block hidden py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-lightning-charge"></i>
                <i className="bi font-semibold sm:block hidden py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-quote"></i>
                <i className="bi font-semibold py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-image"></i>
                <i className="bi font-semibold sm:block hidden py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-code-square"></i>
                <i className="bi font-semibold  py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-link-45deg"></i>
                <i className="bi font-semibold sm:block hidden py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-code"></i>
              </div>
              <div className="flex-grow-[1] flex justify-end text-2xl sm;pr-12 cursor-pointer">
                <i className="bi font-semibold py-1 px-2 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado bi-three-dots-vertical"></i>
              </div>
            </div>
            <div className="mt-4 ml-4">
              <textarea
                placeholder=" Write your post content here..."
                id="body"
                rows="6"
                cols="60"
                className={clsx(
                  "focus:outline-none w-full px-2 text-lg h-full resize-none overflow-hidden",
                  {
                    " border-red-500": errors.body,
                  }
                )}
                {...register("body", {
                  required: "Description is required",
                })}
              />
              {errors.body && (
                <p className="text-xs text-red-600 bg-red-200/50 py-2 px-3 rounded-lg">
                  {errors.body.message}
                </p>
              )}
            </div>
          </div>
          <div className="sm:mt-4 mt-2 sm:mb-4 flex justify-start items-center sm:space-x-3">
            <button
              type="submit"
              className="font-semibold hover:bg-morado-azulado-oscuro rounded-md border py-2 px-3 bg-morado-azulado text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Publish"}
            </button>
            {errors.root?.data && (
              <span className="text-xm text-red-600 w-full text-center uppercase">
                {errors.root.data.message}
              </span>
            )}
            <div className=" py-2 px-3 sm:text-base text-sm hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado ">
              Save draft
            </div>
            <div className="py-2 px-3 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado">
              <i class="bi bi-gear text-xl"></i>
            </div>
            <div className="py-2 px-3 sm:text-base text-sm hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado">
              Revert new changes
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
