import React, { useState } from "react";

const Demo = () => {
  return (
    <div>
      <section className="bg-gray-900 w-screen h-screen flex flex-row items-center justify-center p-8">
        <div className="overflow-x-auto">
          <div
            className="flex justify-center w-fit my-2"
          >
         
              <div className="group mr-2 w-60 h-80 rounded-lg bg-cover bg-center bg-[url('https://fr.web.img6.acsta.net/r_1280_720/pictures/21/08/09/11/02/3968851.jpg')]  hover:bg-[url('https://images4.alphacoders.com/120/thumb-1920-1207329.jpg')]">
                <div className="bg-gradient-to-t from-gray-900/50 via-transparent to-transparent w-full h-full p-4 flex-col justify-end relative hidden group-hover:flex">
                  <h1 className="text-lg font-bold text-white">
                    Blade Runner: Black Lotus (2019)
                  </h1>
                  <p className="text-sm text-gray-200">
                    Movie - Science Fiction, Dystopian
                  </p>
                  <p className="text-sm text-white">
                    A young woman with amnesia must hunt down the people
                    responsible for her brutal and bloody past to find the truth
                    of her lost identity.
                  </p>
                  <button className="rounded-sm bg-white w-fit py-1 px-2 mt-2 hover:bg-yellow-400">
                    <i className="fa-solid fa-plus"></i> Add to watchlist
                  </button>
                </div>
              </div>
  

          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
