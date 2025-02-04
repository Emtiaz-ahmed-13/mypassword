"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function Navbar() {
  const { setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 shadow-lg rounded-b-lg backdrop-blur-md border-b border-purple-300/30">
      {/* Left Side (Logo) */}
      <div className="flex-1">
        <h1 className="text-xl font-bold text-white tracking-wide">
          MyPassWords...
        </h1>
      </div>

      {/* Center Navigation Items */}
      <ul className="flex items-center justify-center gap-6 flex-1 text-white font-medium text-lg">
        <li className="hover:text-gray-200 transition-all duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-gray-200 transition-all duration-300 cursor-pointer">
          About
        </li>
        <li className="hover:text-gray-200 transition-all duration-300 cursor-pointer">
          Services
        </li>
      </ul>

      {/* Right Side (Buttons) */}
      <div className="flex items-center gap-3 flex-1 justify-end">
        <SignedOut>
          <SignInButton>
            <Button className="bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300 px-4 py-2 rounded-lg shadow-md">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300 px-4 py-2 rounded-lg shadow-md">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-300 text-gray-900 dark:text-gray-100 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-gray-600 rounded-md p-1"
          >
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-black px-3 py-2 rounded-md"
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-black px-3 py-2 rounded-md"
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("system")}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-black px-3 py-2 rounded-md"
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
