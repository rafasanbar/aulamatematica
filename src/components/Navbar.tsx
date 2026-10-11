import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: '🏠 Início' },
    { path: '/paralelepipedo', label: '📦 Paralelepípedo' },
    { path: '/prisma-triangular', label: '🔺 Prisma Triangular' },
    { path: '/prisma-retangular', label: '📐 Prisma Retangular' },
    { path: '/cilindro', label: '🥫 Cilindro' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-purple-700">
            📐 Geo3D
          </Link>
          <div className="flex flex-wrap gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
