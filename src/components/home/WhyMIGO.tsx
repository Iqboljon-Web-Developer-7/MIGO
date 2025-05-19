'use client';

import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const WhyMIGO = () => {
  const t = useTranslations();

  return (
    <motion.section
      id="why-migo"
      className="w-full py-12 md:py-24 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold md:text-4xl/tight">{t('WhyMIGO.title')}</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">{t('WhyMIGO.description')}</p>
          </motion.div>
          <div className="grid gap-6">
            <motion.div
              className="flex gap-4 items-start bg-background p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{t('WhyMIGO.point1Title')}</h3>
                <p className="text-muted-foreground">{t('WhyMIGO.point1Description')}</p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-4 items-start bg-background p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{t('WhyMIGO.point2Title')}</h3>
                <p className="text-muted-foreground">{t('WhyMIGO.point2Description')}</p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-4 items-start bg-background p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{t('WhyMIGO.point3Title')}</h3>
                <p className="text-muted-foreground">{t('WhyMIGO.point3Description')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyMIGO;