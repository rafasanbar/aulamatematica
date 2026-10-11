import SceneViewer from '../components/SceneViewer';
import PrismaRetangular3D from '../components/PrismaRetangular3D';

const PrismaRetangular = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">📐</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-4">
          Prisma Retangular
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Um prisma com <strong>bases retangulares</strong>. É muito parecido com o paralelepípedo, mas aqui focamos na ideia de "prisma" - uma forma que se "estica" ao longo de um comprimento!
        </p>
      </div>

      {/* Visual 3D Interativo */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">🎮 Modelo 3D Interativo</h2>
        <p className="text-center text-gray-600 mb-4">
          Arraste para rotacionar • Use o scroll para zoom • Observe as dimensões e os vértices
        </p>
        <div className="relative">
          <SceneViewer cameraPosition={[5, 3.5, 5]}>
            <PrismaRetangular3D />
          </SceneViewer>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span> Vértices (8)
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-800 rounded-full"></span> Arestas (12)
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-400 rounded-full opacity-50"></span> Faces (6)
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
                  <h3 className="font-bold text-red-700 text-lg">8 Vértices</h3>
                  <p className="text-red-600 text-sm">4 vértices na base de cima + 4 vértices na base de baixo</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📏</span>
                <div>
                  <h3 className="font-bold text-blue-700 text-lg">12 Arestas</h3>
                  <p className="text-blue-600 text-sm">4 arestas na base de cima + 4 arestas na base de baixo + 4 arestas verticais</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🟦</span>
                <div>
                  <h3 className="font-bold text-green-700 text-lg">6 Faces</h3>
                  <p className="text-green-600 text-sm">2 faces retangulares (bases) + 4 faces retangulares (laterais)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-yellow-50 rounded-xl p-4">
            <p className="text-yellow-800 text-sm">
              <strong>✅ Verificando Euler:</strong> V - A + F = 8 - 12 + 6 = <strong>2</strong> ✓
            </p>
          </div>
        </div>

        {/* Dimensões */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📐 Dimensões</h2>
          <p className="text-gray-600 mb-4">
            O prisma retangular tem 3 dimensões:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
              <span className="font-bold text-blue-700 text-xl">c</span>
              <span className="text-gray-700">= Comprimento (a medida mais longa da base)</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3">
              <span className="font-bold text-green-700 text-xl">l</span>
              <span className="text-gray-700">= Largura (a medida mais curta da base)</span>
            </div>
            <div className="flex items-center gap-3 bg-purple-50 rounded-lg p-3">
              <span className="font-bold text-purple-700 text-xl">h</span>
              <span className="text-gray-700">= Altura (de cima a baixo)</span>
            </div>
          </div>
          <div className="mt-4 bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm">
              💡 <strong>Dica:</strong> Uma piscina, uma caixa de sapatos ou um aquário são prismas retangulares!
            </p>
          </div>
        </div>
      </div>

      {/* Área Superficial */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🎨 Área Superficial (Área Externa)</h2>
        <p className="text-gray-600 mb-4">
          A área superficial é a soma das áreas de todas as 6 faces retangulares. Cada par de faces opostas tem a mesma área!
        </p>
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Fórmula:</h3>
          <div className="text-center text-2xl font-mono font-bold text-orange-700 mb-4">
            A = 2(cl + ch + lh)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-orange-600">2 × (c × l)</span>
              <p className="text-gray-500 mt-1">Base de cima e de baixo</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-amber-600">2 × (c × h)</span>
              <p className="text-gray-500 mt-1">Face da frente e de trás</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-yellow-600">2 × (l × h)</span>
              <p className="text-gray-500 mt-1">Face da esquerda e da direita</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-xl p-6">
          <h3 className="font-bold text-orange-800 mb-3">🧮 Exemplo:</h3>
          <p className="text-gray-700 mb-2">Se c = 5cm, l = 3cm, h = 4cm:</p>
          <p className="text-gray-700 font-mono">
            A = 2(5×3 + 5×4 + 3×4) = 2(15 + 20 + 12) = 2(47) = <strong className="text-orange-700">94 cm²</strong>
          </p>
        </div>
      </div>

      {/* Volume */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">💧 Volume</h2>
        <p className="text-gray-600 mb-4">
          O volume é o espaço interno do prisma retangular. Multiplique as 3 dimensões!
        </p>
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Fórmula:</h3>
          <div className="text-center text-2xl font-mono font-bold text-orange-700 mb-4">
            V = c × l × h
          </div>
          <p className="text-gray-600 text-center">
            Volume = Comprimento × Largura × Altura
          </p>
          <p className="text-gray-500 text-center text-sm mt-2">
            Ou também: V = Área da base × altura = (c × l) × h
          </p>
        </div>
        <div className="bg-orange-50 rounded-xl p-6">
          <h3 className="font-bold text-orange-800 mb-3">🧮 Exemplo:</h3>
          <p className="text-gray-700 mb-2">Se c = 5cm, l = 3cm, h = 4cm:</p>
          <p className="text-gray-700 font-mono">
            V = 5 × 3 × 4 = <strong className="text-orange-700">60 cm³</strong>
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            💡 Cabem 60 cubinhos de 1cm³ dentro desse prisma!
          </p>
        </div>
      </div>

      {/* Diferença entre Paralelepípedo e Prisma Retangular */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🤔 Paralelepípedo vs Prisma Retangular</h2>
        <p className="text-gray-600 mb-4">
          Você pode estar se perguntando: "Mas não são a mesma coisa?" Na verdade, <strong>sim!</strong> O prisma retangular e o paralelepípedo são a mesma figura geométrica. A diferença está apenas no nome que usamos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="font-bold text-blue-700 mb-2">📦 Paralelepípedo</h3>
            <p className="text-gray-600 text-sm">Nome mais usado quando pensamos na forma como um "bloco" ou "caixa".</p>
          </div>
          <div className="bg-orange-50 rounded-xl p-4">
            <h3 className="font-bold text-orange-700 mb-2">📐 Prisma Retangular</h3>
            <p className="text-gray-600 text-sm">Nome mais usado quando queremos enfatizar que é um prisma com base retangular.</p>
          </div>
        </div>
      </div>

      {/* Curiosidades */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">🌟 Curiosidades</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🏊</span>
            <span>Piscinas olímpicas são prismas retangulares gigantes! Uma piscina olímpica tem 50m × 25m × 2m = 2.500.000 litros de água!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">📦</span>
            <span>Quase todas as caixas de embalagem são prismas retangulares porque são fáceis de empilhar e transportar.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🏢</span>
            <span>A maioria dos prédios comerciais são prismas retangulares - é a forma mais eficiente para construir andares!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🧊</span>
            <span>Se todas as medidas forem iguais (c = l = h), o prisma retangular vira um CUBO!</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrismaRetangular;
