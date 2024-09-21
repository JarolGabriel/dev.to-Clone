import { useUser } from "@/context/userContext";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProfileCard from "./cardLogout";

export default function ButtonNanbvar({ style, style2, style3 }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileCard = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeProfileCard = () => {
    setIsProfileOpen(false);
  };

  const { user, loading } = useUser();
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setToken(token);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const isAuthenticated = Boolean(token);

  function handleClick() {
    if (isAuthenticated) {
      router.push("/post/createPost");
    } else {
      router.push("/signup");
    }
  }

  function handleClickLogin() {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }

  return (
    <>
      <div className={`flex justify-center ml-auto ${style}`}>
        {!isAuthenticated && (
          <span
            className={`sm:block hidden rounded-md hover:bg-morado-azulado-claro py-2 px-3 mr-3 hover:underline hover:text-morado-azulado text-gray-600 ${style2}`}
            onClick={handleClickLogin}
          >
            log in
          </span>
        )}
        <button
          onClick={handleClick}
          className={`rounded-md border border-morado-azulado hover:bg-morado-azulado mr-1 py-2 px-3 hover:underline text-morado-azulado hover:text-white font-semibold ${style3}`}
        >
          {isAuthenticated ? "Create post" : "Create account"}
        </button>
        {isAuthenticated && user && (
          <div className=" sm:flex justify-center items-center space-x-2 cursor-pointer pr-3 hidden">
            <i className=" bi-bell text-3xl ml-1 hover:bg-morado-azulado-claro py-1 px-2 rounded-lg"></i>
            <img
              src={user.user.profilePic}
              className="h-8 w-8 rounded-full hover:border-2 hover:border-gray-300 "
              onClick={toggleProfileCard}
            />
          </div>
        )}
      </div>
      <ProfileCard isOpen={isProfileOpen} onClose={closeProfileCard} />
    </>
  );
}
