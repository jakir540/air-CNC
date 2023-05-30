import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import Search from "./Search";
import MenuDropDown from "./MenuDropDown";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm ">
     <div className="py-6 border-b-[1px]">
     <Container>
        <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
          <div>
            <Logo></Logo>
          </div>
          <div> <Search></Search>  </div>
          <div> <MenuDropDown></MenuDropDown> </div>
        </div>
      </Container>
     </div>
    </div>
  );
};

export default Navbar;
