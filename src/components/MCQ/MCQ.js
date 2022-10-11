import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Querys from '../Querys/Querys';

const MCQ = () => {
    const alldata = useLoaderData();
    const {data} = alldata;
    const {questions} = data;
    return (
        <div>
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