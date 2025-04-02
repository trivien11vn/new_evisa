"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import path from "@/utils/path";

// Ảnh được lưu trong thư mục public/assets
const TopHeader = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[96px] bg-[#3B7ACC] flex justify-center">
      <div className="h-full w-full md:w-main flex items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <div
          className="flex gap-[2px] items-center w-[135px] h-[96px] justify-start cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src="/assets/logo.png" alt="Logo" width={60} height={60} />
          <div className="text-white flex flex-col text-[16px] p-2">
            <span>Global</span>
            <span>eVISA</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-[102px]">
          <div className="flex gap-[12px] text-white items-center h-full">
            <span
              onClick={() => router.push(`/${path.VISA_APPLY}`)}
              className="text-[16px] md:text-[14px] lg:text-[16px] px-2 py-1 cursor-pointer"
            >
              Visa Application
            </span>
            <span
              onClick={() => router.push(`/${path.BOOKING_FLIGHT}`)}
              className="text-[16px] md:text-[14px] lg:text-[16px] px-2 py-1 cursor-pointer"
            >
              Flights
            </span>
            <span className="text-[16px] md:text-[14px] lg:text-[16px] px-2 py-1 cursor-pointer">Travel Insurance</span>
            <span className="text-[16px] md:text-[14px] lg:text-[16px] px-2 py-1 cursor-pointer">Airport Services</span>
            <span className="text-[16px] md:text-[14px] lg:text-[16px] px-2 py-1 cursor-pointer">Hotel</span>
            <span
              onClick={() => router.push(`/${path.CONTACT_US}`)}
              className="text-[16px] md:text-[14px] lg:text-[16px] px-2 py-1 cursor-pointer"
            >
              Contact
            </span>
          </div>

          {/* Currency & User */}
          <div className="w-[100px] h-[40px] gap-[24px] flex items-center">
            <div className="w-[56px] h-[40px] flex gap-[8px] items-center">
              <div className="w-[28px] h-[20px] border-r text-white">
                <Image src="/assets/usa_flag.svg" alt="USA Flag" width={20} height={20} />
              </div>
              <Image src="/assets/dollar.svg" alt="Dollar" width={20} height={20} />
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

        {/* Mobile Navigation Menu */}
        <div className="md:hidden flex items-center gap-4">
          <Image src="/assets/usa_flag.svg" alt="USA Flag" width={20} height={20} />
          <Image src="/assets/dollar.svg" alt="Dollar" width={20} height={20} />
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
    </div>
  );
};

export default TopHeader;
