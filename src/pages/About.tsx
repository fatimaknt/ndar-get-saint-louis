import React from 'react';
import { motion } from 'framer-motion';
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    StarIcon,
    UsersIcon,
    HeartIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
    const stats = [
        { number: '500+', label: 'Événements', icon: StarIcon },
        { number: '1000+', label: 'Expériences', icon: HeartIcon },
        { number: '200+', label: 'Hébergements', icon: UsersIcon },
        { number: '50K+', label: 'Utilisateurs', icon: UsersIcon },
    ];

    const team = [
        {
            name: 'Mamadou Diallo',
            role: 'Fondateur & CEO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        },
        {
            name: 'Fatou Sall',
            role: 'Directrice Marketing',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        },
        {
            name: 'Ousmane Ba',
            role: 'Directeur Technique',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        },
    ];

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
                            À propos de Ndar Gët
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Découvrez l'histoire derrière la plateforme qui révolutionne
                            la découverte de Saint-Louis
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Notre Mission
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Ndar Gët est né d'une passion pour Saint-Louis et d'un désir de partager
                                la richesse culturelle, historique et humaine de cette ville unique.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Notre mission est de centraliser et de promouvoir tous les événements,
                                expériences et services qui font de Saint-Louis une destination
                                incontournable du Sénégal.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Nous croyons que chaque visiteur mérite de découvrir Saint-Louis
                                "sous un autre angle", comme un véritable habitant.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl p-8 text-white">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                            <div className="w-6 h-6 bg-primary-orange rounded-full"></div>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Les yeux de Saint-Louis</h3>
                                    <p className="text-orange-100">
                                        Votre guide pour découvrir la vraie essence de notre ville
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-primary-blue text-white">
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
                                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-blue-100">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Notre Équipe
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Une équipe passionnée qui travaille chaque jour pour faire découvrir
                            Saint-Louis au monde entier
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary-orange font-medium">
                                    {member.role}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Contactez-nous
                            </h2>
                            <p className="text-xl text-gray-600">
                                Nous sommes là pour vous aider à découvrir Saint-Louis
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPinIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Notre Adresse
                                </h3>
                                <p className="text-gray-600">
                                    Saint-Louis, Sénégal
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                    <PhoneIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Téléphone
                                </h3>
                                <p className="text-gray-600">
                                    +221 77 179 51 03
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                    <EnvelopeIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Email
                                </h3>
                                <p className="text-gray-600">
                                    contact@saintlouisdusenegal.net
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 