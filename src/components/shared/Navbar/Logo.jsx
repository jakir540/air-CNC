import React from 'react';
import logoImg from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='hidden md:block'>
            <Link><img src={logoImg} alt="" width='100' height='100' /></Link>
        </div>
    );
};

export default Logo;