"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { order_link } from "@/data";

export default function Hero() {
  const openOrderLink = () => {
    window.open(order_link, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-16 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              Welcome to Brownie Bear Bakery!
              {/* 🐻🍫 */}
              {/* DELICIOUS BROWNIES */}
            </h1>
            <p className="lg:max-w-lg md:max-w-md  px-10 sm:px-0 md:text-lg/relaxed lg:text-based/relaxed xl:text-xl/relaxed">
              Delicious, freshly baked brownies made to perfection. Place your
              order for pickup today!
            </p>
            <div className="space-y-4 md:space-y-0">
              <Button
                variant={"default"}
                className="mr-3"
                onClick={openOrderLink}
              >
                Order Now
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/brownie_bear_bakery/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Contact us
              </Button>
            </div>
          </div>
          {/* Image */}
          {/* <div className="flex-1 flex justify-center md:justify-end"> */}
          <div className="relative w-5/6 max-w-sm aspect-square">
            <Image
              src="/hero_section_image.svg"
              alt="Hero Image"
              fill
              className="object-cover  outline outline-[10px] outline-yellow-950 rounded-full"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
