import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useState } from "react";
import { signUp } from "@/utils/api";
import { useRouter } from "next/router";

export default function RegisterSignup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      console.log("data", data);

      const response = await signUp(
        data.name,
        data.email,
        data.password,
        data.profilePic
      );
      console.log("response", response);

      if (response) {
        router.push("/login");
      }
    } catch (error) {
      console.log("sign up Error:", error);
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col w-[580px] h-[756] border rounded-lg p-5 bg-white">
        <h1 className="text-left font-bold text-xl mb-5">
          Create your account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-full"
        >
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="image" className="font-semibold text-lg">
              Profile image
            </label>
            <input
              id="image"
              type="text"
              className={clsx(
                "border hover:border-black/50 rounded-md focus:border-morado-azulado focus:outline-none py-2 px-4 ",
                {
                  "bg-red-500/10 border-red-500": errors.image,
                }
              )}
              {...register("profilePic", {
                required: {
                  value: true,
                  message: "image is required",
                },
              })}
            />

            {errors.image && (
              <span className="text-xs text-red-600">
                {errors.image.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="name" className="font-semibold text-lg">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              type="text"
              className={clsx(
                "border hover:border-black/50 rounded-md focus:border-morado-azulado focus:outline-none py-2 px-4 ",
                {
                  "bg-red-500/10 border-red-500": errors.name,
                }
              )}
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
            />

            {errors.name && (
              <span className="text-xs text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col w-full gap-4">
            <label htmlFor="email" className="font-semibold text-lg">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={clsx(
                "border hover:border-black/50 rounded-md focus:border-morado-azulado focus:outline-none py-2 px-4 ",
                {
                  "bg-red-500/10 border-red-500": errors.email,
                }
              )}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
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
              Password<span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              type="password"
              className={clsx(
                "border hover:border-black/50 rounded-md focus:border-morado-azulado focus:outline-none py-2 px-4",
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
          <div className="flex flex-col w-full gap-4">
            <label
              htmlFor="passwordConfirmation"
              className="font-semibold text-lg"
            >
              Password Confirmation <span className="text-red-600">*</span>
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              className={clsx(
                "border hover:border-black/50 rounded-md focus:border-morado-azulado focus:outline-none py-2 px-4",
                {
                  "bg-red-500/10 border-red-500": errors.passwordConfirmation,
                }
              )}
              {...register("passwordConfirmation", {
                required: "confirmation of the password  is required",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "Password shoul match!";
                  },
                },
              })}
            />

            {errors.passwordConfirmation && (
              <span className="text-xs text-red-600">
                {errors.passwordConfirmation.message}
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2 justify-between cursor-pointer mb-4">
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="form-checkbox h-4 w-4 text-morado-azulado"
                />
                <label for="remember" className="text-lg ">
                  Im not a robot
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="font-bold rounded-md border py-3 px-4 bg-morado-azulado text-white hover:bg-morado-azulado-oscuro"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Sign up"}
            </button>
          </div>
          {errors.root?.data && (
            <span className="text-xm text-red-600  text-center uppercase">
              {errors.root.data.message}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
