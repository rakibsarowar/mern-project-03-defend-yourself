import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';



const BestInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);

            });
    }, [])

    return (
        <div className=''>
            <div className=" mx-4">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] lg:mb-5 max-w-[510px]">
                        <span className="font-semibold text-lg text-black mb-2 md:pt-16 block">
                            World Best Instructors
                        </span>
                        <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-black mb-4 ">
                            Popular Instructors
                        </h2>
                        <p className="text-base text-black">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center md:justify-items-center gap-4'>
                {
                    instructors.map(instructor =><Instructor
                        key={instructor._id}
                        instructor={instructor}
                    ></Instructor>)
                }

            </div>
        </div>
    );
};

export default BestInstructors;