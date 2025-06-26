"use client"
import Image from "next/image";



import check from "../../public/images/check.png"
import loja from "../../public/images//imgSkinaCell.png"
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Art() {


    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        const start = isMobile ? "top 20%" : "top top"


        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start: start,
                end: "bottom center",
                scrub: 1.5,
                pin: true
            }
        })

            .to(".will-fade", {
                opacity: 0, stagger: 0.2, ease: "power1.inOut"
            })
            .to(".masked-img", {
                maskSize: '400%', maskPosition: "center", scale: 1.3, duration: 1, ease: "power1.inOut"

            })
            .to("#masked-content", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut"
            })

    }, [])


    const goodLists = [
        "Samsung",
        "Apple",
        "Xiaomi",
        "Motorola",
    ];


    const featureLists = [
        "+ de 7 anos",
        "Garantia",
        "Aprovado pelos clientes",
        "Serviços de qualidade",
    ];



    return (
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">Skina Cell</h2>


                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Image src={check} alt="Check" />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img">
                        <Image
                            src={loja}
                            className="abs-center masked-img size-full object-contain"
                            alt="cocktail" />
                    </div>
                    <ul className="space-y-4 will-fade">
                        {featureLists.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Image src={check} alt="Check" />
                                <p className="md:w-fit w-60">{item}</p>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Aqui cada detalhe importa</h2>
                    <div id="masked-content">
                        <h3>Serviço de qualidade</h3>
                        <p>Seu aparelho entregue no menor tempo possivel</p>
                    </div>
                </div>
            </div>

        </div>
    )
}