import { useEffect, useState } from "react";
import Container from "./assets/Container";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

const App = () => {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const data = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    ).then((res) => res.json());
    setTopAnime(data.top.slice(0, 10));
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  const fetchAnime = async (search) => {
    const data = await fetch(`https://api.jikan.moe/v3/top/anime/`);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // console.log(search);
    fetchAnime(search);
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <SideBar topAnime={topAnime} />
        <MainContent
          setSearch={setSearch}
          handleSearch={handleSearch}
          search={search}
          animeList={animeList}
        />
      </Container>
    </div>
  );
};

export default App;

