import Profile from './index';

const Order = () => {
  return (
    <Profile>
      <div className="text-3xl mb-6 font-medium">Đơn hàng của bạn</div>

      <div className="text-lg flex justify-center mt-10">bạn chưa có đơn hàng nào...</div>
    </Profile>
  );
};

export default Order;
