"use client"

import React, { useEffect, useRef } from 'react';
import { AiOutlineCheck } from "react-icons/ai";

import { AiTwotoneTool } from "react-icons/ai";


import compromisso from "../../public/QualidadeDeTrabalho (2).jpg"
import garantia from "../../public/Garantia.jpg"
import qualidade from "../../public/Qualidade.jpg"
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';





const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: AiOutlineCheck,
      title: "Qualidade do Trabalho",
      description: "Técnicos especialistas com treinamento certificado e peças OEM premium garantem que seu dispositivo seja restaurado à perfeita condição.",
      image: qualidade,
      stars: 5
    },
    {
      icon: AiOutlineCheck,
      title: "Compromisso de prazo",
      description: "Atendimento personalizado e dedicado com acompanhamento em tempo real durante todo o processo de reparo do seu dispositivo.",
      image: compromisso,
      stars: 5
    },
    {
      icon: AiOutlineCheck,
      title: "Garantia",
      description: "Garantia de 90 dias em todos os reparos com suporte vitalício. Garantimos nosso trabalho com total confiança.",
      image: garantia,
      stars: 5
    }
  ];



  useGSAP(() => {
    gsap.fromTo("#star", {
      y: 0,
      rotation: 0,


    }, {
      y: 34,
      repeat: 2,
      yoyo: true,
      
      ease: "back.out",
      duration: 2
    })
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
            Por Que Escolher a Skina Cell
          </h2>
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
            Nosso compromisso com a excelência nos diferencia na indústria de reparo móvel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="scroll-reveal glassmorphic rounded-2xl p-8 text-center group transition-all duration-300 hover:bg-white/10 "
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

              </div>

              <h3 className="text-xl flex gap-2 justify-center items-center font-medium tracking-tight text-white mb-4">
                {step.title}

              </h3>

              <p className="text-white/70 font-light leading-relaxed mb-4">
                {step.description}
              </p>

              <div className="flex justify-center gap-1">
                {[...Array(step.stars)].map((_, i) => (
                  <div key={i} className="" ><FaStar id='star' className='text-blue-400' /></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;