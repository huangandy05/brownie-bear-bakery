import Image from "next/image"

export default function AboutUsSection() {
    return (
        <section className="w-full pt-8 pb-12 border-y border-black">
            <div className="container px-4 md:px-6">
            <div className="sm: flex flex-col">
                <div className="invisble relative max-w-sm aspect-square sm: hidden">
                <Image
                    src="/hero_section_image.svg"
                    alt="Hero Image"
                    fill
                    className="object-cover  outline outline-[10px] outline-yellow-950 "
                />
                </div>
                <div className="flex flex-col justify-center text-center">
                <div className="space-y-2 px-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
                    <p className=" text-muted-foreground">
                    Brownie Bear Bakery started with a simple idea: sharing a sweet treat with friends. It all began with my signature Mochi Brownies, which quickly became a hit at parties and gatherings. After seeing how much everyone loved them, I thought, why not share these delicious treats with more people? 
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}