import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MapPinIcon,
    ClockIcon,
    StarIcon,
    MagnifyingGlassIcon,
    FunnelIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

const Experiences: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Toutes', count: 89 },
        { id: 'cultural', name: 'Culturelle', count: 32 },
        { id: 'culinary', name: 'Culinaire', count: 25 },
        { id: 'nature', name: 'Nature', count: 18 },
        { id: 'adventure', name: 'Aventure', count: 14 },
    ];

    const experiences = [
        {
            id: 1,
            title: 'Pêche Traditionnelle avec les Locaux',
            category: 'cultural',
            duration: '4 heures',
            location: 'Langue de Barbarie',
            price: '25,000 FCFA',
            rating: 4.9,
            participants: '2-6 personnes',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Partez en mer avec les pêcheurs traditionnels et découvrez leurs techniques ancestrales.',
        },
        {
            id: 2,
            title: 'Cours de Cuisine Sénégalaise',
            category: 'culinary',
            duration: '3 heures',
            location: 'Chez Fatou',
            price: '18,000 FCFA',
            rating: 4.8,
            participants: '1-4 personnes',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Apprenez à préparer le Thieboudienne et d\'autres plats traditionnels.',
        },
        {
            id: 3,
            title: 'Balade en Pirogue sur le Fleuve',
            category: 'nature',
            duration: '2 heures',
            location: 'Fleuve Sénégal',
            price: '12,000 FCFA',
            rating: 4.7,
            participants: '2-8 personnes',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Naviguez sur le fleuve Sénégal et observez la faune et la flore locales.',
        },
        {
            id: 4,
            title: 'Visite du Village de Pêcheurs',
            category: 'cultural',
            duration: '5 heures',
            location: 'Gandiol',
            price: '20,000 FCFA',
            rating: 4.6,
            participants: '1-6 personnes',
            image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
            description: 'Immersion totale dans la vie quotidienne d\'un village de pêcheurs.',
        },
        {
            id: 5,
            title: 'Safari dans le Parc National',
            category: 'adventure',
            duration: '6 heures',
            location: 'Parc National de la Langue de Barbarie',
            price: '35,000 FCFA',
            rating: 4.9,
            participants: '2-8 personnes',
            image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Découvrez la biodiversité exceptionnelle du parc national.',
        },
        {
            id: 6,
            title: 'Atelier de Tissage Traditionnel',
            category: 'cultural',
            duration: '3 heures',
            location: 'Centre Artisanal',
            price: '15,000 FCFA',
            rating: 4.5,
            participants: '1-3 personnes',
            image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'Apprenez les techniques de tissage traditionnel sénégalais.',
        },
    ];

    const filteredExperiences = experiences.filter(experience => {
        const matchesSearch = experience.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            experience.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || experience.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-orange to-orange-600 text-white">
                <div className="container-custom section-padding">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Expériences Locales
                        </h1>
                        <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                            Vivez des expériences authentiques et uniques avec les habitants de Saint-Louis.
                            Découvrez la vraie essence de notre culture.
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
                                    placeholder="Rechercher une expérience..."
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

            {/* Experiences Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredExperiences.length} expérience{filteredExperiences.length > 1 ? 's' : ''} trouvée{filteredExperiences.length > 1 ? 's' : ''}
                        </h2>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <FunnelIcon className="h-5 w-5" />
                            <span className="text-sm">Filtrer par popularité</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredExperiences.map((experience, index) => (
                            <motion.div
                                key={experience.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card overflow-hidden group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${experience.category === 'cultural' ? 'bg-blue-500' :
                                                experience.category === 'culinary' ? 'bg-orange-500' :
                                                    experience.category === 'nature' ? 'bg-green-500' :
                                                        experience.category === 'adventure' ? 'bg-purple-500' :
                                                            'bg-gray-500'
                                            }`}>
                                            {categories.find(c => c.id === experience.category)?.name}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                                        <StarIcon className="h-4 w-4 text-yellow-400" />
                                        <span className="text-white text-sm font-medium">{experience.rating}</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-orange transition-colors duration-300">
                                        {experience.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {experience.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-gray-500">
                                            <ClockIcon className="h-4 w-4 mr-2" />
                                            <span className="text-sm">{experience.duration}</span>
                                        </div>
                                        <div className="flex items-center text-gray-500">
                                            <MapPinIcon className="h-4 w-4 mr-2" />
                                            <span className="text-sm">{experience.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-500">
                                            <UserGroupIcon className="h-4 w-4 mr-2" />
                                            <span className="text-sm">{experience.participants}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-primary-orange">
                                            {experience.price}
                                        </span>
                                        <button className="btn-primary text-sm">
                                            Réserver
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredExperiences.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Aucune expérience trouvée
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

export default Experiences; 