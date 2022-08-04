import { Container } from "./Container";
import { Icon } from "@/components/Image";

import searchIcon from "public/assets/images/svg/ic_search.svg";
import favoriteIcon from "public/assets/images/svg/ic_favorite.svg";
import shopIcon from "public/assets/images/svg/ic_shop.svg";
import listIcon from "public/assets/images/svg/ic_list.svg";
import vnFlagIcon from "public/assets/images/png/vn-flag.png";

export const Header = () => {
  return (
    <div className="h-[80px]">
      <Container>
        <div className="flex justify-between items-center h-full relative">
          <div className="md:flex md:-mx-2">
            <div className="hidden md:block md:px-2">Layout</div>
            <div className="hidden md:block md:px-2">Shop</div>
            <div className="hidden md:block md:px-2">page</div>
            <div className="hidden md:block md:px-2">Blog</div>
            <div className="hidden md:block md:px-2">Lookbook</div>
          </div>

          <div className="text-center absolute top-6 left-[50%] -translate-x-1/2">
            <i className="text-3xl leading-6 md:text-4xl md:leading-8 font-medium ">LYME</i>
            <div>SUN DREAM</div>
          </div>

          <div className="md:flex md:-mx-2">
            <div className="hidden md:px-2 md:block">Sign In</div>

            <div className="hidden md:block md:px-2 md:pr-10 md:pt-0.5">
              <div className="flex">
                <Icon src={vnFlagIcon} width={30} height={24} />
                <div className="ml-1">VN</div>
              </div>
            </div>

            <div className="hidden md:block md:px-2">
              <Icon src={searchIcon} width={16} />
            </div>
            <div className="hidden md:block md:px-2">
              <Icon src={favoriteIcon} width={16} />
            </div>
            <div className="hidden md:block md:px-2">
              <Icon src={shopIcon} width={16} />
            </div>
            <div className="hidden md:block md:px-2">
              <Icon src={listIcon} width={16} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
