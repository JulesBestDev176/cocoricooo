import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Poulet de Chair Premium', price: 15, image: 'POULET', category: 'Volaille' },
  { id: 2, name: 'Œufs de Consommation (x12)', price: 4, image: 'ŒUFS', category: 'Œufs' },
  { id: 3, name: 'Œufs Fécondés (x6)', price: 8, image: 'ŒUFS', category: 'Œufs' },
  { id: 4, name: 'Poussins (1 semaine)', price: 5, image: 'POUSSIN', category: 'Jeunes' },
  { id: 5, name: 'Coq Reproducteur', price: 25, image: 'COQ', category: 'Reproducteurs' },
  { id: 6, name: 'Poule Pondeuse', price: 18, image: 'POULE', category: 'Pondeuses' },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cocorico-black mb-12">Nos Produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;