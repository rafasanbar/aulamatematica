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

      {/* Visual Representation */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎨 Representação Visual</h2>
        <div className="flex justify-center">
          <svg viewBox="0 0 400 300" className="w-full max-w-lg">
            {/* Back triangle */}
            <polygon points="200,60 100,200 300,200" fill="#86efac" stroke="#166534" strokeWidth="2" opacity="0.4" />
            {/* Left rectangular face */}
            <polygon points="160,90 60,230 100,200 200,60" fill="#4ade80" stroke="#166534" strokeWidth="2" opacity="0.6" />
            {/* Right rectangular face */}
            <polygon points="240,90 340,230 300,200 200,60" fill="#22c55e" stroke="#166534" strokeWidth="2" opacity="0.7" />
            {/* Bottom rectangular face */}
            <polygon points="60,230 340,230 300,200 100,200" fill="#16a34a" stroke="#166534" strokeWidth="2" opacity="0.5" />
            {/* Front triangle */}
            <polygon points="160,90 60,230 260,230" fill="#86efac" stroke="#166534" strokeWidth="2" opacity="0.8" />

            {/* Vertices */}
            <circle cx="160" cy="90" r="5" fill="#dc2626" />
            <circle cx="60" cy="230" r="5" fill="#dc2626" />
            <circle cx="260" cy="230" r="5" fill="#dc2626" />
            <circle cx="200" cy="60" r="5" fill="#dc2626" />
            <circle cx="100" cy="200" r="5" fill="#dc2626" />
            <circle cx="300" cy="200" r="5" fill="#dc2626" />

            {/* Labels */}
            <text x="160" y="250" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="12">Base (triângulo)</text>
            <text x="320" y="150" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="12" transform="rotate(-60, 320, 150)">h (altura)</text>
          </svg>
        </div>
        <p className="text-center text-gray-500 mt-4">
          <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2"></span>
          Os pontos vermelhos são os <strong>vértices</strong> (cantos da figura)
        </p>
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
