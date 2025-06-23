"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';


interface WhatsAppButtonProps {
  phoneNumber: string; // no formato internacional, ex: 5511999998888
  message?: string;
}

const Hero = ({ phoneNumber, message }: WhatsAppButtonProps) => {

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  useGSAP(() => {
    gsap.fromTo("#phone", {
      x: -31,
      rotation: 0,
      borderRadius: '0%'

    }, {
      x: 10,
      repeat: -1,
      yoyo: true,
      borderRadius: '100%',
      rotation: 360,
      ease: "bounce.out",
      duration: 2
    })
  }, [])






  return (
    <section id="home" ref={heroRef} className="min-h-screen my-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="scroll-reveal">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-white mb-6">
            Assistência Premium
            <span className="block text-blue-400">Para Celulares</span>
          </h1>
        </div>

        <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
          <p className="text-xl sm:text-2xl font-light text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Serviços profissionais de reparo com mais de 7 anos de experiência no mercado.
            Restauramos seu dispositivo à perfeita condição com peças premium e expertise artesanal.
          </p>
        </div>

        <div className="scroll-reveal" style={{ transitionDelay: '400ms' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="neumorphic-btn flex  items-center gap-2 text-white/80 hover:text-white font-light px-8 py-3 border border-white/20 rounded-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
              <FaPhone className='text-blue-400' id='phone' size={20} />
              Orçamento Grátis
            </button>

            <a
              href={`https://wa.me/${11983332724}?text=${"Oiiiiii"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
            >
              <FaWhatsapp size={20} />
              Falar no WhatsApp
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;