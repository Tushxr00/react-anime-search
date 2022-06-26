import { useEffect, useState } from "react";
import Container from "./assets/Container";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

const App = () => {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header />
      <Container>
        <SideBar topAnime={topAnime} />
        <MainContent />
      </Container>
    </div>
  );
};

export default App;

