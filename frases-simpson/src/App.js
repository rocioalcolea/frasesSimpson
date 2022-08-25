import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes?count=3"
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <Container>
      <Header />
      <Welcome reqApi={reqApi()} />
      <CharacterContainer characters={characters} />
    </Container>
  );
}

export default App;
