'use client';

import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import UserImg1 from '@/assets/testimoniols/4.png';
import UserImg2 from '@/assets/testimoniols/1.png';
import UserImg3 from '@/assets/testimoniols/7.jpg';

const SuccessStories = () => {
  const t = useTranslations();

  return (
    <motion.section
      id="success-stories"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold md:text-4xl/tight">{t('SuccessStories.title')}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              {t('SuccessStories.description')}
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <motion.div
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}
            style={{ minHeight: '40px', maxHeight: '450px', overflow: 'hidden', transition: 'all 0.3s ease' }}
          >
            <Image
              src={UserImg1?.src}
              width={100}
              height={100}
              alt={t('SuccessStories.testimonial1ImageAlt')}
              className="rounded-full"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">{t('SuccessStories.testimonial1Name')}</h3>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{t('SuccessStories.testimonial1Location')}</span>
              </div>
              <p className="text-muted-foreground">{t('SuccessStories.testimonial1Quote')}</p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}
            style={{ minHeight: '40px', maxHeight: '450px', overflow: 'hidden', transition: 'all 0.3s ease' }}
          >
            <Image
              src={UserImg2?.src}
              width={100}
              height={100}
              alt={t('SuccessStories.testimonial2ImageAlt')}
              className="rounded-full"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">{t('SuccessStories.testimonial2Name')}</h3>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{t('SuccessStories.testimonial2Location')}</span>
              </div>
              <p className="text-muted-foreground">{t('SuccessStories.testimonial2Quote')}</p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}
            style={{ minHeight: '40px', maxHeight: '450px', overflow: 'hidden', transition: 'all 0.3s ease' }}
          >
            <Image
              src={UserImg3?.src}
              width={100}
              height={100}
              alt={t('SuccessStories.testimonial3ImageAlt')}
              className="rounded-full"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">{t('SuccessStories.testimonial3Name')}</h3>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{t('SuccessStories.testimonial3Location')}</span>
              </div>
              <p className="text-muted-foreground">{t('SuccessStories.testimonial3Quote')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;