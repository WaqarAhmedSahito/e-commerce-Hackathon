import Link from "next/link"
import Button from "./Button"
import Image from "next/image"
export default function Lastly() {
    return (
        <div>
            <h1 className=" text-2xl font-bold pb-6">Don&apos;t Miss</h1>
            <div className="flex items-center justify-between flex-col bg-light-gray py-2 px-10 md:px-0">
                <Image src="/Model.png" alt="run" />
                <h1 className="text-6xl uppercase text-center font-bold pt-12">flight essentials</h1>
                <p className="py-10"> Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
                </p>
                <Button text="Shop" classNames="rounded-full py-2" />
            </div>
            <h1 className=" text-2xl font-bold pb-6">The Essentials</h1>
            <div className="flex justify-center bg-light-gray py-2 px-10 md:px-0">
                <Image src="/menL.png" alt="run" />
                <Image src="/womanL.png" alt="run" />
                <Image src="/KidsL.png" alt="run" />
            </div>
            <section className="py-16 px-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-0 lg:px-20">
                        {/* Icons */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Icons</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-text-primary-gray">Air Force 1</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Huarache</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Air Max 90</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Air Max 95</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Shoes</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-text-primary-gray">All Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Custom Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Jordan Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Running Shoes</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Clothing</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-text-primary-gray">All Clothing</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Modest Wear</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Hoodies & Pullovers</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Shirts & Tops</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Kids&apos;</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-text-primary-gray">Infant & Toddler Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Kids&apos; Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Kids&apos; Jordan Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray">Kids&apos; Basketball Shoes</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}