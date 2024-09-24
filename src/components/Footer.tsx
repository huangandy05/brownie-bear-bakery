import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#d2691e] relative py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src="/footer-bear.svg"
            alt="Footer Bear"
            width="80"
            height="80"
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mt-8 pt-8 border-t gap-4 border-primary-foreground/30 max-w-screen-lg text-sm flex m-auto flex-col-reverse text-center justify-center md:justify-between md:flex-row">
          <p>&copy; 2024 Brownie Bear Bakery.</p>
          <div className="flex items-center justify-center">
            {/* Insta Icon svg */}
            <a
              title="instagram"
              href="https://www.instagram.com/brownie_bear_bakery/"
              // className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
