import logo from "/Picture1.png";
import { CirclePlus } from "lucide-react";
import { useRef } from "react";

export default function Navbar() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
      };
  return (
    <div className="w-screen h-[70px] border-b shadow-sm flex justify-between items-center">
      <div className="ml-5">
        <img src={logo} alt="ai planet logo" width={100} height={100} />
      </div>
      <div className="relative">
        <button
        onClick={handleClick}
         className="flex mr-5 items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200">
          <CirclePlus className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Upload PDF</span>
        </button>
        <input 
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept=".pdf"
         />
      </div>
    </div>
  );
}
