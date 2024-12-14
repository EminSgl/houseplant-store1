import React from 'react';
import { plants } from '../data/plants';
import { PLANT_CATEGORIES, getCategoryPlants } from '../data/categories';
import PlantCard from '../components/PlantCard';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Plants</h1>
      
      {Object.values(PLANT_CATEGORIES).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCategoryPlants(plants, category).map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}