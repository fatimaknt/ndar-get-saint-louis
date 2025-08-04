import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  HomeModernIcon,
  Square3Stack3DIcon
} from '@heroicons/react/24/outline';

const RealEstate: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', count: 89 },
    { id: 'apartment', name: 'Appartements', count: 45 },
    { id: 'house', name: 'Maisons', count: 28 },
    { id: 'villa', name: 'Villas', count: 16 },
  ];

  const properties = [
    {
      id: 1,
      title: 'Appartement Vue Fleuve',
      category: 'apartment',
      location: 'Centre-ville, Île de Saint-Louis',
      price: '45,000,000 FCFA',
      rating: 4.8,
      bedrooms: 3,
      area: '120 m²',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Magnifique appartement avec vue panoramique sur le fleuve Sénégal.',
    },
    {
      id: 2,
      title: 'Maison Traditionnelle',
      category: 'house',
      location: 'Quartier Nord',
      price: '35,000,000 FCFA',
      rating: 4.6,
      bedrooms: 4,
      area: '180 m²',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      description: 'Maison traditionnelle rénovée avec jardin et terrasse.',
    },
    {
      id: 3,
      title: 'Villa de Luxe',
      category: 'villa',
      location: 'Gandiol',
      price: '85,000,000 FCFA',
      rating: 4.9,
      bedrooms: 5,
      area: '300 m²',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Villa luxueuse avec piscine privée et vue sur l\'océan.',
    },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || property.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Immobilier à Saint-Louis
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Trouvez votre bien immobilier idéal à Saint-Louis.
              Appartements, maisons et villas pour tous les budgets.
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
                  placeholder="Rechercher un bien immobilier..."
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

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} bien{filteredProperties.length > 1 ? 's' : ''} trouvé{filteredProperties.length > 1 ? 's' : ''}
            </h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <FunnelIcon className="h-5 w-5" />
              <span className="text-sm">Filtrer par prix</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${property.category === 'apartment' ? 'bg-blue-500' :
                      property.category === 'house' ? 'bg-green-500' :
                        property.category === 'villa' ? 'bg-purple-500' :
                          'bg-gray-500'
                      }`}>
                      {categories.find(c => c.id === property.category)?.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-white text-sm font-medium">{property.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-orange transition-colors duration-300">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <HomeModernIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{property.bedrooms} chambre{property.bedrooms > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Square3Stack3DIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{property.area}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary-orange">
                      {property.price}
                    </span>
                    <button className="btn-primary text-sm">
                      Voir détails
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <HomeIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun bien trouvé
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

export default RealEstate; 