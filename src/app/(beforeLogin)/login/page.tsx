"use client";
import { useRouter } from "next/navigation";
import Main from "../_component/Main";

export default function Login() {
  // 해당 경로로 redirect
  const router = useRouter();
  router.replace("/i/flow/login");

  return <Main />;
}
