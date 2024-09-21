import Layout from "@/layouts/layout";
import { useRouter } from "next/router";
import { usePost } from "@/hooks/usePost";
import { formatPostDate } from "@/hooks/formatodehora";
import AsideDerecho from "@/components/asideDerecho";
import Image from "next/image";

export default function PostDetail() {
  const router = useRouter();

  const { id } = router.query;
  console.log("Current ID:", id); // Verifica el ID
  const { post } = usePost(id);

  if (!post) return <p>Loading...</p>;
  if (!post.author) return <p>Author data not available</p>;
  return (
    <>
      <Layout>
        <div className=" mx-auto pt-3">
          <div className="flex flex-wrap gap-1">
            <div className="flex-none w-full sm:w-1/12">
              <div className="sm:block flex-col text-end pr-5 mt-8 cursor-pointer space-y-2 hidden sticky top-14 ">
                <i className="bi bi-suit-heart text-xl hover:text-red-700"></i>
                <p>1</p>
                <i className=" bi bi-chat text-xl hover:text-yellow-400"></i>
                <p>10</p>
                <i className="bi bi-bookmark text-xl hover:text-morado-azulado"></i>
                <p>1</p>
                <div className="h-12">
                  <i className="bi bi-three-dots text-gray-500 text-xl hover:text-black rounded-full hover:bg-gray-200 inline-block"></i>
                </div>
              </div>
            </div>
            {/**div de la card del medio */}
            <div className="flex-none w-full sm:w-7/12 p-4 border border-gray-300 rounded-lg bg-white mt-14">
              <div className="relative w-full">
                {post.image ? (
                  <div>
                    <img
                      src={post.image || "/Screenshot2024-05-27095220.png"}
                      className="w-full h-full object-cover rounded-lg "
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="flex items-center mt-4 mb-4">
                  <img
                    src={post.author.profilePic}
                    alt={post.author.name}
                    className="w-10 object-cover rounded-full mr-1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-600 cursor-pointer py-1 px-2 inline-block rounded-lg hover:bg-gray-100">
                      {post.author.name}
                    </h3>
                    <p className="text-xs text-gray-500 ">
                      {formatPostDate(post.createdAt)}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 mb-2">
                  <p className="text-xl">
                    💖 <span className="text-base">1</span>
                  </p>
                  <p className="text-xl">
                    🫅 <span className="text-base">145</span>
                  </p>
                  <p className="text-xl">
                    🔥 <span className="text-base">9</span>
                  </p>
                  <p className="text-xl">
                    🌈 <span className="text-base">15</span>
                  </p>
                </div>
                <div>
                  <h1 className="font-bold sm:text-5xl text-4xl  cursor-pointer hover:text-morado-azulado">
                    {post.title}
                  </h1>
                </div>
                <div>
                  <ul className="flex flex-wrap sm:flex-nowrap mt-4">
                    {post.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="text-gray-600 border  border-transparent hover:border-gray-300 py-1 px-2 rounded-lg hover:bg-gray-100"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-medium mt-3">
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
            {/** lateral derecho about */}
            <div className="flex-none w-full sm:w-3/12 sm:block hidden mt-14">
              <div className="border h-60 rounded-xl px-3 bg-white">
                <div className=" flex items-center mt-5 ">
                  <img
                    src={post.author.profilePic}
                    alt={post.author.name}
                    className="w-14 object-cover rounded-full ml-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-600 cursor-pointer px-2 inline-block rounded-lg hover:text-morado-azulado">
                      {post.author.name}
                    </h3>
                  </div>
                </div>
                <button className="py-2 p-x4 mt-3 bg-morado-azulado w-full text-white font-semibold rounded-lg hover:bg-morado-azulado-oscuro">
                  Follow
                </button>
                <p className="mt-4">Full Stack JavaScript Developer</p>
                <p className="font-semibold text-xs mt-4">JOINED</p>
                <p>Nov 6, 2021</p>
              </div>
              {/* mas sobre la prsona */}
              <AsideDerecho
                nameAuthor={post.author.name}
                parrafo={
                  "Marketplace app using NestJS, Next.js 14, Tailwind CSS, Prisma, and NextAuth"
                }
                parrafo1={"More from"}
                parrafo2={
                  "Nest-Connect API using NestJs, PassportJs, and prisma"
                }
                parrafo3={
                  "Nest-Connect API using NestJs, PassportJs, and prisma"
                }
                tags={post.tags}
              />
              {/**card de auth0 */}
              <div className="border rounded-xl px-3 mt-4 bg-white">
                <div className="flex mt-3">
                  <div className="flex justify-around">
                    <div className="">
                      <image
                        src="/public/original_logo.png"
                        alt=""
                        className="w-6 rounded-lg"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Auth0</p>
                    </div>
                    <div>
                      <button className="font-semibold text-sm">
                        PROMOTED
                      </button>
                    </div>
                  </div>
                  <div className="h-12 flex">
                    <i className="bi bi-three-dots text-gray-500 text-xl hover:text-black rounded-full hover:bg-gray-200 inline-block"></i>
                  </div>
                </div>
                <div>
                  <image
                    src={"/public/Screenshot 2024-09-20 122517.png"}
                    alt=""
                    className="rounded-lg"
                    width={20}
                    height={20}
                  />
                </div>
                <h1 className="font-bold text-xl mt-2 ">
                  <a href="#">Too many tasks cluttering your workspace? 🙃</a>
                </h1>
                <p className="text-sm mt-3">
                  Let us help clear some things off your plate. 🍽️ Leave login
                  (and much more) to Auth0.
                </p>
                <button className="border  border-morado-azulado w-full py-2 rounded-lg mt-3 font-bold hover:text-white text-morado-azulado hover:bg-morado-azulado">
                  sign up now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
