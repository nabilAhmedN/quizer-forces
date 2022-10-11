import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Querys from '../Querys/Querys';

const MCQ = () => {
    const alldata = useLoaderData();
    const {data} = alldata;
    const {questions,name} = data;
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-5'>Topic Name {name}</h2>
            {
                questions.map(query => <Querys
                    key={query.id} 
                    query={query}
                />)
            }
        </div>
    );
};

export default MCQ;