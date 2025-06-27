import React, { useState } from 'react';
import './App.css';

const animalData = [
  {
    id: 1,
    commonName: "Macaco-prego",
    scientificName: "Sapajus apella",
    imageUrl: "https://i.imgur.com/W7GArhD.jpeg",
    habits: "Esses animais são conhecidos por sua inteligência e habilidades no uso de ferramentas.",
    lifeExpectancy: "Pode chegar a 50 anos.",
    diet: "São onívoros, incluindo frutos, insetos, brotos, flores, sementes e pequenos vertebrados.",
    distribution: "Mata Atlântica do sudeste do Brasil e nordeste da Argentina.",
    learnMoreLink: "https://www.youtube.com/watch?v=0HSqGn2RsxI"
  },
  {
    id: 2,
    commonName: "Quati-de-cauda-anelada",
    scientificName: "Nasua nasua",
    imageUrl: "https://i.imgur.com/uqhqLa8.jpeg",
    habits: "Vivem em grupos formados por fêmeas e filhotes. Machos adultos se juntam apenas na reprodução.",
    lifeExpectancy: "Entre 7 e 15 anos.",
    diet: "Insetos, pequenos animais, frutas e restos humanos.",
    distribution: "América do Sul",
    learnMoreLink: "https://www.youtube.com/watch?v=C7t4rrMrGbY"
  },
  {
    id: 3,
    commonName: "Tamanduá-Mirim",
    scientificName: "Tamandua tetradactyla",
    imageUrl: "https://i.imgur.com/lAfsgnG.jpeg",
    habits: "Solitários, noturnos, vivem em árvores e tocas.",
    lifeExpectancy: "7 a 19 anos.",
    diet: "Insetívoro, come formigas, cupins, larvas e mel.",
    distribution: "Toda a América do Sul, incluindo todos os biomas do Brasil.",
    learnMoreLink: "https://www.youtube.com/watch?v=-l4pqUiXjnA"
  },
  {
    id: 4,
    commonName: "Teiú",
    scientificName: "Tupinambis merianae",
    imageUrl: "https://i.imgur.com/xqBipVs.jpeg",
    habits: "Diurno e terrestre, regula a temperatura ao sol.",
    lifeExpectancy: "15 a 20 anos.",
    diet: "Frutas, ovos, insetos, roedores e aves.",
    distribution: "América do Sul.",
    learnMoreLink: "https://www.youtube.com/watch?v=Cpyl4JVDvoE"
  },
  {
    id: 5,
    commonName: "Cutia",
    scientificName: "Dasyprocta azarae",
    imageUrl: "https://i.imgur.com/H6U00xL.jpeg",
    habits: "Diurnas, vivem em pares ou grupos, usam tocas.",
    lifeExpectancy: "10 a 20 anos.",
    diet: "Herbívoras, comem frutos, sementes, raízes e folhas.",
    distribution: "Brasil, Argentina, Paraguai e Bolívia.",
    learnMoreLink: "https://www.youtube.com/watch?v=Ki9Fj6oq1yA"
  },
  {
    id: 6,
    commonName: "Tatu-galinha",
    scientificName: "Dasypus novemcinctus",
    imageUrl: "https://i.imgur.com/0pgFurs.jpeg",
    habits: "Solitários, escavam tocas e são ativos à noite.",
    lifeExpectancy: "12 a 15 anos.",
    diet: "Insetos, pequenos vertebrados, raízes, frutos e fungos.",
    distribution: "Do sul dos EUA até Argentina.",
    learnMoreLink: "https://www.youtube.com/watch?v=hvDU1Gc4Bgo"
  },
  {
    id: 7,
    commonName: "Jararaca",
    scientificName: "Bothrops jararaca",
    imageUrl: "https://i.imgur.com/W95fk1k.jpeg",
    habits: "Terrestres, noturnas, defensivas se ameaçadas.",
    lifeExpectancy: "15 a 20 anos.",
    diet: "Carnívoras: anfíbios, artrópodes e mamíferos.",
    distribution: "Sul e sudeste do Brasil.",
    learnMoreLink: "https://www.youtube.com/watch?v=gvU3ffErS04"
  },
  {
    id: 8,
    commonName: "Coral",
    scientificName: "Aspidelaps lubricus",
    imageUrl: "https://i.imgur.com/aiuvPL4.jpeg",
    habits: "Noturnas, tímidas, se escondem durante o dia.",
    lifeExpectancy: "9 a 15 anos.",
    diet: "Lagartos, roedores e outras cobras.",
    distribution: "Florestas e campos da América do Sul.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+cobra+coral"
  },
  {
    id: 9,
    commonName: "Pica-pau-de-banda-branca",
    scientificName: "Dryocopus lineatus",
    imageUrl: "https://i.imgur.com/Mp4yOOO.jpeg",
    habits: "Martelam troncos para caçar insetos.",
    lifeExpectancy: "7 a 12 anos.",
    diet: "Insetos, larvas, sementes e frutos.",
    distribution: "Do México à Argentina, incluindo Amazônia e Sudeste do Brasil.",
    learnMoreLink: "https://www.youtube.com/watch?v=F_tByoug1Go"
  },
  {
    id: 10,
    commonName: "Gralha-de-crista-negra",
    scientificName: "Cyanocorax chrysops",
    imageUrl: "https://i.imgur.com/uqBL9iI.jpeg",
    habits: "Vivem em bandos, enterram sementes.",
    lifeExpectancy: "Até 37 anos.",
    diet: "Onívoras, comem de insetos a ovos.",
    distribution: "Centro-sul da América do Sul.",
    learnMoreLink: "https://www.youtube.com/watch?v=FKWmnuSvQ4c"
  },
  {
    id: 11,
    commonName: "Araçari-castanho",
    scientificName: "Pteroglossus castanotis",
    imageUrl: "https://i.imgur.com/p9gwCkE.jpeg",
    habits: "Vive em grupos e dispersa sementes.",
    lifeExpectancy: "13 anos.",
    diet: "Frutas, flores, insetos, ovos e filhotes.",
    distribution: "Florestas tropicais da América do Sul.",
    learnMoreLink: "https://www.youtube.com/results?search_query=som+ara%C3%A7ari-castanho"
  },
  {
    id: 12,
    commonName: "Escorpião-amarelo",
    scientificName: "Tityus serrulatus",
    imageUrl: "https://i.imgur.com/fmaBxz3.jpeg",
    habits: "Noturnos, escondem-se em locais úmidos.",
    lifeExpectancy: "4 a 5 anos.",
    diet: "Insetos como baratas.",
    distribution: "Todo o Brasil.",
    learnMoreLink: "https://www.youtube.com/watch?v=p2Yft42gihM"
  },
  {
    id: 13,
    commonName: "Bem-te-vi",
    scientificName: "Pitangus sulphuratus",
    imageUrl: "https://i.imgur.com/cqvP17D.jpeg",
    habits: "Defende o território com agressividade.",
    lifeExpectancy: "8 a 12 anos.",
    diet: "Insetos, frutas, ovos, pequenos peixes e roedores.",
    distribution: "América do Sul e Central.",
    learnMoreLink: "https://www.youtube.com/watch?v=UMAnr-1m-tY"
  },
  {
    id: 14,
    commonName: "Cigarra",
    scientificName: "Cicada orni",
    imageUrl: "https://i.imgur.com/rRxBShF.jpeg",
    habits: "Cantam durante o verão. Machos atraem fêmeas.",
    lifeExpectancy: "1 a 2 anos de vida, meses fora do solo.",
    diet: "Seiva de plantas.",
    distribution: "Regiões tropicais e subtropicais.",
    learnMoreLink: "https://www.youtube.com/watch?v=I9Qdm8jV8Sg"
  },
  {
    id: 15,
    commonName: "Saruê",
    scientificName: "Didelphis aurita",
    imageUrl: "https://i.imgur.com/EMOAu07.jpeg",
    habits: "Noturno, solitário e adapta-se a áreas urbanas.",
    lifeExpectancy: "2 a 5 anos.",
    diet: "Onívoro: insetos, frutas, ovos, restos e carniça.",
    distribution: "Brasil, Argentina e Paraguai.",
    learnMoreLink: "https://www.youtube.com/watch?v=fyYABLxZTJ8"
  }
];
const AnimalList = ({ onSelectAnimal }) => (
  <div className="catalog-container">
    <h1 className="catalog-title">Catálogo de Animais do Parque Ecológico</h1>
    <div className="animal-grid">
      {animalData.map((animal) => (
        <div
          key={animal.id}
          className="animal-card"
          onClick={() => onSelectAnimal(animal.id)}
        >
          <div className="image-container">
            <img
              src={animal.imageUrl}
              alt={animal.commonName}
              className="animal-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x300?text=Imagem+Não+Disponível";
              }}
            />
          </div>
          <div className="animal-info">
            <h2>{animal.commonName}</h2>
            <p><i>{animal.scientificName}</i></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AnimalDetail = ({ animal, onBack }) => (
  <div className="detail-container">
    <button onClick={onBack} className="back-button">← Voltar</button>
    <h1>{animal.commonName}</h1>
    <p><i>{animal.scientificName}</i></p>
    <div className="detail-content">
      <div className="detail-image-box">
        <img
          src={animal.imageUrl}
          alt={animal.commonName}
          className="detail-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400?text=Imagem+Não+Disponível";
          }}
        />
      </div>
      <div className="detail-info">
        <p><strong>Hábitos:</strong> {animal.habits}</p>
        <p><strong>Expectativa de Vida:</strong> {animal.lifeExpectancy}</p>
        <p><strong>Alimentação:</strong> {animal.diet}</p>
        <p><strong>Distribuição:</strong> {animal.distribution}</p>
        <a href={animal.learnMoreLink} target="_blank" rel="noreferrer">
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
    <div className="app">
      {selectedAnimal ? (
        <AnimalDetail animal={selectedAnimal} onBack={() => setSelectedAnimalId(null)} />
      ) : (
        <AnimalList onSelectAnimal={setSelectedAnimalId} />
      )}
    </div>
  );
}

export default App;

