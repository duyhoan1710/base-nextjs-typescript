import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { Meta } from "@/layouts/Meta";
import { Layout } from "@/layouts/Layout";

import bannerImage from "public/assets/images/jpg/banner3.jpg";
import banner4Image from "public/assets/images/jpg/banner4.jpg";
import banner5Image from "public/assets/images/jpg/banner5.jpg";

import category1Image from "public/assets/images/jpg/category5.jpg";
import category2Image from "public/assets/images/jpg/category6.jpg";
import category3Image from "public/assets/images/jpg/category7.jpg";
import category4Image from "public/assets/images/jpg/category8.jpg";

import product1Image from "public/assets/images/jpg/product1.jpg";
import product2Image from "public/assets/images/jpg/product2.jpg";
import product3Image from "public/assets/images/jpg/product3.jpg";
import product4Image from "public/assets/images/jpg/product4.jpg";
import product5Image from "public/assets/images/jpg/product5.jpg";
import product6Image from "public/assets/images/jpg/product6.jpg";
import product7Image from "public/assets/images/jpg/product7.jpg";
import product8Image from "public/assets/images/jpg/product8.jpg";

import favoriteIcon from "public/assets/images/svg/ic_favorite.svg";

import Image from "next/image";
import { Container } from "@/layouts/Container";
import { Header } from "@/layouts/Header";
import { Icon } from "@/components/Image";
import Link from "next/link";

const Index = () => {
  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      hasHeader={false}
    >
      <div className="relative h-full-screen">
        <Image src={bannerImage} layout="fill" objectFit="cover" />

        <div className="absolute w-full">
          <Header />
        </div>

        <Container>
          <div className="flex flex-col justify-between w-3/5 md:w-1/2 lg:w-1/3 absolute top-[50%] -translate-y-1/2">
            <div className="flex flex-col justify-between">
              <div className="text-gray-600 text-2xl mb-4">
                SUPPER SUSTAINABLE
              </div>
              <div className="text-4xl leading-8 md:text-5xl md:leading-[46px] lg:text-6xl lg:leading-[56px] mb-5">
                Girls from around the world
              </div>
              <div className="mb-12">
                Premium CBD delivered directly to your doorstep
              </div>
            </div>

            <button className="bg-white text-black text-lg font-medium px-5 py-2 w-fit">
              Shop Now
            </button>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="lg:py-24 py-16 ">
            <div className="text-center lg:px-12 md:px-20 lg:mb-20 mb-16">
              <div className="text-yellow-text mb-2 lg:text-xl text-lg">
                STIMMA SUNDREAM
              </div>
              <div className="lg:text-4xl lg:leading-10 text-3xl leading-8">
                "Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old."
              </div>
            </div>

            <div>
              <div className="md:flex md:justify-between">
                <div className="w-full mb-5 md:w-[49%] lg:h-72 h-64 relative">
                  <Image src={category1Image} layout="fill" objectFit="cover" />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-stone-500 to-transparent" />
                  <div className="absolute top-[56%] left-[10%]">
                    <div className="text-4xl text-white">B. Swim</div>
                    <div className="text-lg text-white">6 products</div>
                  </div>
                </div>

                <div className="w-full mb-5 md:w-[49%] lg:h-72 h-64 relative">
                  <Image src={category2Image} layout="fill" objectFit="cover" />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-stone-500 to-transparent" />
                  <div className="absolute top-[56%] left-[10%]">
                    <div className="text-4xl text-white">B. Swim</div>
                    <div className="text-lg text-white">6 products</div>
                  </div>
                </div>
              </div>

              <div className="md:flex md:justify-between">
                <div className="w-full mb-5 md:w-[64%] lg:h-72 h-64 relative">
                  <Image src={category3Image} layout="fill" objectFit="cover" />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-stone-500 to-transparent" />
                  <div className="absolute top-[56%] left-[10%]">
                    <div className="text-4xl text-white">Best Seller</div>
                    <div className="text-lg text-white">6 products</div>
                  </div>
                </div>

                <div className="w-full mb-5 md:w-[34%] lg:h-72 h-64 relative">
                  <Image src={category4Image} layout="fill" objectFit="cover" />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-stone-500 to-transparent" />
                  <div className="absolute top-[56%] left-[10%]">
                    <div className="text-4xl text-white">B. Swim</div>
                    <div className="text-lg text-white">6 products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="lg:py-24 py-16 bg-violet">
        <Container>
          <div className="text-center mb-16">
            <div className="text-yellow-text mb-2 lg:text-xl md:text-lg">
              OLIVE OIL
            </div>
            <div className="text-4xl mb-4 font-medium">Summer's 21</div>
            <div>
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product1Image} layout="fill" objectFit="cover" />
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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product2Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product3Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product4Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product5Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product6Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product7Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product8Image} layout="fill" objectFit="cover" />

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

          <div className="flex justify-center">
            <Link href="/products">
              <button className=" bg-yellow-base px-14 py-4 font-medium">
                SEE ALL
              </button>
            </Link>
          </div>
        </Container>
      </div>

      <div className="lg:py-24 py-16">
        <Container>
          <div className="text-center mb-16">
            <div className="text-yellow-text mb-2 lg:text-xl md:text-lg">
              OLIVE OIL
            </div>
            <div className="text-4xl mb-4 text-gray-600 font-medium">
              Our Branch
            </div>
            <div className="text-gray-500">
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/4 text-3xl text-gray-500 ">
              <div className="text-center border-b-2  w-[70%] px-4 py-3 m-auto">
                LogoIpsum
              </div>
            </div>

            <div className="w-1/2 md:w-1/4 text-3xl text-gray-500 ">
              <div className="text-center border-b-2 w-[70%] px-4 py-3 m-auto">
                LogoIpsum
              </div>
            </div>

            <div className="w-1/2 md:w-1/4 text-3xl text-gray-500 ">
              <div className="text-center border-b-2 w-[70%] px-4 py-3 m-auto">
                LogoIpsum
              </div>
            </div>

            <div className="w-1/2 md:w-1/4 text-3xl text-gray-500 ">
              <div className="text-center border-b-2 w-[70%] px-4 py-3 m-auto">
                LogoIpsum
              </div>
            </div>

            <div className="w-1/2 md:w-1/4 text-3xl text-gray-500 ">
              <div className="text-center border-b-2 w-[70%] px-4 py-3 m-auto ">
                LogoIpsum
              </div>
            </div>

            <div className="w-1/2 md:w-1/4 text-3xl text-gray-500 ">
              <div className="text-center border-b-2 w-[70%] px-4 py-3 m-auto">
                LogoIpsum
              </div>
            </div>

            <div className="w-1/2 md:w-1/4 text-3xl text-gray-500 ">
              <div className="text-center border-b-2 w-[70%] px-4 py-3 m-auto">
                LogoIpsum
              </div>
            </div>

            <div className="w-1/2 md:w-1/4 text-3xl text-gray-500 ">
              <div className="text-center border-b-2 w-[70%] px-4 py-3 m-auto">
                LogoIpsum
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative h-full-screen">
        <Image src={banner4Image} layout="fill" objectFit="cover" />
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-30" />

        <div className="absolute text-white text-center left-[50%] -translate-x-1/2 top-[55%] -translate-y-1/2">
          <div className="mb-2 lg:text-xl text-lg">EXCUSIVE</div>
          <div className="lg:text-4xl text-3xl mb-6 font-medium">
            Banana Collection
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

      <div className="lg:py-24 py-16">
        <Container>
          <div className="text-center mb-16">
            <div className="text-yellow-text mb-2 lg:text-xl text-lg">
              TRENDING
            </div>
            <div className="text-4xl mb-4 font-medium">Feel balanced</div>
            <div>
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product1Image} layout="fill" objectFit="cover" />
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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product2Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product3Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product4Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product5Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product6Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product7Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product8Image} layout="fill" objectFit="cover" />

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

          <div className="flex justify-center">
            <Link href="/products">
              <button className=" bg-yellow-base px-14 py-4 font-medium">
                SEE ALL
              </button>
            </Link>
          </div>
        </Container>
      </div>

      <div className="lg:py-24 py-16 bg-violet">
        <Container>
          <div className="text-center mb-16">
            <div className="text-yellow-text mb-2 lg:text-xl text-lg">
              BLOG POST
            </div>
            <div className="text-4xl mb-4 font-medium">Latest News</div>
            <div>
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product1Image} layout="fill" objectFit="cover" />
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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product2Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product3Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product4Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product5Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product6Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product7Image} layout="fill" objectFit="cover" />

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

            <div className="w-[50%] md:w-[25%] px-3 pb-6 mb-8 hover:shadow-xl">
              <div className="lg:h-[24rem] h-72 ">
                <div className="relative w-full h-full">
                  <Image src={product8Image} layout="fill" objectFit="cover" />

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

          <div className="flex justify-center">
            <Link href="/products">
              <button className=" bg-yellow-base px-14 py-4 font-medium">
                SEE ALL
              </button>
            </Link>
          </div>
        </Container>
      </div>

      <div className="lg:py-24 py-16 text-center">
        <div className="text-yellow-text mb-2 lg:text-xl md:text-lg">
          FOLLOW US ON INSTAGRAM
        </div>
        <div className="lg:text-4xl md:text-3xl font-medium">@STIMMA</div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          slidesPerView={3}
          modules={[Pagination]}
          breakpoints={{
            1200: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          className="swiper-home"
        >
          <SwiperSlide>
            <div className="relative h-[170px] w-full">
              <Image src={product1Image} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] w-full">
              <Image src={product2Image} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] w-full">
              <Image src={product3Image} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] w-full">
              <Image src={product4Image} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] w-full">
              <Image src={product5Image} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] w-full">
              <Image src={product6Image} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] w-full">
              <Image src={product7Image} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] w-full">
              <Image src={product8Image} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
        </Swiper>
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

export default Index;
