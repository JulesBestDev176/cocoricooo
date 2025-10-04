import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Logo - Première ligne */}
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.png" alt="cocoricooo" className="h-48 mx-auto md:mx-0" />
        </motion.div>

        {/* Sections - Deuxième ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Cocoricooo et description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-cocorico-red mb-3">
              cocoricooo
            </h3>
            <div className="w-16 h-1 bg-cocorico-yellow mb-4 mx-auto md:mx-0" />
            <p className="text-gray-400 text-sm leading-relaxed">
              votre spécialiste en volaille de qualité supérieure depuis 5 ans
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+221777151061" 
                className="flex items-start gap-3 text-gray-400 hover:text-cocorico-yellow transition-colors group justify-center md:justify-start"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+221 77 715 10 61</span>
              </a>
              <a 
                href="mailto:contact@cocoricooo.sn" 
                className="flex items-start gap-3 text-gray-400 hover:text-cocorico-yellow transition-colors group justify-center md:justify-start"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm break-all">contact@cocoricooo.sn</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 hover:text-cocorico-yellow transition-colors cursor-pointer justify-center md:justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  comico 4, yeumbeul nord<br />
                  keur massar, dakar<br />
                  sénégal
                </span>
              </div>
            </div>
          </motion.div>

          {/* Horaires */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">horaires</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <Clock className="w-5 h-5 text-cocorico-yellow flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p className="font-semibold text-white mb-1">tous les jours</p>
                  <p>10h00 - 18h00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">suivez-nous</h4>
            <div className="flex gap-3 mb-6 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cocorico-red transition-colors"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm">
              rejoignez notre communauté
            </p>
          </motion.div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2024 cocoricooo. tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-cocorico-yellow transition-colors">mentions légales</a>
              <a href="#" className="hover:text-cocorico-yellow transition-colors">confidentialité</a>
              <a href="#" className="hover:text-cocorico-yellow transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;