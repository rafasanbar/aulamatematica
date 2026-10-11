import SceneViewer from '../components/SceneViewer';
import Cilindro3D from '../components/Cilindro3D';

const Cilindro = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🥫</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">
          Cilindro
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Uma forma com <strong>duas bases circulares</strong> e uma superfície curva! Latas, tubos e copos são exemplos de cilindros.
        </p>
      </div>

      {/* Visual 3D Interativo */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">🎮 Modelo 3D Interativo</h2>
        <p className="text-center text-gray-600 mb-4">
          Arraste para rotacionar • Use o scroll para zoom • Observe o raio, altura e as bases circulares
        </p>
        <div className="relative">
          <SceneViewer cameraPosition={[4, 3, 5]}>
            <Cilindro3D />
          </SceneViewer>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span> Centros das bases
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span> Raio (r)
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-400 rounded-full opacity-50"></span> Superfície lateral
          </span>
        </div>
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <p className="text-amber-800 text-sm">
            ⚠️ O cilindro <strong>NÃO tem vértices</strong> (cantos) porque suas superfícies são curvas!
            Ele tem apenas <strong>2 arestas curvas</strong> (os contornos das bases) e <strong>3 faces</strong>.
          </p>
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
                  <h3 className="font-bold text-red-700 text-lg">0 Vértices</h3>
                  <p className="text-red-600 text-sm">O cilindro NÃO tem vértices! Não tem "cantinhos" porque tem superfícies curvas.</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📏</span>
                <div>
                  <h3 className="font-bold text-blue-700 text-lg">2 Arestas (curvas)</h3>
                  <p className="text-blue-600 text-sm">São os 2 contornos circulares onde a superfície lateral encontra as bases.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🟦</span>
                <div>
                  <h3 className="font-bold text-green-700 text-lg">3 Faces</h3>
                  <p className="text-green-600 text-sm">2 faces circulares (bases) + 1 face lateral curva</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-amber-800 text-sm">
              ⚠️ <strong>Atenção:</strong> O cilindro NÃO é um poliedro! A fórmula de Euler (V - A + F = 2) só vale para poliedros (figuras com faces planas).
            </p>
          </div>
        </div>

        {/* Dimensões */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📐 Dimensões</h2>
          <p className="text-gray-600 mb-4">
            O cilindro precisa de apenas 2 medidas:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-red-50 rounded-lg p-3">
              <span className="font-bold text-red-700 text-xl">r</span>
              <span className="text-gray-700">= Raio da base circular (metade do diâmetro)</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3">
              <span className="font-bold text-green-700 text-xl">h</span>
              <span className="text-gray-700">= Altura do cilindro (distância entre as duas bases)</span>
            </div>
          </div>
          <div className="mt-4 bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm">
              💡 <strong>Dica:</strong> Pense numa lata de refrigerante! O raio é a medida do centro até a borda, e a altura é de cima a baixo.
            </p>
          </div>
          <div className="mt-4 bg-purple-50 rounded-xl p-4">
            <p className="text-purple-700 text-sm">
              📝 <strong>Lembrete:</strong> O diâmetro (d) é o dobro do raio: d = 2r. O diâmetro é a medida que atravessa o círculo inteiro!
            </p>
          </div>
        </div>
      </div>

      {/* Área Superficial */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🎨 Área Superficial (Área Externa)</h2>
        <p className="text-gray-600 mb-4">
          A área superficial do cilindro tem duas partes: a área das duas bases circulares + a área da superfície lateral (que quando "desenrolada" vira um retângulo!).
        </p>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Fórmula:</h3>
          <div className="text-center text-2xl font-mono font-bold text-purple-700 mb-4">
            A = 2πr² + 2πrh
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-purple-600">2πr²</span>
              <p className="text-gray-500 mt-1">Área das 2 bases circulares (2 × π × raio²)</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="font-bold text-pink-600">2πrh</span>
              <p className="text-gray-500 mt-1">Área lateral (circunferência × altura)</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 mb-4">
          <h3 className="font-bold text-purple-800 mb-3">🔍 Entendendo a área lateral:</h3>
          <p className="text-gray-700 mb-2">
            Se você "descascar" o rótulo de uma lata e abri-lo, ele vira um RETÂNGULO!
          </p>
          <p className="text-gray-700">
            A largura desse retângulo é a <strong>circunferência do círculo</strong> (2πr) e a altura é a <strong>altura do cilindro</strong> (h).
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="font-bold text-green-800 mb-3">🧮 Exemplo:</h3>
          <p className="text-gray-700 mb-2">Se r = 3cm e h = 10cm (usando π ≈ 3,14):</p>
          <p className="text-gray-700 font-mono text-sm">
            A = 2 × 3,14 × 3² + 2 × 3,14 × 3 × 10<br/>
            A = 2 × 3,14 × 9 + 2 × 3,14 × 30<br/>
            A = 56,52 + 188,4 = <strong className="text-green-700">244,92 cm²</strong>
          </p>
        </div>
      </div>

      {/* Volume */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">💧 Volume</h2>
        <p className="text-gray-600 mb-4">
          O volume do cilindro é a área da base circular multiplicada pela altura. Pense em empilhar vários círculos fininhos um sobre o outro!
        </p>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Fórmula:</h3>
          <div className="text-center text-2xl font-mono font-bold text-purple-700 mb-4">
            V = πr²h
          </div>
          <p className="text-gray-600 text-center">
            Volume = Área da base circular × altura
          </p>
          <p className="text-gray-500 text-center text-sm mt-2">
            (π × raio × raio × altura)
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="font-bold text-green-800 mb-3">🧮 Exemplo:</h3>
          <p className="text-gray-700 mb-2">Se r = 3cm e h = 10cm (usando π ≈ 3,14):</p>
          <p className="text-gray-700 font-mono">
            V = 3,14 × 3² × 10 = 3,14 × 9 × 10 = <strong className="text-green-700">282,6 cm³</strong>
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            💡 Isso é aproximadamente 283ml - quase um copo de água!
          </p>
        </div>
      </div>

      {/* O que é Pi */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🥧 O que é o π (Pi)?</h2>
        <p className="text-gray-600 mb-4">
          O número <strong>π (pi)</strong> é um número especial que aparece sempre que temos círculos! Ele representa a relação entre o comprimento de um círculo e seu diâmetro.
        </p>
        <div className="bg-yellow-50 rounded-xl p-6 text-center">
          <div className="text-4xl font-mono font-bold text-yellow-700 mb-2">π ≈ 3,14159...</div>
          <p className="text-gray-600">
            Usamos <strong>3,14</strong> como valor aproximado nos cálculos do dia a dia.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-bold text-blue-700 mb-1">Circunferência</h4>
            <p className="text-gray-700 text-sm">O "contorno" do círculo = 2πr</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-bold text-green-700 mb-1">Área do círculo</h4>
            <p className="text-gray-700 text-sm">O espaço dentro do círculo = πr²</p>
          </div>
        </div>
      </div>

      {/* Curiosidades */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">🌟 Curiosidades</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🥫</span>
            <span>Uma lata de refrigerante típica tem raio de ~3,3cm e altura de ~12cm, comportando 350ml!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🪵</span>
            <span>Troncos de árvores são cilindros naturais! Por isso conseguimos calcular quanto madeira temos.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🏗️</span>
            <span>Colunas e pilares de construções são cilindros porque distribuem bem o peso!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎂</span>
            <span>Bolos redondos são cilindros! Agora você pode calcular quanto bolo cabe em cada forma!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🔵</span>
            <span>O cilindro é a ÚNICA forma desta lista que não é um poliedro (não tem faces planas).</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cilindro;
