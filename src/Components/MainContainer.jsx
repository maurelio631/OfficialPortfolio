import React from "react";

import PhoneMemoji from "../Assets/img/PhoneMemoji.webp";

export default function MainContainer() {
    return (
        <main>
            <section className="bg-black container flex flex-col p-10">
                <h2 className="text-white text-center ">Sobre mim</h2>
                <div className="flex flex-col items-center">
                    <img src={PhoneMemoji} typeof="image/webp" alt="" className="w-32" />
                    <p className="text-white mt-12 text-justify">Oi, eu sou o Marco! Tenho 21 anos e se você caiu aqui de para-quedas, esse é meu portfólio, o lugar onde você vai poder conhecer um pouco sobre mim, sobre as coisas que eu estou aprendendo, trabalhos que eu executei e o que está em andamento por aqui.
                    </p>
                    <p className="text-white mt-12 text-justify ">
                        Pra começar, eu vou contar um pouco sobre os cursos que eu fiz e os que estão prestes a terminar:</p>
                </div>
            </section>
        </main >
    )
}