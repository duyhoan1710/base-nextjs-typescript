import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Layout } from "@/layouts/Layout";

import BannerImage from "public/assets/images/jpg/banner3.jpg";
import Image from "next/image";
import { Container } from "@/layouts/Container";
import { Header } from "@/layouts/Header";

const Index = () => {
  const router = useRouter();

  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="relative h-full-screen">
        <div className="absolute w-full z-10">
          <Header />
        </div>

        <Image src={BannerImage} layout="fill" objectFit="cover" />

        <Container>
          <div className="md:flex md:flex-col md:justify-between md:w-1/2 md:h-72 lg:w-1/3 lg:h-80 absolute top-[46%] -translate-y-1/2">
            <div className="md:flex md:flex-col md:justify-between md:h-48 lg:h-56">
              <div className="text-gray-600 text-2xl">SUPPER SUSTAINABLE</div>
              <div className="md:text-5xl md:leading-[46px] lg:text-6xl lg:leading-[56px]">
                Girls from around the world
              </div>
              <div>Premium CBD delivered directly to your doorstep</div>
            </div>

            <button className="bg-white text-black text-lg font-medium px-5 py-2 w-fit">
              Shop Now
            </button>
          </div>
        </Container>
      </div>

      <div></div>
    </Layout>
  );
};

export default Index;
