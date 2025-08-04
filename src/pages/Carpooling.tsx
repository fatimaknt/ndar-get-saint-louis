import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  ClockIcon,
  UserIcon,
  TruckIcon,
  MagnifyingGlassIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const Carpooling: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const rides = [
    {
      id: 1,
      driver: 'Mamadou D.',
      from: 'Saint-Louis',
      to: 'Dakar',
      date: '20 Déc 2024',
      time: '08:00',
      price: '3,500 FCFA',
      seats: 3,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      driver: 'Fatou S.',
      from: 'Saint-Louis',
      to: 'Thiès',
      date: '22 Déc 2024',
      time: '14:30',
      price: '2,000 FCFA',
      seats: 2,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      driver: 'Ousmane B.',
      from: 'Dakar',
      to: 'Saint-Louis',
      date: '25 Déc 2024',
      time: '10:00',
      price: '3,500 FCFA',
      seats: 4,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    },
  ];

  const filteredRides = rides.filter(ride =>
    ride.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ride.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Covoiturage
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Partagez vos trajets et économisez sur vos déplacements.
              Rejoignez notre communauté de covoiturage à Saint-Louis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un trajet (ex: Dakar, Thiès)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rides Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Trajets disponibles
            </h2>
            <button className="btn-primary">
              Proposer un trajet
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRides.map((ride, index) => (
              <motion.div
                key={ride.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mr-3">
                    <UserIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{ride.driver}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{ride.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{ride.from}</span>
                    </div>
                    <TruckIcon className="h-4 w-4 text-primary-orange" />
                    <div className="flex items-center text-gray-600">
                      <span className="text-sm">{ride.to}</span>
                      <MapPinIcon className="h-4 w-4 ml-2" />
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{ride.date}</span>
                  </div>

                  <div className="flex items-center text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{ride.time}</span>
                  </div>

                  <div className="flex items-center text-gray-500">
                    <UserIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{ride.seats} place{ride.seats > 1 ? 's' : ''} disponible{ride.seats > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary-orange">
                    {ride.price}
                  </span>
                  <button className="btn-primary text-sm">
                    Réserver
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredRides.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <TruckIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun trajet trouvé
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche ou proposez votre propre trajet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Carpooling; 