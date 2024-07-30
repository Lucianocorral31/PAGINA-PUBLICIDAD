'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FormularioFlotante from './FormularioPago'; // Ajusta la ruta según la ubicación real del componente FormularioFlotante

const ContadorRegresivo = () => {
    const [tiempo, setTiempo] = useState(2700); // 45 minutos en segundos

    useEffect(() => {
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
        <div className="flex items-center justify-between bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] p-4 rounded-lg shadow-lg space-x-6">
            <h2 className="text-2xl font-bold text-white transition-transform duration-300 cursor-default">
                ¡Aprovecha esta Oferta Única!
            </h2>
            <p className="text-3xl font-extrabold px-4 py-2 rounded-md bg-gradient-to-r from-[#ff6f91] to-[#f9d423] bg-clip-text text-transparent">
                Quedan: {formatearTiempo(tiempo)}
            </p>
        </div>
    );
};

const Header = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUser = JSON.parse(localStorage.getItem('currentUser'));
            setCurrentUser(storedUser);
        }
    }, []);

    return (
        <header className="bg-gray-900 text-white px-4 lg:px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-md">
            <Link href="/" className="flex items-center" prefetch={false}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="text-lg font-semibold ml-2">Cursos de Resina</span>
            </Link>
            <div className="flex gap-2">
                {currentUser ? (
                    <div className="flex items-center gap-2">
                        <span>Bienvenido, {currentUser.nombre}</span>
                    </div>
                ) : (
                    <>
                        {/* Aquí puedes agregar otros elementos si es necesario */}
                    </>
                )}
            </div>
            <ContadorRegresivo />
        </header>
    );
};

export default Header;
