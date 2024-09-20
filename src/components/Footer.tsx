import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#d2691e] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 rounded-full bg-yellow-800 flex items-center justify-center">
          <Image
            src="/footer-bear.svg"
            alt="Footer Bear"
            width="80"
            height="80"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 h-48">
        <div className="mt-8 pt-8 border-t border-primary-foreground/30 text-center text-sm">
          <p>&copy; 2024 Brownie Bear Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
