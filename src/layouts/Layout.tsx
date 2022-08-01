import type { ReactNode } from "react";
import { Footer } from "./Footer";

import { Header } from "./Header";

type ILayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: ILayoutProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <Header />

      <div className="content py-5 text-xl">{props.children}</div>

      <Footer />
    </div>
  </div>
);

export { Layout };
