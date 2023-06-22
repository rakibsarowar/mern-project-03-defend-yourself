import React, { useEffect, useState } from 'react';
import Class from '../Class';



const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
          .then(res => res.json())
          .then(data => {

            const sortedClasses = data.sort((a, b) => a.availableSeats - b.availableSeats);
            const topClasses = sortedClasses.slice(0, 6);
      
            setClasses(topClasses);
          });
      }, []);


    return (
        <div>

            <div className="flex flex-wrap -mx-4 mt-20 mb-6">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] lg:mb-5 max-w-[510px]">
                        <span className="text-lg text-black mb-2 block">
                            World Best Classes
                        </span>
                        <h2 className="font-anton font-bold text-3xl sm:text-4xl md:text-[40px] text-gray-950 underline mb-4 ">
                            Popular Classes
                        </h2>
                        <p className="font-Satisfy text-gray-950">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
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

export default PopularClass;