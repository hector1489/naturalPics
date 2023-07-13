import React, { useContext } from "react"
import DataContext from "../../context/my_context"
import Heart from "../Heart/Heart"
import "./galeria.css"

const Galeria = ({ favorites = false }) => {
  const { data, setData } = useContext(DataContext);

  /*al reinventar esta rueda ocupe el operador logico en Heart y Span,
  para que no se vean ya que favorites es "true".Pero corrio bien XD */
  const setFavorites = (liked) => {
    const updatedData = data.map((image) => {
      if (image.id === liked.id) {
        return {
          ...image,
          liked: !liked.liked,
        }
      }
      return image
    });
    setData(updatedData)
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {data
        .filter((image) => (favorites ? image.liked : true))
        .map((image) => (
          <div
            onClick={() => setFavorites(image)}
            key={image.id}
            className="foto"
            style={{ backgroundImage: `url(${image.src.tiny})` }}
          >
            {!favorites && <Heart filled={image.liked} />}
            {!favorites && <span>{image.alt}</span>}
          </div>
        ))}
    </div>
  );
};

export default Galeria
