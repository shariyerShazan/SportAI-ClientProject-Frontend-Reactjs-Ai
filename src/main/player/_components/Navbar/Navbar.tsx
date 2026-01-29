// import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PlayerDNavbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#0B0E14] border-b border-gray-800">
      <div className="text-gray-400 text-sm">
        Home <span className="mx-2">|</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative p-2 bg-[#162129] rounded-lg border border-gray-700">
          <Bell size={18} className="text-[#53DDF5]" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-black"></span>
        </div>
        <div className="flex items-center gap-3 bg-[#162129] p-1 pr-4 rounded-full border border-gray-700">
          <Avatar className="h-8 w-8 border border-cyan-400">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-xs font-bold text-white">Michael Chen</p>
            <p className="text-[10px] text-gray-400">Midfielder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDNavbar;