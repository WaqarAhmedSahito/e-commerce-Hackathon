"use client";
import { useRef } from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";
export default function Shoe() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="relative w-full px-4">
            {/* Section Header */}
            <div className=" flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Best of Shoes</h2>
                <div className="flex space-x-2">
                    {/* Left Arrow Button */}
                    <button
                        onClick={() => scroll("left")}
                        className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition"
                    >
                        <Image src="right.png" alt="Scroll Left" className="w-6 h-6" />
                    </button>
                    {/* Right Arrow Button */}
                    <button
                        onClick={() => scroll("right")}
                        className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition"
                    >
                        <Image src="left.png" alt="Scroll Right" className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div
                    ref={scrollContainerRef}
                    className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar">
                    <div className="flex">   
                    <Link
                    href={{
                        pathname: "/productdetail", // Navigate to product detail page
                        query: {
                            image: "/product/product-1.png",
                            name: "Nike Air Force 1 Mid&apos;07&apos;",
                            price: "₹ 10,795.00",
                            category: "Men&apos;s Shoes",
                        },
                    }}>
                    <Card
                        image="/product/product-1.png"
                        name="Nike Air Force 1 Mid&apos;07&apos;"
                        price="₹ 10,795.00"
                        category="Men&apos;s Shoes"
                    />
                </Link>
                <Link
                    href={{
                        pathname: "/productdetail", // Navigate to product detail page
                        query: {image:"/product/product-2.png",
                            name:"Nike Court Vision Low Next Nature",
                            price:"₹ 4,995.00",
                            category:"Men&apos;s Shoes"},}}>
                           
                        <Card
                            image="/product/product-2.png"
                            name="Nike Court Vision Low Next Nature"
                            price="₹ 4,995.00"
                            category="Men&apos;s Shoes"
                           
                        />
                        </Link>
                        <Link
                    href={{
                        pathname: "/productdetail", // Navigate to product detail page
                        query: {image:"/product/product-3.png",
                            name:"Nike Air Force 1 PLT.AF.ORM",
                            price:"₹ 8,695.00",
                            category:"Women&apos;s Shoes"},}}>
                        <Card
                            image="/product/product-3.png"
                            name="Nike Air Force 1 PLT.AF.ORM"
                            price="₹ 8,695.00"
                            category="Women&apos;s Shoes"
                           
                        /></Link>
                         <Link
                    href={{
                        pathname: "/productdetail", // Navigate to product detail page
                        query: {image:"/product/product-4.png",
                            name:"Nike Air Force 1 React",
                            price:"₹ 13,295.00",
                            category:"Men&apos;s Shoes"},}}>
                        <Card
                            image="/product/product-4.png"
                            name="Nike Air Force 1 React"
                            price="₹ 13,295.00"
                            category="Men&apos;s Shoes"
                            
                        /></Link>
                         <Link
                    href={{
                        pathname: "/productdetail", // Navigate to product detail page
                        query: {image:"/product/product-5.png",
                            name:"Air Jordan 1 Elevate Low",
                            price:"₹ 11,895.00",
                            category:"Women&apos;s Shoes"},}}>
                        <Card
                            image="/product/product-5.png"
                            name="Air Jordan 1 Elevate Low"
                            price="₹ 11,895.00"
                            category="Women&apos;s Shoes"
                            
                        /></Link>
                         <Link
                    href={{
                        pathname: "/productdetail",
                     // Navigate to product detail page
                        query: {image:"/product/product-7.png",
                            name:"Nike Pegasus Trail 4",
                            price:"₹ 11,895.00",
                            category:"Women&apos;s Shoes"},}}>
                        <Card
                            image="/product/product-7.png"
                            name="Nike Pegasus Trail 4"
                            price="₹ 11,895.00"
                            category="Women&apos;s Shoes"
                            
                        /></Link>
                    </div>
                </div>
        </div>
    )
};