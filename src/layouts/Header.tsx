import { Container } from "./Container";
import { Icon } from "@/components/Image";

import searchIcon from "public/assets/images/svg/ic_search.svg";
import favoriteIcon from "public/assets/images/svg/ic_favorite.svg";
import shopIcon from "public/assets/images/svg/ic_shop.svg";
import listIcon from "public/assets/images/svg/ic_list.svg";
import vnFlagIcon from "public/assets/images/png/vn-flag.png";

export const Header = () => {
  return (
    <div className="md:h-[80px]">
      <Container>
        <div className="md:flex md:justify-between md:items-center h-full relative">
          <div className="md:flex md:-mx-2">
            <div className="md:px-2">Layout</div>
            <div className="md:px-2">Shop</div>
            <div className="md:px-2">page</div>
            <div className="md:px-2">Blog</div>
            <div className="md:px-2">Lookbook</div>
          </div>

          <div className="text-center absolute top-6 left-[50%] -translate-x-1/2">
            <i className="text-4xl font-medium leading-8">LYME</i>
            <div>SUN DREAM</div>
          </div>

          <div className="md:flex md:-mx-2">
            <div className="md:px-2">Sign In</div>

            <div className="md:px-2 md:pr-10 md:pt-0.5">
              <div className="flex">
                <Icon src={vnFlagIcon} width={30} height={24} />
                <div className="ml-1">VN</div>
              </div>
            </div>

            <div className="md:px-2">
              <Icon src={searchIcon} width={16} />
            </div>
            <div className="md:px-2">
              <Icon src={favoriteIcon} width={16} />
            </div>
            <div className="md:px-2">
              <Icon src={shopIcon} width={16} />
            </div>
            <div className="md:px-2">
              <Icon src={listIcon} width={16} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
