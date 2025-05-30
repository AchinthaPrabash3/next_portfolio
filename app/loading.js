import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <AiOutlineLoading3Quarters className=" animate-spin size-24" />
    </div>
  );
};
export default Loading;
