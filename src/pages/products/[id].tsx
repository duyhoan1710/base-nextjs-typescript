import { Icon } from "@/components/Image";
import { Container } from "@/layouts/Container";
import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import favoriteIcon from "public/assets/images/svg/ic_favorite.svg";

import product1Image from "public/assets/images/jpg/product1.jpg";
import product2Image from "public/assets/images/jpg/product2.jpg";
import product3Image from "public/assets/images/jpg/product3.jpg";
import product4Image from "public/assets/images/jpg/product4.jpg";
import product5Image from "public/assets/images/jpg/product5.jpg";

import banner5Image from "public/assets/images/jpg/banner5.jpg";

import startIcon from "public/assets/images/svg/ic_star.svg";
import startActiveIcon from "public/assets/images/svg/ic_golden_star.svg";

const DetailProduct = () => {
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
            <span className="text-xl ml-2">Product Detail</span>
          </div>
        </Container>
      </div>

      <div className="lg:py-24 py-16">
        <Container>
          <div className="md:flex md:-mx-6">
            <div className="w-full h-[30rem] md:w-1/2 md:px-6 md:h-[40rem]">
              <div className="w-full h-full mb-4 relative">
                <div>
                  <Image src={product1Image} layout="fill" objectFit="cover" />
                </div>
              </div>

              <div className="flex justify-between -mx-2">
                <div className="px-2 w-1/4 h-28 ">
                  <div className="w-full h-full relative border-2 border-yellow-base">
                    <Image
                      src={product1Image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="px-2 w-1/4 h-28 ">
                  <div className="w-full h-full relative border-2">
                    <Image
                      src={product2Image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="px-2 w-1/4 h-28 ">
                  <div className="w-full h-full relative border-2">
                    <Image
                      src={product3Image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="px-2 w-1/4 h-28 ">
                  <div className="w-full h-full relative border-2">
                    <Image
                      src={product4Image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-36 md:mt-0 md:w-1/2 md:px-6">
              <div className="flex items-center">
                <div className="text-4xl py-2 mr-5">Aruba Top</div>
                <div className="bg-red text-white px-4 py-1 h-fit">-20%</div>
              </div>

              <div className="flex py-2 -mx-1">
                <div className="px-1">
                  <Icon src={startActiveIcon} width={16} height={16} />
                </div>
                <div className="px-1">
                  <Icon src={startActiveIcon} width={16} height={16} />
                </div>
                <div className="px-1">
                  <Icon src={startActiveIcon} width={16} height={16} />
                </div>
                <div className="px-1">
                  <Icon src={startActiveIcon} width={16} height={16} />
                </div>
                <div className="px-1">
                  <Icon src={startIcon} width={16} height={16} />
                </div>

                <div className="text-gray-500 ml-1">(6)</div>
              </div>

              <div className="flex items-center py-2">
                <div className="line-through text-gray-500 mr-3">
                  100.000VND
                </div>
                <div className="text-2xl font-medium text-yellow-800">
                  90.000VND
                </div>
              </div>

              <div className="flex items-end py-4 border-b-2">
                <div className="text-xl mr-8 font-medium">SIZE</div>

                <div className=" text-gray-600 flex mb-1">
                  <div className="flex mx-2 items-center">
                    <input
                      type="radio"
                      className="mr-2 w-4 h-4"
                      name="size"
                      id="xs"
                      value="xs"
                    />
                    <label htmlFor="xs">Xs</label>
                  </div>

                  <div className="flex mx-2 items-center">
                    <input
                      type="radio"
                      className="mr-2 w-4 h-4"
                      name="size"
                      id="s"
                      value="s"
                    />
                    <label htmlFor="s">S</label>
                  </div>

                  <div className="flex mx-2 items-center">
                    <input
                      type="radio"
                      className="mr-2 w-4 h-4"
                      name="size"
                      id="M"
                      value="m"
                    />
                    <label htmlFor="M">M</label>
                  </div>

                  <div className="flex mx-2 items-center">
                    <input
                      type="radio"
                      className="mr-2 w-4 h-4"
                      name="size"
                      id="L"
                      value="l"
                    />
                    <label htmlFor="L">L</label>
                  </div>

                  <div className="flex mx-2 items-center">
                    <input
                      type="radio"
                      className="mr-2 w-4 h-4"
                      name="size"
                      id="XL"
                      value="xl"
                    />
                    <label htmlFor="XL">XL</label>
                  </div>
                </div>
              </div>

              <div className="flex items-center py-4 border-b-2">
                <div className="text-xl mr-8 font-medium">COLOR</div>

                <div className="flex">
                  <div className="h-6 w-6 mx-[6px] rounded-full border-2"></div>
                  <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-gray-300"></div>
                  <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-gray-600"></div>
                  <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-black"></div>
                  <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-red"></div>
                  <div className="h-6 w-6 mx-[6px] rounded-full border-2 bg-yellow-200"></div>
                </div>
              </div>

              <div className="py-4 text-lg">
                <div className="py-2">VENDOR:REVOTA</div>
                <div className="py-2">TYPE:TOP</div>
                <div className="py-2">SKU:001</div>
                <div className="py-2">AVAILABLE:AVAILABLE</div>
              </div>

              <ul className="list-disc pl-4 text-gray-600 ">
                <li>Branch: salinas</li>
                <li>Color: salinas</li>
                <li>Print: salinas</li>
                <li>Sections: salinas</li>
                <li>Top style: salinas</li>
              </ul>

              <div className="py-4  w-[100px] relative">
                <div className="text-3xl absolute top-[5px] left-[12px] cursor-pointer">
                  -
                </div>
                <input
                  defaultValue={1}
                  className=" bg-white border w-full border-slate-300 py-1 px-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
                <div className="text-2xl absolute top-[10px] right-[12px] cursor-pointer">
                  +
                </div>
              </div>

              <div className="flex justify-between py-4">
                <div className="w-[48%] text-center bg-yellow-base py-3 font-medium lg:text-base md:text-xs">
                  QUICK SHOP
                </div>
                <div className="w-[48%] text-center bg-yellow-100 py-3 font-medium lg:text-base md:text-xs">
                  ADD CARD
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="flex justify-between items-center">
            <div className="w-[calc(calc(100%-220px)/2)] h-[2px] bg-gray-200"></div>
            <div className="text-3xl">Mix & Match</div>
            <div className="w-[calc(calc(100%-220px)/2)] h-[2px] bg-gray-200"></div>
          </div>

          <div className="flex -mx-5 py-16">
            <div className="text-gray-600 w-3/5 px-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </div>
            <div className="w-2/5 h-[22rem] px-5 md:px-10">
              <div className="w-full h-full relative">
                <div className=" ">
                  <Image src={product5Image} layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-16">
        <Container>
          <div className="flex justify-between items-center mb-16">
            <div className="w-[calc(calc(100%-220px)/2)] h-[2px] bg-gray-200"></div>
            <div className="text-3xl">Related Products</div>
            <div className="w-[calc(calc(100%-220px)/2)] h-[2px] bg-gray-200"></div>
          </div>

          <Swiper
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            slidesPerView={2}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
            className="swiper-product-detail"
          >
            <SwiperSlide>
              <div className="w-full px-2 pb-6 mb-8 hover:shadow-xl">
                <div className="lg:h-[20rem] h-72 ">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full px-2 pb-6 mb-8 hover:shadow-xl">
                <div className="lg:h-[20rem] h-72 ">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full px-2 pb-6 mb-8 hover:shadow-xl">
                <div className="lg:h-[20rem] h-72 ">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full px-2 pb-6 mb-8 hover:shadow-xl">
                <div className="lg:h-[20rem] h-72 ">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full px-2 pb-6 mb-8 hover:shadow-xl">
                <div className="lg:h-[20rem] h-72 ">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full px-2 pb-6 mb-8 hover:shadow-xl">
                <div className="lg:h-[20rem] h-72 ">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full px-2 pb-6 mb-8 hover:shadow-xl">
                <div className="lg:h-[20rem] h-72 ">
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
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>

      <div className="relative h-full-screen">
        <Image src={banner5Image} layout="fill" objectFit="cover" />
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-30" />

        <div className="absolute text-white text-center left-[50%] -translate-x-1/2 top-[55%] -translate-y-1/2">
          <div className="mb-2 lg:text-xl md:text-lg">GET THE LAST DEALS</div>
          <div className="lg:text-4xl md:text-3xl mb-6 font-medium">
            And recieve $20 coupon for first shopping
          </div>
          <div className="mb-16">
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet...
          </div>
          <button className="bg-yellow-base text-black text-lg font-medium px-6 py-3">
            SHOP COLLECTION
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduct;
