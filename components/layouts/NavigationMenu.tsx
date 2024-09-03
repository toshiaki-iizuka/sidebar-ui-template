"use client";

import Link from "next/link";
import { MenuIcon, PanelsTopLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "@/components/layouts/Menu";

export const NavigationMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1 -translate-x-3"
            variant="link"
            asChild
          >
            <Link href="/" className="flex items-center gap-2">
              <PanelsTopLeft className="w-6 h-6 mr-1" />
              <SheetTitle className="font-bold text-lg">
                Sidebar Template
              </SheetTitle>
            </Link>
          </Button>
          <SheetDescription className="sr-only">
            Open navigation menu
          </SheetDescription>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
};
