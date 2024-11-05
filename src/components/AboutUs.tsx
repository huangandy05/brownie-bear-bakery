import React from 'react';
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="py-12 md:py-24 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl text-center mb-8">ABOUT US</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-5/6 max-w-sm aspect-square mx-auto md:mx-0">
                        <Image
                            src="/hero_section_image.svg"
                            alt="Hero Image"
                            fill
                            className="object-cover outline outline-[10px] outline-yellow-950 rounded-full"
                        />
                    </div>
                    <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
                        <p className="text-lg leading-relaxed text-gray-700">
                            Brownie Bear Bakery started with a simple idea: sharing a sweet treat with friends. It all began with my signature Mochi Brownies, which quickly became a hit at parties and gatherings. After seeing how much everyone loved them, I thought, why not share these delicious treats with more people?
                            I ensure to use only the best ingredients and bake everything fresh to order. Whether you’re a fan of classic fudgy brownies or adventurous flavours like Biscoff, there’s something for everyone.
                            Order today!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};