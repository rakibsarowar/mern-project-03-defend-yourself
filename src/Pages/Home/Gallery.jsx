import React from 'react';
import { motion } from "framer-motion";
import img1 from '../../assets/Photo1.jpg'
import img2 from '../../assets/Photo2.jpg'
import img3 from '../../assets/Photo3.jpg'
import img4 from '../../assets/Photo4.jpg'
import img5 from '../../assets/Photo5.jpg'
import img6 from '../../assets/Photo6.jpg'

const Gallery = () => {
    return (
        <>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10 lg:pb-14">
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-5 max-w-[510px]">
                            <span className="text-lg text-black mb-2 block">
                                World Best Environment
                            </span>
                            <h2 className="font-anton font-bold text-3xl sm:text-4xl md:text-[40px] text-gray-950 underline mb-4 ">
                                Our Gallery
                            </h2>
                            <p className="font-Satisfy text-gray-950">
                                Let's take a look of our world best indoor and ourdoor learining environment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="flex flex-wrap md:w-1/2">
                        <div className="md:w-1/2 p-1 md:p-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center img"
                                    src={img1}
                                />
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 p-1 md:p-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={img2}
                                />
                            </motion.div>
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={img3}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex md:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={img4}
                                />
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 p-1 md:p-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={img2}
                                />
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 p-1 md:p-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={img6}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
