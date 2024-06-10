import RenderWeather from "@/components/RenderWeather";
import { currentUser } from '@clerk/nextjs/server';
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  const { userId } = auth();


  const firstName = user?.firstName
  const imageUrl = user?.imageUrl

  console.log("user", user);

  


  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24"> 
      <RenderWeather />

     { user ? (
      <h1>Hello: {user?.firstName}</h1>
     ) 
     : 
     (<h1>Hello</h1>)}
      
      

      {/* {userId ? (
        <Link
          href="/translate"
          className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5 rounded-md text-white text-center cursor-pointer hover:shadow-xl active:scale-90 duration-150 ease-out"
        >
          Get Mish&apos;in or dye Gloom&apos;in!
        </Link>
      ) : (
        <Button className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5 hover:shadow-xl active:scale-90 duration-150 ease-out">
          <SignInButton forceRedirectUrl="/translate" mode="modal">
           Sunny | Gloom | Stream
          </SignInButton>
        </Button>
      )} */}
    </main>
  );
}
