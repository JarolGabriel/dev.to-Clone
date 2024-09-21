import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import ButtonNanbvar from "./buttonNavbar";
import AsideBarIzquierdo from "./asideBarIzquierdo";
import Image from "next/image";

export default function NavbarHome() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAsideMenu = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsAsideOpen(false); // Cerrar el aside en pantallas grandes
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <main className="border-b bg-white sm:px-10 fixed left-0 right-0 top-0 z-50">
        <div className="container mx-auto flex items-center ">
          <div className="flex sm:max-w-[749px]  min-h-[39px] items-center sm:w-full py-2">
            <i
              className="bi-list block sm:hidden text-3xl mr-3 cursor-pointer"
              onClick={toggleAsideMenu}
            ></i>
            <Image
              src="/original_logo.png"
              alt=""
              className="w-[50px] h-[45px] cursor-pointer object-contain sm:mr-4 m-auto"
              width={40}
              height={40}
            />
            <div className="flex relative w-full ">
              <input
                placeholder="Search..."
                id="search"
                type="search"
                className="border w-full hover:border-black/50 rounded-md focus:border-morado-azulado focus:outline-none py-[0.4rem] pl-10 pr-10 bg-white sm:block hidden"
                {...register("search")}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i
                  className={`bi bi-search text-xl flex sm:static absolute left-28 sm:left-auto`}
                ></i>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1 ">
                <span className="text-gray-500 text-sm sm:block hidden">
                  Powered by
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  width="18"
                  height="18"
                  viewBox="0 0 500 500.34"
                  className="sm:block hidden"
                  fill="#6B7280"
                >
                  <path d="M250,0C113.38,0,2,110.16,.03,246.32c-2,138.29,110.19,252.87,248.49,253.67,42.71,.25,83.85-10.2,120.38-30.05,3.56-1.93,4.11-6.83,1.08-9.52l-23.39-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5,10.85-53.21,16.39-81.76,16.04-111.75-1.37-202.04-94.35-200.26-206.1,1.76-110.33,92.06-199.55,202.8-199.55h202.83V407.68l-115.08-102.25c-3.72-3.31-9.43-2.66-12.43,1.31-18.47,24.46-48.56,39.67-81.98,37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28,39.65-101.58,94.07-101.58,49.21,0,89.74,37.88,93.97,86.01,.38,4.28,2.31,8.28,5.53,11.13l29.97,26.57c3.4,3.01,8.8,1.17,9.63-3.3,2.16-11.55,2.92-23.6,2.07-35.95-4.83-70.39-61.84-127.01-132.26-131.35-80.73-4.98-148.23,58.18-150.37,137.35-2.09,77.15,61.12,143.66,138.28,145.36,32.21,.71,62.07-9.42,86.2-26.97l150.36,133.29c6.45,5.71,16.62,1.14,16.62-7.48V9.49C500,4.25,495.75,0,490.51,0H250Z"></path>
                </svg>
                <span className="text-gray-500 text-sm sm:block hidden">
                  Algolia
                </span>
              </div>
            </div>
          </div>
          <ButtonNanbvar />
        </div>
      </main>
      <div>
        <AsideBarIzquierdo isOpen={isAsideOpen} onClose={toggleAsideMenu} />
      </div>
    </div>
  );
}
