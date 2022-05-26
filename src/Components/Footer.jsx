import React from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import FooterBackground from "../Assets/img/FooterBackground.png";
import TechMemoji from "../Assets/img/TechMemoji.webp";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center  text-white bg-black">
      <div className="flex flex-col justify-center items-center my-4">
        <p className="my-4">Se quiser, entre em contato comigo</p>
        <div className="flex my-4">
          <a
            href="https://www.linkedin.com/in/marco-aur%C3%A9lio-449459109/"
            target="_blank"
          >
            <FaLinkedinIn href="" className="m-3" fontSize={30} />
          </a>
          <a href="https://github.com/maurelio631" target="_blank">
            <FaGithub className="m-3" fontSize={30} />
          </a>
          <a href="mailto:marco.silva631@outlook.com">
            <AiOutlineMail className="m-3" fontSize={30} />
          </a>
        </div>
        <img src={TechMemoji} className="w-32 my-4" />
        <p className="text-center">
          Todos os direitos reservados &copy; 2022 - Design created by
          @linhas.soutas &reg;
        </p>
      </div>
    </footer>
  );
}
