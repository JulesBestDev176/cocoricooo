import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { X } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [femaleCount, setFemaleCount] = useState(1);
  const [maleCount, setMaleCount] = useState(1);
  
  const products = [
    { 
      id: 1, 
      name: 'Poussins 1 jour race Goliath', 
      price: 700, 
      image: 'POUSSIN', 
      category: 'Poussins', 
      description: 'Poussins d\'un jour de race Goliath, locale améliorée, en parfaite santé et prêts pour l\'élevage.', 
      details: ['Race Goliath (locale améliorée)', 'Poussins d\'un jour', 'Excellente santé', 'Adaptés au climat local', 'Croissance rapide'],
      images: ['POUSSIN_1', 'POUSSIN_2', 'POUSSIN_3']
    },
    { 
      id: 2, 
      name: 'Poussins 15 jours race Goliath', 
      price: 1400, 
      image: 'POUSSIN', 
      category: 'Poussins', 
      description: 'Poussins de 15 jours race Goliath, déjà bien développés et robustes.', 
      details: ['Race Goliath', '15 jours d\'âge', 'Déjà sevrés', 'Bonne résistance', 'Croissance assurée'],
      images: ['POUSSIN_15J_1', 'POUSSIN_15J_2', 'POUSSIN_15J_3']
    },
    { 
      id: 3, 
      name: 'Poussins 1 mois race Goliath', 
      price: 2000, 
      image: 'POUSSIN', 
      category: 'Poussins', 
      description: 'Poussins d\'un mois race Goliath, bien développés et autonomes.', 
      details: ['Race Goliath', '1 mois d\'âge', 'Complètement autonomes', 'Très robustes', 'Prêts pour l\'engraissement'],
      images: ['POUSSIN_1M_1', 'POUSSIN_1M_2', 'POUSSIN_1M_3']
    },
    { 
      id: 4, 
      name: 'Poulet de Chair 2 mois', 
      price: 5000, 
      image: 'POULET', 
      category: 'Chair', 
      description: 'Poulets de chair de 2 mois, race Goliath, prêts pour la consommation.', 
      details: ['Race Goliath', '2 mois d\'âge', 'Poids optimal', 'Chair de qualité', 'Prêts à consommer'],
      images: ['POULET_2M_1', 'POULET_2M_2', 'POULET_2M_3']
    },
    { 
      id: 5, 
      name: 'Poulet de Chair 3 mois', 
      price: 5500, 
      image: 'POULET', 
      category: 'Chair', 
      description: 'Poulets de chair de 3 mois, race Goliath, excellente qualité de viande.', 
      details: ['Race Goliath', '3 mois d\'âge', 'Poids idéal', 'Chair tendre', 'Qualité premium'],
      images: ['POULET_3M_1', 'POULET_3M_2', 'POULET_3M_3']
    },
    { 
      id: 6, 
      name: 'Poulet Reproduction Préponte (4 mois)', 
      price: 6000, 
      femalePrice: 6000,
      malePrice: 8000,
      image: 'POULET', 
      category: 'Reproduction', 
      description: 'Poulets de reproduction en période de préponte, race Goliath, idéaux pour la reproduction.', 
      details: ['Race Goliath', '4 mois (préponte)', 'Reproducteurs sélectionnés', 'Excellente génétique', 'Femelles: 6000 FCFA - Mâles: 8000 FCFA'],
      images: ['REPRO_1', 'REPRO_2', 'REPRO_3']
    },
    { 
      id: 7, 
      name: 'Œufs non fécondés pour consommation (tablette 30)', 
      price: 2250, 
      image: 'ŒUFS', 
      category: 'Œufs', 
      description: 'Œufs frais non fécondés pour la consommation, poules race Goliath, vendus par tablette de 30.', 
      details: ['Race Goliath', 'Non fécondés', 'Tablette de 30 œufs', 'Frais du jour', 'Excellente qualité'],
      images: ['OEUFS_CONSO_1', 'OEUFS_CONSO_2', 'OEUFS_CONSO_3']
    },
    { 
      id: 8, 
      name: 'Œufs fécondés (1 œuf)', 
      price: 100, 
      image: 'ŒUFS', 
      category: 'Œufs', 
      description: 'Œufs fécondés race Goliath pour incubation, excellent taux d\'eclosion.', 
      details: ['Race Goliath', 'Fécondés', 'Prix unitaire', 'Taux d\'eclosion élevé', 'Idéal pour l\'incubation'],
      images: ['OEUFS_FEC_1', 'OEUFS_FEC_2', 'OEUFS_FEC_3']
    }
  ];
  
  const product = products.find(p => p.id === parseInt(id || '1')) || products[0];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <span className="text-4xl text-gray-500">{product.images[selectedImage]}</span>
            </div>
            
            {/* Sélecteur d'images */}
            <div className="flex gap-2 justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-xs transition-all ${
                    selectedImage === index 
                      ? 'ring-2 ring-cocorico-red bg-cocorico-yellow' 
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-cocorico-red text-sm mb-4">{product.category}</p>
            <div className="bg-cocorico-yellow text-gray-800 px-4 py-2 rounded inline-block text-2xl font-bold mb-6">
              {product.price} FCFA
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Caractéristiques</h3>
            <ul className="space-y-2 mb-8">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-cocorico-yellow rounded-full mr-3"></span>
                  <span className="text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-4">
              <button 
                onClick={() => setShowModal(true)}
                className="w-full bg-cocorico-red text-white py-3 rounded hover:bg-red-700 font-semibold"
              >
                Demander un devis
              </button>
              <button className="w-full border border-cocorico-red text-cocorico-red py-3 rounded hover:bg-cocorico-yellow font-semibold">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
        
        {/* Modal de devis */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Demander un devis</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">{product.name}</p>
                {product.category === 'Reproduction' ? (
                  <div>
                    <p className="text-sm font-bold text-cocorico-red">Femelles: {product.femalePrice} FCFA</p>
                    <p className="text-sm font-bold text-cocorico-red">Mâles: {product.malePrice} FCFA</p>
                  </div>
                ) : (
                  <p className="text-lg font-bold text-cocorico-red">{product.price} FCFA</p>
                )}
              </div>
              
              {product.category === 'Reproduction' ? (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Femelles (6000 FCFA)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={femaleCount}
                      onChange={(e) => setFemaleCount(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cocorico-red"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mâles (8000 FCFA)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={maleCount}
                      onChange={(e) => setMaleCount(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cocorico-red"
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantité
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cocorico-red"
                  />
                </div>
              )}
              
              <div className="mb-4 p-3 bg-cocorico-yellow rounded-lg">
                <p className="text-sm font-semibold text-gray-800">
                  Total estimé : {product.category === 'Reproduction' 
                    ? (femaleCount * (product.femalePrice || 6000)) + (maleCount * (product.malePrice || 8000))
                    : quantity * product.price} FCFA
                </p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button 
                  onClick={() => {
                    let message = `Bonjour Cocoricooo,\n\nJe souhaite demander un devis pour :\n\n`;
                    message += `Produit : ${product.name}\n`;
                    message += `Prix unitaire : ${product.price} FCFA\n`;
                    
                    if (product.category === 'Reproduction') {
                      message += `Quantité : ${femaleCount} femelles (6000 FCFA) + ${maleCount} mâles (8000 FCFA)\n`;
                      message += `Total estimé : ${(femaleCount * (product.femalePrice || 6000)) + (maleCount * (product.malePrice || 8000))} FCFA\n`;
                    } else {
                      message += `Quantité : ${quantity}\n`;
                      message += `Total estimé : ${quantity * product.price} FCFA\n`;
                    }
                    
                    message += `\nMerci de me faire parvenir votre devis.\n\nCordialement`;
                    
                    const whatsappUrl = `https://wa.me/221777151061?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    setShowModal(false);
                  }}
                  className="flex-1 bg-cocorico-red text-white py-2 rounded hover:bg-red-700"
                >
                  Envoyer sur WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;