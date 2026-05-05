import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  // w - 3 / 4;
  return (
    <div
      id="right"
      className="h-full w-2/3 p-6 rounded-4xl flex overflow-x-auto flex-nowrap gap-10"
    >
      {props.users.map((user, index) => (
        <RightCard
          key={index}
          id={index + 1}
          img={user.img}
          intro={user.intro}
          tag={user.tag}
          color={user.color}
        />
      ))}
    </div>
  );
};

export default RightContent;
