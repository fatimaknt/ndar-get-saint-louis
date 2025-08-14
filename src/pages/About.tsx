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
                                Notre Histoire
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Le nom de notre projet n'est pas un hasard. En wolof, "bët" signifie œil, et son pluriel est "gët".
                                "Ndar Gët", c'est donc "Les yeux de Saint-Louis" : un regard attentif et engagé porté sur une ville aussi riche qu'inspirante.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Nichée entre fleuve et océan, Saint-Louis du Sénégal est bien plus qu'une simple ville : c'est une mémoire vivante. Ancienne capitale de l'Afrique occidentale française, elle a vu passer navigateurs, commerçants, poètes et intellectuels. Carrefour entre l'Afrique noire, l'Europe et le monde arabe, elle incarne une rencontre rare entre les civilisations. Ses façades coloniales aux teintes ocre, ses balcons en fer forgé, ses ruelles pavées et ses ponts emblématiques racontent une histoire plurielle, faite d'échanges, de luttes et de renaissances.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Ici, la culture ne se contemple pas : elle se vit, se ressent, se célèbre. Du mbalax aux notes profondes de la kora, des recettes locales aux influences mauresques aux rituels confrériques, chaque instant reflète l'âme singulière de Saint-Louis : fière de son passé, ouverte sur l'avenir.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                C'est dans cet esprit que Ndar Gët est né : un projet digital et culturel qui observe, capture et partage la beauté, l'histoire et la vie de Saint-Louis sous toutes ses facettes. Grâce aux outils numériques et aux réseaux sociaux, nous œuvrons pour redonner à cette ville la visibilité qu'elle mérite. Avec plus de 2 millions de vues par mois sur Facebook, nous avons la preuve qu'un véritable intérêt existe pour Saint-Louis ; il ne manque qu'un écosystème de valorisation et de narration pour en révéler toute la splendeur.
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