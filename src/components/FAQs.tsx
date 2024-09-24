import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export default function FAQs() {
  return (
    <section id="faqs" className="py-12 w-full">
      <div className="container mx-auto px-8 max-w-screen-md">
        <h2 className="text-3xl text-center mb-6">FAQs</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full mx-auto max-w-6xl"
        >
          <AccordionItem value="opening times" className="border-primary/30">
            <AccordionTrigger className="text-left">
              What are your opening days/hours?
            </AccordionTrigger>
            <AccordionContent>
              We are normally open for pickup:
              <br />
              <span className="font-bold">
                Tuesday 3pm - 9pm, Saturday 12pm - 5pm
              </span>
              <br />
              However, opening times may change
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="how late" className="border-primary/30">
            <AccordionTrigger className="text-left">
              How late can I place an order?
            </AccordionTrigger>
            <AccordionContent>
              Our brownies are made fresh, so we need some time to prepare them!
              <br />
              Generally the{" "}
              <span className="font-bold">
                cut off time to place an order is 8pm, TWO days prior
              </span>{" "}
              to the pickup date
              <br />
              e.g. To order for Saturday, place your order by 8pm Thursday
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="how big">
            <AccordionTrigger className="text-left">
              How big is each brownie?
            </AccordionTrigger>
            <AccordionContent>
              A full slab is 8x8 inches (20cmx20cm) and 5cm high, serving 8-12
              <br />A half slab is 8x4 inches (20cmx10cm), serving 4-6
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
