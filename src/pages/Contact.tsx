import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: MapPinIcon,
            title: 'Notre Adresse',
            content: 'Saint-Louis, Sénégal',
            description: 'Au cœur de la ville historique'
        },
        {
            icon: PhoneIcon,
            title: 'Téléphone',
            content: '+221 77 179 51 03',
            description: 'Lun-Ven, 9h-18h'
        },
        {
            icon: EnvelopeIcon,
            title: 'Email',
            content: 'contact@saintlouisdusenegal.net',
            description: 'Réponse sous 24h'
        },
        {
            icon: ClockIcon,
            title: 'Horaires',
            content: 'Lun-Ven: 9h-18h',
            description: 'Sam: 9h-13h'
        },
    ];

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
                            Contactez-nous
                        </h1>
                        <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                            Nous sommes là pour vous aider à découvrir Saint-Louis.
                            N'hésitez pas à nous contacter pour toute question.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                    <info.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {info.title}
                                </h3>
                                <p className="text-primary-orange font-medium mb-1">
                                    {info.content}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {info.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section-padding">
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
                                Envoyez-nous un message
                            </h2>
                            <p className="text-xl text-gray-600">
                                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                                            placeholder="Votre nom complet"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                                            placeholder="votre@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Sujet *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="evenements">Événements</option>
                                            <option value="experiences">Expériences</option>
                                            <option value="hebergements">Hébergements</option>
                                            <option value="covoiturage">Covoiturage</option>
                                            <option value="immobilier">Immobilier</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                                            placeholder="Votre message..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full btn-primary text-lg py-4"
                                    >
                                        Envoyer le message
                                    </button>
                                </form>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="lg:pl-8"
                            >
                                <div className="bg-gradient-to-br from-primary-blue to-blue-700 rounded-2xl p-8 text-white h-full">
                                    <h3 className="text-2xl font-bold mb-6">
                                        Pourquoi nous contacter ?
                                    </h3>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-primary-orange">
                                                Informations sur les événements
                                            </h4>
                                            <p className="text-blue-100">
                                                Besoin d'informations sur un événement spécifique ?
                                                Nous sommes là pour vous aider.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-primary-orange">
                                                Réservations et paiements
                                            </h4>
                                            <p className="text-blue-100">
                                                Problème avec une réservation ou un paiement ?
                                                Notre équipe support vous assiste.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-primary-orange">
                                                Suggestions et feedback
                                            </h4>
                                            <p className="text-blue-100">
                                                Vos suggestions nous aident à améliorer notre plateforme.
                                                Partagez votre expérience avec nous.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-primary-orange">
                                                Partenariats
                                            </h4>
                                            <p className="text-blue-100">
                                                Vous souhaitez devenir partenaire ?
                                                Discutons de vos projets pour Saint-Louis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 