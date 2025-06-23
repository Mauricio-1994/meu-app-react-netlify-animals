import React, { useState } from 'react';

// Dados dos animais do Parque Ecológico Danilo Marques Moura
// Você pode expandir ou substituir estes dados com as informações reais dos animais.
const animalData = [
  {
    id: 1,
    commonName: "Macaco-prego",
    scientificName: "Sapajus apella",
    imageUrl: "https://placehold.co/400x300/5E81AC/000000?text=Macaco-Prego", // [Image of Macaco-prego]
    habits: "Arborícola, vive em grupos sociais grandes. Diurno e ativo.",
    lifeExpectancy: "Cerca de 15 a 25 anos na natureza.",
    diet: "Onívora, comendo frutas, insetos, pequenos vertebrados e ovos. Usa ferramentas.",
    distribution: "América do Sul, em florestas tropicais e subtropicais.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+macaco+prego" // Exemplo de link para som/vídeo
  },
  {
    id: 2,
    commonName: "Quati",
    scientificName: "Nasua nasua",
    imageUrl: "https://placehold.co/400x300/B48EAD/000000?text=Quati", // [Image of Quati]
    habits: "Diurno, vive em grupos sociais (fêmeas e filhotes) ou solitário (machos).",
    lifeExpectancy: "Até 10 anos na natureza.",
    diet: "Onívora, comendo frutas, insetos, ovos, pequenos vertebrados e raízes.",
    distribution: "América do Sul, Central e parte da América do Norte, em florestas e áreas arborizadas.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+quati" // Exemplo de link para som/vídeo
  },
  {
    id: 3,
    commonName: "Tamanduá-Mirim", // Alterado de "Tamanduá"
    scientificName: "Tamandua tetradactyla", // Atualizado para Tamanduá-Mirim
    imageUrl: "https://placehold.co/400x300/BF616A/000000?text=Tamandu%C3%A1-Mirim", // [Image of Tamanduá-Mirim]
    habits: "Solitário e terrestre, com hábitos diurnos ou noturnos dependendo da temperatura.",
    lifeExpectancy: "Até 15 anos na natureza, mais em cativeiro.",
    diet: "Mirmecófago, alimentando-se exclusivamente de formigas e cupins.",
    distribution: "América Central e do Sul, em savanas, florestas e campos.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+tamandu%C3%A1-mirim" // Exemplo de link para som/vídeo
  },
  {
    id: 4,
    commonName: "Teiú", // Alterado de "Lagarto (teiú)"
    scientificName: "Salvator merianae",
    imageUrl: "https://placehold.co/400x300/EBCB8B/000000?text=Tei%C3%BA", // [Image of Teiú]
    habits: "Diurno e terrestre, muito ativo na busca por alimento. Escala árvores e nada bem.",
    lifeExpectancy: "Até 20 anos em cativeiro, menos na natureza.",
    diet: "Onívora, alimentando-se de insetos, ovos, pequenos roedores, frutas e vegetais.",
    distribution: "América do Sul, em campos, cerrados e áreas de floresta aberta.",
    learnMoreLink: "https://www.youtube.com/results?search_query=tei%C3%BA" // Exemplo de link para som/vídeo
  },
  {
    id: 5,
    commonName: "Cutia", 
    scientificName: "Dasyprocta leporina", 
    imageUrl: "https://placehold.co/400x300/B48EAD/000000?text=Cutia", // [Image of Cutia]
    habits: "Diurna e terrestre, vive em tocas. Esconde sementes para consumir depois.",
    lifeExpectancy: "Cerca de 10 a 15 anos em cativeiro, menos na natureza.",
    diet: "Herbívora, alimentando-se de sementes, frutas e folhas.",
    distribution: "América Central e do Sul, em florestas e áreas arborizadas.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+cutia" // Exemplo de link para som/vídeo
  },
  {
    id: 6,
    commonName: "Tartaruga",
    scientificName: "Chelonia mydas", 
    imageUrl: "https://placehold.co/400x300/81A1C1/000000?text=Tartaruga", // [Image of Tartaruga]
    habits: "Aquática ou terrestre, depende da espécie. Podem ser solitárias ou viver em grupos.",
    lifeExpectancy: "Variável, pode ser dezenas ou centenas de anos dependendo da espécie.",
    diet: "Variável, herbívora, carnívora ou onívora dependendo da espécie.",
    distribution: "Global, em ambientes aquáticos e terrestres.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+tartaruga" // Exemplo de link para som/vídeo
  },
  {
    id: 7,
    commonName: "Tatu-galinha", // Alterado de "tatu"
    scientificName: "Dasypus novemcinctus", 
    imageUrl: "https://placehold.co/400x300/A3BE8C/000000?text=Tatu-Galinha", // [Image of Tatu-galinha]
    habits: "Noturno, constrói tocas, solitário. Possui carapaça protetora.",
    lifeExpectancy: "Cerca de 10 a 15 anos na natureza.",
    diet: "Onívora, comendo insetos, larvas, pequenos vertebrados, ovos e algumas plantas.",
    distribution: "Américas, em diversos biomas como florestas, cerrados e campos.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+tatu-galinha" // Exemplo de link para som/vídeo
  },
  {
    id: 8,
    commonName: "Jararaca",
    scientificName: "Bothrops jararaca",
    imageUrl: "https://placehold.co/400x300/D8DEE9/000000?text=Jararaca", // [Image of Jararaca]
    habits: "Noturna, terrestre, peçonhenta. Prefere áreas úmidas e com vegetação densa.",
    lifeExpectancy: "Cerca de 10 a 15 anos.",
    diet: "Carnívora, alimentando-se de roedores, anfíbios e outras serpentes.",
    distribution: "Brasil (especialmente Mata Atlântica), Argentina, Paraguai.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+jararaca" // Exemplo de link para som/vídeo
  },
  {
    id: 9,
    commonName: "Coral",
    scientificName: "Micrurus corallinus", 
    imageUrl: "https://placehold.co/400x300/BF616A/000000?text=Cobra+Coral", // [Image of Coral]
    habits: "Noturna, terrestre e fossorial (vive em tocas). Peçonhenta.",
    lifeExpectancy: "Cerca de 10 anos.",
    diet: "Carnívora, alimentando-se de outras cobras e lagartos.",
    distribution: "América do Sul, em florestas, cerrados e campos.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+cobra+coral" // Exemplo de link para som/vídeo
  },
  {
    id: 10,
    commonName: "PICA-PAU-DE-BANDA-BRANCA", // Alterado de "Pica-pau"
    scientificName: "Dryocopus lineatus", // Atualizado para Pica-pau-de-banda-branca
    imageUrl: "https://placehold.co/400x300/EBCB8B/000000?text=Pica-Pau-Banda-Branca", // [Image of PICA-PAU-DE-BANDA-BRANCA]
    habits: "Diurno, arborícola, usa o bico para perfurar madeira em busca de alimento.",
    lifeExpectancy: "Cerca de 5 a 10 anos.",
    diet: "Insetívoro, alimentando-se de larvas e insetos encontrados na madeira.",
    distribution: "Américas, em florestas, áreas arborizadas e até áreas urbanas.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+pica+pau+de+banda+branca" // Exemplo de link para som/vídeo
  },
  {
    id: 11,
    commonName: "Gralha-de-crista-negra", // Alterado de "Gralha de crista negra"
    scientificName: "Cyanocorax cristatellus",
    imageUrl: "https://placehold.co/400x300/B48EAD/000000?text=Gralha-Crista-Negra", // [Image of Gralha-de-crista-negra]
    habits: "Diurna, social, vive em bandos. Conhecida por sua vocalização alta e peculiar.",
    lifeExpectancy: "Cerca de 10 a 15 anos.",
    diet: "Onívora, alimentando-se de sementes, frutas, insetos e pequenos vertebrados.",
    distribution: "Centro-Oeste e Sudeste do Brasil, em cerrados e áreas com árvores esparsas.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+gralha-de-crista-negra" // Exemplo de link para som/vídeo
  },
  {
    id: 12,
    commonName: "Araçari-castanho", // Alterado de "Tucano (pequeno)"
    scientificName: "Pteroglossus castanotis", // Atualizado para Araçari-Castanho
    imageUrl: "https://placehold.co/400x300/81A1C1/000000?text=Ara%C3%A7ari-Castanho", // [Image of Araçari-castanho]
    habits: "Arborícola, vive em pares ou pequenos grupos. Se alimenta no topo das árvores.",
    lifeExpectancy: "Até 15 anos.",
    diet: "Onívora, comendo frutas, insetos, ovos de outras aves e pequenos vertebrados.",
    distribution: "América do Sul, em florestas tropicais e subtropicais.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+ara%C3%A7ari-castanho" // Exemplo de link para som/vídeo
  },
  {
    id: 13,
    commonName: "Gambá",
    scientificName: "Didelphis albiventris", 
    imageUrl: "https://placehold.co/400x300/5E81AC/000000?text=Gamb%C3%A1", // [Image of Gambá]
    habits: "Noturno e terrestre, onívoro. Conhecido por se fingir de morto quando ameaçado.",
    lifeExpectancy: "Cerca de 1 a 2 anos na natureza.",
    diet: "Onívora, comendo frutas, insetos, ovos, pequenos roedores e carniça.",
    distribution: "Américas, em diversos biomas e áreas urbanas.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+gamb%C3%A1" // Exemplo de link para som/vídeo
  },
  {
    id: 14,
    commonName: "Escorpião-amarelo", // Alterado de "Escorpião amarelo"
    scientificName: "Tityus serrulatus",
    imageUrl: "https://placehold.co/400x300/BEEB96/000000?text=Escorpi%C3%A3o-Amarelo", // [Image of Escorpião-amarelo]
    habits: "Noturno, vive em ambientes úmidos e escuros. Peçonhento.",
    lifeExpectancy: "Cerca de 3 a 7 anos.",
    diet: "Carnívora, alimentando-se principalmente de insetos como grilos e baratas.",
    distribution: "Espécie comum no Brasil, principalmente em áreas urbanas.",
    learnMoreLink: "https://www.youtube.com/results?search_query=escorpi%C3%A3o-amarelo" // Exemplo de link para som/vídeo
  },
  {
    id: 15,
    commonName: "Bem-te-vi",
    scientificName: "Pitangus sulphuratus",
    imageUrl: "https://placehold.co/400x300/8FBCBB/000000?text=Bem-te-vi", // [Image of Bem-te-vi]
    habits: "Diurno, vive em áreas abertas e urbanas. Conhecido por seu canto característico.",
    lifeExpectancy: "Cerca de 5 a 8 anos.",
    diet: "Onívora, alimentando-se de insetos, frutas, pequenos peixes e anfíbios.",
    distribution: "Américas, do sul dos EUA à Argentina.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+bem+te+vi" // Exemplo de link para som/vídeo
  },
  {
    id: 16,
    commonName: "Cigarra",
    scientificName: "Fidicina mannifera", 
    imageUrl: "https://placehold.co/400x300/C04000/FFFFFF?text=Cigarra", // [Image of Cigarra]
    habits: "Vivem parte da vida subterrânea e emergem para acasalar, produzindo som alto.",
    lifeExpectancy: "Varia de 2 a 17 anos (ciclo de vida total).",
    diet: "Herbívora, alimentando-se da seiva de árvores e plantas.",
    distribution: "Global, em regiões tropicais e temperadas.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+cigarra" // Exemplo de link para som/vídeo
  },
  {
    id: 17,
    commonName: "Saruê",
    scientificName: "Didelphis albiventris", 
    imageUrl: "https://placehold.co/400x300/6B4000/FFFFFF?text=Saru%C3%AA", // [Image of Saruê]
    habits: "Noturno e terrestre, onívoro. Conhecido por se fingir de morto quando ameaçado.",
    lifeExpectancy: "Cerca de 1 a 2 anos na natureza.",
    diet: "Onívora, comendo frutas, insetos, ovos, pequenos roedores e carniça.",
    distribution: "Américas, em diversos biomas e áreas urbanas.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+saru%C3%AA" // Exemplo de link para som/vídeo
  }
];

// Componente da Lista de Animais (página inicial do catálogo)
const AnimalList = ({ onSelectAnimal }) => {
  return (
    <div className="p-4 sm:p-8 bg-green-50 min-h-screen font-inter">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-8 rounded-lg p-4 bg-white shadow-md">
        Catálogo de Animais do Parque Ecológico Danilo Marques Moura
      </h1>

      {/* Grid responsivo: 2 colunas em telas pequenas, 3 em médias, 4 em grandes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animalData.map((animal) => (
          <div
            key={animal.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden transform hover:scale-105"
            onClick={() => onSelectAnimal(animal.id)}
          >
            <img
              src={animal.imageUrl}
              alt={animal.commonName}
              // Classes para miniaturas uniformes: largura total da coluna, altura fixa, corte de imagem
              className="w-full h-48 object-cover rounded-t-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/400x300/CCCCCC/666666?text=Imagem+Não+Disponível`;
              }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {animal.commonName}
              </h2>
              <p className="text-sm italic text-gray-600">
                {animal.scientificName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de Detalhes do Animal (página específica do animal)
const AnimalDetail = ({ animal, onBack }) => {
  if (!animal) {
    return (
      <div className="p-8 text-center text-gray-700">
        Animal não encontrado.
        <button
          onClick={onBack}
          className="mt-4 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors duration-300"
        >
          Voltar ao Catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-green-50 min-h-screen font-inter flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl w-full">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-400 transition-colors duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Voltar ao Catálogo
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
          {animal.commonName}
        </h1>
        <p className="text-lg italic text-gray-600 mb-6">
          {animal.scientificName}
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Contêiner da imagem na página de detalhes, centralizado e com tamanho uniforme */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={animal.imageUrl}
              alt={animal.commonName}
              // Altura fixa e object-cover para uniformidade e centralização
              className="w-full h-80 object-cover rounded-xl shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/CCCCCC/666666?text=Imagem+Não+Disponível`;
              }}
            />
          </div>
          <div className="md:w-1/2 text-gray-800 space-y-3">
            <p>
              <strong className="text-green-700">Hábitos:</strong>{" "}
              {animal.habits}
            </p>
            <p>
              <strong className="text-green-700">Expectativa de Vida:</strong>{" "}
              {animal.lifeExpectancy}
            </p>
            <p>
              <strong className="text-green-700">Alimentação:</strong>{" "}
              {animal.diet}
            </p>
            <p>
              <strong className="text-green-700">Distribuição Geográfica:</strong>{" "}
              {animal.distribution}
            </p>
            <a
              href={animal.learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Conheça este animal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Principal da Aplicação
function App() {
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);

  const handleSelectAnimal = (id) => {
    setSelectedAnimalId(id);
  };

  const handleBackToCatalog = () => {
    setSelectedAnimalId(null);
  };

  const selectedAnimal = animalData.find((animal) => animal.id === selectedAnimalId);

  return (
    <div>
      {/* Script para carregar o Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Configuração do Tailwind para usar a fonte Inter */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        `}
      </style>

      {selectedAnimalId ? (
        <AnimalDetail animal={selectedAnimal} onBack={handleBackToCatalog} />
      ) : (
        <AnimalList onSelectAnimal={handleSelectAnimal} />
      )}
    </div>
  );
}

export default App;

