import React from 'react';
import { Heart, Award, Leaf, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence et qualité',
      description: 'Sélection rigoureuse de nos volailles race Goliath pour garantir des produits de qualité supérieure'
    },
    {
      icon: Heart,
      title: 'Bien-être animal',
      description: 'Élevage dans le respect total du bien-être de nos volailles avec des conditions optimales'
    },
    {
      icon: Leaf,
      title: 'Pratiques durables',
      description: 'Méthodes d\'élevage respectueuses de l\'environnement et durables pour l\'avenir'
    },
    {
      icon: Users,
      title: 'Proximité client',
      description: 'Accompagnement personnalisé et conseils d\'experts pour tous vos besoins en volaille'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À propos de <span className="text-cocorico-red">Cocoricooo</span>
          </h2>
          <div className="w-20 h-1 bg-cocorico-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Votre partenaire de confiance depuis 5 ans
          </p>
        </div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-cocorico-red rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900">Notre histoire</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Depuis 5 ans, <strong className="text-cocorico-red">Cocoricooo</strong> est votre partenaire de confiance dans l'élevage de volaille. Nous nous spécialisons dans la production de poulets de chair et de reproduction de race Goliath (locale améliorée), de poussins et d'œufs pour la consommation de qualité supérieure.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-cocorico-yellow rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900">Notre engagement</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nous garantissons des produits sains, élevés dans le respect du bien-être animal et de l'environnement. Notre expertise nous permet d'offrir des conseils personnalisés à chacun de nos clients.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos valeurs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-cocorico-red hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-8 h-8 text-cocorico-red group-hover:text-cocorico-yellow transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors mb-3 text-lg">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;