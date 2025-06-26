"use client"
import Image from "next/image"

import { useGSAP } from "@gsap/react"
import { SplitText, ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import celular from "../../public/videos/celularPicture.png"


/**
 * Hero component with GSAP animations
 * Features:
 * - Text animations using SplitText
 * - Leaf animations on scroll
 * - Video animations on scroll:
 *   - Scale, opacity, position and rotation changes
 *   - Play/pause based on scroll position
 *   - Playback rate control based on scroll progress
 */
export function Hero() {

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const isMobile = useMediaQuery({ maxWidth: 767 })


  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    const heroSplit = new SplitText('.title', { type: "chars, words" })


    const subTitleSplit = new SplitText(".subtitle", { type: "lines" })

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06
    })

    gsap.from(subTitleSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1
    })


    gsap.from("#celular", {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1.5
    })



    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
      .to('.right-leaf', { y: 200 }, 0)
      .to('.left-leaf', { y: -200 }, 0)


    const startValue = isMobile ? "top 50%" : "center 60%"

    const endValue = isMobile ? "120% top" : "bottom top"

    // Create a timeline for video animation on scroll
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });


    tl.to(videoRef.current, {
      currentTime: videoRef?.current?.duration,
    });


    // Animate video properties as user scrolls




  }, [])





  return (

    <>

      <section id="hero" className="">
        <h1 className="title">SKINA CELL</h1>



        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Assistência Técnica</p>
              <p className="subtitle text-blue-400">+ SETE anos <br /> no Mercado</p>

            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Conserto rápido e garantido de celulares. 
                Qualidade e confiança em um só lugar!
               
              </p>
              <a className="subtitle" href="#cocktails">
                SKINA CELL - ISAC
              </a>
            </div>

          </div>
        </div>

      </section>

      <div className=" absolute inset-0">
        <Image

          id="celular"
          className="w-full max-w-[400px] md:h-[65%]  absolute md:max-w-[800px]  bottom-0 left-0 md:object-contain object-bottom object-cover lg:max-w-[2000px] lg:"

          alt="Imagem celular"
          src={celular}
        />
      </div>
    </>

  )
}
