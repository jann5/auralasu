'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function IntroSection() {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-primary-white">
            <div className="max-w-[1550px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-5 md:space-y-8 order-2 md:order-1 md:col-span-7 lg:col-span-6"
                    >
                        <span className="text-subtitle tracking-[0.2em] block text-[11px] md:text-[13px] text-gray-500 font-medium">FILOZOFIA MARKI</span>

                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-primary-black leading-[1.1] mt-4 mb-6">
                            Design inspirowany<br />
                            <span className="italic text-gray-400">naturą materiału.</span>
                        </h2>

                        <div className="space-y-6 md:space-y-7 text-gray-500 text-base md:text-lg lg:text-[1.1rem] leading-[1.8] font-light md:pr-10">
                            <p>
                                W AuraLasu wierzymy, że każdy kawałek drewna opowiada własną historię. Naszym zadaniem nie jest narzucanie formy, lecz jej wydobywanie.
                            </p>
                            <p>
                                Stosujemy tradycyjne techniki stolarskie w połączeniu z nowoczesnym projektowaniem, aby tworzyć fronty, które są nie tylko elementem mebla, ale sercem domowej przestrzeni. Każdy sęk, każdy słój jest dla nas inspiracją, a nie wadą.
                            </p>
                        </div>

                        <div className="pt-6 md:pt-10">
                            <span className="inline-block border-b-2 border-primary-black pb-1.5 text-[12px] md:text-[13px] tracking-[0.2em] font-medium uppercase cursor-pointer hover:opacity-60 transition-opacity">
                                POZNAJ NASZĄ HISTORIĘ
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Image Composition */}
                    <motion.div
                        className="relative order-1 md:order-2 h-[350px] md:h-[450px] lg:h-[600px] w-full md:col-span-5 lg:col-span-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Main Image */}
                        <div className="absolute inset-0 md:inset-x-8 md:inset-y-0 bg-gray-100 overflow-hidden">
                            {/* Placeholder for Workshop Image */}
                            <Image
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" // Cinematic workshop (CNC precision)
                                alt="Precyzyjna praca CNC w warsztacie"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-light -z-10 hidden md:block" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
