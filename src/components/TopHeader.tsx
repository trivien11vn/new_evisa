"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import path from "@/utils/path";

const TopHeader = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#3B7ACC]">
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image 
              src="/assets/logo.png" 
              alt="Logo" 
              width={60} 
              height={60} 
              className="w-12 h-12 md:w-15 md:h-15"
            />
            <div className="text-white flex flex-col ml-2">
              <span className="text-sm md:text-base">Global</span>
              <span className="text-sm md:text-base">eVISA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <nav className="flex items-center space-x-4 lg:space-x-6">
              <span
                onClick={() => router.push(`/${path.VISA_APPLY}`)}
                className="text-white text-sm lg:text-base px-2 py-1 cursor-pointer hover:underline"
              >
                Visa Application
              </span>
              <span
                onClick={() => router.push(`/${path.BOOKING_FLIGHT}`)}
                className="text-white text-sm lg:text-base px-2 py-1 cursor-pointer hover:underline"
              >
                Flights
              </span>
              <span className="text-white text-sm lg:text-base px-2 py-1 cursor-pointer hover:underline">
                Travel Insurance
              </span>
              <span className="text-white text-sm lg:text-base px-2 py-1 cursor-pointer hover:underline">
                Airport Services
              </span>
              <span className="text-white text-sm lg:text-base px-2 py-1 cursor-pointer hover:underline">
                Hotel
              </span>
              <span
                onClick={() => router.push(`/${path.CONTACT_US}`)}
                className="text-white text-sm lg:text-base px-2 py-1 cursor-pointer hover:underline"
              >
                Contact
              </span>
            </nav>

            {/* Currency & User */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/assets/usa_flag.svg" 
                  alt="USA Flag" 
                  width={20} 
                  height={20} 
                />
                <Image 
                  src="/assets/dollar.svg" 
                  alt="Dollar" 
                  width={20} 
                  height={20} 
                />
              </div>
              <Image
                onClick={() => router.push(`/${path.USER}`)}
                src="/assets/user.svg"
                alt="User"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/assets/usa_flag.svg" 
                alt="USA Flag" 
                width={20} 
                height={20} 
              />
              <Image 
                src="/assets/dollar.svg" 
                alt="Dollar" 
                width={20} 
                height={20} 
              />
            </div>
            <Image
              onClick={() => router.push(`/${path.USER}`)}
              src="/assets/user.svg"
              alt="User"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2a5d9c] py-4 px-4">
          <div className="flex flex-col space-y-3">
            <span
              onClick={() => {
                router.push(`/${path.VISA_APPLY}`);
                setMobileMenuOpen(false);
              }}
              className="text-white text-base py-2 cursor-pointer hover:underline"
            >
              Visa Application
            </span>
            <span
              onClick={() => {
                router.push(`/${path.BOOKING_FLIGHT}`);
                setMobileMenuOpen(false);
              }}
              className="text-white text-base py-2 cursor-pointer hover:underline"
            >
              Flights
            </span>
            <span className="text-white text-base py-2 cursor-pointer hover:underline">
              Travel Insurance
            </span>
            <span className="text-white text-base py-2 cursor-pointer hover:underline">
              Airport Services
            </span>
            <span className="text-white text-base py-2 cursor-pointer hover:underline">
              Hotel
            </span>
            <span
              onClick={() => {
                router.push(`/${path.CONTACT_US}`);
                setMobileMenuOpen(false);
              }}
              className="text-white text-base py-2 cursor-pointer hover:underline"
            >
              Contact
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHeader;