import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useScrollAnimations = (value: number) => {
  const { scrollY } = useScroll();

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Si la ventana es menor a 1024px, se considera móvil
    };

    // Escucha los cambios de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llama a handleResize al cargar el componente para establecer el estado inicial
    handleResize();

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animaciones comunes para pantallas grandes
  const textX = useTransform(scrollY, [0, value], [0, -100]); // Se mueve a la izquierda
  const textOpacity = useTransform(scrollY, [0, value], [1, 0]); // Se desvanece
  const imageX = useTransform(scrollY, [0, value], [0, 100]); // Se mueve a la derecha
  const imageOpacity = useTransform(scrollY, [0, value], [1, 0]); // Se desvanece

  // Animaciones para pantallas móviles
  const mobileTextY = useTransform(scrollY, [0, value], [0, -100]); // Se mueve hacia arriba en móvil
  const mobileImageY = useTransform(scrollY, [0, value], [0, -100]); // Se mueve hacia arriba en móvil

  // Devuelve las animaciones, aplicando las correctas según el tamaño de la pantalla
  return {
    textX: isMobile ? 0 : textX,
    textOpacity,
    imageX: isMobile ? 0 : imageX,
    imageOpacity,
    mobileTextY: isMobile ? mobileTextY : 0,
    mobileImageY: isMobile ? mobileImageY : 0,
  };
};
