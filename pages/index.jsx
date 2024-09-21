import { getAllPosts } from "@/utils/api";
import Layout from "@/layouts/layout";
import Link from "next/link";
import { list, list2, list4 } from "../lib/array";
import ButtonAside from "@/components/buttonAside";
import BotonesAsideIzquierdo from "@/components/BotonesAsideIzquierdo";

import PostCard from "@/components/PostCard";
import { useState } from "react";

export default function ListPost({ posts }) {
  const [activeIndex, setActiveIndex] = useState(null); // Inicialmente no hay botón activo

  const handleClick = (index) => {
    setActiveIndex(index); // Establece el botón activo según el índice
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1 mt-14">
          {/* Columna Izquierda - 3/12 */}
          <div className="col-span-12 sm:col-span-3 mt-4  min-h-50 sm:block hidden">
            <div className="flex flex-col sm:ml-20 m-auto border bg-white rounded-lg px-4 py-4">
              <div className="">
                <h1 className="font-bold text-xl mb-2">
                  DEV Community is a <br /> community of <br />
                  2,070,665 amazing <br />
                  developers
                </h1>
                <p className="text-gray-600">
                  Were a place where coders
                  <br /> share, stay up-to-date and
                  <br /> grow their careers.
                </p>
              </div>
              <div>
                <ButtonAside
                  style={"flex-col "}
                  style2={"order-2 text-center mt-2"}
                  style3={"order-1 mt-2"}
                />
              </div>
            </div>
            <div className="sm:ml-20 m-auto">
              {list.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`py-2 px-4 rounded-lg hover:bg-morado-azulado-claro flex w-full hover:text-morado-azulado space-x-2`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span className="hover:underline">{item.text}</span>
                </button>
              ))}
            </div>
            <p className="font-bold sm:ml-20 m-auto">other</p>
            <div className="sm:ml-20 m-auto">
              {list2.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`py-2 px-4 rounded-lg hover:bg-morado-azulado-claro flex w-full hover:text-morado-azulado space-x-2`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span className="hover:underline">{item.text}</span>
                </button>
              ))}
            </div>
            <div className="sm:ml-20 m-auto flex text-xl  ">
              <i className="bi bi-twitter-x py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-facebook py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-github py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-instagram py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-twitch py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-mastodon py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
            </div>
            <BotonesAsideIzquierdo />
          </div>

          {/* Columna Central - 6/12 */}
          <div className="col-span-12 sm:col-span-6">
            <div className="flex space-x-2 mt-3 sm:block hidden">
              {["Relevan", "Last", "Top"].map((index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`py-2 px-4 rounded-lg hover:bg-white ${
                    activeIndex === index
                      ? "font-bold text-black-600"
                      : "font-normal text-gray-600"
                  }`}
                >
                  {index}
                </button>
              ))}
            </div>
            <main className="mt-4">
              <section className="flex flex-col gap-2">
                {posts.length > 0 ? (
                  posts.map((post, id) => (
                    <PostCard
                      key={id}
                      imagenPortada={id === 0 ? post.image : null}
                      img={post.author.profilePic}
                      nameAutor={post.author.name}
                      date={post.createdAt}
                      title={
                        <Link href={`/post/${post._id}`}>{post.title} </Link>
                      }
                      tags={post.tags}
                      reaciones={"5 Reaction"}
                      read={"3 min read"}
                      comentarios={"Add comment"}
                    />
                  ))
                ) : (
                  <p>No posts available</p>
                )}
              </section>
            </main>
          </div>

          {/* Columna Derecha - 3/12 */}
          <div className="col-span-12 sm:col-span-3 max-w-80 sm:block hidden">
            <div className="border rounded-lg px-3 mt-4 bg-white space-x-2 ">
              <h1 className="mt-3">
                <span className="text-xl font-bold hover:text-morado-azulado cursor-pointer inline-block rounded-lg">
                  #discuss
                </span>
                <p className="text-xs">
                  Discussion threads targeting the whole community
                </p>
              </h1>

              <div className="border-t mt-3 space-y-2">
                <p className="mt-3 hover:text-morado-azulado">Meme Monday</p>
                <p className="text-sm text-gray-500">45 comments</p>

                <div className="border-t mt-3 space-y-2">
                  <p className="mt-3 hover:text-morado-azulado">
                    Meme Monday 😁
                  </p>
                  <p className="text-sm text-gray-500">45 comments</p>
                </div>

                <div className="border-t mt-3 space-y-2">
                  <p className="mt-3 hover:text-morado-azulado">Meme Monday</p>
                  <p className="text-sm text-gray-500">45 comments</p>
                </div>

                <div className="border-t my-3 space-y-2 pb-3">
                  <p className="mt-3 hover:text-morado-azulado">
                    Meme Monday 🚀
                  </p>
                  <p className="text-sm text-gray-500 ">4 comments</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg px-3 mt-4 bg-white space-x-2 ">
              <h1 className="mt-3">
                <span className="text-xl font-bold hover:text-morado-azulado cursor-pointer inline-block rounded-lg">
                  #watercooler
                </span>
                <p className="text-xs">
                  Discussion threads targeting the whole community
                </p>
              </h1>

              <div className="mt-3 space-y-2">
                <div className="border-t mt-3 space-y-2">
                  <p className="mt-3 hover:text-morado-azulado">Meme Monday</p>
                  <p className="text-sm text-gray-500">45 comments</p>
                </div>

                <div className="border-t my-3 space-y-2 pb-3">
                  <p className="mt-3 hover:text-morado-azulado">
                    Music of the Month — What are you listening to? (September
                    Edition 🍂)
                  </p>
                  <p className="text-sm text-gray-500 ">4 comments</p>
                </div>
              </div>
            </div>
            <div className=" rounded-lg px-3 mt-4  space-x-2 ">
              {list4.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`hover:bg-white hover:text-morado-azulado cursor-pointer my-4 rounded-lg py-2 px-3 text-left`}
                >
                  <span className="">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Función para hacer la llamada a la API en el servidor
export async function getServerSideProps() {
  try {
    const posts = await getAllPosts();
    return {
      props: { posts: posts || [] }, // Pasar los posts como props
    };
  } catch (error) {
    return {
      props: { posts: [] }, // En caso de error, devolver un array vacío
    };
  }
}
