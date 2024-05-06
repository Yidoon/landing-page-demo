import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex md:gap-6 sticky top-0 m-auto md:p-4 items-center justify-center bg-[transparent] backdrop-filter backdrop-blur-[160px]">
      <div className="hidden md:flex gap-6 justify-between w-full xl:w-[75%]">
        <div className="flex gap-3 items-center">
          <Image
            src="https://opencat.app/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fopencat.720fff91.png&w=48&q=75"
            alt=""
            width={28}
            height={28}
            layout="responsive"
          />
          <span className="font-bold text-xl text-[#fff]">OpenCat</span>
        </div>

        <div className="flex gap-8 items-center">
          <div className="text-[#fff] cursor-pointer hover:text-[#2b53dc]">
            Changelog
          </div>
          <div className="text-[#fff] cursor-pointer hover:text-[#2b53dc]">
            Testimonials
          </div>
          <div className="text-[#fff] cursor-pointer hover:text-[#2b53dc]">
            License Manager
          </div>
          <div className="text-[#fff] cursor-pointer hover:text-[#2b53dc]">
            FAQ
          </div>
          <div className="text-[#fff] cursor-pointer hover:text-[#fff] bg-[#2d67f6] hover:bg-[#1f4dbe] p-2 rounded-xl">
            Buy now
          </div>
        </div>
      </div>

      <div className="md:hidden flex-col w-full p-4">
        <div className="flex justify-between w-full">
          <div className="flex gap-3 items-center">
            <Image
              src="https://opencat.app/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fopencat.720fff91.png&w=48&q=75"
              alt=""
              width={14}
              height={14}
              layout="responsive"
            />
            <span className="font-bold text-md text-[#fff]">OpenCat</span>
          </div>
          <div>
            <Menu className="text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
}
