'use client';

import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const Contact = () => {
  const t = useTranslations();

  return (
    <motion.section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 border-t"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold md:text-4xl/tight">{t('Contact.title')}</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            {t('Contact.description')}
          </p>
        </motion.div>
        <motion.div
          className="mx-auto w-full max-w-sm space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" className="w-full">
              {t('Contact.button')}
            </Button>
          </motion.div>
          <p className="text-xs text-muted-foreground">{t('Contact.note')}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;