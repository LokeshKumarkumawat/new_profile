import React from "react";
import { useRouter } from "next/router";
import imageData from "../../components/data";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";

const ImageDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const images = imageData.find((img) => img.id === parseInt(id));

  if (!images) {
    return <p>Image not found.</p>;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-between  text-white xl:w-[1280px]  mx-auto w-full pt-24 sm:pt-[100px] sm:pb-12 px-3 xs:px-6 ss:px-8 sm:px-14 lg:px-32">
      <div className="relative group  flex-1">

        <div className="">
          <Image
            className="cursor-pointer rounded-md w-full h-full"
            src={images.imageUrl}
            alt={images.title}
            height={5000}
            width={5000}
          />
        </div>

        {/* <div className="hidden absolute w-full h-full top-0 left-0 p-4 backdrop-blur-md text-white group-hover:block">
        <div className="flex gap-5 h-full  items-center justify-center content-center text-center flex-col  sm:flex-row w-full">
          <Link href="#">
            <button className="flex gap-2 uppercase justify-center items-center w-full  bg-transparent hover:bg-[#27535D] text-[#27535D] font-semibold hover:text-black py-3 px-9 border border-[#27535D] hover:border-transparent rounded">
              <h1> LinkedIn</h1>
              <Image
                className="cursor-pointer w-6 h-6  "
                src={linkedin}
                alt="logo"
                height={5000}
                width={5000}
              />
            </button>
          </Link>
          <Link href="#">
            <button className="flex gap-2 uppercase justify-center items-center w-full  bg-[#FFFFFF] opacity-70 hover:bg-[#27535D] text-[#27535D] font-semibold hover:text-black py-3 px-9 border border-[#27535D] hover:border-transparent rounded">
              <h1 className="text-black"> GITHUB</h1>
              <Image
                className="cursor-pointer w-6 h-6  "
                src={github}
                alt="logo"
                height={5000}
                width={5000}
              />
            </button>
          </Link>
        </div>
        </div> */}
      </div>

      <div className="flex-1 sm:px-4">
        <h2 className=" text-3xl text-gray-200 capitalize">{images.title}</h2>
        <p className="text-lg leading-7 text-gray-300 tracking-wider  font-light capitalize mt-3">{images.description}</p>
      </div>
    </div>
  );
};

export default ImageDetailPage;
