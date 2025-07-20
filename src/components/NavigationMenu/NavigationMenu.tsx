// components/Navbar.tsx
"use client"
import martialarts1 from "../../assets/martialarts1.jpeg"


import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/NavBar/navigation-menu"
import { NavigationMenuList } from "../ui/NavBar/NavigationMenuList"


export function Navbar() {
  return (

    <div className="max-h-20 flex justify-around bg-white">

      <div className="mt-3 w-1/2">
      <div className="flex justify-start items-center">
<img alt="Kombat Academy Logo" className="h-13 mr-2" src={martialarts1}/>
<span className="text-xl font-bold">Dragon Martial Arts Academy 
</span>
</div>
      </div>

    <NavigationMenu className="mr-6 w-1/2 ">
      <NavigationMenuList className="flex gap-6 px-4 py-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium bg-white">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white rounded-md p-4">
            <ul className="grid gap-3 w-[200px]">
              <li>
                <NavigationMenuLink
                  href="#AboutMar"
                  className="block p-2 rounded hover:bg-gray-100 transition"
                  >
                  About the martial art
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="#Gallery"
                  className="block p-2 rounded hover:bg-gray-100 transition"
                  >
                  Gallery
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="#Journey"
                  className="block p-2 rounded hover:bg-gray-100 transition"
                  >
                  Our Journey
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#Contact" className="text-base font-medium bg-white">
            Contact Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
                    </div>
  )
}
