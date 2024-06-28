import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";

async function UserInfo() {
  const user = await currentUser();

  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const imgare = user?.imageUrl;

  return (
    <div className="flex flex-col justify-center items-center bg-white md:mr-6  rounded-lg py-4">
      <Avatar>
        {user?.id ? (
          <AvatarImage src={imgare} alt={`${firstName} ${lastName}`} />
        ) : (
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        )}

        <AvatarFallback>
          {firstName?.charAt(0)}
          {lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <SignedIn>
        <div className="mt-5">
          <p className="font-semibold flex justify-center">
            {firstName} {lastName}
          </p>
          <p className="text-xs">
            @{firstName} {lastName} - {user?.id?.slice(-4)}
          </p>
        </div>
      </SignedIn>

      {/* <SignedOut>
        <div className="text-center space-y-2">
          <p className="font-semibold">Not signed in.</p>
          <Button
            asChild
            className="bg-[#0b63c4] text-white hover:shadow-xl active:scale-90 duration-150"
          >
            <SignInButton>Sign In</SignInButton>
          </Button>
        </div>
      </SignedOut> */}

       <SignedIn>
                <hr className='w-full border-gray-200 my-5' />

                <div className='flex justify-between w-full px-4 text-sm'>
                    <p className='font-semibold text-gray-400'>Sunny:</p>
                    <p className='text-blue-400'>
                        {/* //TODO fetch number of gloom posts */}
                    </p>
                </div>
                <div className='flex justify-between w-full px-4 text-sm'>
                    <p className='font-semibold text-gray-400'>Gloom:</p>
                    <p className='text-blue-400'>
                        {/* //TODO fetch numner of sunny posts */}
                    </p>
                </div>
            </SignedIn>
    </div>
  );
}

export default UserInfo;
