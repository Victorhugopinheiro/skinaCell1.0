"use client"

import Link from "next/link";


import logo from "../../public/images/logo.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Navbar() {

  const navLinks = [
    {
      id: "#about",
      title: "Sobre",
    },
    {
      id: "#menu",
      title: "Qualidade de trabalho",
    },
    {
      id: "#testimonials",
      title: "Avaliações",
    },
    {
      id: "#faq",
      title: "Perguntas frequentes",
    },
    {
      id: "#contact",
      title: "Contato",
    },
  ];
  useGSAP(() => {


    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top"
      }
    })


    navTween.fromTo("nav", {
      backgroundColor: "transparent"
    }, {
      backgroundColor: "#00000050",
      backgroundFilter: 'blur(10px)',
      duration: 1,
      ease: "power1.inOut"
    })



  }, [])


  return (
    <nav className=" p-2">
      <div className="  ">
        <Link className="flex items-center gap-2" href={"#home"}>

          <p className="text-2xl">Skina Cell</p>
        </Link>

        <ul className="flex gap-6">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={`${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

