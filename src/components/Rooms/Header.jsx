import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";

const Header = () => {
  return (
    <div className="pt-20">
      <HeaderSection
        title="No rooms category in this category "
        subtitle="Please Select other Categories"
        
      />
      <div className="w-full md:h-[60vh]  rounded-xl overflow-hidden">
    <img className="object-cover w-full" src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/5fae6309-3dcf-4a78-8e81-c914ff020eb6.jpeg?im_w=1440" alt="" />
      </div>
    </div>
  );
};

export default Header;
