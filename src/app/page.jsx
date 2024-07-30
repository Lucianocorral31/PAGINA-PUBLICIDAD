'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import './globals.css';
import FormularioFlotante from '../components/FormularioPago';

const Component = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleAbrirFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleCloseFormulario = () => {
    setMostrarFormulario(false);
  };

  const ContadorRegresivo = () => {
    const [tiempo, setTiempo] = useState(2700); // 45 minutos en segundos

    React.useEffect(() => {
      const interval = setInterval(() => {
        setTiempo((prevTiempo) => {
          if (prevTiempo <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTiempo - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    const formatearTiempo = (segundos) => {
      const minutos = Math.floor(segundos / 60);
      const secs = segundos % 60;
      return `${minutos < 10 ? '0' : ''}${minutos}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
      <div className="max-w-xl mx-auto text-center space-y-10 bg-gradient-to-b from-black to-[#4b5563] p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-5xl font-extrabold text-white hover:text-gray-300 transition-colors duration-300">
          ¡No Te Pierdas Esta Oferta Exclusiva!
        </h2>
        <p className="text-3xl font-extrabold px-4 py-2 rounded-md bg-gradient-to-r from-[#ff6f91] to-[#f9d423] bg-clip-text text-transparent">
          Quedan: {formatearTiempo(tiempo)}
        </p>
        <p className="text-xl font-semibold text-white">
          Precio Especial: <span className="text-red-400 font-bold">$99</span>
        </p>
        <Button
          className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white py-4 px-8 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-[#34d399] hover:to-[#2563eb] transition-all duration-500 ease-in-out mt-6 transform hover:scale-110"
          onClick={handleAbrirFormulario}
        >
          Inscríbete Ahora
        </Button>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      {/* Sección 1: Título, texto y botón con video promocional */}
      <section className="bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] py-20 px-4 md:px-8 text-white mt-10 section1">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Descubre el Arte en cada Gota de Resina Epóxica</h1>
            <p className="text-lg mb-6">
              Nuestro programa te enseñará las habilidades más demandadas en el mercado laboral.
            </p>
            <Button
              className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white py-4 px-8 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-[#34d399] hover:to-[#2563eb] transition-all duration-500 ease-in-out mt-6 transform hover:scale-110"
              onClick={handleAbrirFormulario}
            >
              Inscríbete Ahora
            </Button>
          </div>
          <div className="mt-8 md:mt-0 md:ml-8">
            <div className="rounded-xl overflow-hidden">
              <img src="/favicon.ico" alt="Hero image" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        {mostrarFormulario && <FormularioFlotante onClose={handleCloseFormulario} />}
      </section>

      {/* Sección 2: Lo que aprenderás */}

      <section className="bg-gray-100 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contenedor de texto */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">Descubre lo que aprenderás</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sumérgete en el arte de cada gota de resina epoxi y descubre cómo transformar tu creatividad en obras únicas y duraderas.
            </p>
            {/* Lista de aprendizaje */}
            <ol className="mt-8 grid grid-cols-1 gap-6">
              <li className="learn-item flex items-start space-x-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-book-open'%3E%3Cpath d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'%3E%3C/path%3E%3Cpath d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'%3E%3C/path%3E%3C/svg%3E"
                  width={32}
                  height={32}
                  alt="Libro"
                  className="w-8 h-8 rounded-md flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mt-1">Introducción a la Resina Epóxica</h3>
                  <p className="text-gray-700">
                    Conoce las propiedades mecánicas y químicas de la resina epóxica y cómo utilizarla en tus proyectos.
                  </p>
                </div>
              </li>
              <li className="learn-item flex items-start space-x-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-feather'%3E%3Cpath d='M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z'%3E%3C/path%3E%3Cline x1='16' y1='8' x2='2' y2='22'%3E%3C/line%3E%3Cline x1='17.5' y1='15' x2='9' y2='15'%3E%3C/line%3E%3C/svg%3E"
                  width={32}
                  height={32}
                  alt="Pincel"
                  className="w-8 h-8 rounded-md flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mt-1">Técnicas de Mezcla y Aplicación</h3>
                  <p className="text-gray-700">
                    Aprende a mezclar la resina epóxica con precisión para lograr resultados óptimos en tus proyectos.
                  </p>
                </div>
              </li>
              <li className="learn-item flex items-start space-x-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-grid'%3E%3Crect x='3' y='3' width='7' height='7'%3E%3C/rect%3E%3Crect x='14' y='3' width='7' height='7'%3E%3C/rect%3E%3Crect x='14' y='14' width='7' height='7'%3E%3C/rect%3E%3Crect x='3' y='14' width='7' height='7'%3E%3C/rect%3E%3C/svg%3E"
                  width={32}
                  height={32}
                  alt="Carpeta"
                  className="w-8 h-8 rounded-md flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mt-1">Creación de Capas y Texturas</h3>
                  <p className="text-gray-700">
                    Aplica técnicas avanzadas para crear capas y texturas con resina epóxica en tus proyectos artísticos.
                  </p>
                </div>
              </li>
              <li className="learn-item flex items-start space-x-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-layers'%3E%3Cpolygon points='12 2 2 7 12 12 22 7 12 2'%3E%3C/polygon%3E%3Cpolyline points='2 17 12 22 22 17'%3E%3C/polyline%3E%3Cpolyline points='2 12 12 17 22 12'%3E%3C/polyline%3E%3C/svg%3E"
                  width={32}
                  height={32}
                  alt="Lápiz"
                  className="w-8 h-8 rounded-md flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mt-1">Proyectos Prácticos</h3>
                  <p className="text-gray-700">
                    Realiza proyectos prácticos que te ayudarán a consolidar tus habilidades con la resina epóxica.
                  </p>
                </div>
              </li>
              <li className="learn-item flex items-start space-x-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-navigation'%3E%3Cpolygon points='3 11 22 2 13 21 11 13 3 11'%3E%3C/polygon%3E%3C/svg%3E"
                  width={32}
                  height={32}
                  alt="Cohete"
                  className="w-8 h-8 rounded-md flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mt-1">Acabado y Presentación</h3>
                  <p className="text-gray-700">
                    Aprende técnicas avanzadas de acabado para presentar tus proyectos con profesionalismo y estilo.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          {/* Imagen destacada */}
          <div className="rounded-xl shadow-lg overflow-hidden">
            <img
              src="./images/si.jpg"
              alt="Hero image"
              className="block rounded-lg"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

        </div>
        {/* Botón de inscripción */}
        <div className="flex justify-center mt-12">
          <Button
            className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white py-4 px-8 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-[#34d399] hover:to-[#2563eb] transition-all duration-500 ease-in-out mt-6 transform hover:scale-110"
            onClick={() => handleAbrirFormulario()}
          >
            Inscríbete Ahora
          </Button>
        </div>
        {/* Formulario de pago flotante */}
        {mostrarFormulario && <FormularioFlotante onClose={handleCloseFormulario} />}
      </section>

      {/* Sección 3: Campos de aplicación */}

      <section className="bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] py-20 px-4 md:px-0 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center sm:text-5xl">Explora Nuestros Campos de Aplicación</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="w-full sm:w-80 bg-white shadow-xl rounded-xl overflow-hidden hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="./images/joyeria.jpg"
                alt="Joyería"
                className="object-cover w-full h-72 rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Joyería</h3>
                <p className="text-gray-700">La joyería de resina ofrece una plataforma creativa para diseñadores.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-80 bg-white shadow-xl rounded-xl overflow-hidden hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="./images/pisos.jpg"
                alt="Pisos"
                className="object-cover w-full h-72 rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Pisos</h3>
                <p className="text-gray-700">Los pisos de resina ofrecen durabilidad y belleza en cada aplicación.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-80 bg-white shadow-xl rounded-xl overflow-hidden hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="./images/pileta.jpg"
                alt="Piletas"
                className="object-cover w-full h-72 rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Piletas</h3>
                <p className="text-gray-700">Las piletas de resina transforman espacios acuáticos en áreas de relajación.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full sm:w-80 bg-white shadow-xl rounded-xl overflow-hidden hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="./images/madera.jpg"
                alt="Carpintería"
                className="object-cover w-full h-72 rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Carpintería</h3>
                <p className="text-gray-700">La carpintería de resina combina la tradición con la innovación moderna.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-full sm:w-80 bg-white shadow-xl rounded-xl overflow-hidden hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="./images/mixtas.jpg"
                alt="Técnicas Mixtas"
                className="object-cover w-full h-72 rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Técnicas Mixtas</h3>
                <p className="text-gray-700">Las técnicas mixtas de resina permiten a los artistas experimentar con creatividad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: De nuestros estudiantes */}
      <section className="bg-gray-100 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Historias de Éxito de Nuestros Estudiantes.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="/images/mujer.jpg"
                    width={80}
                    height={80}
                    alt="Avatar de María Gómez"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">María Gómez</h3>
                    <p className="text-gray-600 text-sm">Ingeniera en Sistemas</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Este programa me ayudó a mejorar mis habilidades de diseño y a conseguir mi primer trabajo en una agencia creativa."
                </p>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="/images/varon.jpg"
                    width={80}
                    height={80}
                    alt="Avatar de Juan Pérez"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Juan Pérez</h3>
                    <p className="text-gray-600 text-sm">Arquitecto</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Gracias a este programa, pude adquirir las habilidades necesarias para crear sitios web modernos y atractivos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Contador y precio especial */}
      <section className="section5 py-40 px-4 md:px-8 bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-black bg-clip-text ">
          ¡No dejes pasar Esta Oferta Imperdible!
        </h2>
        <ContadorRegresivo />
        <p className="mt-6 text-lg">¡Solo por tiempo limitado! Aprovecha el precio especial de $99.</p>
        {mostrarFormulario && <FormularioFlotante onClose={handleCloseFormulario} />}
      </section>
      <footer className="bg-gray-900 text-white px-4 lg:px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">&copy; 2024 Resina Corp. All rights reserved.</p>
        <p className="text-S mt-4 sm:mt-0">El curso ofrecido en este sitio web es propiedad total de www.sitioweb.com y por lo tanto no forma parte de Facebook y/o Google. De igual forma, Facebook y/o Google no respaldan nuestros cursos</p>
      </footer>
    </div>
  );
};

export default Component;
