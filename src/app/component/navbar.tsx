import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center contentPadding !border-b-2">
      <div className="flex items-center">
        <Image
          alt="logo"
          src={"/asset/images/logo.png"}
          width={80}
          height={80}
        />
        <h1 className="text-4xl text-black font-bold">WhatBytes</h1>
      </div>
      <div className="border border-gray-200 rounded-xl p-1 flex space-x-2 items-center">
        <div className="w-6 h-6 relative bg-gray-300 rounded-full">
          <Image
            alt="picture"
            src={"/asset/images/olasunkanmi-usman.png"}
            fill
          />
        </div>
        <p className="text-black font-bold text-xs">Rahil Siddique</p>
      </div>
    </nav>
  );
};
export default Navbar;
