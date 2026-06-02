const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/70 backdrop-blur-md flex items-center justify-between px-10 z-50 border-b border-white/10">
      <h1 className="text-4xl font-black text-white">
        <span className="bg-gradient-to-b from-purple-400 to-indigo-900 bg-clip-text text-transparent">
          A
        </span>
        nkit
        <span className="text-blue-500">.</span>
      </h1>

      <ul className="flex gap-8 text-white font-medium">
        <li className="hover:text-blue-400 transition">
          <a href="#home">Home</a>
        </li>
        <li  className="hover:text-blue-400 transition">
          <a href="#about">

          About
          </a>
        </li>
        <li  className="hover:text-blue-400 transition">
          <a href="#skills">

          Skills
          </a>
        </li>
        <li  className="hover:text-blue-400 transition">
          <a href="#projects">

          Projects
          </a>
        </li>
        <li  className="hover:text-blue-400 transition">
          <a href="#contact">

          Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
