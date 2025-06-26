"use client"

import Image from "next/image"
import imgAbout1 from "../../public/images/imgApple.jpg"
import imgAbout2 from "../../public/images/imgXiaomi.jpg"
import imgAbout3 from "../../public/images/imgCelular3.jpg"
import imgAbout4 from "../../public/images/imgCelular4.jpg"
import imgAbout5 from "../../public/images/imagemcelular5.jpg"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"


export function About() {

    useGSAP(() => {

        const animateH2 = SplitText.create("#about h2", { type: "words" })


        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center"
            }
        })

            .from(animateH2.words, {
                opacity: 0,
                yPercent: 100,
                ease: "expo.out",
                stagger: 0.02
            })

            .from(".top-grid div, .bottom-grid div", {
                opacity: 0,
                ease: "power1.inOut",
                stagger: 0.04,
                duration: 1
            }, '-=0.5')


    }, [])


    return (
        <div id="about">
            <div className="mb-16 mx:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>Onde cada detalhe importa <span className="text-white">- </span>
                            Assistência em diversas marcas
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>Confiança, qualidade e agilidade! Há mais de 7 anos no mercado, somos referência em assistência
                            técnica de celulares. Serviço rápido, garantia e peças originais.
                            Traga seu aparelho e tenha a segurança de quem entende do assunto!</p>

                        <div>

                            <p className="md:text-3xl text-xl font-bold">
                                <span className="text-blue-400">5.0</span>/5
                            </p>

                            <p className="text-sm text-white-100">
                             +12000 Clientes 
                            </p>
                        </div>

                    </div>
                </div>


            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy" />
                    <Image src={imgAbout1} alt="grid-img-1" />

                </div>


                <div className="md:col-span-6">
                    <div className="noisy" />
                    <Image src={imgAbout2} alt="grid-img-2" />

                </div>

                <div className="md:col-span-3">
                    <div className="noisy" />
                    <Image src={imgAbout5} alt="grid-img-5" />

                </div>
            </div>


            <div className="bottom-grid">


                <div className="md:col-span-8">
                    <div className="noisy" />
                    <Image src={imgAbout3} alt="grid-img-3" />

                </div>

                <div className="md:col-span-4">
                    <div className="noisy" />
                    <Image src={imgAbout4} alt="grid-img-4" />

                </div>
            </div>
        </div>
    )
}