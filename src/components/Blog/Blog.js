import React from 'react'


const Blog = () => {

    return (
        
        <div className=''>
            <h2 className='text-3xl font-bold text-center mt-5 mb-5'> Blog </h2>
            <div className='grid mt-10 ml-16 sm:grid-cols-1  lg:grid-cols-3 gap-4  '>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-extrabold tracking-widest uppercase dark:text-violet-400">What is the purpose of react router</span>
                </div>
                <p className="dark:text-gray-100">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-extrabold tracking-widest uppercase dark:text-violet-400">How does context API work</span>
                </div>
                <p className="dark:text-gray-100">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-extrabold tracking-widest uppercase dark:text-violet-400">How does useRef work?
            </span>
                </div>
                <p className="dark:text-gray-100">useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
        </div>
        </div>
        
    );
};

export default Blog;