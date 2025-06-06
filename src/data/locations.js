import locations from "./locations.json";

/**
 * Récupère tous les logements.
 * @returns {Array} Liste des logements.
 */
export const getAllLocations = () => locations;

/**
 * Récupère un logement par son ID.
 * @param {string} id - L'ID du logement.
 * @returns {Object|null} Le logement correspondant ou null s'il n'existe pas.
 */
export const getLocationById = (id) => {
  return locations.find((location) => location.id === id) || null;
};

/**
 * Récupère les images d'un logement par son ID.
 * @param {string} id - L'ID du logement.
 * @returns {Array|null} Liste des images correspondant à un logement ou null si l'ID n'existe pas.
 */
export const getPicturesById = (id) => {
  const location = locations.find((location) => location.id === id);
  return location ? location.pictures : null;
};
