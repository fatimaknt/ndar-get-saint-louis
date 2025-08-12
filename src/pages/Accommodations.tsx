import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  StarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  WifiIcon,
  TruckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Accommodations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', count: 156 },
    { id: 'hotel', name: 'Hôtels', count: 45 },
    { id: 'guesthouse', name: 'Maisons d\'hôtes', count: 32 },
    { id: 'apartment', name: 'Appartements', count: 28 },
    { id: 'villa', name: 'Villas', count: 23 },
  ];

  const accommodations = [
    {
      id: 1,
      title: 'Hôtel de la Poste',
      category: 'hotel',
      location: 'Centre-ville, Île de Saint-Louis',
      price: '45,000 FCFA',
      rating: 4.8,
      guests: '2-4 personnes',
      amenities: ['wifi', 'parking', 'restaurant'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Hôtel historique au cœur de l\'île avec vue sur le fleuve.',
    },
    {
      id: 2,
      title: 'Maison d\'Hôtes Chez Fatou',
      category: 'guesthouse',
      location: 'Langue de Barbarie',
      price: '25,000 FCFA',
      rating: 4.9,
      guests: '1-3 personnes',
      amenities: ['wifi', 'parking'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      description: 'Authentique maison d\'hôtes avec vue sur l\'océan.',
    },
    {
      id: 3,
      title: 'Appartement Vue Fleuve',
      category: 'apartment',
      location: 'Quartier Nord, Île de Saint-Louis',
      price: '35,000 FCFA',
      rating: 4.7,
      guests: '2-6 personnes',
      amenities: ['wifi', 'parking', 'cuisine'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Appartement moderne avec terrasse panoramique.',
    },
    {
      id: 4,
      title: 'Villa Les Flamboyants',
      category: 'villa',
      location: 'Gandiol',
      price: '80,000 FCFA',
      rating: 4.9,
      guests: '4-8 personnes',
      amenities: ['wifi', 'parking', 'piscine', 'jardin'],
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Villa luxueuse avec piscine privée et jardin tropical.',
    },
    {
      id: 5,
      title: 'Hôtel du Fleuve',
      category: 'hotel',
      location: 'Bord du fleuve Sénégal',
      price: '55,000 FCFA',
      rating: 4.6,
      guests: '2-4 personnes',
      amenities: ['wifi', 'parking', 'restaurant', 'piscine'],
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Hôtel avec vue imprenable sur le fleuve et les pêcheurs.',
    },
    {
      id: 6,
      title: 'Studio Centre Historique',
      category: 'apartment',
      location: 'Centre historique, Île de Saint-Louis',
      price: '28,000 FCFA',
      rating: 4.5,
      guests: '1-2 personnes',
      amenities: ['wifi', 'cuisine'],
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      description: 'Studio charmant dans un bâtiment colonial rénové.',
    },
  ];

  const filteredAccommodations = accommodations.filter(accommodation => {
    const matchesSearch = accommodation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accommodation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || accommodation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi': return WifiIcon;
      case 'parking': return TruckIcon;
      case 'piscine': return SparklesIcon;
      default: return WifiIcon;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hébergements à Saint-Louis
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Trouvez votre logement idéal parmi nos hôtels, maisons d'hôtes, appartements et villas
              pour un séjour inoubliable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un hébergement..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category.id
                    ? 'bg-primary-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredAccommodations.length} hébergement{filteredAccommodations.length > 1 ? 's' : ''} trouvé{filteredAccommodations.length > 1 ? 's' : ''}
            </h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <FunnelIcon className="h-5 w-5" />
              <span className="text-sm">Filtrer par prix</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation, index) => (
              <motion.div
                key={accommodation.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={accommodation.image}
                    alt={accommodation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${accommodation.category === 'hotel' ? 'bg-blue-500' :
                      accommodation.category === 'guesthouse' ? 'bg-green-500' :
                        accommodation.category === 'apartment' ? 'bg-purple-500' :
                          accommodation.category === 'villa' ? 'bg-orange-500' :
                            'bg-gray-500'
                      }`}>
                      {categories.find(c => c.id === accommodation.category)?.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-white text-sm font-medium">{accommodation.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-orange transition-colors duration-300">
                    {accommodation.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {accommodation.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{accommodation.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <span className="text-sm">{accommodation.guests}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    {accommodation.amenities.map((amenity) => {
                      const Icon = getAmenityIcon(amenity);
                      return (
                        <div key={amenity} className="flex items-center text-gray-500">
                          <Icon className="h-4 w-4 mr-1" />
                          <span className="text-xs capitalize">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary-orange">
                      {accommodation.price}
                    </span>
                    <button
                      className="btn-primary text-sm"
                      onClick={() => {
                        const message = `Bonjour ! Je souhaite réserver l'hébergement "${accommodation.title}" pour ${accommodation.guests}.`;
                        const whatsappUrl = `https://wa.me/221771795103?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredAccommodations.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun hébergement trouvé
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Accommodations; 