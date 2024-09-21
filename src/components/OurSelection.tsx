import React from "react";
import { menu_items } from "../menu_items";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default function OurSelection() {
  return (
    <section id="menu" className="py-12 md:py-16 ">
      <div className="container mx-auto flex flex-col items-center gap-8 w-screen">
        <h2 className="text-4xl  text-gray-900 sm:text-4xl">OUR SELECTION</h2>
        <div className="flex overflow-x-auto pb-4 max-w-full gap-4 px-3">
          {menu_items.map((item) => (
            <Card key={item.name} className="flex-shrink-0 w-80 h-[34rem]">
              <div className="relative w-full aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 h-20">{item.description}</p>
                <p className="text-lg font-bold">${item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
