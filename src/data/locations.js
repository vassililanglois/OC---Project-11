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
 * Filtre les logements par tag.
 * @param {string} tag - Le tag à rechercher.
 * @returns {Array} Liste des logements correspondant au tag.
 */
export const filterLocationsByTag = (tag) => {
  return locations.filter((location) => location.tags.includes(tag));
};
