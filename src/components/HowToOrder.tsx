import React from "react";
import { ShoppingCart, Calendar, Home } from "lucide-react";

const steps = [
  {
    image: ShoppingCart,
    text: "Pick your brownies",
    step: 1,
  },
  {
    image: Calendar,
    text: "Select your pick up date",
    step: 2,
  },
  {
    image: Home,
    text: "Arrange for pick up and enjoy!",
    step: 3,
  },
];

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="py-12 bg-[#f5f1cd] w-full">
      <div className="container mx-auto px-4 md:px-6 flex flex-col text-center gap-8 max-w-screen-lg">
        <h2 className="text-4xl  sm:text-5xl">HOW TO ORDER</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 7xl">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-center text-center"
            >
              <div className="flex-1 flex flex-col items-center">
                <div className="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                  <step.image size={60} />
                </div>
                <p className="text-2xl font-semibold mb-1 sm:mb-3">
                  Step {step.step}
                </p>
                <p className="text-lg">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
