// import React from 'react';
import { Home, Database, User, LifeBuoy, Bell, ChevronLeft, LogOut } from 'lucide-react';
// import { Button } from "@/components/ui/button";
import logo from "@/assets/logo/logo.png"

const PlayerDSidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Database, label: 'Data', active: false },
    { icon: User, label: 'Profile', active: false },
    { icon: LifeBuoy, label: 'Help and Support', active: false },
    { icon: Bell, label: 'Notifications', active: false },
  ];

  return (
    <div className="w-64 h-screen bg-[#0B0E14] border-r border-gray-800 flex flex-col p-4 text-gray-400">
      <div className="flex items-center gap-2 mb-10 px-2">
       <div className='overflow-hidden h-25  w-full'>
            <img className="text-white font-bold tracking-tight scale-130 text-xl italic  object-cover"  src={logo}/>
       </div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
              item.active ? 'bg-[#162129] text-[#53DDF5] border-l-4 border-[#53DDF5]' : 'hover:bg-gray-900'
            }`}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="border-t border-gray-800 pt-4 space-y-2">
        <div className="flex items-center gap-3 p-3 hover:bg-gray-900 rounded-xl cursor-pointer">
          <ChevronLeft size={20} />
          <span className="text-sm">Collapse</span>
        </div>
        <div className="flex items-center gap-3 p-3 hover:bg-gray-900 rounded-xl cursor-pointer">
          <LogOut size={20} />
          <span className="text-sm">Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerDSidebar;