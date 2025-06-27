"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaQuestion } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import customer1 from "../../public/customer1.jpg"
import customer2 from "../../public/customer2.jpg"
import customer3 from "../../public/customer3.jpg"
import customer4 from "../../public/customer4.jpg"
import Image from 'next/image';



const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Rodriguez",
      result: "Tela substituída em 30 minutos",
      rating: 5,
      text: "Serviço incrível! Meu iPhone estava completamente quebrado e eles fizeram parecer novo. A qualidade é excepcional e a garantia me dá tranquilidade.",
      image: customer1
    },
    {
      name: "Carlos Silva",
      result: "Bateria melhorou 300%",
      rating: 5,
      text: "Meu telefone morria a cada poucas horas. Após a troca da bateria, dura o dia todo como quando era novo. Serviço profissional e preço justo.",
      image: customer2
    },
    {
      name: "Ana Santos",
      result: "Dano por água totalmente recuperado",
      rating: 5,
      text: "Achei que meu telefone estava completamente perdido depois de cair na água. A Skina Cell fez milagres e recuperou todos os meus dados. Altamente recomendado!",
      image: customer3
    },
    {
      name: "Roberto Lima",
      result: "Qualidade da câmera restaurada 100%",
      rating: 5,
      text: "A câmera do meu Samsung estava embaçada e não focava. Eles substituíram perfeitamente e agora as fotos estão cristalinas novamente. Trabalho incrível!",
      image: customer4
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 min-h-[100vh]  flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-center font-modern-negra text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-2xl font-modern-negra  text-white/60">
            Resultados reais de clientes satisfeitos
          </p>
        </div>

        <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glassmorphic rounded-2xl p-8 bg-white/10 text-center max-w-2xl mx-auto">






                    <div className="flex items-center my-2 justify-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-white/20"
                      />
                      <div className="text-left">
                        <p className="text-white font-medium">{testimonial.name}</p>
                        <p className="text-blue-400 text-sm font-light">{testimonial.result}</p>
                      </div>
                    </div>

                    <p className="text-lg font-light text-white/80 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>


                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaRegStar key={i} size={20} className="text-blue-400" />
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-400' : 'bg-blue-500'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;