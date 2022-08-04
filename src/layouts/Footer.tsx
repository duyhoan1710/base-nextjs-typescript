import { Container } from "./Container";

export const Footer = () => {
  return (
    <div className="py-[80px]">
      <Container>
        <div className="flex justify-between flex-wrap">
          <div className="w-full md:w-2/5 mb-10">
            <h2 className="text-3xl font-medium h-[50px]">Lyme</h2>
            <div className="text-gray-ba">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>

          <div>
            <h3 className="font-medium h-[50px] leading-[50px]">Information</h3>
            <ul>
              <li>Contact us</li>
              <li>Order Status</li>
              <li>Delivery Choices</li>
              <li>Payment Option</li>
              <li>Price Promises</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium h-[50px] leading-[50px]">Company</h3>
            <ul>
              <li>Contact us</li>
              <li>Order Status</li>
              <li>Delivery Choices</li>
              <li>Payment Option</li>
              <li>Price Promises</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium h-[50px] leading-[50px]">My Account</h3>
            <ul>
              <li>Contact us</li>
              <li>Order Status</li>
              <li>Delivery Choices</li>
              <li>Payment Option</li>
              <li>Price Promises</li>
            </ul>
          </div>
        </div>

        <div className="text-gray-ba text-center mt-10">
          Sold and fulfilled by FastSpring - an authorized reseller. Bright
          Market (dba FastSpring), 801 Garden St., Santa Barbara, CA 93101, is
          the authorized reseller of our products and services on TermsFeed.com
        </div>

        <div className="text-gray-ba text-center">
          @Copyright by hoan.nguyenduy
        </div>
      </Container>
    </div>
  );
};
