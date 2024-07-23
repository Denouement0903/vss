"use client"
import Image from "next/image";
import logo from "../assets/logo.jpg"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { JSX, SVGProps } from "react"
import MultiSelectMenu from "./MutliSelectMenu";
 
export default function Navbar() {
  return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
            <SheetTrigger asChild>
                <Button className="lg:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
            <Link href="/">
            <Image
              src={logo}
              alt="VSS Logo"
              width={24}
              height={24}
              />
            </Link>
            <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                        Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="../pages/sport">
                        Sport
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="../pages/about">
                        About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="../pages/contact">
                        Contact
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                      <MultiSelectMenu />
            </Link>
            </div>
            </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex" href="/">
        <Image
              src={logo}
              alt="VSS Logo"
              width={48}
              height={24}
              />
        <span className="sr-only">Company Logo</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
        <NavigationMenuLink asChild>
        <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="/"
        >
                   Home
        </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
        <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="../pages/sport"
        >
                    Sport

        </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
        <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="../pages/about"
        >
                   About
        </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
        <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="../pages/contact"
        >
                    Contact
        </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
        <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:text-white focus:bg-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
        >
                    <MultiSelectMenu />
        </Link>
        </NavigationMenuLink>
        </NavigationMenuList>
        </NavigationMenu>
        </header>
  )
}
 
function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
>
<line x1="4" x2="20" y1="12" y2="12" />
<line x1="4" x2="20" y1="6" y2="6" />
<line x1="4" x2="20" y1="18" y2="18" />
</svg>
  )
}
 