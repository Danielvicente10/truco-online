import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/1340411.jpeg";
import img2 from "../assets/1348338.jpeg";
import img3 from "../assets/1348344.jpeg";
import img4 from "../assets/1354447.jpeg";
import img5 from "../assets/749966.png";

interface NavBarProps {
  onBackgroundChange: (img: string) => void;
}

export default function NavBar({ onBackgroundChange }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClickMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleClickSpan() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handlerBackground(img: string) {
    onBackgroundChange(img);
    setIsModalOpen(false);
  }

  return (
    <>
      <nav className="bg-transparent z-10 absolute top-0 p-4 text-white flex items-center">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          onClick={handleClickMenu}
          className="cursor-pointer text-xl"
        />

        {isOpen && (
          <span
            className="ml-4 font-bold text-lg cursor-pointer"
            onClick={handleClickSpan}
          >
            Abrir modal
          </span>
        )}
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4">Modal aberto!</h2>
            <p>Escolha a tela de fundo</p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <img
                src={img1}
                onClick={() => handlerBackground(img1)}
                className="cursor-pointer rounded"
                loading="lazy"
              />
              <img
                src={img2}
                onClick={() => handlerBackground(img2)}
                className="cursor-pointer rounded"
                loading="lazy"
              />
              <img
                src={img3}
                onClick={() => handlerBackground(img3)}
                className="cursor-pointer rounded"
                loading="lazy"
              />
              <img
                src={img4}
                onClick={() => handlerBackground(img4)}
                className="cursor-pointer rounded"
                loading="lazy"
              />
              <img
                src={img5}
                onClick={() => handlerBackground(img5)}
                className="cursor-pointer rounded"
                loading="lazy"
              />
              <div
                className="bg-black"
                onClick={() => handlerBackground("bg-black")}
              ></div>
            </div>

            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
