import { Collaborations } from '../data/Collaborations';

const CollaborationsGallery = () => {
  // Import data
  const album = Collaborations;
  return (
    // Grid Container
    <div className="mb-10 grid grid-cols-2 lg:grid-cols-4">
      {/* Grid Item */}
      {album.map((item) => (
        <a href={item.url} target="_blank" rel="noreferrer">
          <img
            className="object-cover border w-full transition duration-300 hover:scale-[102%] hover:opacity-80"
            src={item.image}
            alt={item.alt}
          />
        </a>
      ))}
    </div>
  );
};

export default CollaborationsGallery;
