import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 w-72">
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className="transition-transform ease-in-out duration-300 mb-1"
          variant="link"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1 className="font-bold text-lg whitespace-nowrap">
              Sidebar Template
            </h1>
          </Link>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
