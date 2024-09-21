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
    text: "Come to my house and pick it up!",
    step: 3,
  },
];

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="py-12 bg-amber-100 w-full">
      <div className="container mx-auto px-4 md:px-6 flex flex-col text-center gap-12 ">
        <h2 className="text-4xl  text-gray-900 sm:text-4xl">HOW TO ORDER</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-center text-center h-48 300"
            >
              <div className="flex-1 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                  <step.image size={32} />
                </div>
                <p className="text-lg">{step.text}</p>
              </div>

              <p className="text-2xl font-semibold">Step {step.step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
