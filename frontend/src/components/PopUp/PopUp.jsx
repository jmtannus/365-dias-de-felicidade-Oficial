import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const PopUp = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div>
          <div
            className="h-screen w-screen fixed top-0 left-0
            bg-black/50 z-50 backdrop-blur-sm"
          >
            <div
              className="fixed top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 p-4
                 shadow-md bg-white rounded-md duration-200 w-[300px]"
            >
              {/* header section */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-dark">Login</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer font-bold"
                    onClick={() => setShowPopup(false)}
                  />
                </div>
              </div>

              {/* login form section */}
              <div className="mt-4">
                <input
                  type="email"
                  placeholder=" Entre com seu e-mail"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                />
                <input
                  type="password"
                  placeholder=" * * * * * "
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                />

                {/* login button section */}
                <div>
                  <button
                    className="w-full rounded-md flex justify-center items-center gap-2 bg-primary text-lg h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
                    onClick={() => setShowPopup(false)}
                  >
                    Entrar
                  </button>
                </div>

                {/* social login */}
                <div className="mt-4">
                  <p className="text-center">ou entre com: </p>
                  <div className="flex justify-center gap-2 mt-2">
                    <FaFacebook className="text-3xl hover:text-blue-500 duration-200" />
                    <FaGoogle className="text-3xl hover:text-primary duration-200" />
                  </div>
                </div>
                {/* danger zone */}
                <div>
                  <p className="px-1 text-2xl text-center font-bold text-primaryDark">
                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                  </p>
                  <h1 className="py-4 text-2xl font-bold text-dark">
                    Zona Perigosa
                  </h1>
                  <button
                    className="bg-white text-lg text-primaryDark hover:scale-105 duration-300"
                    onClick={() => setShowPopup(false)}
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
