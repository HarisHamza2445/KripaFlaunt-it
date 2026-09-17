import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroTopBar}>
              <span><span className={styles.dot} /> HAUTE COUTURE ATELIER &bull; EST. PUNE</span>
              <span>VOL. IV &middot; BESPOKE ARCHITECTURAL CRAFT</span>
              <span>18.5204&deg; N, 73.8567&deg; E</span>
            </div>
            <div className={styles.heroBadge}>THE ATELIER STORY</div>
            <h1 className={styles.heroTitle}>Crafted With <em>You</em> in Mind.</h1>
            <p className={styles.heroDesc}>
              We create thoughtfully designed pieces that bring together timeless craftsmanship,<br />
              personal style, and modern elegance.
            </p>
            <div className={styles.heroGrid}>
              <div className={styles.heroImageCard}>
                <img src="/img9.png" alt="Atelier Pune" loading="lazy" />
                <div className={styles.heroImageOverlay}>
                  <span className={styles.overlayLabel}>ATELIER PUNE &bull; ARCHIVAL CRAFT</span>
                  <span className={styles.overlayText}><em>Silken drapes, hand zardozi &amp; micro-pleated tulle</em></span>
                </div>
              </div>
              <div className={styles.heroRight}>
                <div className={styles.bespokeCard}>
                  <div className={styles.bespokeLine} />
                  <span className={styles.bespokeBadge}>BESPOKE MARKERS</span>
                  <h3 className={styles.bespokeTitle}>A sanctuary for true individuality.</h3>
                  <p className={styles.bespokeDesc}>
                    Every silhouette is meticulously draped and sculpted by hand in our Pune studio, marrying ancestral Indian embroidery with contemporary global elegance.
                  </p>
                  <div className={styles.bespokeTags}>
                    <span>HANDCRAFTED IN INDIA</span>
                    <span>1-OF-1 COMMISSION</span>
                  </div>
                </div>
                <div className={styles.locationCard}>
                  <div>
                    <span className={styles.locationLabel}>STUDIO LOCATION</span>
                    <span className={styles.locationText}>Pimple Saudagar, Pune</span>
                  </div>
                  <span className={styles.locationIcon}>&#9906;</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.storyContent}>
            <div className={styles.storyLeft}>
              <div className={styles.storyBadgeRow}>
                <div className={styles.storyLine} />
                <span className={styles.storyBadge}>OUR STORY</span>
              </div>
              <h2 className={styles.storyTitle}>Where Tradition<br /><em>Meets Today.</em></h2>
              <p className={styles.storyDesc}>
                Our journey began with a simple idea &mdash; to create clothing that feels personal, beautiful, and made to last. We bring traditional craftsmanship into a modern design language, creating pieces made for meaningful occasions.
              </p>
              <p className={styles.storyDesc}>
                Founded by Kripa Harjwani, FLAUNT IT redefines Indian couture through architectural drapery, delicate hand-zardozi embroideries, and personalized undertone harmonization. Here, garments are not merely sewn; they are sculpted around the spirit of the woman wearing them.
              </p>
              <div className={styles.studioBadge}>
                <span className={styles.dot} /> PIMPLE SAUDAGAR, PUNE &bull; ATELIER &amp; BESPOKE STUDIO
              </div>
              <div className={styles.appointment}>
                <span>&#128337;</span> BY APPOINTMENT ONLY
              </div>
            </div>
            <div className={styles.storyRight}>
              <div className={styles.storyImageCard}>
                <img src="/img10.png" alt="The Atelier Rhythm" loading="lazy" />
                <div className={styles.storyImageOverlay}>
                  <span className={styles.rhythmIcon}>&#10023;</span>
                  <span className={styles.rhythmBadge}>THE ATELIER RHYTHM</span>
                  <span className={styles.rhythmText}>&ldquo;Honoring the rhythm of needle, silken thread, and contour.&rdquo;</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.philosophy}>
          <div className={styles.philosophyContent}>
            <div className={styles.philosophyHeader}>
              <div>
                <div className={styles.philosophyBadgeRow}>
                  <div className={styles.storyLine} />
                  <span className={styles.philosophyBadge}>GUIDING PHILOSOPHY</span>
                </div>
                <h2 className={styles.philosophyTitle}>What We Believe</h2>
              </div>
              <p className={styles.philosophyDesc}>
                The foundational pillars shaping every bespoke pattern, heirloom stitch, and client interaction in our studio.
              </p>
            </div>
            <div className={styles.philosophyGrid}>
              <div className={styles.philCard}>
                <div className={styles.philCardTop}>
                  <span className={styles.philNum}>01</span>
                  <span className={styles.philTag}>PERSONAL</span>
                </div>
                <h3 className={styles.philTitle}>Intrinsically You</h3>
                <p className={styles.philDesc}>Every piece is created around the person wearing it. Your silhouette, your rhythm, and your unique comfort dictate every seam.</p>
                <div className={styles.philFooter}>
                  <div className={styles.philLine} />
                  <span>MADE TO MEASURE</span>
                </div>
              </div>
              <div className={styles.philCard}>
                <div className={styles.philCardTop}>
                  <span className={styles.philNum}>02</span>
                  <span className={styles.philTag}>CRAFTED</span>
                </div>
                <h3 className={styles.philTitle}>Honest Mastery</h3>
                <p className={styles.philDesc}>We value thoughtful details, skilled craftsmanship, and quality materials. We cherish time-honored techniques handed down through master karigars.</p>
                <div className={styles.philFooter}>
                  <div className={styles.philLine} />
                  <span>ARCHIVAL KARIGARI</span>
                </div>
              </div>
              <div className={styles.philCard}>
                <div className={styles.philCardTop}>
                  <span className={styles.philNum}>03</span>
                  <span className={styles.philTag}>TIMELESS</span>
                </div>
                <h3 className={styles.philTitle}>Enduring Poise</h3>
                <p className={styles.philDesc}>Our designs are made to feel special today and beautiful for years to come. We create heirlooms that transcend transient fast fashion.</p>
                <div className={styles.philFooter}>
                  <div className={styles.philLine} />
                  <span>HEIRLOOM LONGEVITY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.approach}>
          <div className={styles.approachContent}>
            <div className={styles.approachBadgeRow}>
              <div className={styles.storyLine} />
              <span className={styles.approachBadge}>OUR APPROACH</span>
            </div>
            <h2 className={styles.approachTitle}>Made With <em>Intention.</em></h2>
            <p className={styles.approachDesc}>
              From the first idea to the final detail, we focus on thoughtful design, careful craftsmanship, and a personal experience.
            </p>
            <div className={styles.approachGrid}>
              <div className={styles.approachCard}>
                <div className={styles.approachCardTop}>
                  <span className={styles.approachNum}>01</span>
                  <span className={styles.approachStage}>STAGE ONE</span>
                </div>
                <h3 className={styles.approachCardTitle}>Understand</h3>
                <p className={styles.approachCardDesc}>We begin with you, your style, and your occasion. A dedicated conversation uncovers your preferences, inspirations, and comfort boundaries.</p>
                <div className={styles.approachCardFooter}>
                  <span className={styles.deliverLabel}>Deliverables:</span>
                  <span>Silhouette Moodboard &bull; Undertone Palette &bull; Silhouette Consultation</span>
                </div>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachCardTop}>
                  <span className={styles.approachNum}>02</span>
                  <span className={styles.approachStage}>STAGE TWO</span>
                </div>
                <h3 className={styles.approachCardTitle}>Create</h3>
                <p className={styles.approachCardDesc}>Your ideas are shaped through design, fabric, colour, and detail. We draft proportions, select pure silks, and map custom embroideries.</p>
                <div className={styles.approachCardFooter}>
                  <span className={styles.deliverLabel}>Deliverables:</span>
                  <span>Fabric Swatching &bull; Zardozi Sampling &bull; Pattern Grading</span>
                </div>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachCardTop}>
                  <span className={styles.approachNum}>03</span>
                  <span className={styles.approachStage}>STAGE THREE</span>
                </div>
                <h3 className={styles.approachCardTitle}>Refine</h3>
                <p className={styles.approachCardDesc}>Every piece is carefully finished to feel truly yours. Precise fitting sessions ensure the drape rests flawlessly on your frame.</p>
                <div className={styles.approachCardFooter}>
                  <span className={styles.deliverLabel}>Deliverables:</span>
                  <span>Bespoke Muslin Fitting &bull; Hand Finishing &bull; The Atelier Reveal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.founder}>
          <div className={styles.founderContent}>
            <div className={styles.founderLeft}>
              <div className={styles.founderImageCard}>
                <img src="/img1.png" alt="Kripa Harjwani" loading="lazy" />
              </div>
              <div className={styles.founderNameCard}>
                <h3 className={styles.founderName}>Kripa Harjwani</h3>
                <span className={styles.founderTitle}>FOUNDER &amp; CREATIVE DIRECTOR</span>
                <span className={styles.founderLocation}>Flaunt It Atelier &bull; Pune, India</span>
              </div>
            </div>
            <div className={styles.founderRight}>
              <div className={styles.founderBadgeRow}>
                <div className={styles.storyLine} />
                <span className={styles.founderBadge}>THE CREATIVE MIND</span>
              </div>
              <h2 className={styles.founderTitle2}>Meet the Creative Mind.</h2>
              <p className={styles.founderDesc}>
                Behind every piece is a passion for design, craftsmanship, and creating something that feels uniquely yours. Kripa established the atelier with a philosophy of quiet luxury: garments that command reverence not through loudness, but through peerless cut, pristine silk, and authentic hand-embellishment.
              </p>
              <div className={styles.quoteCard}>
                <span className={styles.quoteIcon}>&ldquo;</span>
                <p className={styles.quoteText}><em>When a woman steps into an outfit crafted precisely for her, her posture shifts, her gaze lifts, and she radiates a natural, unhurried grace. That transformation is why I founded Flaunt It.</em></p>
                <div className={styles.quoteFooter}>
                  <span className={styles.quoteName}>Kripa Harjwani</span>
                  <span className={styles.quoteDot}>&bull;</span>
                  <span className={styles.quoteLabel}>CREATIVE DIRECTOR</span>
                  <span className={styles.quoteLocation}>PUNE ATELIER</span>
                </div>
              </div>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>10+</span>
                  <span className={styles.statLabel}>YEARS OF ATELIER CRAFT</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>1-on-1</span>
                  <span className={styles.statLabel}>PRIVATE CONSULTATIONS</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statLabel}>HANDCRAFTED ARTISTRY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaBadge}>
                <span className={styles.ctaDot} /> READY TO CREATE YOUR LOOK? <span className={styles.ctaSep}>|</span> PIMPLE SAUDAGAR STUDIO, PUNE
              </div>
              <h2 className={styles.ctaTitle}>Begin Your Bespoke <em>Journey.</em></h2>
              <div className={styles.ctaLine} />
              <p className={styles.ctaDesc}>
                Tell us what you have in mind and let&apos;s create an outfit that feels completely yours.
              </p>
              <div className={styles.ctaButtons}>
                <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.btnBook}>BOOK A CONSULTATION &rarr;</a>
                <a href="tel:+918975766683" className={styles.btnCall}>CALL THE STUDIO: +91 89757 66683</a>
              </div>
              <div className={styles.ctaFeatures}>
                <span>&middot; INDIVIDUAL BODY ARCHITECTURE</span>
                <span>&middot; PERSONAL FABRIC GUIDANCE</span>
                <span>&middot; DEDICATED TRIAL FITTINGS</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
