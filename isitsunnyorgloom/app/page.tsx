import RenderWeather from "@/components/RenderWeather";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  const { userId } = auth();

  const firstName = user?.firstName;
  const imageUrl = user?.imageUrl;

  console.log("user", user);

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      
      <div className="flex flex-col items-center space-y-10">
       {user ? (
        <h1>Hello: {user?.firstName}</h1>
        ) :( 
        <h1>Hello</h1>
        )}
      <RenderWeather /> 
      </div>
      

      

      {userId ? (
        <Link
          href="/sunnyorgloom"
          className="bg-red-600 hover:bg-red-400 w-full mt-10  p-2 rounded-md text-white text-center cursor-pointer hover:shadow-xl active:scale-90 duration-150 ease-out"
        >
          Get Mish&apos;in or die Gloom&apos;in!
        </Link>
      ) : (
        <Button
          variant={"default"}
          className="bg-red-600 hover:bg-red-400 w-full mt-10  p-2 hover:shadow-xl active:scale-90 duration-150 ease-out">
          <SignInButton forceRedirectUrl="/sunnyorgloom" mode="modal">
            Sunny | Gloom | Stream
          </SignInButton>
        </Button>
      )}
    </main>
  );
}
