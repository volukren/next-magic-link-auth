"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  useEffect(() => {}, [status]);

  return (
    <div className="flex justify-between border items-center p-2 shadow-md">
      <Link href="/" className="text-xl font-bold">
        NextMagicLink
      </Link>

      {(status === "loading" || status === "unauthenticated") && (
        <Link href="/api/auth/signin" className="p-2 rounded border">
          Sign in
        </Link>
      )}
      {status !== "loading" && status !== "unauthenticated" && (
        <Link
          href="/profile"
          className="border p-2 rounded-lg bg-blue-600 text-white"
        >
          {session?.user?.email}
        </Link>
      )}
    </div>
  );
};

export default Header;
