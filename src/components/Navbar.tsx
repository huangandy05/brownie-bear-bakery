"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuButton } from "./MenuButton";
import { order_link } from "@/data";

const menuItems = [
  { name: "Menu", href: "#menu" },
  { name: "How to Order", href: "#how-to-order" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openOrderLink = () => {
    window.open(order_link, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
        if (element) {
            const offset = window.innerWidth >= 768 ? 50 : 150;
            const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    }, 50);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-inherit shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="h-12 w-auto"
              width="100"
              height="100"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="hidden md:block ">
            <div className=" flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="secondary" onClick={openOrderLink}>
              Order Now
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button variant="secondary" onClick={openOrderLink}>
              Order Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary-dark transition duration-300 ml-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuButton height={20} isOpen={isOpen} />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-gray-900 hover:bg-primary-foreground/10 transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="p-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:text-primary-foreground transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
