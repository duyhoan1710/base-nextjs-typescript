import type { ReactNode } from "react";
import { Footer } from "./Footer";

import { Header } from "./Header";

type ILayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: ILayoutProps) => (
  <div>
    {props.meta}

    <div className="flex flex-col min-h-[100vh]">
      {/* <Header /> */}

      <div className="flex-grow">{props.children}</div>

      <Footer />
    </div>
  </div>
);

export { Layout };
