import "@/styles/globals.css";
import { UserProvider } from "@/context/userContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
