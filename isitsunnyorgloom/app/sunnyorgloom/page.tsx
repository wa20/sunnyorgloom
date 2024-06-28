import PostSection from "@/components/PostSection";
import UserInfo from "@/components/UserInfo";
import React from "react";

function SunnyOrGloom() {
  return (
    // <div className="grid grid-rows-8 h-screen m-2">
    //   <section className="row-span-3 grid grid-cols-8">
    //     <section className="col-span-8 md:col-span-3 bg-blue-100">
    //       section profile
    //     </section>

    //     <section className="hidden md:inline md:col-span-5 mx-auto w-full bg-red-300">
    //       weather widget
    //     </section>
    //   </section>

    //   <section className="row-span-5 bg-green-200 flex justify-center items-center">
    //     history posts etc...
    //   </section>
    // </div>

    <div className="bg-[#F4F2ED]">
      <div className="grid grid-rows-8 md:grid-cols-8 sm:px-5w max-w-6xl mx-auto">
        <section className="row-span-2 md:inline md:col-span-2 mt-10">
          <UserInfo />
        </section>

        <section className="row-span-6 md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full mt-10">
          <PostSection />
        </section>

        <section className="hidden xl:inline justify-center col-span-2 mt-10">
          widget section
        </section>
      </div>
    </div>
  );
}

export default SunnyOrGloom;
