"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';








export function Brands() {

    const brands = [
        'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Huawei'
    ];


    useGSAP(() => {
        gsap.fromTo("#brand", {
            y: -31,
            rotation: 0,

        }, {
            y: 100,
            repeat: -1,
            yoyo: true,
            ease: "bounce.out",
            duration: 2
        })
    }, [])


    return (
        <section className="py-20 min-h-[70vh] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="scroll-reveal text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
                        Confiado pelas Principais Marcas
                    </h2>
                    <p className="text-lg font-light text-white/60">
                        Reparamos todas as principais marcas de smartphones com peças certificadas
                    </p>
                </div>

                <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
                    <div className="glassmorphic rounded-2xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                            {brands.map((brand, index) => (
                                <div
                                    key={brand}
                                    className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300"

                                >
                                    <div
                                        id='brand'
                                        className="bg-blue-500 select-none rounded-xl p-4 h-20 flex items-center justify-center 
                                        shadow-lg shadow-blue-900  hover:bg-blue-400 transition-all duration-300 hover:-translate-y-5 hover:shadow-lg hover:shadow-slate-600 " >
                                        <span className="text-white font-light text-lg">{brand}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
;

