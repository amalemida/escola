import React, { useEffect } from "react";
import AuthService from "@/services/AuthService"
import router from "next/router";
export default function Logout() {
  useEffect(() => {
    AuthService.logout();
    console.log("logout");
    router.push("/escola");
  }, []);
  return <div>Logout efetuado com sucesso!</div>;
}
