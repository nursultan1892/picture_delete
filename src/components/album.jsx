import App from "../App";
import { Pictures } from "./picture";

export const Album = ({
  album,
  albumIndex,
  albumTitle,
  albumDescription,
  deleteAlbum,
  albumId,
  deletePicture,
  renderFavPics,
}) => {
  return (
    <div>
      <h2>{albumTitle}</h2>
      <p>{albumDescription}</p>
      <button onClick={() => deleteAlbum(albumId)}>Delete Album</button>
      <div className="pic-container">
        {album.map((pic, index) => {
          return (
            <div key={index}>
              <Pictures
                picId={pic.id}
                url={pic.url}
                picTitle={pic.title}
                albumId={albumId}
                deletePicture={deletePicture}
                renderFavPics={renderFavPics}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
