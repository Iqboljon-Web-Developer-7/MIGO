'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import HeroImg from '@/assets/hero/Высшая школа экономики.jpeg';
import UniversityImg2 from '@/assets/hero/hero-modal.jpg';
import UniversityImg3 from '@/assets/hero/hero-modal-2.jpg';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import 'react-medium-image-zoom/dist/styles.css';
import Zoom from 'react-medium-image-zoom';
import { motion } from 'framer-motion';

const Hero = () => {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) closeModal();
    };

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === event.currentTarget && isModalOpen) closeModal();
    };

    window.addEventListener('keydown', handleEscape);
    if (isModalOpen) document.addEventListener('click', handleBackdropClick);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.section
        id="home"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold sm:text-5xl xl:text-6xl/none text-foreground dark:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {t('Hero.title')}
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-xl dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {t('Hero.description')}
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div
                  whileHover={{ rotateX: 5, rotateY: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    variant="default"
                    title={t('Hero.learnMore')}
                    onClick={openModal}
                  >
                    {t('Hero.learnMore')}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Image
                src={HeroImg?.src}
                width={550}
                height={550}
                alt={t('Hero.imageAlt')}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="bg-background dark:bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full mx-4 p-6 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
              aria-label={t('Hero.modal.close')}
            >
              <X className="h-6 w-6" />
            </button>
            <h2
              id="modal-title"
              className="text-2xl font-bold mb-4 text-foreground dark:text-white"
            >
              {t('Hero.modal.title')}
            </h2>
            <p className="text-muted-foreground mb-6 dark:text-gray-300">
              {t('Hero.modal.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <Zoom>
                <Image
                  src={HeroImg?.src}
                  width={200}
                  height={200}
                  alt={t('Hero.modal.image1Alt')}
                  className="w-full h-40 object-cover rounded-md"
                />
              </Zoom>
              <Zoom>
                <Image
                  src={UniversityImg2?.src || '/assets/hero/university2.jpeg'}
                  width={200}
                  height={200}
                  alt={t('Hero.modal.image2Alt')}
                  className="w-full h-40 object-cover rounded-md"
                />
              </Zoom>
              <Zoom>
                <Image
                  src={UniversityImg3?.src || '/assets/hero/university3.jpeg'}
                  width={200}
                  height={200}
                  alt={t('Hero.modal.image3Alt')}
                  className="w-full h-40 object-cover rounded-md"
                />
              </Zoom>
            </div>
            <Button
              variant="outline"
              onClick={closeModal}
              className="w-full sm:w-auto"
            >
              {t('Hero.modal.close')}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;