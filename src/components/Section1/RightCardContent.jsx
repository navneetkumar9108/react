import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12  flex items-center justify-center">
        {props.id}
      </h2>
      <div>
        <p className="text-xl text-shadow-2xs leading-relaxed text-white mb-14">
          {props.intro}
        </p>
        <div className="flex items-center">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium px-3 py-2 rounded-full"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
