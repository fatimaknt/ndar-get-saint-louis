import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CalendarIcon,
    MapPinIcon,
    ClockIcon,
    MagnifyingGlassIcon,
    FunnelIcon,
    StarIcon
} from '@heroicons/react/24/outline';

const Events: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tous', count: 156 },
        { id: 'culture', name: 'Culture', count: 45 },
        { id: 'music', name: 'Musique', count: 32 },
        { id: 'food', name: 'Gastronomie', count: 28 },
        { id: 'sport', name: 'Sport', count: 23 },
        { id: 'business', name: 'Business', count: 18 },
    ];

    const events = [
        {
            id: 1,
            title: 'Festival de Jazz de Saint-Louis',
            category: 'music',
            date: '15-17 Déc 2024',
            time: '19:00',
            location: 'Place Faidherbe',
            price: '15,000 FCFA',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Le plus grand festival de jazz d\'Afrique de l\'Ouest avec des artistes internationaux.',
        },
        {
            id: 2,
            title: 'Dégustation de Thieboudienne',
            category: 'food',
            date: '20 Déc 2024',
            time: '12:00',
            location: 'Restaurant Le Flamboyant',
            price: '8,000 FCFA',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80',
            description: 'Découvrez l\'art culinaire sénégalais avec notre chef traditionnel.',
        },
        {
            id: 3,
            title: 'Visite Guidée de l\'Île',
            category: 'culture',
            date: '22 Déc 2024',
            time: '09:00',
            location: 'Départ: Pont Faidherbe',
            price: '5,000 FCFA',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
            description: 'Explorez l\'histoire fascinante de Saint-Louis avec nos guides experts.',
        },
        {
            id: 4,
            title: 'Match de Lutte Traditionnelle',
            category: 'sport',
            date: '25 Déc 2024',
            time: '16:00',
            location: 'Arena de Lutte',
            price: '3,000 FCFA',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Assistez à un combat de lutte traditionnelle sénégalaise.',
        },
        {
            id: 5,
            title: 'Conférence sur l\'Économie Verte',
            category: 'business',
            date: '28 Déc 2024',
            time: '14:00',
            location: 'Centre de Conférences',
            price: 'Gratuit',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
            description: 'Débat sur les opportunités économiques durables à Saint-Louis.',
        },
        {
            id: 6,
            title: 'Soirée Poésie Wolof',
            category: 'culture',
            date: '30 Déc 2024',
            time: '20:00',
            location: 'Café des Arts',
            price: '2,000 FCFA',
            rating: 4.4,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Une soirée magique de poésie traditionnelle et moderne.',
        },
    ];

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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
                            Événements à Saint-Louis
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Découvrez les meilleurs événements culturels, musicaux, gastronomiques et sportifs
                            qui font vibrer notre belle ville.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="bg-white shadow-sm">
                <div className="container-custom py-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                        {/* Search */}
                        <div className="flex-1 w-full lg:w-auto">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un événement..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Category Filters */}
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

            {/* Events Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''} trouvé{filteredEvents.length > 1 ? 's' : ''}
                        </h2>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <FunnelIcon className="h-5 w-5" />
                            <span className="text-sm">Filtrer par popularité</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card overflow-hidden group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${event.category === 'music' ? 'bg-purple-500' :
                                            event.category === 'food' ? 'bg-orange-500' :
                                                event.category === 'culture' ? 'bg-blue-500' :
                                                    event.category === 'sport' ? 'bg-green-500' :
                                                        'bg-gray-500'
                                            }`}>
                                            {categories.find(c => c.id === event.category)?.name}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                                        <StarIcon className="h-4 w-4 text-yellow-400" />
                                        <span className="text-white text-sm font-medium">{event.rating}</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-orange transition-colors duration-300">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-gray-500">
                                            <CalendarIcon className="h-4 w-4 mr-2" />
                                            <span className="text-sm">{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-gray-500">
                                            <ClockIcon className="h-4 w-4 mr-2" />
                                            <span className="text-sm">{event.time}</span>
                                        </div>
                                        <div className="flex items-center text-gray-500">
                                            <MapPinIcon className="h-4 w-4 mr-2" />
                                            <span className="text-sm">{event.location}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-primary-orange">
                                            {event.price}
                                        </span>
                                        <button
                                            className="btn-primary text-sm"
                                            onClick={() => {
                                                const message = `Bonjour ! Je souhaite réserver pour l'événement "${event.title}" le ${event.date} à ${event.time}.`;
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

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Aucun événement trouvé
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

export default Events; 