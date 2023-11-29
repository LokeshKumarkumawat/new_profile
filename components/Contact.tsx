import Image from "next/image";
import React from "react";

import contact from "../assets/images/contact.jpg";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }: any) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-lg h-10 p-1 px-4 font-light outline-none bg-transparent text-white border-none  text-sm blue-glassmorphism"
  />
);

const handleChange = ({ e }: any) => {
  //   const { addressTo, amount, keyword, message } = formData;
  //   e.preventDefault();
  //   if (!addressTo || !amount || !keyword || !message) return;
  //   sendTransaction();
};

const send = () => {
  //   const { addressTo, amount, keyword, message } = formData;
  //   e.preventDefault();
  //   if (!addressTo || !amount || !keyword || !message) return;
  //   sendTransaction();
};

const Contact = () => {
  return (
    <div className=" text-black rounded-lg bg-[#1B1D1E] h-full flex items-center justify-center">
      <div className="flex gap-16 sm:gap-24 items-center flex-col pb-6   xl:w-[1280px]  mx-auto w-full pt-24 sm:pb-12 px-3 xs:px-6 ss:px-8 sm:px-14 lg:px-32">
      <div>
          <h1 className="text-white text-5xl uppercase font-bold">Contact Us</h1>
        </div>
        <div className=" flex blue-glassmorphism rounded-lg z-10 w-full h-full py-6 px-0 sm:px-114 items-center">

            <div className=" gap-3 mt-4 mb-2 text-black w-full flex flex-col justify-start items-center ">
              <div className="flex flex-row sm:flex-row w-full gap-2 px-6">
                <Input
                  placeholder="Enter Your Name"
                  name="name"
                  type="text"

                    handleChange={handleChange}
                />
                <Input
                  placeholder="Enter Your Email"
                  name="name"
                  type="Email"
                  //   handleChange={handleChange}
                />
              </div>
              <div className="flex flex-col sm:flex-row w-full gap-2 px-6">
                <Input
                  placeholder="Subject"
                  name="subject"
                  type="text"
                    handleChange={handleChange}
                />
              </div>

              <div className="flex flex-col sm:flex-row w-full gap-2 px-6 ">
                <textarea
                  placeholder="Enter Message"
                  name="message"
                  className="resize-none my-2 w-full rounded-lg p-2 outline-none bg-transparent text-white border-none text-sm blue-glassmorphism"
                  rows={5}
                    
                />
              </div>
              {/* <div className="h-[1px] w-full bg-gray-400 my-2" /> */}

              <button
                type="button"
                  onClick={send}
                className="text-white mt-5 border-[1px] px-4 py-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-lg cursor-pointer"
              >
                Send now
              </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;













