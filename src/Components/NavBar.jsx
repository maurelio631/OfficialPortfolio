import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import Teclado from "../Assets/img/teclado.png";
import Like from "../Assets/img/LikeMemoji.webp";

export default function NavBar() {
  return (
    <header>
      <nav className="flex flex-col justify-center md:justify-around items-center bg-black text-white text-base py-5">
        <img src="" alt="" />
        <ul className="flex items-center p-2 flex-col lg:flex-row">
          <li className="p-4">
            <a href="">Sobre mim </a>
          </li>
          <li className="p-4">
            <a href=""> Educação</a>
          </li>
          <li className="p-4">
            <a>Experiência</a>
          </li>
          <li className="p-4">
            <a>Habilidades</a>
          </li>
          <li className="p-4">
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/marco-aur%C3%A9lio-449459109/"
                target="_blank"
              >
                <FaLinkedinIn fontSize="1.7rem" className="mx-4" />
              </a>
              <a href="https://github.com/maurelio631" target="_blank">
                <FaGithub fontSize="1.7rem" className="mx-4" />
              </a>
              <a href="https://twitter.com/ymarc0" target="_blank">
                  <FiTwitter fontSize="1.7rem" className="mx-4"/>
              </a>
              <a href="mailto:marco.silva631@outlook.com">
                <AiOutlineMail fontSize="1.7rem" className="mx-4" />
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="relative text-center">
        <img src={Teclado} alt="teclado" className="h-80 w-full" />
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex">
          <div className="flex flex-col items-center">
            <img
              src={Like}
              typeof="image/webp"
              alt="Memoji sorrindo e fazendo positivo com a mão"
              className="w-32"
            />
            <h2 className="text-white font mb-3">Marco Aurélio Sousa Silva</h2>
            <p className="text-white">Desenvolvedor Fullstack</p>
          </div>
        </div>
      </div>
    </header>
  );
}
