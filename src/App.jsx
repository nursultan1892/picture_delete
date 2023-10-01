import React from "react";
import { albumData } from "./components/data";
import "./App.css";
import { Album } from "./components/album";
import { myPics } from "./components/localStore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: albumData,
      favPics: [],
    };
  }
  favorites = () => {
    console.log("favorites");
    this.setState({ data: [...this.state.favPics] });
  };
  renderFavPics = (picId, albumId) => {
    const favorites = [...this.state.data];
    const albumIndex = favorites.findIndex((album) => album.id === albumId);
    const selectedPic = favorites[albumIndex].pictures.filter(
      (picture) => picture.id === picId
    );
    favorites[albumIndex].pictures = selectedPic;

    this.setState({ favPics: favorites });
  };
  deletePicture = (picId, albumId) => {
    // const { data } = this.state;
    const newData = [...this.state.data];
    const albumIndex = newData.findIndex((album) => album.id === albumId);
    const filteredPictures = newData[albumIndex].pictures.filter(
      (pic) => pic.id !== picId
    );
    newData[albumIndex].pictures = filteredPictures;
    this.setState({ data: newData });
    // const newData = {
    //   ...this.state.data[albumIndex],
    //   pictures: filteredPictures,
    // };
    // const newState = data.map((album) => {
    //   if (album.id === albumId) {
    //     return newData;
    //   } else {
    //     return album;
    //   }
    // });
    //this.setState({ data: newState });
  };
  deleteAlbum = (albumId) => {
    const filteredAlbum = this.state.data.filter(
      (album, index) => album.id !== albumId
    );
    this.setState({ data: filteredAlbum });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <button onClick={() => this.favorites()}>Favorite Pictures</button>
        {data.map((album, index) => {
          return (
            <div key={index}>
              <Album
                albumId={album.id}
                album={album.pictures}
                albumIndex={index}
                albumTitle={album.albumName}
                albumDescription={album.description}
                deleteAlbum={this.deleteAlbum}
                deletePicture={this.deletePicture}
                renderFavPics={this.renderFavPics}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
