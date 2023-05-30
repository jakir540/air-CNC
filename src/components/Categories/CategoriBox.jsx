import React from 'react';
import Container from '../shared/Container/Container';

const CategoriBox = ({item}) => {
   const {label,icon:Icon} =item 
    return (
  
        <div className='flex flex-col  items-center  justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'> 
            <Icon size={26}></Icon>
            <div>{label}</div>
        </div>
    
    );
};

export default CategoriBox;