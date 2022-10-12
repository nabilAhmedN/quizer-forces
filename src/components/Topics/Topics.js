import React from 'react';
import { useLoaderData } from "react-router-dom";
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
// import quiz from '../images/quiz.jpg'
import './Topics.css'


const Topics = () => {
    const topics = useLoaderData()
    const {data} = topics

    return (
        
        <div>
            <Header/>
            <hr />
            <h2 className='text-2xl font-bold text-center text-black mt-5 '> Quiz Topic </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 m-4 justify-center'>
                {
                    data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}               
                    />)
                }

                </div>
        </div>
        
    );
};

export default Topics;