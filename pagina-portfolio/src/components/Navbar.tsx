export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-black/30 backdrop-blur-md sticky top-0 z-50">
      <div className="text-lg font-bold">Mauro.dev</div>
      <div className="space-x-4 hidden md:flex">
        <a href="/" className="hover:underline">Inicio</a>
        <a href="/projects" className="hover:underline">Proyectos</a>
        <a href="/contact" className="hover:underline">Contacto</a>
      </div>
    </nav>
  )
}
