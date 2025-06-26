import React, { useState } from 'react';

// Dados dos animais do Parque Ecológico Danilo Marques Moura
// Você pode expandir ou substituir estes dados com as informações reais dos animais.
const animalData = [
  {
    id: 1,
    commonName: "Macaco-prego",
    scientificName: "Sapajus apella",
    imageUrl: "https://i.imgur.com/W7GArhD.jpeg", // [Image of Macaco-prego]
    habits: "esses animais são conhecidos por sua inteligência e habilidades no uso de ferramentas. Possuem hábitos diurnos e preferem se movimentar pelas árvores, locomovendo-se com agilidade e usando sua cauda para se pendurar.",
    lifeExpectancy: "pode chegar a 50 anos.",
    diet: "são onívoros e têm uma dieta variada incluindo frutos, insetos, brotos, flores, sementes e pequenos vertebrados.",
    distribution: "Mata Atlântica do sudeste do Brasil e nordeste da Argentina.",
    learnMoreLink: "https://www.youtube.com/watch?v=0HSqGn2RsxI" // Exemplo de link para som/vídeo
  },
  {
    id: 2,
    commonName: "Quati-de-cauda-anelada",
    scientificName: " Nasua nasua",
    imageUrl: "https://i.imgur.com/uqhqLa8.jpeg", // [Image of Quati]
    habits: "vivem em grupos principalmente formados por fêmeas e filhotes e são animais de hábitos sociais e diurnos. Os machos adultos normalmente se juntam aos grupos apenas em época de reprodução. São ágeis, utilizam a cauda para equilíbrio e são capazes de se locomover tanto no solo quanto em árvores.",
    lifeExpectancy: "entre 7 a 8 anos na natureza, mas pode chegar a 15 anos em cativeiro.",
    diet: "são onívoros, com uma dieta variada que inclui insetos, pequenos animais, frutas e até mesmo restos de comida de origem humana.",
    distribution: "América do Sul",
    learnMoreLink: "https://www.youtube.com/watch?v=C7t4rrMrGbY" // Exemplo de link para som/vídeo
  },
  {
    id: 3,
    commonName: "Tamanduá-Mirim", // Alterado de "Tamanduá"
    scientificName: "Tamandua tetradactyla", // Atualizado para Tamanduá-Mirim
    imageUrl: "https://i.imgur.com/lAfsgnG.jpeg", // [Image of Tamanduá-Mirim]
    habits: ": é um animal de hábitos solitários e predominantemente noturno, embora pssa ser visto durante o dia em áreas mais tranquilas ou em busca de alimento. Vivem tanto em árvores quanto no chão e utilizam tocos de árvores, cavidades naturais ou tocas de tatus para descansar.",
    lifeExpectancy: ": em cativeiro pode chegar a 19 anos, enquanto na natureza a expectativa é entre 7 e 10 anos.",
    diet: "é insetívoro, ou seja, sua alimentação é baseada principalmente em formigas e cupins. Além disso, ele pode se alimentar de larvas de abelhas, cera e mel.",
    distribution: "possui uma ampla distribuição geográfica na América do Sul. No Brasil, ocorre em todos os biomas.",
    learnMoreLink: "https://www.youtube.com/watch?v=-l4pqUiXjnA" // Exemplo de link para som/vídeo
  },
  {
    id: 4,
    commonName: "Teiú", // Alterado de "Lagarto (teiú)"
    scientificName: "Tupinambis merianae",
    imageUrl: "https://i.imgur.com/xqBipVs.jpeg", // [Image of Teiú]
    habits: "é um lagarto com hábitos diurnos e terrestres, muitas vezes encontrado em áreas abertas, bordas da mata e até mesmo áreas urbanizadas. São conhecidos por se expor ao sol afim de regularem a temperatura corporal. Buscam ativamente seu alimento, utilizando a língua bifurcada para captar odores do ambiente. ",
    lifeExpectancy: "entre 15 e 20 anos.",
    diet: "comem frutas, ovos, insetos, pequenos roedores e aves.",
    distribution: "ocorre em diversas regiões da América do Sul.",
    learnMoreLink: "https://www.youtube.com/watch?v=Cpyl4JVDvoE " // Exemplo de link para som/vídeo
  },
  {
    id: 5,
    commonName: "Cutia", 
    scientificName: "Dasyprocta azarae", 
    imageUrl: "https://i.imgur.com/H6U00xL.jpeg", // [Image of Cutia]
    habits: "são roedores de hábitos diurnos crepusculares. Vivem em pares ou pequenos grupos, são terrestres e usam tocas em áreas de mata e plantações. ",
    lifeExpectancy: " varia entre 10 a 20 anos.",
    diet: "são animais herbívoros, consumindo frutos, folhas, sementes, raízes e outras plantas. Elas auxiliam na dispersão de plantas na natureza, uma vez que possuem o hábito de enterrar frutos e sementes para o consumo futuro.",
    distribution: "presente em algumas regiões da América do Sul, incluindo o Brasil, Argentina, Paraguai e Bolívia. No Brasil pode ser encontrada principalmente nas regiões Centro-Oeste, Sul e Sudeste.",
    learnMoreLink: "https://www.youtube.com/watch?v=Ki9Fj6oq1yA" // Exemplo de link para som/vídeo
  },
  {
    id: 6,
    commonName: "Tatu-galinha", // Alterado de "tatu"
    scientificName: "Dasypus novemcinctus", 
    imageUrl: "https://i.imgur.com/0pgFurs.jpeg", // [Image of Tatu-galinha]
    habits: "terrestres, solitários e de hábitos crepusculares e noturnos. Habitam em tocas que eles mesmos cavam, sendo excelentes escavadores. Embora sejam mais ativos durante a noite, podem ser observados durante o dia (especialmente dias mais frios. Constroem tocas complexas com vários metros de extensão, que servem como refúgio e abrigo.",
    lifeExpectancy: "entre 12 e 15 anos.",
    diet: "embora frequentemente classificados como insetívoros, sua alimentação é mas ampla, consumindo também pequenos vertebrados, raízes, frutos e fungos, além de insetos e larvas.",
    distribution: "ocorrem desde o sul dos Estados Unidos até o norte da Argentina e Uruguai.",
    learnMoreLink: "https://www.youtube.com/watch?v=hvDU1Gc4Bgo" // Exemplo de link para som/vídeo
  },
  {
    id: 7,
    commonName: "Jararaca",
    scientificName: "Bothrops jararaca",
    imageUrl: "https://i.imgur.com/W95fk1k.jpeg", // [Image of Jararaca]
    habits: "serpente terrestre de hábitos crepusculares e noturnos. São mais ativas em estações chuvosas e geralmente tentam fugir quando são vistas, mas tendem a atacar se sentirem ameaçadas. Sua coloração e padrão a ajudam a se camuflar nas vegetações.",
    lifeExpectancy: "entre 15 a 20 anos.",
    diet: "são carnívoras e sua alimentação varia conforme a idade. Filhotes e jovens se alimentam principalmente de anfíbios e artrópodes (como lacraias). Já os adultos preferem pequenos mamíferos (como roedores).",
    distribution: "encontrada no sudeste e sul do Brasil, com ocorrências também em regiões próximas do Paraguai e Argentina. Dentro do Brasil podem ser encontradas desde o sul da Bahia até o Rio Grande do Sul.",
    learnMoreLink: "https://www.youtube.com/watch?v=gvU3ffErS04" // Exemplo de link para som/vídeo
  },
  {
    id: 8,
    commonName: "Coral",
    scientificName: "Aspidelaps lubricus", 
    imageUrl: "https://i.imgur.com/aiuvPL4.jpeg", // [Image of Coral]
    habits: "espécie noturna, geralmente se escondem sob rochas, em tocas ou túneis durante o dia e saem para caçar à noite (especialmente em noites mais frias). São cobras tímidas, que preferem evitar o contato com seres humanos, apesar disso, possuem um veneno neurotóxico perigoso.",
    lifeExpectancy: "não é precisamente definida, mas espécies similares podem viver entre 9 a 15 anos.",
    diet: "sua alimentação consiste principalmente de pequenos vertebrados como lagartos, pequenos roedores e outras cobras como dormideiras e cobras-d’água.",
    distribution: "América do Sul, em florestas, cerrados e campos.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+cobra+coral" // Exemplo de link para som/vídeo
  },
  {
    id: 9,
    commonName: "PICA-PAU-DE-BANDA-BRANCA", // Alterado de "Pica-pau"
    scientificName: "Dryocopus lineatus", // Atualizado para Pica-pau-de-banda-branca
    imageUrl: "https://i.imgur.com/Mp4yOOO.jpeg", // [Image of PICA-PAU-DE-BANDA-BRANCA]
    habits: "vivem solitários ou aos pares, principalmente em bordas de florestas e áreas com árvores esparsas. Sua principal atividade é a busca por alimento, que consiste de insetos e suas larvas, que ele encontra “martelando” troncos e galhos de árvores, tanto vivas quanto mortas, para chegar até os insetos.",
    lifeExpectancy: "aproximadamente entre 7 a 12 anos.",
    diet: "alimentam-se de insetos, larvas, sementes e frutos, mas principalmente dos insetos.",
    distribution: "abrange desde o México até o norte da Argentina e Trinidad, no Caribe. No Brasil, são encontrados em grande parte do território, incluindo a Amazônia, o Nordeste, o Centro-Oeste e o Sudeste, com exceção do Rio de Janeiro e Espírito Santo.",
    learnMoreLink: "https://www.youtube.com/watch?v=F_tByoug1Go" // Exemplo de link para som/vídeo
  },
  {
    id: 10,
    commonName: "Gralha-de-crista-negra", // Alterado de "Gralha de crista negra"
    scientificName: "Cyanocorax chrysops",
    imageUrl: "https://i.imgur.com/uqBL9iI.jpeg", // [Image of Gralha-de-crista-negra]
    habits: "vive em bandos de 10 a 20 gralhas exceto em sua época de reprodução, quando se formam casais.  Um hábito interessante é que elas guardam pinhões enterrando-os no solo, o que contribui para a dispersão de sementes de araucária.",
    lifeExpectancy: "pode chegar a 37 anos.",
    diet: "é uma ave onívora, se alimenta de insetos, frutos, sementes, e pode comer ovos e filhotes de outras aves também.",
    distribution: "sua distribuição geográfica abrange o centro-sul da América do Sul, incluindo o Brasil, Argentina, Paraguai, Uruguai e Bolívia.",
    learnMoreLink: "https://www.youtube.com/watch?v=FKWmnuSvQ4c" // Exemplo de link para som/vídeo
  },
  {
    id: 11,
    commonName: "Araçari-castanho", // Alterado de "Tucano (pequeno)"
    scientificName: "Pteroglossus castanotis", // Atualizado para Araçari-Castanho
    imageUrl: "https://i.imgur.com/p9gwCkE.jpeg", // [Image of Araçari-castanho]
    habits: "é uma ave conhecida por sua plumagem colorida e bico grande. É um importante dispersor de sementes, auxiliando na regeneração das florestas. Vive em diversos tipos de matas e utiliza vocalizações para manter a união do grupo enquanto procura alimento. Vivem em pequenos grupos, voando em fila indiana através de clareiras na floresta.",
    lifeExpectancy: " aproximadamente 13 anos.",
    diet: "sua dieta se baseia principalmente em frutas. Além de frutos, ele também se alimenta de flores, néctar e, ocasionalmente, de pequenos animais como insetos, ovos e filhotes de outras aves.",
    distribution: "América do Sul, em florestas tropicais e subtropicais.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+ara%C3%A7ari-castanho" // Exemplo de link para som/vídeo
  },
  {
    id: 12,
    commonName: "Escorpião-amarelo", // Alterado de "Escorpião amarelo"
    scientificName: "Tityus serrulatus",
    imageUrl: "https://i.imgur.com/fmaBxz3.jpeg", // [Image of Escorpião-amarelo]
    habits: "tem hábitos noturnos e se esconde em lugares úmidos e escuros. Geralmente adaptado a ambientes urbanos, tornando-se um problema de saúde pública em áreas com alta concentração populacional.",
    lifeExpectancy: "entre 4 a 5 anos.",
    diet: "alimenta-se principalmente de insetos como baratas e outros invertebrados.",
    distribution: "ocorrente no Brasil, sendo encontrado em todas as regiões do país.",
    learnMoreLink: "https://www.youtube.com/watch?v=p2Yft42gihM" // Exemplo de link para som/vídeo
  },
  {
    id: 13,
    commonName: "Bem-te-vi",
    scientificName: "Pitangus sulphuratus ",
    imageUrl: "https://i.imgur.com/cqvP17D.jpeg", // [Image of Bem-te-vi]
    habits: "é uma espécie agressiva e defende seu território com afinco, especialmente durante a época de reprodução, chegando a ameaçar aves de rapina como gaviões e urubus quando se aproximam. Geralmente é visto sozinho, em pares ou pequenos grupos, mas pode se juntar a bandos de outras aves que se alimentam de insetos.",
    lifeExpectancy: "varia entre 8 e 12 anos na natureza, mas pode viver mais em cativeiro.",
    diet: "é um pássaro insetívoro, mas também come frutas, ovos, girinos, peixes pequenos, minhocas e até pequenos roedores. Além de poder consumir crustáceos, flores e parasitas como carrapatos.",
    distribution: "ocorre desde o sul dos Estados Unidos até a Argentina. No Brasil é uma ave comum, uma vez que pode ser encontrada em todo o território.",
    learnMoreLink: "https://www.youtube.com/watch?v=UMAnr-1m-tY" // Exemplo de link para som/vídeo
  },
  {
    id: 14,
    commonName: "Cigarra",
    scientificName: "Cicada orni", 
    imageUrl: "https://i.imgur.com/rRxBShF.jpeg", // [Image of Cigarra]
    habits: "é um inseto que se caracteriza por seu canto alto e repetitivo durante o verão (especialmente em áreas com árvores). As fêmeas depositam seus ovos em fendas nos ramos das árvores. O Canto da cigarra é produzido pelos machos e é utilizado para atrair fêmeas.",
    lifeExpectancy: "no Brasil seu ciclo de vida dura um ou dois anos, sendo apenas dois ou três meses fora do solo.",
    diet: "se alimentam principalmente de seiva de plantas. Tanto as ninfas quanto os adultos se alimentam da seiva, mas em locais diferentes da planta.",
    distribution: "ocorrem em diversas regiões do mundo, com maior concentração em áreas tropicais e subtropicais.",
    learnMoreLink: "https://www.youtube.com/watch?v=I9Qdm8jV8Sg" // Exemplo de link para som/vídeo
  },
  {
    id: 15,
    commonName: "Saruê",
    scientificName: "Didelphis aurita", 
    imageUrl: "https://i.imgur.com/EMOAu07.jpeg", // [Image of Saruê]
    habits: "são seres de hábitos noturnos, adaptam-se bem a ambientes urbanos e são solitários. Quando se sentem ameaçados, podem emitir sons, mostrar os dentes e até mesmo se fingirem de mortos.",
    lifeExpectancy: "varia de 2 a 5 anos.",
    diet: "sua dieta inclui alimentos de origem vegetal bem como de origem animal, o que os torna onívoros. Comem insetos, aracnídeos, pequenos vertebrados como filhotes de cobras e aves, além de ovos e frutas. Devido a sua adaptabilidade, podem se alimentar de restos de comida dos humanos e até mesmo de carniça.",
    distribution: "são encontrados na argentina, Brasil e Paraguai.",
    learnMoreLink: "https://www.youtube.com/watch?v=fyYABLxZTJ8" // Exemplo de link para som/vídeo
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

