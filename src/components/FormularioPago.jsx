'use client';
import React, { useState } from 'react';

const FormularioFlotante = ({ onClose }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [metodoPago, setMetodoPago] = useState('paypal'); // Por defecto PayPal

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario si es necesario
    console.log("Formulario enviado", { nombre, correo, metodoPago });
    // Cerrar formulario después del envío
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-b from-black to-[#4b5563] shadow-lg rounded-lg overflow-hidden max-w-3xl w-full p-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-6">Elegí tu Método de Pago</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-lg">Nombre Completo</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border border-gray-300 rounded w-full p-4 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="correo" className="block text-lg">Correo Electrónico</label>
            <input
              id="correo"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="border border-gray-300 rounded w-full p-4 text-black"
              required
            />
          </div>
          <div className="flex justify-between mt-8">
            <div className="flex space-x-6 w-full">
              {/* Botones configurables */}
              <button className="bg-gray-300 hover:bg-gray-400 text-black py-4 px-8 rounded-full w-full">
                Botón 1
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-black py-4 px-8 rounded-full w-full">
                Botón 2
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-4 px-8 rounded-full shadow-md focus:outline-none"
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioFlotante;
