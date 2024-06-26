import React from "react";
import { Button } from "./ui/button";
import { Ghost } from "lucide-react";

function Tracker() {
  return (
    <div className="bg-white rounded-md m-2 flex flex-col justify-center items-center">
        
      <div className="flex items-center space-x-4 p-3">
        <div className="flex items-center justify-center w-[100px] bg-gray-400 h-[100px] mb-5 rounded-md">
          test
        </div>
        <div className="flex items-center justify-center w-[100px] bg-gray-400 h-[100px] mb-5 rounded-md">
          test
        </div>
        <div className="flex items-center justify-center w-[100px] bg-gray-400 h-[100px] mb-5 rounded-md">
          test
        </div>
      </div>

      <div className=" flex items-center justify-center space-x-3 py-3">
        <Button>Sunny</Button>
        <Button>Gloom</Button>
        <Button>Stream</Button>
      </div>

      {/* TODO 
     - visual at the top of the page showing count for stream, sunny, gloom
     - 3 buttons for sunny, gloom, stream selection
     
     functionality:
     - the counter needs to store global numbers from all users
     - once a selection is made either make it so the user can't make another selection or make it so they can change their selection
     - in the post section below add the users selection to a post with a timestamp (can i search timestamps by date?)
    
    */}
    </div>
  );
}

export default Tracker;
