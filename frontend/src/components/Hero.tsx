import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const Hero: React.FC = () => {
  return (
    <section className="bg-cocorico-red min-h-screen flex items-center relative overflow-hidden">
      {/* Motifs décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cocorico-yellow rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Texte à gauche - 60% */}
          <div className="w-full md:w-3/5 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight flex flex-col sm:flex-row items-center gap-2">
                  <span className="text-white">Bienvenue chez</span>
                  <div className="bg-white px-4 md:px-6 py-2 md:py-3 transform -skew-x-6 inline-block rounded-md">
                    <span className="text-cocorico-red skew-x-6 inline-block italic">Cocoricooo !!!</span>
                  </div>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                Votre spécialiste en volaille, œufs et poussins de qualité supérieure
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-cocorico-red px-8 py-4 rounded-lg font-bold hover:bg-cocorico-yellow transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                voir nos produits
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cocorico-red transition-all duration-300">
                nous contacter
              </button>
            </div>

            {/* Stats modernes */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="flex flex-col items-center">
                <Award className="w-6 md:w-8 h-6 md:h-8 text-cocorico-yellow mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">
                  <Counter end={100} suffix="%" />
                </div>
                <div className="text-xs md:text-sm text-white/80">qualité garantie</div>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-6 md:w-8 h-6 md:h-8 text-cocorico-yellow mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">
                  <Counter end={3} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-white/80">ans d'expérience</div>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-6 md:w-8 h-6 md:h-8 text-cocorico-yellow mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">
                  <Counter end={500} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-white/80">clients satisfaits</div>
              </div>
            </div>
          </div>

          {/* Image à droite - 40% */}
          <div className="w-full md:w-2/5 flex items-center justify-center order-first md:order-last">
            <motion.img
              src="/banner.png"
              alt="cocorico - spécialiste en volaille"
              className="w-4/5 md:w-full h-auto max-w-sm md:max-w-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;