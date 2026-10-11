import { Link } from 'react-router-dom';

const shapes = [
  {
    path: '/paralelepipedo',
    name: 'Paralelepípedo',
    emoji: '📦',
    color: 'from-blue-400 to-blue-600',
    description: 'Também chamado de bloco retangular. Tem 6 faces retangulares!',
    vertices: 8,
    arestas: 12,
  },
  {
    path: '/prisma-triangular',
    name: 'Prisma Triangular',
    emoji: '🔺',
    color: 'from-green-400 to-green-600',
    description: 'Tem bases triangulares e faces laterais retangulares.',
    vertices: 6,
    arestas: 9,
  },
  {
    path: '/prisma-retangular',
    name: 'Prisma Retangular',
    emoji: '📐',
    color: 'from-orange-400 to-orange-600',
    description: 'Um prisma com bases retangulares. Muito comum no dia a dia!',
    vertices: 8,
    arestas: 12,
  },
  {
    path: '/cilindro',
    name: 'Cilindro',
    emoji: '🥫',
    color: 'from-purple-400 to-purple-600',
    description: 'Tem duas bases circulares e uma superfície curva.',
    vertices: 0,
    arestas: 2,
  },
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 mb-6">
          Geometria em 3D
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
          Aprenda sobre as formas geométricas tridimensionais de forma divertida e interativa! 🎉
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Descubra vértices, arestas, áreas e volumes de cada figura geométrica.
        </p>
      </div>

      {/* Shapes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {shapes.map((shape) => (
          <Link
            key={shape.path}
            to={shape.path}
            className="group block"
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className={`h-3 bg-gradient-to-r ${shape.color}`}></div>
              <div className="p-8">
                <div className="text-5xl mb-4">{shape.emoji}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {shape.name}
                </h2>
                <p className="text-gray-600 mb-4">{shape.description}</p>
                <div className="flex gap-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {shape.vertices} vértices
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {shape.arestas} arestas
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📚 O que vamos aprender?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold text-gray-800 mb-2">Vértices</h3>
            <p className="text-gray-600 text-sm">São os "cantinhos" ou pontas da figura, onde as arestas se encontram.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">📏</div>
            <h3 className="font-bold text-gray-800 mb-2">Arestas</h3>
            <p className="text-gray-600 text-sm">São as linhas onde duas faces se encontram. São os "bordas" da figura.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold text-gray-800 mb-2">Área Superficial</h3>
            <p className="text-gray-600 text-sm">É a medida de toda a superfície externa da figura. Imagine embrulhar a forma com papel!</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">💧</div>
            <h3 className="font-bold text-gray-800 mb-2">Volume</h3>
            <p className="text-gray-600 text-sm">É o espaço que a figura ocupa. Pense em quanto líquido cabe dentro dela!</p>
          </div>
        </div>
      </div>

      {/* Euler Formula */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">🧮 Fórmula de Euler</h2>
        <p className="text-lg mb-4">Para qualquer poliedro (figura com faces planas), vale a fórmula:</p>
        <div className="bg-white/20 rounded-xl p-4 inline-block">
          <span className="text-3xl font-mono font-bold">V - A + F = 2</span>
        </div>
        <p className="mt-4 text-purple-100">
          V = Vértices, A = Arestas, F = Faces
        </p>
      </div>
    </div>
  );
};

export default Home;
