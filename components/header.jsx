"use client";

import React from "react";
import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2 border-b bg-background">
      <nav className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AI-CAREERPATH"
            width={60}
            height={30}
            className="h-20 w-auto object-contain"
          />
        </Link>

        <SignedIn>
          <Link href="/dashboard">
            <Button >
              <LayoutDashboard className="h-4 w-4" />
              Industry Insights
            </Button>
          </Link>
        </SignedIn>
      </nav>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
