import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img from "../assets/Hero-1.jpg"
import img1 from "../assets/Hero-2.jpg"

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div>
                        <section
                            className="relative" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                            <div
                                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                            ></div>

                            <div
                                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                            >
                                <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                                        Martial art summer camp

                                        <strong className="block font-extrabold text-violet-700">
                                            Karate or Kung Fu?
                                        </strong>
                                    </h1>

                                    <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                                        We are excited to offer 9 weeks of camp this year. It will be a great summer filled with Karate, Taekwon-do and so on.
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-4 text-left">
                                        <a
                                            href="#"
                                            className="block w-full rounded bg-violet-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                        >
                                            Get Started
                                        </a>

                                        <a
                                            href="#"
                                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-violet-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-violet-500 sm:w-auto"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <section
                            className="relative" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                            <div
                                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                            ></div>

                            <div
                                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                            >
                                <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                                        Martial art summer camp

                                        <strong className="block font-extrabold text-violet-700">
                                            Boxing or MMA?
                                        </strong>
                                    </h1>

                                    <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                                        We are excited to offer 9 weeks of camp this year. It will be a great summer filled with Boxing, MMA and so on.
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-4 text-left">
                                        <a
                                            href="#"
                                            className="block w-full rounded bg-violet-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                        >
                                            Get Started
                                        </a>

                                        <a
                                            href="#"
                                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-violet-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-violet-500 sm:w-auto"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >
                </SwiperSlide>
            </Swiper>
        </>
    );
}
