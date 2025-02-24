import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="w-full flex items-center flex-col mt-[50px]">
      <div className="w-12 h-12 border-4 border-white border-b-orange-600 rounded-full inline-block box-border animate-spin" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
