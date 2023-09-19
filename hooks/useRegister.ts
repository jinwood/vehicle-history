import { UserDetails } from "@/app/register/route";
import { useRouter } from "next/router";

export default function useRegister() {
  const router = useRouter();

  const register = (values: UserDetails) => {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (!res.ok) throw res;
        router.push(
          {
            pathname: "/confirm",
            query: { username: values?.username },
          },
          "/confirm"
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return {
    register,
  };
}
