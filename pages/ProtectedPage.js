import { useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

const ProtectedPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();

    if (!token) {
      router.push("/login");
    }
  }, []);

  return <div>This page requires authentication</div>;
};

export default ProtectedPage;
