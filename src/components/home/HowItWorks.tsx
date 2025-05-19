'use client';

import { CheckCircle, GraduationCap, LineChart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const t = useTranslations();

  return (
    <motion.section
      id="how-it-works"
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
            <h2 className="text-3xl font-bold md:text-4xl/tight">{t('HowItWorks.title')}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              {t('HowItWorks.step1Description')}
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <motion.div
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <LineChart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{t('HowItWorks.step1Title')}</h3>
            <p className="text-center text-muted-foreground">{t('HowItWorks.step1Description')}</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{t('HowItWorks.step2Title')}</h3>
            <p className="text-center text-muted-foreground">{t('HowItWorks.step2Description')}</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{t('HowItWorks.step3Title')}</h3>
            <p className="text-center text-muted-foreground">{t('HowItWorks.step3Description')}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;