import React from "react";
import { menu_items } from "../menu_items";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";

export default function OurSelection() {
  return (
    <section id="menu" className="py-12 md:pt-12 ">
      <div className="container mx-auto flex flex-col items-center gap-8 w-screen">
        <h2 className="text-4xl sm:text-5xl">OUR SELECTION</h2>

        {/* New design -> if md, show 2 by 2, if lg, show 4x1 */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 xl:gap-4 w-full">
            {menu_items.map((item, index) => (
              <Card
                key={index}
                className="w-72 h-full flex  flex-col pt-1 px-1 bg-[#ebd9d0] shadow-none border-none"
              >
                <div className="relative aspect-square mx-3 mt-3">
                  <Image
                    src={item.image}
                    alt={"biscoff"}
                    fill
                    className="object-cover  rounded-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{item.description}</p>
                </CardContent>
                {/* <CardContent className="mt-auto">
                  <p className="text-lg font-bold">{item.price}</p>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>

        <EmblaCarousel />
      </div>
    </section>
  );
}
