import "../App.css";
export const Pictures = ({
  picId,
  albumId,
  url,
  picTitle,
  deletePicture,
  renderFavPics,
}) => {
  return (
    <div className="pics">
      <img src={url} />
      <h4>{picTitle}</h4>
      <button onClick={() => renderFavPics(picId, albumId)}>
        Add to Favorites
      </button>
      <button onClick={() => deletePicture(picId, albumId)}>
        Delete Picture
      </button>
    </div>
  );
};
