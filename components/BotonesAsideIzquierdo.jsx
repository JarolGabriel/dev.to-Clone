import { list3 } from "../lib/array";
import Image from "next/image";

export default function BotonesAsideIzquierdo() {
  return (
    <>
      <p className="sm:ml-20 m-auto font-bold pt-3">Popular Tags</p>
      <div className="sm:ml-20 m-auto h-64 overflow-y-scroll">
        {list3.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(index)}
            className={`py-2 px-4 rounded-lg hover:bg-morado-azulado-claro flex w-full hover:text-morado-azulado space-x-2`}
          >
            <span className="hover:underline">{item}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:ml-20 m-auto border bg-white rounded-lg px-4 py-4 mt-4">
        <div className="flex justify-between">
          <p className="text-sm">💎DEV Diamond Sponsors</p>
          <i class="bi bi-three-dots py-1 px-2 hover:bg-gray-100 rounded-lg cursor-pointer"></i>
        </div>
        <p className="font-bold">Thank you to our Diamond Sponsor Neon</p>
        <img
          src="/Screenshot20atE2AFPM.png"
          alt=""
          className="rounded-lg cursor-pointer"
        />
        <p className="italic py-3">
          Neon is the official database partner of DEV
        </p>
        <p>Happy coding ❤️</p>
      </div>
      <div className="flex flex-col sm:ml-20 m-auto border bg-white rounded-lg px-4 py-4 mt-4">
        <div className="flex justify-between">
          <p className="text-sm">DEV community</p>
          <i class="bi bi-three-dots py-1 px-2 hover:bg-gray-100 rounded-lg cursor-pointer"></i>
        </div>
        <img
          src="/Screenshot 2024-09-20 122517.png"
          alt=""
          className="rounded-lg cursor-pointer"
        />
        <p className="mt-5 font-bold">
          <span className="font-bold text-morado-azulado underline cursor-pointer">
            Fill out this survive.
          </span>
          and help us moderate our community by becoming a tag moderator here at
          DEV.
        </p>
      </div>
      <div className="flex flex-col sm:ml-20 m-auto rounded-lg px-4 py-4 mt-4">
        <p className="text-sm text-gray-500">
          <span className="text-morado-azulado font-bold cursor-pointer">
            DEV Community
          </span>
          A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
      </div>
    </>
  );
}
