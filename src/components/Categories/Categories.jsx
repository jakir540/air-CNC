import React from 'react';
import Container from '../shared/Container/Container';
import CategoriData from "./categoriesData"
import CategoriBox from './CategoriBox';


const Categories = () => {
    return (
       <Container>
         <div className='flex flex-row justify-between overflow-x-auto items-center'>
           {
            CategoriData.map((item,index)=> <CategoriBox key={index} item={item} ></CategoriBox>)
           }
        </div>
       </Container>
    );
};

export default Categories;