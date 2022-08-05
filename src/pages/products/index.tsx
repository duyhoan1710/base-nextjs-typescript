import { Icon } from "@/components/Image";
import { Container } from "@/layouts/Container";
import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import Image from "next/image";

import product1Image from "public/assets/images/jpg/product1.jpg";
import product2Image from "public/assets/images/jpg/product2.jpg";
import product3Image from "public/assets/images/jpg/product3.jpg";
import product4Image from "public/assets/images/jpg/product4.jpg";
import product5Image from "public/assets/images/jpg/product5.jpg";
import product6Image from "public/assets/images/jpg/product6.jpg";
import product7Image from "public/assets/images/jpg/product7.jpg";
import product8Image from "public/assets/images/jpg/product8.jpg";

import favoriteIcon from "public/assets/images/svg/ic_favorite.svg";

const Products = () => {
  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      hasHeader={true}
    >
      <div className="text-center bg-yellow-base py-3 md:py-5">
        <Container>
          <div className="">
            <span className="text-xl mr-2 text-yellow-600">Home</span>
            <span>/</span>
            <span className="text-xl ml-2">Shop</span>
          </div>

          <div className="text-3xl">Products</div>
        </Container>
      </div>

      <div className="lg:py-24 py-16 border-b-2">
        <Container>
          <div className="md:flex md:justify-between">
            <div className="md:w-1/4">
              <div className="border-b-2 py-4">
                <div className="flex justify-between px-3">
                  <div className="text-2xl">Categories</div>
                  <div className="text-2xl">-</div>
                </div>

                <div className="mt-4 text-gray-600">
                  <div className=" flex justify-between py-1 hover:bg-gray-200 px-3">
                    <div>B Swim</div>
                    <div>(6)</div>
                  </div>

                  <div className=" flex justify-between py-1 hover:bg-gray-200 px-3">
                    <div>Bandeau</div>
                    <div>(12)</div>
                  </div>

                  <div className=" flex justify-between py-1 hover:bg-gray-200 px-3">
                    <div>Full Bust</div>
                    <div>(7)</div>
                  </div>

                  <div className=" flex justify-between py-1 hover:bg-gray-200 px-3">
                    <div>Halter</div>
                    <div>(5)</div>
                  </div>

                  <div className=" flex justify-between py-1 hover:bg-gray-200 px-3">
                    <div>Sale Off</div>
                    <div>(12)</div>
                  </div>

                  <div className=" flex justify-between py-1 hover:bg-gray-200 px-3">
                    <div>Sunset</div>
                    <div>(8)</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b-2 py-4">
                  <div className="flex justify-between px-3">
                    <div className="text-2xl">Vendors</div>
                    <div className="text-2xl">+</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b-2 py-4">
                  <div className="flex justify-between px-3">
                    <div className="text-2xl">Types</div>
                    <div className="text-2xl">+</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b-2 py-4">
                  <div className="flex justify-between px-3">
                    <div className="text-2xl">Color</div>
                    <div className="text-2xl">-</div>
                  </div>

                  <div className="flex -mx-[6px] px-3 mt-4">
                    <div className="h-6 w-6 mx-[6px] rounded-full border-2"></div>
                    <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-gray-300"></div>
                    <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-gray-600"></div>
                    <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-black"></div>
                    <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-red"></div>
                    <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-yellow-200"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b-2 py-4">
                  <div className="flex justify-between px-3">
                    <div className="text-2xl">Size</div>
                    <div className="text-2xl">-</div>
                  </div>

                  <div className="mt-4 px-3 text-gray-600">
                    <div className="flex">
                      <input type="checkbox" className="mr-2 w-5 h-5" id="xs" />
                      <label htmlFor="xs">Xs</label>
                    </div>

                    <div className="flex">
                      <input type="checkbox" className="mr-2 w-5 h-5" id="s" />
                      <label htmlFor="s">S</label>
                    </div>

                    <div className="flex">
                      <input type="checkbox" className="mr-2 w-5 h-5" id="M" />
                      <label htmlFor="M">M</label>
                    </div>

                    <div className="flex">
                      <input type="checkbox" className="mr-2 w-5 h-5" id="L" />
                      <label htmlFor="L">L</label>
                    </div>

                    <div className="flex">
                      <input type="checkbox" className="mr-2 w-5 h-5" id="XL" />
                      <label htmlFor="XL">XL</label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b-2 py-4">
                  <div className="flex justify-between px-3">
                    <div className="text-2xl">Other</div>
                    <div className="text-2xl">+</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[calc(75%-100px)] md:w-[calc(75%-50px)]">
              <div className="flex justify-end items-center py-6">
                <div className="mr-4 fon">SORT BY</div>
                <select className="w-[150px] block p-2 text-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>ALL</option>
                  <option value="US">NEWEST</option>
                  <option value="CA">OLDEST</option>
                </select>
              </div>

              <div className="flex flex-wrap -mx-2">
                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product1Image}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product2Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product3Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product4Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product5Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product6Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product7Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product8Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product1Image}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product2Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product3Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product4Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product5Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product6Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product7Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>

                <div className="w-[50%] md:w-1/3 px-3 pb-6 mb-8 hover:shadow-xl">
                  <div className="lg:h-[24rem] h-72 ">
                    <div className="relative w-full h-full">
                      <Image
                        src={product8Image}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-red text-white font-medium">
                        -30%
                      </div>

                      <div className="absolute top-4 right-4">
                        <Icon src={favoriteIcon} width={20} />
                      </div>

                      <div className="absolute bottom-0 flex w-full">
                        <div className="w-1/2 text-center bg-yellow-base py-4 font-medium lg:text-base md:text-xs">
                          QUICK SHOP
                        </div>
                        <div className="w-1/2 text-center bg-yellow-100 py-4 font-medium lg:text-base md:text-xs">
                          ADD CARD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg font-medium">Aruha Top</div>
                    <span>
                      <span className="text-gray-600">On sale from </span>
                      <span className="text-xl font-bold">$80.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Products;
