import Link from "next/link"
import Image from "next/image"
export default function Header() {
  return (
    <div>

      <div className="hidden lg:block">
        <div className="flex justify-between items-center bg-[#F5F5F5]">
          <Image src="/jordanlogo.png" alt="jordanlogo" width={24} height={24}/>
          <ul className="flex space-x-6 py-3">
            <li className="flex items-center border-r border-black pr-6">
              <Link href="#" className="leading-[14px]">Find a store
              </Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/Contact" className="leading-[14px]">Help
              </Link>
            </li><li className="flex items-center border-r border-black pr-6">
              <Link href="/Join" className="leading-[14px]">Join Us
              </Link>
            </li><li className="flex items-center  pr-6">
              <Link href="/Login" className="leading-[14px]">Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#ffffff] px-10 py-4">
        <Image src="/nikelogo.png" alt="nike logo" width={24} height={24} />
        <ul className="flex space-x-6">
          <li>
            <Link href="#">New & Featured</Link>
          </li>
          <li>
            <Link href="/all-products">Men</Link>
          </li>
          <li>
            <Link href="#">Women</Link>
          </li>
          <li>
            <Link href="#">Kids</Link>
          </li>
          <li>
            <Link href="#">Sale</Link>
          </li>
          <li>
            <Link href="#">SNKRS</Link>
          </li>
        </ul>
        <div className="flex space-x-6 ">
          <div className="flex px-4 py-3 rounded-full w-[64%] bg-light-gray">
            <Image src="/searchicon.png" alt="search icon" width={24} height={24} />
            <input
              className="pl-4 focus-visible:outline-none w-[64%] bg-light-gray"
              type="text"
              placeholder="Search"
            />
          </div>
          <Link href="/Cart">
          <Image src="/heart.png" alt="heart logo" width={24} height={24}/></Link>
        </div>

      </div>



    </div>

  )
}