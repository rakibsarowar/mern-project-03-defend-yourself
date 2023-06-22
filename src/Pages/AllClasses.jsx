import React, { useEffect, useState } from 'react';
import Class from './Class';


const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch('http://localhost:5000/classes');
                const data = await response.json();
                const approvedClasses = data.filter((classData) => classData.status === 'approved');
                setClasses(approvedClasses);
            } catch (error) {
                console.error('Error fetching classes:', error);
            }
        };

        fetchClasses();
    }, []);



    return (
        <div className='mb-10'>

            <div className="flex flex-wrap -mx-4 mt-20 text-white">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] lg:mb-5 max-w-[510px]">
                        <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-black mb-4 ">
                            All Class
                        </h2>
                        <p className="text-base text-black">
                            Check our world best classes for your summer time.
                        </p>
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex justify-center items-center">

                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    {classes.map(singleClass => <Class
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></Class>)}

                </div>
            </div>
        </div>
    );
};

export default AllClasses;