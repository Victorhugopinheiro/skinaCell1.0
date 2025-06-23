"use client"
import React from 'react';

import { FaClock, FaEnvelope, FaMapPin, FaPhone } from 'react-icons/fa';

import Image from 'next/image';
import { GiClick } from 'react-icons/gi';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CgClose } from 'react-icons/cg';





const Footer = () => {

  useGSAP(() => {
    gsap.fromTo("#click", {
      x: 10,
      y: -4,
      rotation: 0,


    }, {
      x: 140,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2
    })
  }, [])



  useGSAP(() => {
    gsap.fromTo("#clock", {
      y: -20,


    }, {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2
    })
  }, [])

  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">

            <p className="text-white/70 font-light leading-relaxed mb-6">
              Serviços profissionais de reparo de celulares com mais de 7 anos de experiência no mercado.
              Restauramos seu dispositivo à perfeita condição com peças de qualidade premium.
            </p>
            <div className="flex gap-4">
              <button className="neumorphic-btn font-bold">
                Solicitar Orçamento
                <GiClick id='click' />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Informações de Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone size={18} className="text-blue-400" />
                <span className="text-white/70 font-light">+55 (11) 98333-2724</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope size={18} className="text-blue-400" />
                <span className="text-white/70 font-light">contato@skinacell.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapPin size={18} className="text-blue-400" />
                <span className="text-white/70 font-light">R. Wadia Jafete Assad, 160 - Dos Casa, São Bernardo do Campo - SP, 09850-090</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FaClock id='clock' size={18} className="text-blue-400" />
                <div className="text-white/70 font-light">
                  <p>Seg - Sex: 10h - 18h</p>
                  <p>Sábado: 10h - 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 font-light">
            © 2024 Skina Cell. Todos os direitos reservados. | Política de Privacidade | Termos de Serviço
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;