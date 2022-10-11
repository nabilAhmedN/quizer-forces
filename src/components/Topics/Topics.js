import React from 'react';
import { useLoaderData } from "react-router-dom";
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData()
    const {data} = topics

    return (
        
        <div>
            <h2 className='text-3xl font-bold text-center mt-5'> Quiz Topic </h2>
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