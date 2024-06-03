import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          {/* heading section */}
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            Entre em Contato Conosco!
          </h1>

          {/* grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            {/* address action */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaMapMarkerAlt className="text-5xl" />
              </div>
              <p>
                Rua Leonardo Mota, nº 545, apt. 1501
                <br /> CEP 60170-040, Fortaleza, Ceará, Brasil
              </p>
            </div>
            {/* email section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>jmtannus@gmail.com</p>
                <p>https://jmtannus.github.io/</p>
              </div>
            </div>

            {/* nunber section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>+55 85 99992.0399 - Central de Apoio</p>
                <p>+55 188 - Centro de Valorização da Vida (CVV)</p>
                <p>+55 85 196 - Ministério da Saúde - atendimento à pessoas com transtornos mentais </p>
              </div>
            </div>
            {/* copyright section */}
            <div className="flex justify-between p-4 items-center">
                <p>@ 2022 TCJ. Todos os direitos reservados</p>
                <div className="flex itens-center gap-6">
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos & Conditions</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;