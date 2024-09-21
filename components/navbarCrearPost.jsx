import Link from "next/link";
import Image from "next/image";

export default function NavarCreatePost() {
  return (
    <nav className="flex items-center justify-evenly px- py-2">
      <div className="sm:flex items-center space-x-4 hidden">
        <img
          src="/original_logo.png"
          alt=""
          className="w-[50px] cursor-pointer"
        />
        <p className="font-semibold ">Create Post</p>
      </div>
      <div className="flex space-x-4 cursor-pointer">
        <p className="font-semibold py-1 px-3 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado">
          Edit
        </p>
        <p className="cursor-pointer py-1 px-3 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado">
          preview
        </p>
      </div>
      <div className="text-xl font-bold absolute right-5 py-1 px-3 hover:bg-morado-azulado-claro rounded-lg hover:text-morado-azulado">
        <Link href={"/"}>
          <i class="bi-x-lg"></i>
        </Link>
      </div>
    </nav>
  );
}
