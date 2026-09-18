'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    num: '1',
    question: 'Do you offer custom stitching?',
    answer: 'Yes, custom stitching is our specialty. We create made-to-measure outfits tailored to your exact measurements, style preferences, and occasion requirements.',
  },
  {
    num: '2',
    question: 'Can I bring my own fabric?',
    answer: 'Absolutely! You can bring your own fabric, or we can source premium fabrics for you. We also offer expert guidance on fabric selection, falls, weaves, and texture pairings.',
  },
  {
    num: '3',
    question: 'Do you create bridal outfits?',
    answer: 'Yes, bridal couture is one of our core specialities. From custom lehengas to complete bridal trousseau, we create bespoke bridal outfits with handcrafted embroidery and premium craftsmanship.',
  },
  {
    num: '4',
    question: 'Can you redesign an old saree?',
    answer: 'Yes! We specialize in heritage revival - transforming old sarees and family heirlooms into contemporary outfits like lehengas, fusion sets, or modern silhouettes while preserving their sentimental value.',
  },
  {
    num: '5',
    question: 'Do I need an appointment?',
    answer: 'We work by appointment to ensure personalized attention. You can book a consultation via our website or call us directly at +91 89757 66683.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faqContent}>
        <div className={styles.faqLeft}>
          <div className={styles.sectionBadge}>
            <span>FREQUENTLY ASKED</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Boutique <em>&</em> Stitching Inquiries
          </h2>
          <p className={styles.faqDesc}>
            Everything you need to know about placing custom
            stitching orders, bridal timelines, fabric selection, and
            visiting our Pimple Saudagar studio.
          </p>
          <div className={styles.faqContact}>
            <p>Have a specific question?</p>
            <a href="tel:+918975766683">CALL +91 89757 66683 &rarr;</a>
          </div>
        </div>

        <div className={styles.faqRight}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.num}. {faq.question}</span>
                <span className={styles.faqIcon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
