import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {
    
    const { id, name, logo, total } = topic
    const handle = useNavigate();
  
    const handleSelectTopis = () =>{
      handle(`/topic/${id}`);
   }

    

    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-zinc-900" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-semibold tracking-wide ">{name}</h2>
                    <p className="dark:text-gray-100">Quiz: {total}</p>
                </div>
                <button type="button" onClick={handleSelectTopis} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Start Practice
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>

    );
};

export default Topic;