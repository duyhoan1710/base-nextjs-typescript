import { Container } from "@/layouts/Container";
import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";

const Contact = () => {
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
            <span className="text-xl ml-2">Contact us</span>
          </div>

          <div className="text-3xl">Contact us</div>
        </Container>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2949344038475!2d105.79403981476239!3d20.980811386024406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc508f938fd%3A0x883e474806a2d1f2!2zSOG7jWMgdmnhu4duIEvhu7kgdGh14bqtdCBt4bqtdCBtw6M!5e0!3m2!1svi!2s!4v1659951242941!5m2!1svi!2s"
        width="100%"
        height="600"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>

      <div className="lg:py-24 py-16 border-b-2">
        <Container>
          <div className="md:flex justify-between">
            <div className="md:w-[45%] md:order-1">
              <div className="text-3xl mb-6">Get In Touch</div>

              <div className="flex flex-wrap">
                <div className="w-1/2 mb-6">
                  <div className="text-xl mb-4">LOCATION</div>
                  <div className="text-gray-600 mb-1">887 Myrtle Dr.</div>
                  <div className="text-gray-600 mb-1">Bronx, NY 16544</div>
                </div>

                <div className="w-1/2 mb-6">
                  <div className="text-xl mb-4">CONTACT US</div>
                  <div className="text-gray-600 mb-1">Phone: +18007556020</div>
                  <div className="text-gray-600 mb-1">
                    Email: contact@gmail.com
                  </div>
                </div>

                <div className="w-1/2 mb-6">
                  <div className="text-xl mb-4">OUT HOURS</div>
                  <div className="text-gray-600 mb-1">
                    MON-FRI 09:00 - 19:00
                  </div>
                  <div className="text-gray-600 mb-1">
                    SAT-SUN 10:00 - 14:00
                  </div>
                </div>

                <div className="w-1/2 mb-6">
                  <div className="text-xl mb-4">FOLLOW US</div>
                  <div className="text-gray-600 mb-1">Facebook</div>
                  <div className="text-gray-600 mb-1">Instagram</div>
                </div>
              </div>
            </div>
            <div className="md:w-[45%]">
              <div className="text-3xl mb-6">Send Us An Email</div>

              <div className="flex -mx-3 mb-6">
                <div className="w-1/2 px-3">
                  <input
                    className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                    placeholder="Name"
                  />
                </div>

                <div className="w-1/2 px-3">
                  <input
                    className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mb-6">
                <textarea
                  className="border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  placeholder="Message"
                  rows={5}
                />
              </div>

              <div className="flex justify-end">
                <button className="px-8 py-3 bg-yellow-base">SEND</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;
