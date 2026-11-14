import Logo from '../Assets/Logo.png'
const SobreMi = () => {
   const namePage = "<LencDev/>"
  return (
        <div className="flex flex-col items-center mt-6 lg:mt-15 border-b">
          <img className="w-50 h-50 mb-20 rounded-full" src={Logo} alt="logo" />
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-linear-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">{namePage}</span>
            </h1>
            <div className="flex flex-col text-center md:text-left mt-5">
          <h2 className=" text-center text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Sobre <span className="text-cyan-400">mí</span>
          </h2>
          <h3 className="text-lg font-medium text-cyan-300 mb-4">
            Estudiante del 1er Año de la carrera:
            <br /> <span>
              Tecnico Superior en Analisis Funcional de Sistemas de Informacion
            </span>
          </h3>
          <h3 className="text-center">Instituto Superior del Prof. No. 62 - "Angella Cullen"</h3>
          <h5 className="text-center">Trabajo Final - Gestion de Software I</h5>
          </div>
            <div className="flex space-x-6 m-20">
                             <a href="https://www.linkedin.com/in/leonel-lencinas-345091278/" className='bg-gradient-to-r from-indigo-500 to-sky-500 py-2 px-3 rounded-md'>LinkedIn</a>
                        </div>
        </div>
  );
};

export default SobreMi;