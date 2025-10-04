import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.sujet) newErrors.sujet = 'Veuillez sélectionner un sujet';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ nom: '', email: '', sujet: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+221 77 715 10 61',
      color: 'bg-cocorico-yellow text-black'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@cocoricooo.sn',
      color: 'bg-cocorico-red text-white'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Comico 4, Yeumbeul Nord, Keur Massar, Dakar',
      color: 'bg-cocorico-yellow text-black'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Tous les jours: 10h-18h',
      color: 'bg-cocorico-red text-white'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question ? Une suggestion ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>

        {/* Cartes d'information de contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center mb-4`}>
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{info.content}</p>
            </div>
          ))}
        </div>

        {/* Section formulaire et informations détaillées */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations détaillées */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi nous contacter ?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Questions sur nos produits</h3>
                    <p className="text-gray-600 text-sm">Poussins, poulets de chair, reproduction et œufs race Goliath</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Commandes en gros</h3>
                    <p className="text-gray-600 text-sm">Tarifs spéciaux pour les éleveurs et professionnels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Conseils d'élevage</h3>
                    <p className="text-gray-600 text-sm">Accompagnement pour votre projet avicole</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Partenariats</h3>
                    <p className="text-gray-600 text-sm">Collaborons pour développer l'aviculture</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="bg-cocorico-yellow rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Horaires détaillés</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Tous les jours</span>
                  <span className="text-cocorico-red font-semibold">10h00 - 18h00</span>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note :</strong> Nous sommes ouverts 7j/7 pour répondre à vos besoins en volaille.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-cocorico-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-cocorico-red" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un message
                </h2>

                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.nom ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200 focus:border-red-500'
                    }`}
                    placeholder="Jean Dupont"
                  />
                  {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200 focus:border-red-500'
                    }`}
                    placeholder="jean.dupont@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.sujet ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200 focus:border-red-500'
                    }`}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="produits">Questions sur les produits</option>
                    <option value="commande">Commande en gros</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.sujet && <p className="text-red-500 text-sm mt-1">{errors.sujet}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200 focus:border-red-500'
                    }`}
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;