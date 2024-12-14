// Separate file for category-related constants and utilities
export const PLANT_CATEGORIES = {
  LARGE: 'Large Plants',
  AIR_PURIFYING: 'Air Purifying',
  HANGING: 'Hanging Plants',
} as const;

export type PlantCategory = typeof PLANT_CATEGORIES[keyof typeof PLANT_CATEGORIES];

export const getCategoryPlants = (plants: Plant[], category: PlantCategory) => {
  return plants.filter((plant) => plant.category === category);
};