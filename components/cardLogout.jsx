import React, { useState } from "react";
import { useUser } from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";

// para deslogueo

export default function ProfileCard({ isOpen, onClose }) {
  const { user, loading } = useUser();
  const router = useRouter();

  function logoutUser() {
    localStorage.removeItem("token");

    router.push("/login");
  }

  return (
    // Mostrar la card solo si isOpen es true
    isOpen && (
      <div className="absolute top-16 right-0 sm:right-44 w-[200px] bg-white shadow-lg rounded-md z-50 p-4">
        {/* Contenido de la card */}
        <div className="flex flex-col">
          <div className="border-b  pb-3 py-2 px-3 hover:underline hover:text-morado-azulado hover:bg-morado-azulado-claro rounded-lg">
            <p className="font-semibold">{user.user.name}</p>
            <p className="text-gray-500 text-sm">{user.user.email}</p>
          </div>

          <div className=" text-gray-500 py-3 border-b">
            <p className="py-2 px-3 hover:underline hover:text-morado-azulado hover:bg-morado-azulado-claro rounded-lg">
              Dashboard
            </p>
            <Link
              href={"/post/createPost"}
              className="py-2 px-3 hover:underline hover:text-morado-azulado hover:bg-morado-azulado-claro rounded-lg"
            >
              Create Post
            </Link>
            <p className="py-2 px-3 hover:underline hover:text-morado-azulado hover:bg-morado-azulado-claro rounded-lg">
              reading
            </p>
            <p className="py-2 px-3 hover:underline hover:text-morado-azulado hover:bg-morado-azulado-claro rounded-lg">
              Setting
            </p>
          </div>
          <p
            className="pt-3 text-gray-500 text-xl cursor-pointer py-2 px-3 hover:underline hover:text-morado-azulado hover:bg-morado-azulado-claro rounded-lg"
            onClick={logoutUser}
          >
            Sing Out
          </p>
        </div>
      </div>
    )
  );
}
