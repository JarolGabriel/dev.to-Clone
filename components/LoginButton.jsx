import Link from "next/link";

export default function LoginButton({ icon, text, color, style, href = "/" }) {
  return (
    <div className="w-1/2 mt-4">
      <Link href={href}>
        <button
          className={`border w-full py-3 px-4 rounded-lg flex items-center hover:bg-gray-100 ${style}`}
        >
          <i className={`bi ${icon} md:mr-60    text-xl ${color}`}></i>
          <span className="font-semibold text-sm sm:ml-3">{text}</span>
        </button>
      </Link>
    </div>
  );
}
