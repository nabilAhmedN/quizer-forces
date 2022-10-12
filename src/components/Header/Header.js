import React from 'react';
import quiz from '../images/quiz.jpg'
import './Header.css'

const Header = () => {
    return (
        <div >
            <img className='header h-28' src={quiz} alt="" />
            <h1 className='text-center font-extrabold text-4xl text-black'>Welcome to the Quizer Forces Planet</h1>
            <p className='text-center font-extrabold text-lg text-black'>Using the Quizer Forces as assistance. Everything turns out to be really straightforward. This website allows you to take a quiz.</p>
        </div>
    );
};

export default Header;