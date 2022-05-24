import React from "react";

import { AiFillCheckCircle } from 'react-icons/ai';
import { MdOutlinePendingActions } from 'react-icons/md';

import PhoneMemoji from "../Assets/img/PhoneMemoji.webp";
import Code from "../Assets/img/code.png";
import SenacLogo from "../Assets/img/SenacLogo.png";
import UninoveLogo from "../Assets/img/LogoUninove.jpeg";
import AugmensysLogo from "../Assets/img/AugmensysLogo.jpg";
import ConfitecLogo from "../Assets/img/ConfitecLogo.jpg";
import RochelleGif from "../Assets/img/rochelle.gif";



export default function MainContainer() {
    return (
        <main>
            <section className="bg-black container flex flex-col p-10">
                <h2 className="text-white text-center ">Sobre mim</h2>
                <div className="flex flex-col items-center">
                    <img src={PhoneMemoji} typeof="image/webp" alt="" className="w-32 mt-5" />
                    <p className="text-white mt-12 text-justify">Oi, eu sou o Marco! Tenho 21 anos e se você caiu aqui de para-quedas, esse é meu portfólio, o lugar onde você vai poder conhecer um pouco sobre mim, sobre as coisas que eu estou aprendendo, trabalhos que eu executei e o que está em andamento por aqui.
                    </p>
                    <p className="text-white mt-12 text-justify ">
                        Pra começar, eu vou contar um pouco sobre os cursos que eu fiz e os que estão prestes a terminar:</p>
                </div>
            </section>
            <section className="container flex flex-col p-10 bg-black text-white">
                <h2 className="text-white text-center"> Educação</h2>
                <p className="text-center mt-5">Aqui você encontra os principais cursos que fiz e estou fazendo, porque estudar nunca é demais!</p>
                <div className="flex flex-col items-center mt-10">
                    <div className="flex flex-wrap justify-center">
                        <div className="h-72 w-72 border-2 border-lime-500 mb-5 flex flex-col justify-center items-center">
                            <img className="rounded-full w-1/2" src={SenacLogo} alt="Logo Senac" />
                            <p className="mt-5">Iniciação em Linguagem Java</p>
                            <p className="mt-4">Status: <span className="text-lime-500">Concluído</span> </p>
                            <AiFillCheckCircle className="text-lime-500 mt-2" />
                        </div>
                        <div className="h-72 w-72 border-2 border-lime-500 mb-5 flex flex-col justify-center items-center">
                            <img className="rounded-full w-1/2" src={SenacLogo} alt="Logo Senac" />
                            <p className="mt-5">Lógica de Programação</p>
                            <p className="mt-4">Status: <span className="text-lime-500">Concluído</span> </p>
                            <AiFillCheckCircle className="text-lime-500 mt-2" />
                        </div>
                        <div className="h-72 w-72 border-2 border-lime-500 mb-5 flex flex-col justify-center items-center">
                            <img className="rounded-full w-1/2" src={SenacLogo} alt="Logo Senac" />
                            <p className="mt-5">Técnico em Informática</p>
                            <p className="mt-4">Status: <span className="text-lime-500">Concluído</span> </p>
                            <AiFillCheckCircle className="text-lime-500 mt-2" />
                        </div>
                        <div className="h-72 w-72 border-2 border-lime-500 mb-5 flex flex-col justify-center items-center">
                            <img className="rounded-full w-1/2" src={UninoveLogo} alt="Logo Uninove" />
                            <p className="mt-5 text-center">Ciência da Computação</p>
                            <p className="mt-4">Status: <span className="text-yellow-400">Em andamento</span> </p>
                            <MdOutlinePendingActions className="text-yellow-400 mt-2" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container flex flex-col p-10 bg-black text-white">
                <h2 className="text-white text-center">Experiência</h2>
                <p className="text-justify mt-5">Por conta das coisas que eu aprendi nesses cursos eu tive/tenho a oportunidade de mostrar o que eu sei e aprender mais ainda nesses lugares:</p>
                <div className="flex flex-col items-center mt-10">
                    <div>
                        <img className="rounded" src={AugmensysLogo} alt="Logo Augmensys" />
                        <p className="text-center mt-5"><span className="text-red-500">Função: </span>Estagiário em desenvolvimento front-end</p>
                    </div>
                    <div className="flex flex-col mt-5">
                        <img className="rounded" src={ConfitecLogo} alt="Logo Confitec" />
                        <p className="text-center mt-5"><span className="text-lime-500">Função: </span>Analista de sistemas</p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10 text-center">
                    <p>Mas nem só de um trabalho vive um dev não é mesmo...</p>
                    <img className="my-5" src={RochelleGif} alt="Gif Rochelle Meu marido tem dois empregos"/>
                    <p>E é por isso que aqui tenho mais alguns trabalhos que estão no ar:</p>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <div>
                        <h3>A Quiropraxia</h3>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}