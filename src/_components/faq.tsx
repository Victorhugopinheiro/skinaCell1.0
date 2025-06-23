"use client"

import React, { useEffect, useRef, useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

const FAQ = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [openItems, setOpenItems] = useState<number[]>([]);

    const faqs = [
        {
            question: "Quanto tempo leva um reparo típico?",
            answer: "A maioria dos reparos é concluída em 30-60 minutos. Reparos complexos como problemas de placa-mãe podem levar 2-3 horas. Fornecemos estimativas precisas de tempo durante o diagnóstico."
        },
        {
            question: "Vocês oferecem garantia nos reparos?",
            answer: "Sim, oferecemos garantia de 90 dias em todos os reparos, incluindo peças e mão de obra. Isso cobre qualquer defeito relacionado ao nosso trabalho de reparo."
        },
        {
            question: "Quais formas de pagamento vocês aceitam?",
            answer: "Aceitamos dinheiro, cartões de crédito, cartões de débito e pagamentos digitais. Também oferecemos planos de pagamento flexíveis para reparos mais caros."
        },
        {
            question: "Vocês conseguem reparar telefones com danos por água?",
            answer: "Sim, somos especializados em recuperação de danos por água. O sucesso depende da rapidez com que você traz o dispositivo e da extensão do dano. Oferecemos diagnóstico gratuito."
        },
        {
            question: "Vocês usam peças originais?",
            answer: "Usamos uma combinação de peças OEM (originais) e peças de alta qualidade do mercado paralelo. Sempre informamos sobre o tipo de peça e deixamos você escolher com base no seu orçamento."
        },
        {
            question: "E se meu telefone não puder ser reparado?",
            answer: "Se o reparo não for possível ou econômico, explicaremos suas opções, incluindo serviços de recuperação de dados e ajudaremos você a encontrar um dispositivo substituto adequado."
        }
    ];

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

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section id="faq" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto ">
                <div className="scroll-reveal text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg font-light text-white/60">
                        Tudo que você precisa saber sobre nossos serviços de reparo
                    </p>
                </div>

                <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="glassmorphic rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                                >
                                    <span className="text-white font-medium">{faq.question}</span>
                                    {openItems.includes(index) ? (
                                        <BiMinus size={20}  className="text-blue-400" />
                                    ) : (
                                        <BiPlus size={20}  className="text-blue-400" />
                                    )}
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ${openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="px-6 pb-4">
                                        <p className="text-white/70 font-light leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;