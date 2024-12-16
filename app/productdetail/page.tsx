"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Header from "../component/Header";
import Footer from "../component/Footer";
export default function ProductDetail() {
    const searchParams = useSearchParams();
    const image = searchParams.get("image");
    const name = searchParams.get("name");
    const price = searchParams.get("price");
    const category = searchParams.get("category");
    if (!image || !name || !price) return <p>Loading...</p>; // Handle missing data
    return (
        <div>
            <Header/>
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto p-6 gap-8">
      <div className="flex-1">
        <div className="border-none border-gray-200 rounded-md p-4">
          <Image
            src={image}
            alt={name}
            className="object-cover w-full rounded-md"
          />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">{name}</h2>
        <p>Step into elevated style with this reimagined take on a classic Nike silhouette. Featuring a bold yet refined design, its unique construction blends modern craftsmanship with timeless appeal. Thoughtfully layered materials, exposed stitching, and subtle textural contrasts create a striking balance of edge and elegance. Deliberate accents, from the precision-cut overlays to the finely detailed midsole, give it a handcrafted look that stands out effortlessly. Whether you&apos;re on the streets or making a statement elsewhere, this shoe delivers unmatched versatility with a finish that feels both fresh and iconic.</p>
        <p className="text-gray-700 text-lg font-semibold mb-2"> {price}</p>
        {category && (
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
            {category}
          </p>
        )} 
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
    <Footer/>
    </div>
    );
}