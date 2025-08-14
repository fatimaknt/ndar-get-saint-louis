import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CalendarIcon,
    MapPinIcon,
    HomeIcon,
    TruckIcon,
    BuildingOfficeIcon,
    StarIcon,
    ArrowRightIcon

} from '@heroicons/react/24/outline';
import saintlouis from '../assets/images/image2.jpeg';

const Home: React.FC = () => {
    const services = [
        {
            icon: CalendarIcon,
            title: 'Événements',
            description: 'Découvrez les meilleurs événements de Saint-Louis',
            href: '/evenements',
            color: 'bg-blue-500',
        },
        {
            icon: MapPinIcon,
            title: 'Expériences',
            description: 'Vivez des expériences uniques et authentiques',
            href: '/experiences',
            color: 'bg-orange-500',
        },
        {
            icon: HomeIcon,
            title: 'Hébergements',
            description: 'Trouvez votre logement idéal pour votre séjour',
            href: '/hebergements',
            color: 'bg-green-500',
        },
        {
            icon: TruckIcon,
            title: 'Covoiturage',
            description: 'Partagez vos trajets et économisez sur vos déplacements',
            href: '/covoiturage',
            color: 'bg-purple-500',
        },
        {
            icon: BuildingOfficeIcon,
            title: 'Immobilier',
            description: 'Trouvez votre bien immobilier à Saint-Louis',
            href: '/immobilier',
            color: 'bg-red-500',
        },
    ];

    const features = [
        {
            title: 'Découverte Authentique',
            description: 'Plongez dans la culture locale et découvrez Saint-Louis comme un véritable habitant.',
            icon: StarIcon,
        },
        {
            title: 'Communauté Locale',
            description: 'Connectez-vous avec les habitants et partagez des moments inoubliables.',
            icon: StarIcon,
        },
        {
            title: 'Expériences Uniques',
            description: 'Des activités que vous ne trouverez nulle part ailleurs.',
            icon: StarIcon,
        },
    ];

    const stats = [
        { number: '500+', label: 'Événements' },
        { number: '1000+', label: 'Expériences' },
        { number: '200+', label: 'Hébergements' },
        { number: '50K+', label: 'Utilisateurs' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative text-white overflow-hidden min-h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${saintlouis})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/80 via-blue-700/70 to-blue-900/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
                <div className="relative container-custom section-padding">
                    <div className="flex flex-col justify-center items-center min-h-[90vh]">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl space-y-7 text-center"
                        >
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                                    Bienvenue à{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-orange-400">
                                        Saint-Louis
                                    </span>
                                    <br />
                                    <span className="text-4xl md:text-6xl font-bold text-blue-100">
                                        du Sénégal !
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
                                    Ville de la Teranga !
                                </p>
                                <div className="space-y-4 text-lg text-blue-100 leading-relaxed">
                                    <p>
                                        Située au bord de l'Océan Atlantique et à la jonction du désert du Sahara avec la brousse subsaharienne, Saint-Louis du Sénégal est certainement la meilleure introduction à la découverte de l'Afrique de l'Ouest francophone.
                                    </p>
                                    <p>
                                        Plus ancienne ville édifiée par les français en Afrique de l'Ouest (1659), symbole de l'élégance et du raffinement, Saint-Louis fut la capitale du Sénégal et de l'Afrique Occidentale Française au début du XXième siècle.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute bottom-20 left-1/4 transform -translate-x-1/2 w-full max-w-2xl"
                    >
                        <div className="bg-white rounded-3xl p-4 shadow-2xl">
                            <div className="text-center mb-3">
                                <h2 className="text-2xl font-black text-gray-900 text-left">
                                    Trouvez votre{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-orange-500">
                                        expérience
                                    </span>
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                <div className="space-y-2">
                                    <label className="block text-gray-900 font-semibold text-sm mb-1">
                                        Activité
                                    </label>
                                    <div className="relative">
                                        <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Visite Guidée de la région"
                                            className="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-gray-900 font-semibold text-sm mb-1">
                                        Zone d'excursion
                                    </label>
                                    <div className="relative">
                                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Entrez une zone"
                                            className="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-end">
                                    <button className="w-full px-6 py-3 bg-primary-orange text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        Voir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* À propos de Saint-Louis Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            À propos de{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-orange-500">
                                Saint-Louis
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={saintlouis}
                                    alt="Saint-Louis"
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <blockquote className="text-3xl font-black text-gray-900 leading-tight">
                                    "Nous voyageons pour chercher d'autres vies, d'autres âmes"
                                </blockquote>

                                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        Saint-Louis possède un patrimoine architectural unique, classé au patrimoine mondial de l'UNESCO depuis 2000. Cette ville historique, fondée en 1659, est la plus ancienne ville française d'Afrique de l'Ouest.
                                    </p>
                                    <p>
                                        La ville abrite également deux parcs naturels classés par l'UNESCO depuis plus de 15 ans : le Parc de la Langue de Barbarie et le Parc aux oiseaux du Djoudj, offrant une biodiversité exceptionnelle.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-primary-orange" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Patrimoine UNESCO</h3>
                                        <p className="text-sm text-gray-600">Classée au patrimoine mondial depuis 2000</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Histoire Riche</h3>
                                        <p className="text-sm text-gray-600">Plus ancienne ville française d'Afrique de l'Ouest (1659)</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.5 6.5c-.37.54-.49 1.23-.32 1.85L12 22h6zM8 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 8.54 8H7c-.8 0-1.54.37-2.01 1L.49 15.5c-.37.54-.49 1.23-.32 1.85L4 22h8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Culture Teranga</h3>
                                        <p className="text-sm text-gray-600">Hospitalité sénégalaise légendaire</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Link to="/a-propos" className="inline-block px-8 py-4 bg-primary-orange text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                    Lire plus
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                            Découvrez{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-orange-500">
                                nos services
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                            Une gamme complète de services pour vous faire vivre Saint-Louis comme un véritable habitant
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link to={service.href} className="group block">
                                    <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                                        <div className="flex items-start space-x-8">
                                            <div className={`w-24 h-24 ${service.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                                                <service.icon className="w-12 h-12 text-white" />
                                            </div>
                                            <div className="flex-1 space-y-6">
                                                <div>
                                                    <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-primary-orange transition-colors duration-300">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed text-lg">
                                                        {service.description}
                                                    </p>
                                                </div>
                                                <div className="flex items-center text-primary-orange font-bold text-lg group-hover:translate-x-2 transition-transform duration-300">
                                                    <span>Explorer</span>
                                                    <ArrowRightIcon className="w-6 h-6 ml-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-gradient-to-r from-primary-blue to-blue-700 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-primary-orange mb-4">
                                    {stat.number}
                                </div>
                                <div className="text-blue-100 font-semibold text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Pourquoi choisir Ndar Gët ?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            Une expérience unique pour découvrir Saint-Louis comme jamais auparavant
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                                    <feature.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-primary-orange to-orange-600 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Prêt à découvrir Saint-Louis ?
                        </h2>
                        <p className="text-xl mb-12 text-orange-100 max-w-3xl mx-auto font-light">
                            Rejoignez notre communauté et commencez votre aventure dès aujourd'hui
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/evenements" className="px-8 py-4 bg-white text-primary-orange font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
                                Commencer l'exploration
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-primary-orange transition-all duration-300">
                                Nous contacter
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;