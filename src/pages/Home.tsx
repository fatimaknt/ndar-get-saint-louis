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
    ArrowRightIcon,
    PlayIcon
} from '@heroicons/react/24/outline';
import saintlouis from '../assets/images/saintlouis.jpg';

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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                                    Découvrez{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-orange-400">
                                        Saint-Louis
                                    </span>
                                    <br />
                                    <span className="text-4xl md:text-6xl font-bold text-blue-100">
                                        sous un autre angle
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
                                    La plateforme qui centralise tous les événements, expériences et services
                                    pour vous faire vivre la vraie essence de cette ville historique.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    to="/evenements"
                                    className="group px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                                >
                                    Découvrir les événements
                                    <ArrowRightIcon className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center group">
                                    <PlayIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
                                    Voir la vidéo
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
                                <div className="text-center space-y-8">
                                    <div className="w-32 h-32 bg-gradient-to-br from-primary-orange to-orange-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-500 rounded-full flex items-center justify-center">
                                                <div className="w-6 h-6 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black text-white">Ndar Gët</h3>
                                        <p className="text-blue-100 text-lg font-medium">
                                            Les yeux de Saint-Louis
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                            <div className="text-3xl font-black text-primary-orange mb-2">500+</div>
                                            <div className="text-blue-100 font-semibold">Événements</div>
                                        </div>
                                        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                            <div className="text-3xl font-black text-primary-orange mb-2">1000+</div>
                                            <div className="text-blue-100 font-semibold">Expériences</div>
                                        </div>
                                    </div>
                                </div>
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