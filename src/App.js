
import React, { useState, useEffect } from 'react';
import './App.css';

const animalData = [
  // Dados dos animais (resumo) - substitua pelo conteúdo completo real
  {
    id: 1,
    commonName: "Macaco-prego",
    scientificName: "Sapajus apella",
    imageUrl: "https://i.imgur.com/W7GArhD.jpeg",
    habits: "Animais inteligentes com hábitos diurnos e arborícolas.",
    lifeExpectancy: "50 anos",
    diet: "Frutos, insetos, sementes, entre outros.",
    distribution: "Sudeste do Brasil e nordeste da Argentina.",
    learnMoreLink: "https://www.youtube.com/watch?v=0HSqGn2RsxI"
  }
];

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
        {filteredAnimals.map((animal) => (
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
        ))}
      </div>
    </div>
  );
};

const AnimalDetail = ({ animal, onBack }) => (
  <div className="container">
    <button className="back-button" onClick={onBack}>← Voltar</button>
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
        <a href={animal.learnMoreLink} target="_blank" rel="noreferrer" className="learn-button">Conheça este animal</a>
      </div>
    </div>
  </div>
);

function App() {
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const selectedAnimal = animalData.find((animal) => animal.id === selectedAnimalId);

  return (
    <div className="app-bg">
      <div className="theme-toggle-wrapper">
        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
        </button>
      </div>
      {selectedAnimal ? (
        <AnimalDetail animal={selectedAnimal} onBack={() => setSelectedAnimalId(null)} />
      ) : (
        <AnimalList onSelectAnimal={setSelectedAnimalId} />
      )}
    </div>
  );
}

export default App;
