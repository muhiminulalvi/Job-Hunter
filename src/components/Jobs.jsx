import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJobData from './SingleJobData';

const Jobs = () => {
    const {initialData} = useLoaderData()
    console.log(initialData);
    
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className='text-end py-7'>
                <button type='button' className='btn-primary'>Remote</button>
                <button type='button' className='btn-primary'>Onsite</button>
            </div>
            <div className='grid grid-cols-1 py-6'>
                <h3 className='text-xl font-semibold'>{initialData.length ? 'Applied Jobs' : 'Not Yet Applied'}</h3>
                <ul className='flex flex-col '>
                    {
                        initialData.map(singleData => <SingleJobData singleData={singleData} key={singleData.id}/>)
                    }
                </ul>
            </div>
        </div>
    );
};



export default Jobs;