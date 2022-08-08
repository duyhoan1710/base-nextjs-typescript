import { Container } from "@/layouts/Container";
import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import Image from "next/image";

import product2Image from "public/assets/images/jpg/product2.jpg";
import product3Image from "public/assets/images/jpg/product3.jpg";
import { useState } from "react";

const ShoppingCart = () => {
  const [isFillInfo, setIsFillInfo] = useState<boolean>(false);

  return (
    <Layout
      hasHeader={true}
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="text-center bg-yellow-base py-3 md:py-5">
        <Container>
          <div className="">
            <span className="text-xl mr-2 text-yellow-600">Home</span>
            <span>/</span>
            <span className="text-xl ml-2">Shopping Cart</span>
          </div>
        </Container>
      </div>

      <div className="lg:py-24 py-16 border-b-2">
        <Container>
          <div className="hidden md:flex border-b-2 pb-3">
            <div className="md:w-[18%]"></div>
            <div className="flex-grow"></div>
            <div className="md:w-[14%] font-medium">PRICE</div>
            <div className="md:w-[14%] font-medium">QTY</div>
            <div className="md:w-[14%] font-medium">TOTAL</div>
            <div className="md:w-[10%]"></div>
          </div>

          <div className="flex flex-wrap items-center border-b-2 py-8">
            <div className="w-1/2 mb-4 md:mb-0 md:w-[18%] h-60 px-2">
              <div className="w-full h-full relative">
                <Image src={product2Image} layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="w-1/2 mb-4 md:w-auto md:mb-0 md:flex-grow h-60 px-2">
              <div className="text-3xl">Aruba Top</div>
              <div className="flex items-end py-2">
                <div className="text-lg md:text-xl text-gray-600 mr-4">
                  SIZE:
                </div>
                <div className="md:text-lg text-gray-600">xl</div>
              </div>
              <div className="flex items-center py-2">
                <div className="text-lg md:text-xl text-gray-600 mr-2">
                  COLOR:
                </div>
                <div>
                  <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-gray-600"></div>
                </div>
              </div>
              <div className="flex py-2">
                <div className="text-lg text-gray-600 mr-4">
                  Shop Runner Code:{" "}
                </div>
                <div className="font-medium">5671038</div>
              </div>
            </div>
            <div className="w-1/3 md:w-[14%] mb-2 md:mb-0 font-medium">
              90.000VND
            </div>
            <div className="w-1/3 md:w-[14%] mb-2 md:mb-0">
              <div className="w-[60%] md:m-0 m-auto ">
                <input
                  defaultValue={1}
                  disabled
                  className="text-center bg-white border w-full border-slate-300 py-1 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
              </div>
            </div>
            <div className="w-1/3 md:w-[14%] mb-2 md:mb-0">
              <div className="text-right md:text-left">
                <div className="text-gray-600 line-through">100.000VND</div>
                <div className="text-yellow-800 font-medium text-xl">
                  90.000VND
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end md:block md:w-[10%] mt-4 md:mb-0">
              <button className="ml-auto border-2 border-yellow-800 text-yellow-800 px-3 py-1">
                Remove
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center border-b-2 py-8">
            <div className="w-1/2 mb-4 md:mb-0 md:w-[18%] h-60 px-2">
              <div className="w-full h-full relative">
                <Image src={product3Image} layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="w-1/2 mb-4 md:w-auto md:mb-0 md:flex-grow h-60 px-2">
              <div className="text-3xl">Aruba Top</div>
              <div className="flex items-end py-2">
                <div className="text-lg md:text-xl text-gray-600 mr-4">
                  SIZE:
                </div>
                <div className="md:text-lg text-gray-600">xl</div>
              </div>
              <div className="flex items-center py-2">
                <div className="text-lg md:text-xl text-gray-600 mr-2">
                  COLOR:
                </div>
                <div>
                  <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-gray-600"></div>
                </div>
              </div>
              <div className="flex py-2">
                <div className="text-lg text-gray-600 mr-4">
                  Shop Runner Code:{" "}
                </div>
                <div className="font-medium">5671038</div>
              </div>
            </div>
            <div className="w-1/3 md:w-[14%] mb-2 md:mb-0 font-medium">
              90.000VND
            </div>
            <div className="w-1/3 md:w-[14%] mb-2 md:mb-0">
              <div className="w-[60%] md:m-0 m-auto ">
                <input
                  defaultValue={1}
                  disabled
                  className="text-center bg-white border w-full border-slate-300 py-1 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
              </div>
            </div>
            <div className="w-1/3 md:w-[14%] mb-2 md:mb-0">
              <div className="text-right md:text-left">
                <div className="text-gray-600 line-through">100.000VND</div>
                <div className="text-yellow-800 font-medium text-xl">
                  90.000VND
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end md:block md:w-[10%] mt-4 md:mb-0">
              <button className="ml-auto border-2 border-yellow-800 text-yellow-800 px-3 py-1">
                Remove
              </button>
            </div>
          </div>

          <div className="py-8 md:flex">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <div className="text-xl font-medium mb-4">
                Special instructions fo seller
              </div>
              <div className="border-2 border-gray-300 p-6 text-gray-600">
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet.
              </div>
            </div>

            <div className="md:w-1/2 text-right">
              <span>
                <span className="text-2xl font-medium mr-8">Total: </span>
                <span className="text-3xl font-medium">290.000VND</span>
              </span>

              <div className="text-gray-600 mt-3">
                This book is a treatise on the theory
              </div>
              <button
                className="px-8 py-3 bg-yellow-base mt-6"
                onClick={() => setIsFillInfo(true)}
              >
                CHECK OUT
              </button>
            </div>
          </div>

          {isFillInfo ? (
            <div className="flex">
              <div className="md:w-1/2 ">
                <div className="text-2xl font-medium mb-6">
                  Contact Information
                </div>

                <div className="mb-6">
                  <input
                    className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="flex justify-between mb-6">
                  <div className="text-xl font-medium  ">Shipping address</div>
                  <button className="border border-yellow-800 px-2 py-2 text-yellow-800 h-fit">
                    Select Other Address
                  </button>
                </div>

                <div className="flex -mx-3 mb-6">
                  <div className="w-1/2 px-3">
                    <input
                      className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="w-1/2 px-3">
                    <input
                      className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <input
                    className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                    placeholder="Address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                    placeholder="Apartment, suit, etc,.."
                  />
                </div>

                <div className="flex -mx-3 mb-6">
                  <div className="w-1/2 px-3">
                    <input
                      className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                      placeholder="City"
                    />
                  </div>

                  <div className="w-1/2 px-3">
                    <input
                      className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                      placeholder="ZIP code"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                    placeholder="Note"
                    rows={5}
                  />
                </div>

                <div className="flex justify-end">
                  <button className="px-8 py-3 bg-yellow-base mt-6">
                    CONTINUE TO SHIPPING
                  </button>
                </div>
              </div>

              <div></div>
            </div>
          ) : (
            <></>
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
