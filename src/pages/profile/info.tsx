import Profile from "./index";

const Info = () => {
  return (
    <Profile>
      <div className="text-3xl mb-6 font-medium">Thông tin tài khoản</div>
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
        <div className="w-1/3 text-lg">Giới tính</div>
        <div className="w-2/3 flex items-center">
          <div className="mr-8 flex items-center">
            <input
              id="male"
              type="radio"
              className="h-6 w-6 mr-2"
              name="gender"
            />
            <label htmlFor="mail" className="font-medium">
              Nam
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="female"
              type="radio"
              className="h-6 w-6 mr-2"
              name="gender"
            />
            <label htmlFor="female" className="font-medium">
              Nữ
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="w-1/3 text-lg">Ngày sinh</div>
        <div className="w-2/3">
          <input
            type="date"
            className="border border-gray-400 px-5 py-2 w-full rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col items-end">
        <a href="#" className="underline mb-3">
          Thay đổi mật khẩu
        </a>
        <button className="w-fit border bg-yellow-base px-8 py-2">
          Cập nhật tài khoản
        </button>
      </div>
    </Profile>
  );
};

export default Info;
