import React from "react";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex items-center justify-between p-3 mx-auto shadow-sm">
      <div className="font-semibold">Sunny|Gloom</div>
      <div className="flex items-center space-x-4">
        <SignedOut>
          <Button
            asChild
            variant="secondary"
            className="hover:shadow-md active:scale-90 duration-150"
          >
            <SignInButton>Log In</SignInButton>
          </Button>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
