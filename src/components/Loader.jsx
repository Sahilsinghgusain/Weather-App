import React from "react";
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
    </div>
  );
};

export default Loader;
