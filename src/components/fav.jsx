// //=================App==================================================
// import React from "react";
// import { albumData } from "./components/data";
// import "./App.css";
// import { Album } from "./components/album";
// import { Header } from "./components/header";
// import { Favorite } from "./components/fav";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: albumData,
//       renderFavorite: false,
//     };
//   }
//   renderFavorite = () => {
//     this.setState((prevState) => {
//       return {
//         ...prevState,
//         data: !this.state.renderFavorite,
//       };
//     });
//   };
//   deleteAlbum = (albumId) => {
//     const deletedAlbum = this.state.data.filter(
//       (album) => album.id !== albumId
//     );
//     this.setState({ data: deletedAlbum });
//     console.log("working", albumId);
//   };
//   deletePicture = (albumId, id) => {
//     const albumIndex = this.state.data.findIndex(
//       (album) => album.id === albumId
//     );
//     const deletedPics = this.state.data[albumIndex].pictures.filter(
//       (pic) => pic.id !== id
//     );
//     const updatedState = {
//       ...this.state.data[albumIndex],
//       pictures: deletedPics,
//     };
//     const newState = this.state.data.map((album, index) => {
//       if (index === albumIndex) {
//         return updatedState;
//       } else {
//         return album;
//       }
//     });
//     this.setState({ data: newState });
//   };
//   render() {
//     const { data } = this.state;
//     const totalPics = data.reduce((accum, value) => {
//       accum += value.pictures.length;
//       return accum;
//     }, 0);
//     return (
//       <div className="App" key={data.id}>
//         <Header totalAlbums={data.length} key={data.id} totalPics={totalPics} />
//         {data.map((album) => {
//           return (
//             <div className="pic-container" key={album.id}>
//               <Album
//                 {...album}
//                 albumId={album.id}
//                 deleteAlbum={this.deleteAlbum}
//                 deletePicture={this.deletePicture}
//               />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
// export default App;
// //=========================Album====================================
// import { Picture } from "./picture";
// import "../App.css";

// export const Album = ({
//   albumName,
//   description,
//   albumId,
//   pictures,
//   deleteAlbum,
//   deletePicture,
// }) => {
//   return (
//     <div className="album">
//       <h2>{albumName}</h2>
//       <p>{description}</p>
//       <div className="wrapper">
//         {pictures.map((pic) => {
//           return (
//             <div className="Picture" key={pic.id}>
//               <Picture {...pic} deletePicture={deletePicture} />
//             </div>
//           );
//         })}
//       </div>
//       <button onClick={() => deleteAlbum(albumId)}>Delete Album</button>
//     </div>
//   );
// };

// //========================picture=====================================
// export const Picture = ({ albumId, id, url, title, deletePicture }) => {
//   return (
//     <div className="pic">
//       <img src={url} />
//       <p>{title}</p>
//       <button className="red" onClick={() => deletePicture(albumId, id)}>
//         Delete Picture
//       </button>
//     </div>
//   );
// };
