import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // controla o menu
  const [isModalOpen, setIsModalOpen] = useState(false); // controla o modal

  function handleClickMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleClickSpan() {
    setIsModalOpen(true); // abre o modal
  }

  function handleCloseModal() {
    setIsModalOpen(false); // fecha o modal
  }

  return (
    <>
      <nav className="bg-blue-600 p-4 text-white flex items-center">
        {/* Ícone que alterna */}
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          onClick={handleClickMenu}
          className="cursor-pointer text-xl"
        />

        {/* Só aparece quando isOpen for true */}
        {isOpen && (
          <span
            className="ml-4 font-bold text-lg cursor-pointer"
            onClick={handleClickSpan}
          >
            Abrir modal
          </span>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="inset-0 bg-black bg-opacity-50 flex justify-center items-center relative z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4">Modal aberto!</h2>
            <p>Você clicou no span!</p>
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
