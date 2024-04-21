"use client";
import React from "react";
import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session, status } = useSession();

  console.log("session: ", session);
  console.log("status: ", status);

  return <div>UserProfile</div>;
};

export default UserProfile;
