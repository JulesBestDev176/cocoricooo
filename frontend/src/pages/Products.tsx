import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const [ageFilter, setAgeFilter] = useState('');
  
  const products = [
    { id: 1, name: 'Poussins 1 jour race Goliath', price: 700, image: 'POUSSIN', category: 'Poussins', age: '1jour' },
    { id: 2, name: 'Poussins 15 jours race Goliath', price: 1400, image: 'POUSSIN', category: 'Poussins', age: '15jours' },
    { id: 3, name: 'Poussins 1 mois race Goliath', price: 2000, image: 'POUSSIN', category: 'Poussins', age: '1mois' },
    { id: 4, name: 'Poulet de Chair 2 mois', price: 5000, image: 'POULET', category: 'Chair', age: '2mois' },
    { id: 5, name: 'Poulet de Chair 3 mois', price: 5500, image: 'POULET', category: 'Chair', age: '3mois' },
    { id: 6, name: 'Poulet Reproduction Préponte (4 mois)', price: 6000, image: 'POULET', category: 'Reproduction' },
    { id: 7, name: 'Œufs non fécondés pour consommation (tablette 30)', price: 2250, image: 'ŒUFS', category: 'Œufs', type: 'consommation' },
    { id: 8, name: 'Œufs fécondés (1 œuf)', price: 100, image: 'ŒUFS', category: 'Œufs', type: 'fecondes' },
  ];

  const categories = ['Tous', 'Poussins', 'Chair', 'Reproduction', 'Œufs'];
  
  const getFilteredProducts = () => {
    let filtered = filter === 'Tous' ? products : products.filter(p => p.category === filter);
    if (ageFilter) {
      if (filter === 'Œufs') {
        filtered = filtered.filter(p => p.type === ageFilter);
      } else {
        filtered = filtered.filter(p => p.age === ageFilter);
      }
    }
    return filtered;
  };
  
  const filteredProducts = getFilteredProducts();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Nos Produits</h1>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center space-x-2 bg-gray-100 p-1 rounded-lg">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setAgeFilter('');
                }}
                className={`px-4 py-2 rounded text-sm ${
                  filter === cat 
                    ? 'bg-cocorico-red text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Filtres secondaires */}
        {(filter === 'Poussins' || filter === 'Chair' || filter === 'Œufs') && (
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center space-x-2 bg-gray-50 p-1 rounded-lg">
              {filter === 'Poussins' && ['1jour', '15jours', '1mois'].map(age => (
                <button
                  key={age}
                  onClick={() => setAgeFilter(ageFilter === age ? '' : age)}
                  className={`px-3 py-1 rounded text-sm ${
                    ageFilter === age 
                      ? 'bg-cocorico-yellow text-gray-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {age === '1jour' ? '1 jour' : age === '15jours' ? '15 jours' : '1 mois'}
                </button>
              ))}
              {filter === 'Chair' && ['2mois', '3mois'].map(age => (
                <button
                  key={age}
                  onClick={() => setAgeFilter(ageFilter === age ? '' : age)}
                  className={`px-3 py-1 rounded text-sm ${
                    ageFilter === age 
                      ? 'bg-cocorico-yellow text-gray-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {age.replace('mois', ' mois')}
                </button>
              ))}
              {filter === 'Œufs' && [
                {key: 'consommation', label: 'Non fécondés'}, 
                {key: 'fecondes', label: 'Fécondés'}
              ].map(type => (
                <button
                  key={type.key}
                  onClick={() => setAgeFilter(ageFilter === type.key ? '' : type.key)}
                  className={`px-3 py-1 rounded text-sm ${
                    ageFilter === type.key 
                      ? 'bg-cocorico-yellow text-gray-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;