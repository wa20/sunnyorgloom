import RenderWeather from "@/components/RenderWeather";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { trending_data } from "./data/trending";

export default async function Home() {
  const user = await currentUser();
  const { userId } = auth();

  const firstName = user?.firstName;
  const imageUrl = user?.imageUrl;

  console.log("user", user);
  return (
    <main className="bg-[#013B94]">
      <div className="max-w-7xl mx-auto p-6">
        <section className="">
          <div className="font-bold text-5xl text-white">
            {user ? <h3>Hello: {user?.firstName}</h3> : <h3>Hello</h3>}
          </div>
          <div className="text-white py-5 text-xl">
            Its not enough to say its gloom, you have to show it...
          </div>
        </section>

        <section className="flex flex-col items-center justify-around p-24">
          <div className="flex flex-col items-center space-y-10 text-white">
            <RenderWeather />
          </div>

          {userId ? (
            <div>
              <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
                <div className="pt-5">
                  <h3 className="text-xl font-bold">Trending Collections</h3>
                  <p className="font-light">
                    It&apos;s not just sunny, it&apos;s streamin&apos;
                  </p>
                </div>

                <div className="flex space-x-4 py-5 overflow-x-scroll">
                  {trending_data.map((item) => (
                    <div
                      key={item.id}
                      className="space-y-1 shrink-0 cursor-pointer"
                    >
                      <img
                        key={item.id}
                        className="w-80 h-72 object-cover rounded-lg pb-2"
                        src={item.src}
                        alt={item.title}
                      />

                      <p className="font-bold">{item.title}</p>
                      <p className="">{item.location}</p>
                      <p className="font-light text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              <Button className="bg-gray-50 hover:bg-gray-100 w-full text-gray-700 p-2 rounded-md rounded-t-none text-center cursor-pointer hover:shadow-xl">
                <Link href="/sunnyorgloom">
                  Get Mish&apos;in or die Gloom&apos;in!
                </Link>
              </Button>
            </div>
          ) : (
            <Button className="bg-white hover:bg-gray-100 w-full mt-10 text-gray-700  p-2 hover:shadow-xl active:scale-90 duration-150 ease-out">
              <SignInButton forceRedirectUrl="/sunnyorgloom" mode="modal">
                Sunny | Gloom | Stream
              </SignInButton>
            </Button>
          )}
        </section>
      </div>
    </main>
  );
}
