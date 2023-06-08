import List from "../Components/SingleCard";
// import Navbar from "./Navbar";
// import IMAGES from "../players-images/index.js";
// import ImageCard from "./ImageCard";
import imageList from "../players-images";

const Cards = ({ albums }) => {
  //   const { playerList } = albums;
  //   const PFName, SkillsDesc

  console.log(albums);

  return (
    <>
      <div className="card-list">
        {/* {imageList.map((image) => (
        <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
      ))} */}

        {/* Render the List component for each album in the albums array*/}

        {Object.values(albums).map(function (item, key) {
          return (
            <div>
              <List item={item} key={key} />;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
