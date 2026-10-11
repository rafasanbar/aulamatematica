const Paralelepipedo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">📦</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Paralelepípedo
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Também conhecido como <strong>bloco retangular</strong>, é uma das formas mais comuns no nosso dia a dia!
          Caixas, livros e tijolos são exemplos de paralelepípedos.
        </p>
      </div>

      {/* Visual Representation */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎨 Representação Visual</h2>
        <div className="flex justify-center">
          <svg viewBox="0 0 400 300" className="w-full max-w-lg">
            {/* Back face */}
            <polygon points="120,80 320,80 320,220 120,220" fill="#93c5fd" stroke="#1e40af" strokeWidth="2" opacity="0.5" />
            {/* Bottom face */}
            <polygon points="80,120 280,120 320,220 120,220" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" opacity="0.7" />
            {/* Left face */}
            <polygon points="80,120 120,80 120,220 80,260" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" opacity="0.6" />
            {/* Front face */}
            <polygon points="80,120 280,120 280,260 80,260" fill="#93c5fd" stroke="#1e40af" strokeWidth="2" opacity="0.8" />
            {/* Top face */}
            <polygon points="80,120 120,80 320,80 280,120" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" opacity="0.9" />
            {/* Right face */}
            <polygon points="280,120 320,80 320,220 280,260" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" opacity="0.7" />

            {/* Vertices */}
            <circle cx="80" cy="120" r="5" fill="#dc2626" />
            <circle cx="280" cy="120" r="5" fill="#dc2626" />
            <circle cx="80" cy="260" r="5" fill="#dc2626" />
            <circle cx="280" cy="260" r="5" fill="#dc2626" />
            <circle cx="120" cy="80" r="5" fill="#dc2626" />
            <circle cx="320" cy="80" r="5" fill="#dc2626" />
            <circle cx="120" cy="220" r="5" fill="#dc2626" />
            <circle cx="320" cy="220" r="5" fill="#dc2626" />

            {/* Labels */}
            <text x="180" y="195" textAnchor="middle" className="text-sm" fill="#1e40af" fontWeight="bold">Largura (a)</text>
            <text x="300" y="160" textAnchor="middle" className="text-sm" fill="#1e40af" fontWeight="bold" transform="rotate(-70, 300, 160)">Altura (c)</text>
            <text x="100" y="105" textAnchor="middle" className="text-sm" fill="#1e40af" fontWeight="bold" transform="rotate(-30, 100, 105)">Prof. (b)</text>
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
                  <h3 className="font-bold text-red-700 text-lg">8 Vértices</h3>
                  <p className="text-red-600 text-sm">São os 8 "cantinhos" onde as arestas se encontram</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📏</span>
                <div>
                  <h3 className="font-bold text-blue-700 text-lg">12 Arestas</h3>
                  <p className="text-blue-600 text-sm">São as 12 linhas/bordas onde duas faces se encontram</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🟦</span>
                <div>
                  <h3 className="font-bold text-green-700 text-lg">6 Faces</h3>
                  <p className="text-green-600 text-sm">Todas as faces são retângulos (pares iguais)</p>
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
            O paralelepípedo tem 3 dimensões:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
              <span className="font-bold text-blue-700 text-xl">a</span>
              <span className="text-gray-700">= Largura (comprimento da frente)</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3">
              <span className="font-bold text-green-700 text-xl">b</span>
              <span className="text-gray-700">= Profundidade (comprimento de lado a lado)</span>
            </div>
            <div className="flex items-center gap-3 bg-purple-50 rounded-lg p-3">
              <span className="font-bold text-purple-700 text-xl">c</span>
              <span className="text-gray-700">= Altura (de cima a baixo)</span>
            </div>
          </div>
          <div className="mt-4 bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm">
              💡 <strong>Dica:</strong> Pense em uma caixa de sapatos! Ela tem comprimento, largura e altura.
            </p>
          </div>
        </div>
      </div>

      {/* Área Superficial */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🎨 Área Superficial (Área Externa)</h2>
        <p className="text-gray-600 mb-4">
          A área superficial é a soma das áreas de todas as 6 faces. Imagine que você quer embrulhar a caixa com papel de presente - a área superficial é quanto papel você precisa!
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Fórmula:</h3>
          <div className="text-center text-2xl font-mono font-bold text-blue-700 mb-4">
            A = 2(ab + ac + bc)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-blue-600">2 × (a × b)</span>
              <p className="text-gray-500 mt-1">Face de cima e de baixo</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-green-600">2 × (a × c)</span>
              <p className="text-gray-500 mt-1">Face da frente e de trás</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-purple-600">2 × (b × c)</span>
              <p className="text-gray-500 mt-1">Face da esquerda e da direita</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="font-bold text-green-800 mb-3">🧮 Exemplo:</h3>
          <p className="text-gray-700 mb-2">Se a = 4cm, b = 3cm, c = 2cm:</p>
          <p className="text-gray-700 font-mono">
            A = 2(4×3 + 4×2 + 3×2) = 2(12 + 8 + 6) = 2(26) = <strong className="text-green-700">52 cm²</strong>
          </p>
        </div>
      </div>

      {/* Volume */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">💧 Volume</h2>
        <p className="text-gray-600 mb-4">
          O volume é o espaço que o paralelepípedo ocupa por dentro. Pense em quantos cubinhos de 1cm cabem dentro da caixa!
        </p>
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Fórmula:</h3>
          <div className="text-center text-2xl font-mono font-bold text-green-700 mb-4">
            V = a × b × c
          </div>
          <p className="text-gray-600 text-center">
            Volume = Largura × Profundidade × Altura
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="font-bold text-green-800 mb-3">🧮 Exemplo:</h3>
          <p className="text-gray-700 mb-2">Se a = 4cm, b = 3cm, c = 2cm:</p>
          <p className="text-gray-700 font-mono">
            V = 4 × 3 × 2 = <strong className="text-green-700">24 cm³</strong>
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            💡 Isso significa que cabem 24 cubinhos de 1cm³ dentro dessa caixa!
          </p>
        </div>
      </div>

      {/* Curiosidades */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">🌟 Curiosidades</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">📦</span>
            <span>O cubo é um caso especial de paralelepípedo onde todas as faces são quadrados iguais!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🏠</span>
            <span>A maioria das casas e prédios tem formato de paralelepípedo - é fácil de construir!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">📱</span>
            <span>Seu celular, seu livro e sua mochila são exemplos de paralelepípedos!</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Paralelepipedo;
