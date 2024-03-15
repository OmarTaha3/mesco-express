import React from "react";
import Logo from "../../../public/icons/logo";
import Status from "../components/sign-up/status";
import Main from "../components/sign-up/main";

export default function page() {
  return (
    <main className="flex items-start h-screen">
      <Main />
      <Status />
    </main>
  );
}
