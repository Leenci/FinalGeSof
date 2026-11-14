const Footer = () => {
        const namePage = "<LencDev/>"
  return (
      <footer className=" text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Marca y Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="text-lg font-bold text-white tracking-wider">
            {namePage}
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <p className="text-xs">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <a href="https://www.linkedin.com/in/leonel-lencinas-345091278/"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
