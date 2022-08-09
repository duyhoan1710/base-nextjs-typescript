import { Container } from "@/layouts/Container";
import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Profile = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string;
}) => {
  const router = useRouter();

  console.log(router);

  useEffect(() => {
    if (router.pathname === "/profile") {
      router.push("/profile/info");
    }
  }, []);

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
      <div className="lg:py-24 py-16 border-t-2 border-b-2 ">
        <Container>
          <div className="md:flex justify-between">
            <div className="md:w-2/5 px-10 -mx-10 border-r-2 border-gray-400">
              <div className="text-3xl mb-6 font-medium">Nguyễn Duy Hoàn</div>

              <Link href="/profile/info">
                <div
                  className={`cursor-pointer border-2 border-gray-800 px-5 py-2 text-xl rounded-xl my-4 ${
                    router.pathname === "/profile/info" && "bg-black text-white"
                  }`}
                >
                  Thông tin cá nhân
                </div>
              </Link>

              <Link href="/profile/orders">
                <div
                  className={`cursor-pointer border-2 border-gray-800 px-5 py-2 text-xl rounded-xl my-4 ${
                    router.pathname === "/profile/orders" &&
                    "bg-black text-white"
                  }`}
                >
                  Danh sách đơn hàng
                </div>
              </Link>

              <Link href="/profile/reviews">
                <div
                  className={`cursor-pointer border-2 border-gray-800 px-5 py-2 text-xl rounded-xl my-4 ${
                    router.pathname === "/profile/reviews" &&
                    "bg-black text-white"
                  }`}
                >
                  Đánh Giá
                </div>
              </Link>

              <div className="cursor-pointer border-2 border-gray-800 px-5 py-2 text-xl rounded-xl my-4 ">
                Thoát
              </div>
            </div>

            <div className="min-h-[30vh] md:w-3/5 md:min-h-[70vh]">
              {children}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Profile;
