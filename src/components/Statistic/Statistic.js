import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const topics = useLoaderData();
    const {data} = topics;
    console.log(data);
    return (
        
        <div>
            <h2 className='text-3xl font-bold text-center mt-5 mb-5'> Statistic </h2>
            <ResponsiveContainer width="90%" height={400}>
                <AreaChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" fill='red'/>
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;