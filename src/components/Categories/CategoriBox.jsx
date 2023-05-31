import React from "react";
import Container from "../shared/Container/Container";
import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoriBox = ({ item }) => {
  const { label, icon: Icon } = item;

  const navigate = useNavigate();
  
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  console.log(value);

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };
    const url = queryString.stringifyUrl({
      url: "/",
      query: updatedQuery,
    },
    {skipNull: true}
    
    );
    navigate(url)
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col  items-center  justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500"
    >
      <Icon size={26}></Icon>
      <div>{label}</div>
    </div>
  );
};

export default CategoriBox;
