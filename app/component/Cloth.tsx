"use client";
import { useRef } from "react";
import Card from "./Card";
import Link from "next/link";
import Image from "next/image";
export default function Cloth() {
    const scrollLeftRef = useRef<HTMLDivElement>(null);
    const scrollRightRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (scrollLeftRef.current) {
            scrollLeftRef.current.scrollBy({
                left: -320,
                behavior: "smooth",
            });
        }
    };
    const scrollRight = () => {
        if (scrollLeftRef.current) {
            scrollLeftRef.current.scrollBy({
                left: 320,
                behavior: "smooth",
            });
        }
    };
    const scrollLeft2 = () => {
        if (scrollRightRef.current) {
            scrollRightRef.current.scrollBy({
                left: -320,
                behavior: "smooth",
            });
        }
    };
    const scrollRight2 = () => {
        if (scrollRightRef.current) {
            scrollRightRef.current.scrollBy({
                left: 320,
                behavior: "smooth",
            });
        }
    };
    return (
        <div>
            <p className="text-3xl font-bold">Gear up</p>
            <div className="flex space-x-4">
                <div className="w-[49%] p-4">
                    <div className="flex items-center mb-4 justify-end">
                        <div className="flex space-x-2  items-center">
                            <p className="text-xl font-semibold">Shop Men</p>
                            <button onClick={scrollLeft} className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                                <Image src="right.png" alt="Scroll Left" className="w-6 h-6" />
                            </button>
                            <button onClick={scrollRight} className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                                <Image src="left.png" alt="Scroll Right" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                    <div ref={scrollLeftRef} className="overflow-x-auto no-scrollbar flex scrollbar-hidden">
                        <div className="flex">
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-8.png",
                                        name: "Nike Dri-FIT UV Hyverse&apos;",
                                        price: "₹ 2 495.00",
                                        category: "Men&apos;s Short-Sleeve Graphic Fitness Top",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-8.png"
                                    name="Nike Dri-FIT UV Hyverse&apos;"
                                    price="₹ 2 495.00"
                                    category="Men&apos;s Short-Sleeve Graphic Fitness Top"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-10.png",
                                        name: "Nike Dri-FIT Ready",
                                        price: "₹ 10,795.00",
                                        category: "Men&apos;s Short-Sleeve Fitness Top",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-10.png"
                                    name="Nike Dri-FIT Ready"
                                    price="₹ 10,795.00"
                                    category="Men&apos;s Short-Sleeve Fitness Top"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-15.png",
                                        name: "Nike Pro Dri-FIT",
                                        price: "₹ 1 495.00",
                                        category: "Men&apos;s Tight-Fit Sleeveless Top",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-15.png"
                                    name="Nike Pro Dri-FIT"
                                    price="₹ 1 495.00"
                                    category="Men&apos;s Tight-Fit Sleeveless Top"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-18.png",
                                        name: "Nike Dri-FIT UV Miler",
                                        price: "₹ 1 695.00",
                                        category: "Men&apos;s Short-Sleeve Running Top",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-18.png"
                                    name="Nike Dri-FIT UV Miler"
                                    price="₹ 1 695.00"
                                    category="Men&apos;s Short-Sleeve Running Top"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-24.png",
                                        name: "Nike Dri-FIT Run Division Rise 365",
                                        price: " ₹ 3 495.00",
                                        category: "Men&apos;s Running Tank",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-24.png"
                                    name="Nike Dri-FIT Run Division Rise 365"
                                    price=" ₹ 3 495.00"
                                    category="Men&apos;s Running Tank"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-25.png",
                                        name: "Nike Dri-FIT Challenger",
                                        price: " ₹ 2 495.00",
                                        category: "Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-25.png"
                                    name="Nike Dri-FIT Challenger"
                                    price=" ₹ 2 495.00"
                                    category="Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-[49%] p-4">
                    <div className="flex items-center mb-4 justify-end">
                        <div className="flex space-x-2 items-center">
                            <p className="text-xl font-semibold">Shop Women</p>
                            <button onClick={scrollLeft2} className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                                <Image src="right.png" alt="Scroll Left" className="w-6 h-6" />
                            </button>
                            <button onClick={scrollRight2} className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                                <Image src="left.png" alt="Scroll Right" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                    <div ref={scrollRightRef} className="overflow-x-auto no-scrollbar flex scrollbar-hidden">
                        <div className="flex">
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-6.png",
                                        name: "Nike Standard Issue",
                                        price: "₹ 2 895.00",
                                        category: "Women&apos;s Basketball Jersey",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-6.png"
                                    name="Nike Standard Issue"
                                    price="₹ 2 895.00"
                                    category="Women&apos;s Basketball Jersey"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-11.png",
                                        name: "Nike One Leak Protection: Period",
                                        price: " ₹ 3 395.00",
                                        category: "Women&apos;s Mid-Rise 18cm (approx.) Biker Shorts",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-11.png"
                                    name="Nike One Leak Protection: Period"
                                    price=" ₹ 3 395.00"
                                    category="Women&apos;s Mid-Rise 18cm (approx.) Biker Shorts"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-20.png",
                                        name: "Nike Alate All U",
                                        price: " ₹ 2 195.00",
                                        category: "Women&apos;s Light-Support Lightly Lined U-Neck Printed Sports Bra",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-20.png"
                                    name="Nike Alate All U"
                                    price=" ₹ 2 195.00"
                                    category="Women&apos;s Light-Support Lightly Lined U-Neck Printed Sports Bra"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-22.png",
                                        name: "Nike Swoosh",
                                        price: "₹ 3 095.00",
                                        category: "Women&apos;s Medium-support Padded Sports Bra Tank",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-22.png"
                                    name="Nike Swoosh"
                                    price="₹ 3 095.00"
                                    category="Women&apos;s Medium-support Padded Sports Bra Tank"
                                />
                            </Link>
                            <Link
                                href={{
                                    pathname: "/productdetail",
                                    query: {
                                        image: "/product/product-28.png",
                                        name: "Nike Sportswear Trend",
                                        price: "₹ 2 495.00",
                                        category: "Older Kids&apos; (Girls&apos;) High-waisted Woven Shorts",
                                    },
                                }}
                            >
                                <Card
                                    image="/product/product-28.png"
                                    name="Nike Sportswear Trend"
                                    price="₹ 2 495.00"
                                    category="Older Kids&apos; (Girls&apos;) High-waisted Woven Shorts"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
