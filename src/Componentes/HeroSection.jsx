import { Search } from "lucide-react"

    const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 border-b">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                ¿Por Qué usar <span className="bg-linear-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">React</span> en tus proyectos?
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Esta web es la respuesta, fue diseñada y desarrollada utilizando React y Tailwind CSS. <br/> Gracias a React, 
                toda la interfaz funciona de manera fluida, dinámica y sin recargas innecesarias, 
                mientras que Tailwind CSS aporta un diseño visual limpio, responsivo y adaptable a cualquier pantalla, 
                garantizando velocidad, orden y una navegación intuitiva para el usuario.
            </p>
            <div className="flex justify-center my-10">
                <a href="https://es.react.dev/" className="bg-linear-to-r from-cyan-300 to-cyan-600 py-3 px-4 mx-3 rounded-md ">React</a>
                <a href="https://tailwindcss.com/" className="border py-3 px-4 mx-3 rounded-md">TailwindCSS</a>
            </div>
        </div>
    )
    }

    export default HeroSection
