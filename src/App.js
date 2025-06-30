// App.jsx (versão atualizada sem Tailwind)
import React, { useState } from 'react';
import './App.css';

const animalData = [ 
{
    id: 1,
    commonName: "Macaco-prego",
    scientificName: "Sapajus apella",
    imageUrl: "https://i.imgur.com/W7GArhD.jpeg", // [Imagem de Macaco-prego]
    habits: "esses animais são conhecidos por sua inteligência e habilidades no uso de ferramentas. Possuem hábitos diurnos e preferem se movimentar pelas árvores, locomovendo-se com agilidade e usando sua cauda para se pendurar.",
    lifeExpectancy: "pode chegar a 50 anos.",
    diet: "são onívoros e têm uma dieta variada incluindo frutos, insetos, brotos, flores, sementes e pequenos vertebrados.",
    distribution: "Mata Atlântica do sudeste do Brasil e nordeste da Argentina.",
    learnMoreLink: "https://www.youtube.com/watch?v=0HSqGn2RsxI" // Exemplo de link para som/vídeo
  },
  {
    id: 2,
    commonName: "Quati-de-cauda-anelada",
    scientificName: "Nasua nasua",
    imageUrl: "https://i.imgur.com/uqhqLa8.jpeg", // [Imagem de Quati]
    habits: "vivem em grupos principalmente formados por fêmeas e filhotes e são animais de hábitos sociais e diurnos. Os machos adultos normalmente se juntam aos grupos apenas em época de reprodução. São ágeis, utilizam a cauda para equilíbrio e são capazes de se locomover tanto no solo quanto em árvores.",
    lifeExpectancy: "entre 7 a 8 anos na natureza, mas pode chegar a 15 anos em cativeiro.",
    diet: "são onívoros, com uma dieta variada que inclui insetos, pequenos animais, frutas e até mesmo restos de comida de origem humana.",
    distribution: "América do Sul",
    learnMoreLink: "https://www.youtube.com/watch?v=C7t4rrMrGbY" // Exemplo de link para som/vídeo
  },
  {
    id: 3,
    commonName: "Tamanduá-Mirim",
    scientificName: "Tamandua tetradactyla",
    imageUrl: "https://i.imgur.com/lAfsgnG.jpeg", // [Imagem de Tamanduá-Mirim]
    habits: "é um animal de hábitos solitários e predominantemente noturno, embora pssa ser visto durante o dia em áreas mais tranquilas ou em busca de alimento. Vivem tanto em árvores quanto no chão e utilizam tocos de árvores, cavidades naturais ou tocas de tatus para descansar.",
    lifeExpectancy: "em cativeiro pode chegar a 19 anos, enquanto na natureza a expectativa é entre 7 e 10 anos.",
    diet: "é insetívoro, ou seja, sua alimentação é baseada principalmente em formigas e cupins. Além disso, ele pode se alimentar de larvas de abelhas, cera e mel.",
    distribution: "possui uma ampla distribuição geográfica na América do Sul. No Brasil, ocorre em todos os biomas.",
    learnMoreLink: "https://www.youtube.com/watch?v=-l4pqUiXjnA" // Exemplo de link para som/vídeo
  },
  {
    id: 4,
    commonName: "Teiú",
    scientificName: "Tupinambis merianae",
    imageUrl: "https://i.imgur.com/xqBipVs.jpeg", // [Imagem de Teiú]
    habits: "é um lagarto com hábitos diurnos e terrestres, muitas vezes encontrado em áreas abertas, bordas da mata e até mesmo áreas urbanizadas. São conhecidos por se expor ao sol a fim de regularem a temperatura corporal. Buscam ativamente seu alimento, utilizando a língua bifurcada para captar odores do ambiente. ",
    lifeExpectancy: "entre 15 e 20 anos.",
    diet: "comem frutas, ovos, insetos, pequenos roedores e aves.",
    distribution: "ocorre em diversas regiões da América do Sul.",
    learnMoreLink: "https://www.youtube.com/watch?v=Cpyl4JVDvoE " // Exemplo de link para som/vídeo
  },
  {
    id: 5,
    commonName: "Cutia",
    scientificName: "Dasyprocta azarae",
    imageUrl: "https://i.imgur.com/H6U00xL.jpeg", // [Imagem de Cutia]
    habits: "são roedores de hábitos diurnos crepusculares. Vivem em pares ou pequenos grupos, são terrestres e usam tocas em áreas de mata e plantações. ",
    lifeExpectancy: "varia entre 10 a 20 anos.",
    diet: "são animais herbívoros, consumindo frutos, folhas, sementes, raízes e outras plantas. Elas auxiliam na dispersão de plantas na natureza, uma vez que possuem o hábito de enterrar frutos e sementes para o consumo futuro.",
    distribution: "presente em algumas regiões da América do Sul, incluindo o Brasil, Argentina, Paraguai e Bolívia. No Brasil pode ser encontrada principalmente nas regiões Centro-Oeste, Sul e Sudeste.",
    learnMoreLink: "https://www.youtube.com/watch?v=Ki9Fj6oq1yA" // Exemplo de link para som/vídeo
  },
  {
    id: 6,
    commonName: "Tatu-galinha",
    scientificName: "Dasypus novemcinctus",
    imageUrl: "https://i.imgur.com/0pgFurs.jpeg", // [Imagem de Tatu-galinha]
    habits: "terrestres, solitários e de hábitos crepusculares e noturnos. Habitam em tocas que eles mesmos cavam, sendo excelentes escavadores. Embora sejam mais ativos durante a noite, podem ser observados durante o dia (especialmente dias mais frios. Constroem tocas complexas com vários metros de extensão, que servem como refúgio e abrigo.",
    lifeExpectancy: "entre 12 e 15 anos.",
    diet: "embora frequentemente classificados como insetívoros, sua alimentação é mais ampla, consumindo também pequenos vertebrados, raízes, frutos e fungos, além de insetos e larvas.",
    distribution: "ocorrem desde o sul dos Estados Unidos até o norte da Argentina e Uruguai.",
    learnMoreLink: "https://www.youtube.com/watch?v=hvDU1Gc4Bgo" // Exemplo de link para som/vídeo
  },
  {
    id: 7,
    commonName: "Jararaca",
    scientificName: "Bothrops jararaca",
    imageUrl: "https://i.imgur.com/W95fk1k.jpeg", // [Imagem de Jararaca]
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
    imageUrl: "https://i.imgur.com/aiuvPL4.jpeg", // [Imagem de Coral]
    habits: "espécie noturna, geralmente se escondem sob rochas, em tocas ou túneis durante o dia e saem para caçar à noite (especialmente em noites mais frias). São cobras tímidas, que preferem evitar o contato com seres humanos, apesar disso, possuem um veneno neurotóxico perigoso.",
    lifeExpectancy: "não é precisamente definida, mas espécies similares podem viver entre 9 a 15 anos.",
    diet: "sua alimentação consiste principalmente de pequenos vertebrados como lagartos, pequenos roedores e outras cobras como dormideiras e cobras-d’água.",
    distribution: "América do Sul, em florestas, cerrados e campos.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+cobra+coral" // Exemplo de link para som/vídeo
  },
  {
    id: 9,
    commonName: "Pica-pau-de-banda-branca",
    scientificName: "Dryocopus lineatus",
    imageUrl: "https://i.imgur.com/Mp4yOOO.jpeg", // [Imagem de PICA-PAU-DE-BANDA-BRANCA]
    habits: "vivem solitários ou aos pares, principalmente em bordas de florestas e áreas com árvores esparsas. Sua principal atividade é a busca por alimento, que consiste de insetos e suas larvas, que ele encontra “martelando” troncos e galhos de árvores, tanto vivas quanto mortas, para chegar até os insetos.",
    lifeExpectancy: "aproximadamente entre 7 a 12 anos.",
    diet: "alimentam-se de insetos, larvas, sementes e frutos, mas principalmente dos insetos.",
    distribution: "abrange desde o México até o norte da Argentina e Trinidad, no Caribe. No Brasil, são encontrados em grande parte do território, incluindo a Amazônia, o Nordeste, o Centro-Oeste e o Sudeste, com exceção do Rio de Janeiro e Espírito Santo.",
    learnMoreLink: "https://www.youtube.com/watch?v=F_tByoug1Go" // Exemplo de link para som/vídeo
  },
  {
    id: 10,
    commonName: "Gralha-de-crista-negra",
    scientificName: "Cyanocorax chrysops",
    imageUrl: "https://i.imgur.com/uqBL9iI.jpeg", // [Imagem de Gralha-de-crista-negra]
    habits: "vive em bandos de 10 a 20 gralhas exceto em sua época de reprodução, quando se formam casais.  Um hábito interessante é que elas guardam pinhões enterrando-os no solo, o que contribui para a dispersão de sementes de araucária.",
    lifeExpectancy: "pode chegar a 37 anos.",
    diet: "é uma ave onívora, se alimenta de insetos, frutos, sementes, e pode comer ovos e filhotes de outras aves também.",
    distribution: "sua distribuição geográfica abrange o centro-sul da América do Sul, incluindo o Brasil, Argentina, Paraguai, Uruguai e Bolívia.",
    learnMoreLink: "https://www.youtube.com/watch?v=FKWmnuSvQ4c" // Exemplo de link para som/vídeo
  },
  {
    id: 11,
    commonName: "Araçari-castanho",
    scientificName: "Pteroglossus castanotis",
    imageUrl: "https://i.imgur.com/p9gwCkE.jpeg", // [Imagem de Araçari-castanho]
    habits: "é uma ave conhecida por sua plumagem colorida e bico grande. É um importante dispersor de sementes, auxiliando na regeneração das florestas. Vive em diversos tipos de matas e utiliza vocalizações para manter a união do grupo enquanto procura alimento. Vivem em pequenos grupos, voando em fila indiana através de clareiras na floresta.",
    lifeExpectancy: "aproximadamente 13 anos.",
    diet: "sua dieta se baseia principalmente em frutas. Além de frutos, ele também se alimenta de flores, néctar e, ocasionalmente, de pequenos animais como insetos, ovos e filhotes de outras aves.",
    distribution: "América do Sul, em florestas tropicais e subtropicais.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+ara%C3%A7ari-castanho" // Exemplo de link para som/vídeo
  },
  {
    id: 12,
    commonName: "Escorpião-amarelo",
    scientificName: "Tityus serrulatus",
    imageUrl: "https://i.imgur.com/fmaBxz3.jpeg", // [Imagem de Escorpião-amarelo]
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
    imageUrl: "https://i.imgur.com/cqvP17D.jpeg", // [Imagem de Bem-te-vi]
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
    imageUrl: "https://i.imgur.com/rRxBShF.jpeg", // [Imagem de Cigarra]
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
    imageUrl: "https://i.imgur.com/EMOAu07.jpeg", // [Imagem de Saruê]
    habits: "são seres de hábitos noturnos, adaptam-se bem a ambientes urbanos e são solitários. Quando se sentem ameaçados, podem emitir sons, mostrar os dentes e até mesmo se fingirem de mortos.",
    lifeExpectancy: "varia de 2 a 5 anos.",
    diet: "sua dieta inclui alimentos de origem vegetal bem como de origem animal, o que os torna onívoros. Comem insetos, aracnídeos, pequenos vertebrados como filhotes de cobras e aves, além de ovos e frutas. Devido a sua adaptabilidade, podem se alimentar de restos de comida dos humanos e até mesmo de carniça.",
    distribution: "são encontrados na argentina, Brasil e Paraguai.",
    learnMoreLink: "https://www.youtube.com/watch?v=fyYABLxZTJ8" // Exemplo de link para som/vídeo
  }
  ]; // Mantenha seus dados existentes aqui

const AnimalList = ({ onSelectAnimal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnimals = animalData.filter(animal =>
    animal.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Catálogo de Animais do Parque Ecológico</h1>
      <input
        type="text"
        placeholder="Pesquisar por nome comum ou científico..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <div key={animal.id} className="card" onClick={() => onSelectAnimal(animal.id)}>
              <img
                src={animal.imageUrl}
                alt={animal.commonName}
                className="card-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/300x200/CCCCCC/333333?text=Imagem+Não+Disponível";
                }}
              />
              <div className="card-info">
                <h2>{animal.commonName}</h2>
                <p><i>{animal.scientificName}</i></p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Nenhum animal encontrado com este termo de pesquisa.</p>
        )}
      </div>
    </div>
  );
};

const AnimalDetail = ({ animal, onBack }) => (
  <div className="container">
    <button className="back-button" onClick={onBack}>
      ← Voltar
    </button>
    <h1>{animal.commonName}</h1>
    <p><i>{animal.scientificName}</i></p>
    <div className="detail">
      <img
        src={animal.imageUrl}
        alt={animal.commonName}
        className="detail-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/600x400/CCCCCC/333333?text=Imagem+Não+Disponível";
        }}
      />
      <div className="detail-text">
        <p><strong>Hábitos:</strong> {animal.habits}</p>
        <p><strong>Expectativa de Vida:</strong> {animal.lifeExpectancy}</p>
        <p><strong>Alimentação:</strong> {animal.diet}</p>
        <p><strong>Distribuição:</strong> {animal.distribution}</p>
        <a href={animal.learnMoreLink} target="_blank" rel="noreferrer" className="learn-button">
          Conheça este animal
        </a>
      </div>
    </div>
  </div>
);

function App() {
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);
  const selectedAnimal = animalData.find((animal) => animal.id === selectedAnimalId);

  return (
    <div className="app-bg">
      {selectedAnimal ? (
        <AnimalDetail animal={selectedAnimal} onBack={() => setSelectedAnimalId(null)} />
      ) : (
        <AnimalList onSelectAnimal={setSelectedAnimalId} />
      )}
    </div>
  );
}

export default App;

