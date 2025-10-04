import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 hover:shadow-md transition-shadow flex flex-col h-full">
      <Link to={`/produit/${product.id}`}>
        <div className="h-32 bg-gray-50 flex items-center justify-center text-sm font-medium text-gray-500 mb-4 cursor-pointer hover:bg-gray-100">
          {product.image}
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-1 hover:text-cocorico-red leading-tight">{product.name}</h3>
      </Link>
      <p className="text-sm text-gray-500 mb-3">{product.category}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold bg-cocorico-yellow text-gray-800 px-2 py-1 rounded">{product.price} FCFA</span>
        <Link to={`/produit/${product.id}`} className="bg-cocorico-red text-white px-3 py-1 rounded text-sm hover:bg-red-700">
          Voir détail
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;