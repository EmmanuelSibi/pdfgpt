import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  console.log("page dashboard");
  const {getUser} = getKindeServerSession();
  const user =  await getUser();
  console.log(user);
  if (!user) redirect("/auth-callback?origin=dashboard");

  return <div>{user.email}</div>;
};

export default page;
