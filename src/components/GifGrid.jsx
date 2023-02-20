import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h4>Cargando.....</h4>}
      <div className="card-grid">
        {images.map((image) => {
          return (
            <GifItem
              key={image.id}
              title={image.title}
              url={image.url}
            />
          );
        })}
      </div>
    </>
  );
};
