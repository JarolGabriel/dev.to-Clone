import { useForm } from "react-hook-form";
import { login } from "@/utils/api";

import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "sonner";

import LoginButton from "@/components/LoginButton";

export default function Signup() {
  const router = useRouter();

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
          text="sign up with Apple"
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
          text="sign up with Reddit"
          style="bg-white"
        />
        <LoginButton
          icon="bi-github"
          text="sign up with GitHub"
          style="bg-white"
        />
        <LoginButton
          icon="bi-google"
          text="sign up with Google"
          style="bg-white"
        />
        <LoginButton
          icon="bi-twitter-x"
          text="sign up with Twitter"
          style="bg-white"
        />
        <LoginButton
          icon="bi bi-envelope-at-fill"
          text="sign up with email"
          style="bg-morado-azulado hover:bg-morado-azulado-oscuro hover:text-white"
          href="./signup/registerSignup"
        />
        <div className="flex items-center w-1/2 my-4">
          <div className="flex-grow border border-gray-300"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-grow border border-gray-300"></div>
        </div>

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
          <div className="mt-7 mb-16">
            <p>
              Already have an account?
              <Link href={"./login"}>
                <span className="text-morado-azulado text-center text-lg cursor-pointer">
                  Log in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
