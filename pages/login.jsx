import clsx from "clsx";
import { useForm } from "react-hook-form";
import { login } from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import LoginButton from "@/components/LoginButton";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      console.log("data", data);

      const token = await login(data.email, data.password);
      console.log("token", token);

      if (token) {
        localStorage.setItem("token", token);
        router.push("/");
        setIsSubmitting(false);
        return;
      }
    } catch (error) {
      console.log("Login Error:", error);
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className=" container mx-auto  flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-8">
          <img
            src="/original_logo.png"
            alt="logo-dev.to"
            className="w-[60px]"
          />
          <h1 className="text-3xl font-bold">Join the DEV Community</h1>
          <p className="sm:text-base text-sm text-center">
            DEV Community is a community of 2,047,746 amazing developers
          </p>
        </div>
        <LoginButton
          icon="bi-apple"
          text="continue with Apple"
          style="bg-white"
        />
        <LoginButton
          icon="bi-facebook"
          color="text-blue-700"
          text="continue with Facebook"
          style="bg-white"
        />
        <LoginButton
          icon="bi-reddit"
          color="text-red-700"
          text="continue with Reddit"
          style="bg-white"
        />
        <LoginButton
          icon="bi-github"
          text="continue with GitHub"
          style="bg-white"
        />
        <LoginButton
          icon="bi-google"
          text="continue with Google"
          style="bg-white"
        />
        <LoginButton
          icon="bi-twitter-x"
          text="continue with Twitter"
          style="bg-white"
        />
        <div className="flex items-center w-1/2 my-4">
          <div className="flex-grow border border-gray-300"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-grow border border-gray-300"></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-1/2"
        >
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="email" className="font-semibold text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={clsx(
                "border hover:border-black/50 rounded-md focus:border-morado-azulado focus:outline-none py-2 px-4 bg-white",
                {
                  "bg-red-500/10 border-red-500": errors.email,
                }
              )}
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
              })}
            />

            {errors.email && (
              <span className="text-xs text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="password" className="font-semibold text-lg">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={clsx(
                "border hover:border-black/50 rounded-md focus:border-morado-azulado focus:outline-none py-2 px-4 bg-white",
                {
                  "bg-red-500/10 border-red-500": errors.password,
                }
              )}
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
              })}
            />

            {errors.password && (
              <span className="text-xs text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2 justify-between cursor-pointer mb-4 ">
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="form-checkbox h-4 w-4 text-morado-azulado"
                />
                <label for="remember" className="text-lg ">
                  Remember me
                </label>
              </div>
              <p>
                <span className="text-morado-azulado">Forgot password?</span>
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="font-bold rounded-md border py-3 px-4 bg-morado-azulado text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Log in"}
          </button>
          {errors.root?.data && (
            <span className="text-xm text-red-600 w-full text-center uppercase">
              {errors.root.data.message}
            </span>
          )}
        </form>
        <div className=" text-center mt-7 text-sm">
          <p className="mb-6">
            By signing in, you are agreeing to our
            <span className="text-morado-azulado">
              privacy policy, terms of use <br />
            </span>
            and
            <span className="text-morado-azulado">code of conduct.</span>
          </p>
          <hr />
          <div className="mt-7">
            <p>
              New to DEV Community?{" "}
              <Link
                href={"./signup"}
                className="text-morado-azulado text-center text-lg cursor-pointer"
              >
                Create account.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto flex flex-col justify-center items-center mt-10 pb-16 bg-gray-200 pt-8 text-sm space-y-2 sm:px-4">
        <h2 className="font-bold">
          Thank you to our Diamond Sponsor
          <span className="text-morado-azulado">Neon</span> for supporting our
          community.
        </h2>
        <p>
          <span className="text-morado-azulado">DEV Community</span> — A
          constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
        <ul className="flex custom-bullets pl-2 overflow-x-hidden break-words sm:pl-4 flex-wrap cursor-pointer">
          <li>
            <span className="text-morado-azulado">Home</span>
          </li>
          <li>
            <span className="text-morado-azulado">DEV++</span>
          </li>
          <li>
            <span className="text-morado-azulado">Podcasts</span>
          </li>
          <li>
            <span className="text-morado-azulado">Videos</span>
          </li>
          <li>
            <span className="text-morado-azulado">Tags</span>
          </li>
          <li>
            <span className="text-morado-azulado">DEV Help</span>
          </li>
          <li>
            <span className="text-morado-azulado">Forem Shop</span>
          </li>
          <li>
            <span className="text-morado-azulado">Advertise on DEV</span>
          </li>
          <li>
            <span className="text-morado-azulado">DEV Challenges</span>
          </li>
          <li>
            <span className="text-morado-azulado">DEV Showcase</span>
          </li>
          <li>
            <span className="text-morado-azulado">About</span>
          </li>
          <li>
            <span className="text-morado-azulado">Contact</span>
          </li>
        </ul>
        <ul className="flex custom-bullets pl-2 overflow-x-hidden break-words sm:pl-4 cursor-pointer">
          <li>
            <span className="text-morado-azulado">Software Help</span>
          </li>
          <li>
            <span className="text-morado-azulado">Free Postgres Database</span>
          </li>
          <li>
            <span className="text-morado-azulado">Guides</span>
          </li>
          <li>
            <span className="text-morado-azulado">Software comparisons</span>
          </li>
          <li>
            <span className="text-morado-azulado">Terms of use</span>
          </li>
          <li>
            <span className="text-morado-azulado">Code of Conduct</span>
          </li>
          <li>
            <span className="text-morado-azulado">Privacy Policy</span>
          </li>
        </ul>
        <p className="text-center">
          Built on <span className="text-morado-azulado">Forem</span> — the open
          source software that powers{" "}
          <span className="text-morado-azulado">DEV</span> and other inclusive
          communities. <br /> Made with love and{" "}
          <span className="text-morado-azulado">Ruby on Rails</span>. DEV
          Community © 2016 - 2024.
        </p>
      </div>
    </>
  );
}
