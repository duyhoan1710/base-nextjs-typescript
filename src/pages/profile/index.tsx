import { Container } from "@/layouts/Container";
import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";

const Profile = () => {
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
      <div className="lg:py-24 py-16">
        <Container>
          <div className="flex justify-between">
            <div className="w-2/5 px-10 -mx-10">
              <div className="text-3xl mb-2 font-medium">Nguyễn Duy Hoàn</div>

              <div className="border-2 border-gray-800 px-5 py-2 text-xl rounded-xl my-4">
                Thông tin cá nhân
              </div>

              <div className="border-2 border-gray-800 px-5 py-2 text-xl rounded-xl my-4">
                Danh sách đơn hàng
              </div>

              <div className="border-2 border-gray-800 px-5 py-2 text-xl rounded-xl my-4">
                Đánh Giá
              </div>
            </div>

            <div className="w-3/5">
              <div className="text-3xl mb-2 font-medium">
                Thông tin tài khoản
              </div>
              <div className="flex items-center mb-6">
                <div className="w-1/3 text-lg">Họ Tên</div>
                <div className="w-2/3">
                  <input className="border border-gray-400 px-5 py-2 w-full rounded-lg" />
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-1/3 text-lg">Email</div>
                <div className="w-2/3">
                  <input className="border border-gray-400 px-5 py-2 w-full rounded-lg" />
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-1/3 text-lg">Số điện thoại</div>
                <div className="w-2/3">
                  <input className="border border-gray-400 px-5 py-2 w-full rounded-lg" />
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-1/3 text-lg">Địa chỉ</div>
                <div className="w-2/3">
                  <input className="border border-gray-400 px-5 py-2 w-full rounded-lg" />
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-1/3 text-lg">Họ Tên</div>
                <div className="w-2/3">
                  <input className="border border-gray-400 px-5 py-2 w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Profile;
