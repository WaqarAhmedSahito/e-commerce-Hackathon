"use client"; // Marks this file as a Client Component
interface CardProps {
  img: string;
  name: string;
  price: string;
  category?: string; // Optional category for the product
  onClick?: () => void; // Optional click handler
}
export default function Card({ img, name, price, category, onClick }: CardProps) {
  return (
    <div 
    className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
  >
    <div
      className="min-w-[350px] md:min-w-[400px] bg-white border-hidden rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
      onClick={onClick} // Now supported as a Client Component
    >
        <img
          src={img}
          alt={name}
          className="object-cover w-[350px] h-[300px] rounded-md"
        />
    <div className="flex space-x-2 justify-between items-center">
      {/* Card Details */}
      <h3 className="mt-2 font-semibold">{name}</h3>
      
      <p className="text-gray-600">{price}</p></div>
      {category && <p className="text-sm text-gray-500">{category}</p>}
    </div>
  </div>
  );
}
