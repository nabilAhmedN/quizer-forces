import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Querys = ({query, index}) => {
    const {question, options, correctAnswer} = query;
    const [msg, setMsg] = useState();

    const handleChange = event =>{
        setMsg(event.target.value);
    }
    const handleClick = event =>{
        event.preventDefault();
        console.log( event.target.value);
        if(event.target.value === correctAnswer){
            toast.success('Right Answer',{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }
        else{
            toast.error('Wrong Answer',{
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }
    
     
     const rightAnswer =() =>{
        const showMsg = 'Right Ans is: '
        const item = JSON.stringify(correctAnswer);
        toast.success(showMsg + item,{
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })

     }
    return (
        <div>
            <div className='mt-10 mx-5 md:mx-10 lg:mx-[200px] border p-10 bg-indigo-400 rounded-lg ' >
            <div className='flex justify-between'>
                <h1 className='mb-10 mt-5 font-bold text-xl text-white'>Que {index+1}: {question.slice(3,-4)}</h1>
                <button type='btn' className='' onClick={rightAnswer}><EyeIcon className='w-7 h-7 text-white'></EyeIcon></button>
            </div>
            <div>
                <ul className="items-center w-full  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:grid grid-cols-2 dark:bg-indigo-500 dark:border-gray-600 dark:text-white">
                    <li className="w-full  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input onChange={handleChange} onClick={handleClick} id="horizontal-list-radio-license" type="radio" value={options[0]} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="horizontal-list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[0]} </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input onChange={handleChange} onClick={handleClick} id="horizontal-list-radio-id" type="radio" value={options[1]} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="horizontal-list-radio-id" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[1]}</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input onChange={handleChange} onClick={handleClick} id="horizontal-list-radio-millitary" type="radio" value={options[2]} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="horizontal-list-radio-millitary" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[2]}</label>
                        </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input onChange={handleChange} onClick={handleClick} id="horizontal-list-radio-passport" type="radio" value={options[3]} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="horizontal-list-radio-passport" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[3]}</label>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default Querys;