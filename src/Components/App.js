import { useEffect, useRef, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import AddAlbumCard from "./AddAlbumCard";
import Cards from "../Components/Card";
// import UpdateAlbumCard from "./UpdateAlbumCard";
// import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [albums, setAlbums] = useState([]); // state to keep track of all the albums
  // const [updateAlbum, setUpdateAlbum] = useState({}); // state to keep track of the album to be updated
  const [searchTerm, setSearchTerm] = useState("");

  const id = useRef(0); /*returns a mutable ref object */

  useEffect(() => {
    const fetchAlbums = async () => {
      //Fetching a list of albums from an external API
      const albums = await fetch("https://api.npoint.io/20c1afef1661881ddc9c")
        .then((response) => response.json())
        .then((json) => json);
      console.log(albums.playerList);
      setAlbums(albums.playerList);
    };
    fetchAlbums();
  }, []); /* This effect runs only when the component is first mounted, ensuring that the component fetches the album data from the API only once during the initial render. */

  // Filter players based on search term
  const filteredPlayers = albums.filter((player) =>
    player.PFName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort players by value in ascending order
  const sortedPlayers = filteredPlayers.sort((a, b) => a.Value - b.Value);

  return (
    <>
      <div class="container">
        <div class="header">
          <div class="title">Search Using Tname or Fname</div>
        </div>
        <div class="" id="search-bar">
          <div class="icon">
            <i class="fa-solid fa-search"></i>
          </div>
          <div class="new-search-input">
            <form>
              <input
                type="text"
                placeholder="Search by player name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="card-container">
        {sortedPlayers.map((player, index) => (
          <Cards albums={albums} />
        ))}
      </div>
    </>
  );
};

export default App;
