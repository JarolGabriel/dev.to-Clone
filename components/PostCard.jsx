import { formatPostDate } from "@/hooks/formatodehora";
import Tags from "./tags";
import Image from "next/image";

export default function PostCard({
  id,
  imagenPortada,
  img,
  nameAutor,
  date,
  title,
  tags,
  reaciones,
  read,
  comentarios,
}) {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full max-w-[721px] min-h-[195px] p-4 border border-gray-300 rounded-lg bg-white">
        <Image
          src={imagenPortada}
          alt=""
          className="w-full h-full object-cover rounded-lg pb-5"
          width={1000}
          height={417}
        />
        <div className="flex items-start">
          <Image
            src={img}
            alt={nameAutor}
            className="w-10 object-cover rounded-full mr-1 "
            width={1000}
            height={417}
          />
          <div className="">
            <h2 className="text-base font-semibold text-gray-600 cursor-pointer py-1 px-2 inline-block rounded-lg hover:bg-gray-100">
              {nameAutor}
            </h2>
            <p className="text-xs text-gray-500 ">{formatPostDate(date)}</p>
            <h1 className="font-bold sm:text-2xl  text-xl cursor-pointer hover:text-morado-azulado">
              {title}
            </h1>
            <div className="flex flex-wrap gap-4 pt-3">
              <Tags tags={tags} />
            </div>
            <div className="flex items-center justify-between w-full">
              <button className="text-gray-600 py-1 px-2 rounded-lg hover:bg-gray-100 relative  flex items-center">
                <div className="flex items-center space-x-2 relative pl-4">
                  <div className="relative">
                    <span className="border-2 border-white w-6 h-6 rounded-full p-1 inline-flex items-center justify-center absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      💖
                    </span>
                    <span className="border-2 border-white w-6 h-6 rounded-full p-1 inline-flex items-center justify-center absolute top-0 left-0 transform translate-x-[4px] -translate-y-1/2 z-20">
                      🌈
                    </span>
                    <span className="border-2 border-white w-6 h-6 rounded-full p-1 inline-flex items-center justify-center absolute top-0 left-3 transform translate-x-[4px]  -translate-y-1/2 z-30">
                      🫅
                    </span>
                    <span className="border-2 border-white w-6 h-6 rounded-full p-1 inline-flex items-center justify-center absolute top-0 left-6 transform translate-x-[4px]  -translate-y-1/2 z-30">
                      💜
                    </span>
                  </div>
                  <span className="ml-4 pl-14 sm:block hidden">
                    {reaciones}
                  </span>
                </div>
              </button>
              <div className="flex ml-4">
                <i className="bi bi-chat flex items-center space-x-2"></i>
                <p className="ml-2">{comentarios}</p>
              </div>
              <div className="flex items-center space-x-2 ml-auto">
                <p className="ml-2">{read}</p>
                <i className="bi bi-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
