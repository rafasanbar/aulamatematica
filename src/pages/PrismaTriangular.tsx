import SceneViewer from '../components/SceneViewer';
import PrismaTriangular3D from '../components/PrismaTriangular3D';

const PrismaTriangular = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🔺</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
          Prisma Triangular
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Um prisma com <strong>bases triangulares</strong>! Pense em uma barraca de acampamento ou numa caixa de chocolate Toblerone!
        </p>
      </div>

      {/* Visual 3D Interativo */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">🎮 Modelo 3D Interativo</h2>
        <p className="text-center text-gray-600 mb-4">
          Arraste para rotacionar • Use o scroll para zoom • Observe as bases triangulares e faces retangulares
        </p>
        <div className="relative">
          <SceneViewer cameraPosition={[4, 3, 5]}>
            <PrismaTriangular3D />
          </SceneViewer>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span> Vértices (6)
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-800 rounded-full"></span> Arestas (9)
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-400 rounded-full opacity-50"></span> Faces (5)
          </span>
        </div>
      </div>

      {/* Properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Vértices e Arestas */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📍 Vértices e Arestas</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-red-700 text-lg">6 Vértices</h3>
                  <p className="text-red-600 text-sm">3 vértices na base de cima + 3 vértices na base de baixo</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📏</span>
                <div>
                  <h3 className="font-bold text-blue-700 text-lg">9 Arestas</h3>
                  <p className="text-blue-600 text-sm">3 arestas na base de cima + 3 arestas na base de baixo + 3 arestas laterais</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🟦</span>
                <div>
                  <h3 className="font-bold text-green-700 text-lg">5 Faces</h3>
                  <p className="text-green-600 text-sm">2 faces triangulares (bases) + 3 faces retangulares (laterais)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-yellow-50 rounded-xl p-4">
            <p className="text-yellow-800 text-sm">
              <strong>✅ Verificando Euler:</strong> V - A + F = 6 - 9 + 5 = <strong>2</strong> ✓
            </p>
          </div>
        </div>

        {/* Dimensões */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📐 Dimensões</h2>
          <p className="text-gray-600 mb-4">
            O prisma triangular precisa destas medidas:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
              <span className="font-bold text-blue-700 text-xl">b</span>
              <span className="text-gray-700">= Base do triângulo (lado do triângulo)</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3">
              <span className="font-bold text-green-700 text-xl">h<sub>t</sub></span>
              <span className="text-gray-700">= Altura do triângulo (da base ao topo do triângulo)</span>
            </div>
            <div className="flex items-center gap-3 bg-purple-50 rounded-lg p-3">
              <span className="font-bold text-purple-700 text-xl">H</span>
              <span className="text-gray-700">= Altura do prisma (comprimento de ponta a ponta)</span>
            </div>
          </div>
          <div className="mt-4 bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm">
              💡 <strong>Dica:</strong> Pense numa barraca de camping! O triângulo é a "porta" e a altura do prisma é o comprimento da barraca.
            </p>
          </div>
        </div>
      </div>

      {/* Área Superficial */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🎨 Área Superficial (Área Externa)</h2>
        <p className="text-gray-600 mb-4">
          A área superficial é a soma das áreas de todas as 5 faces: 2 triângulos (bases) + 3 retângulos (faces laterais).
        </p>
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Fórmula:</h3>
          <div className="text-center text-xl font-mono font-bold text-green-700 mb-4">
            A = 2 × (½ × b × h<sub>t</sub>) + Perímetro do triângulo × H
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-green-600">2 × (½ × b × h<sub>t</sub>)</span>
              <p className="text-gray-500 mt-1">Área das 2 bases triangulares</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-teal-600">P × H</span>
              <p className="text-gray-500 mt-1">Área das 3 faces laterais (perímetro × altura do prisma)</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="font-bold text-green-800 mb-3">🧮 Exemplo:</h3>
          <p className="text-gray-700 mb-2">Triângulo com base = 6cm, altura = 4cm, lados = 5cm cada. Altura do prisma = 10cm:</p>
          <p className="text-gray-700 font-mono text-sm">
            A = 2 × (½ × 6 × 4) + (5+5+6) × 10<br/>
            A = 2 × 12 + 16 × 10 = 24 + 160 = <strong className="text-green-700">184 cm²</strong>
          </p>
        </div>
      </div>

      {/* Volume */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">💧 Volume</h2>
        <p className="text-gray-600 mb-4">
          O volume do prisma é a área da base multiplicada pela altura do prisma. Pense em empilhar vários triângulos um sobre o outro!
        </p>
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Fórmula:</h3>
          <div className="text-center text-2xl font-mono font-bold text-green-700 mb-4">
            V = (½ × b × h<sub>t</sub>) × H
          </div>
          <p className="text-gray-600 text-center">
            Volume = Área do triângulo × Altura do prisma
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="font-bold text-green-800 mb-3">🧮 Exemplo:</h3>
          <p className="text-gray-700 mb-2">Base do triângulo = 6cm, altura do triângulo = 4cm, altura do prisma = 10cm:</p>
          <p className="text-gray-700 font-mono">
            V = (½ × 6 × 4) × 10 = 12 × 10 = <strong className="text-green-700">120 cm³</strong>
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            💡 A área do triângulo (12 cm²) é "esticada" por 10cm de comprimento!
          </p>
        </div>
      </div>

      {/* Curiosidades */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">🌟 Curiosidades</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">⛺</span>
            <span>Barracas de acampamento tradicionais têm o formato de um prisma triangular!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🍫</span>
            <span>A caixa do chocolate Toblerone é um prisma triangular!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🏛️</span>
            <span>Telhados de casas muitas vezes formam um prisma triangular!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎲</span>
            <span>Um dado de 4 lados (d4) tem formato de tetraedro, que é um tipo especial de prisma triangular!</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrismaTriangular;
