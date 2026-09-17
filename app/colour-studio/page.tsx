'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useRef, useCallback } from 'react';
import styles from './colour-studio.module.css';

const hueStops = [
  { pos: 0, color: [245, 230, 216] },
  { pos: 20, color: [212, 160, 136] },
  { pos: 40, color: [196, 123, 106] },
  { pos: 60, color: [160, 96, 80] },
  { pos: 80, color: [146, 79, 97] },
  { pos: 100, color: [119, 15, 97] },
];

function interpolateColor(stops: typeof hueStops, pct: number) {
  let lower = stops[0], upper = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (pct >= stops[i].pos && pct <= stops[i + 1].pos) {
      lower = stops[i];
      upper = stops[i + 1];
      break;
    }
  }
  const range = upper.pos - lower.pos || 1;
  const t = (pct - lower.pos) / range;
  const r = Math.round(lower.color[0] + (upper.color[0] - lower.color[0]) * t);
  const g = Math.round(lower.color[1] + (upper.color[1] - lower.color[1]) * t);
  const b = Math.round(lower.color[2] + (upper.color[2] - lower.color[2]) * t);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}

const pantones = [
  { name: 'Dusty Mauve', hex: '#C4A6A1' },
  { name: 'Burnt Rust', hex: '#A0522D' },
  { name: 'Royal Peacock', hex: '#1B4D3E' },
  { name: 'Terracotta', hex: '#C47B6A' },
  { name: 'Pistachio Gold', hex: '#93C572' },
  { name: 'Mulberry', hex: '#770F61' },
  { name: 'Midnight Teal', hex: '#191970' },
  { name: 'Champagne', hex: '#F7E7CE' },
];

const textiles = [
  {
    name: 'Pure Mulberry Silk',
    desc: 'Rich liquid drape sheen, balanced tonal uptake',
    tags: ['BRIDAL LEHENGAS', 'BLOUSES'],
    selected: true,
  },
  {
    name: 'Handloom Silk Organza',
    desc: 'Ethereal translucent tint, luminous halo finish',
    tags: ['DUPATTAS', 'SLEEVES'],
    selected: false,
  },
  {
    name: 'Heritage Velvet',
    desc: 'Deep luminous saturation, regal shadow play',
    tags: ['WINTER SOIREE', 'CORSETS'],
    selected: false,
  },
  {
    name: 'Chanderi & Banarasi Tissue',
    desc: 'Metallic gold-threaded warp with tinted weft',
    tags: ['ROYAL PATTI', 'ANARKALIS'],
    selected: false,
  },
];

const undertones = [
  { label: 'WARM GOLDEN (SUNKISSED)', active: true },
  { label: 'NEUTRAL BALANCED', active: false },
  { label: 'COOL SILVER-PLATED', active: false },
];

const tonalHarmony = [
  { name: 'Noor Ivory', hex: '#F5F4EE' },
  { name: 'Gulab Terracotta', hex: '#C47B6A' },
  { name: 'Rosewood Crimson', hex: '#924F61' },
  { name: 'Zari Gold', hex: '#D4A637' },
];

const steps = [
  { num: '01', title: 'DIGITAL COORDINATES & SWATCH RECEIPT', desc: 'Provide pantone codes, digital reference, or courier a 2×2 inch fabric snippet to our Pune Koregaon Park studio.' },
  { num: '02', title: '3 PHYSICAL STRIKE-OFF SWATCHES', desc: 'We formulate three graduated saturation depths on your chosen silk base and courier them for your fitting approval.' },
  { num: '03', title: 'PRECISION VAT BATH IN PUNE', desc: 'Crafted using temperature-controlled vat immersion ensuring edge-to-edge uniformity across full yardages.' },
  { num: '04', title: 'HARMONISED EMBROIDERY & TAILORING', desc: 'Our karigars dye the raw resham silk and zardozi threads to harmonise seamlessly with the dyed base fabric.' },
];

export default function ColourStudioPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTextile, setActiveTextile] = useState(0);
  const [activeUndertone, setActiveUndertone] = useState(0);
  const [huePosition, setHuePosition] = useState(45);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const currentHex = interpolateColor(hueStops, huePosition);

  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setHuePosition(pct);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    handleSliderMove(e.clientX);
    const onMove = (ev: MouseEvent) => { if (isDragging.current) handleSliderMove(ev.clientX); };
    const onUp = () => { isDragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [handleSliderMove]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    handleSliderMove(e.touches[0].clientX);
    const onMove = (ev: TouchEvent) => { if (isDragging.current) handleSliderMove(ev.touches[0].clientX); };
    const onEnd = () => { isDragging.current = false; window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd); };
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onEnd);
  }, [handleSliderMove]);

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <a href="/work" className={styles.backLink}>&larr; BACK TO GALLERY ARCHIVES / DESIGNED TO BE REMEMBERED</a>

              <div className={styles.heroBadge}>
                <span className={styles.badgeDot} />
                <span>ATELIER COLOR ARCHIVE &amp; LAB // BESPOKE SHADE CREATION</span>
              </div>

              <h1 className={styles.heroTitle}>
                Bespoke Colour Studio
                <br />
                <em>&amp; Dye-to-Match</em>
              </h1>

              <p className={styles.heroDesc}>
                Cannot find your exact occasion shade? At our Pune atelier, every natural raw silk, organza,
                georgette, and heritage velvet is formulated to precision pantone references, family
                heirloom fabrics, or gemstone swatches.
              </p>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#824F41" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>KOREGAON PARK VAT HOUSE</h4>
                  <p className={styles.featureDesc}>Non-toxic eco-reactive dye batches</p>
                </div>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#824F41" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>TRI-SWATCH GUARANTEE</h4>
                  <p className={styles.featureDesc}>3 strike-offs delivered for bridal lock</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mainGrid}>
          <div className={styles.mainContent}>
            <div className={styles.leftCol}>
              {/* Precision Match Mode */}
              <div className={styles.matchSection}>
                <div className={styles.matchHeader}>
                  <div className={styles.matchBadge}>
                    <span className={styles.badgeDot} />
                    <span>PRECISION MATCH MODE</span>
                  </div>
                  <span className={styles.stepCount}>Step 1 of 3 Selection</span>
                </div>

                <div className={styles.matchTabs}>
                  {['Pantone / Swatch', 'Heirloom / Saree', 'Jewellery & Gem'].map((tab, i) => (
                    <button key={i} className={`${styles.matchTab} ${i === activeTab ? styles.matchTabActive : ''}`} onClick={() => setActiveTab(i)}>
                      {tab}
                    </button>
                  ))}
                </div>

                <div className={styles.hueSection}>
                  <div className={styles.hueHeader}>
                    <span className={styles.hueLabel}>ATELIER HUE SLIDER</span>
                    <span className={styles.hueValue}>PANTONE 18-1420 TCX • ROSEWOOD DUST</span>
                  </div>
                  <div className={styles.hueSlider}>
                    <div
                      className={styles.hueTrack}
                      ref={sliderRef}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleTouchStart}
                      style={{ cursor: 'ew-resize' }}
                    >
                      <div className={styles.hueGradient} />
                      <div className={styles.hueThumb} style={{ left: `${huePosition}%` }} />
                    </div>
                  </div>
                  <div className={styles.hueInfo}>
                    <span className={styles.hexCode}>HEX {currentHex}</span>
                    <span className={styles.colorName}><span className={styles.colorDot} style={{ background: currentHex }} /> Rosewood</span>
                  </div>
                </div>

                {/* Signature Atelier Curations */}
                <div className={styles.curationsSection}>
                  <div className={styles.curationsHeader}>
                    <span className={styles.curationsLabel}>SIGNATURE ATELIER CURATIONS</span>
                    <span className={styles.curationsHint}>Click to preview</span>
                  </div>
                  <div className={styles.curationsGrid}>
                    {pantones.map((p, i) => (
                      <div key={i} className={styles.curationItem}>
                        <span className={styles.curationDot} style={{ background: p.hex }} />
                        <span className={styles.curationName}>{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Base Textile Medium */}
              <div className={styles.textileSection}>
                <div className={styles.textileHeader}>
                  <div>
                    <h3 className={styles.textileTitle}>BASE TEXTILE MEDIUM</h3>
                    <p className={styles.textileSub}>Each yarn possesses unique light absorption and weave sheen.</p>
                  </div>
                  <span className={styles.textileCount}>Natural Silk • Pune Weaves</span>
                </div>
                <div className={styles.textileGrid}>
                  {textiles.map((t, i) => (
                    <div key={i} className={`${styles.textileCard} ${i === activeTextile ? styles.textileCardActive : ''}`} onClick={() => setActiveTextile(i)}>
                      <div className={styles.textileCardTop}>
                        <div>
                          <h4 className={styles.textileName}>{t.name}</h4>
                          <p className={styles.textileDesc}>{t.desc}</p>
                        </div>
                        <span className={`${styles.radio} ${i === activeTextile ? styles.radioActive : ''}`} />
                      </div>
                      <div className={styles.textileTags}>
                        {t.tags.map((tag, j) => (
                          <span key={j} className={styles.textileTag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Refraction & Undertone */}
              <div className={styles.undertoneSection}>
                <h3 className={styles.undertoneTitle}>REFRACTION &amp; UNDERTONE DIRECTION</h3>
                <div className={styles.undertoneTabs}>
                  {undertones.map((u, i) => (
                    <button key={i} className={`${styles.undertoneTab} ${i === activeUndertone ? styles.undertoneTabActive : ''}`} onClick={() => setActiveUndertone(i)}>
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>


            </div>

            <div className={styles.rightCol}>
              {/* Palette Harmonisation */}
              <div className={styles.harmonySection}>
                <div className={styles.harmonyHeader}>
                  <span className={styles.harmonyLabel}>ATELIER PALETTE HARMONISATION</span>
                  <span className={styles.harmonyStudio}>Pune Studio</span>
                </div>
                <h3 className={styles.harmonyTitle}>Occasion Palette Preview</h3>
                <p className={styles.harmonyDesc}>Carefully calibrated tone harmonies formulated to reflect balanced radiance across bridal silhouettes.</p>

                <h4 className={styles.harmonySubTitle}>CURATED TONAL HARMONY</h4>
                <div className={styles.harmonyGrid}>
                  {tonalHarmony.map((t, i) => (
                    <div key={i} className={styles.harmonyItem}>
                      <span className={styles.harmonyDot} style={{ background: t.hex }} />
                      <div>
                        <span className={styles.harmonyName}>{t.name}</span>
                        <span className={styles.harmonyHex}>{t.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.naturalFiber}>
                  <div className={styles.nfIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#824F41" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h5 className={styles.nfTitle}>NATURAL FIBER FORMULATION</h5>
                    <p className={styles.nfDesc}>Each tint is bathed in small-batch mineral dye vats to preserve the natural silken sheen and thread strength.</p>
                  </div>
                </div>
              </div>

              {/* Dye Process Protocol */}
              <div className={styles.protocolSection}>
                <div className={styles.protocolHeader}>
                  <span className={styles.protocolLabel}>PRECISION QUALITY STANDARDS</span>
                  <div className={styles.protocolIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#824F41" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                </div>
                <h3 className={styles.protocolTitle}>Atelier Dye Process Protocol</h3>
                <div className={styles.protocolSteps}>
                  {steps.map((s, i) => (
                    <div key={i} className={styles.protocolStep}>
                      <span className={styles.stepNum}>{s.num}</span>
                      <div>
                        <h4 className={styles.stepTitle}>{s.title}</h4>
                        <p className={styles.stepDesc}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.protocolGuarantee}>
                  <span className={styles.guaranteeIcon}>✦</span>
                  <span>100% Color Depth Guarantee • Natural Fiber Formulation • Laboratory Lightfast Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className={styles.quoteSection}>
          <div className={styles.quoteContent}>
            <div className={styles.quoteImage}>
              <img src="/image 238.png" alt="Kripa Harjwani" loading="lazy" />
            </div>
            <div className={styles.quoteRight}>
              <span className={styles.quoteLabel}>DIRECT FROM THE MAÎTRE COUTURIÈRE</span>
              <h2 className={styles.quoteText}>
                &ldquo;Color is emotional geometry. A bride should never compromise on the shade that illuminates her complexion.&rdquo;
              </h2>
              <p className={styles.quoteDesc}>
                Whether replicating the faded crimson of your mother&rsquo;s wedding lehenga or matching
                your groom&rsquo;s bespoke raw silk safa, our Pune dye vat guarantees zero chromatic
                deviation. Every strike-off is personally checked by Kripa under both day and tungsten spectrums.
              </p>
              <div className={styles.quoteMeta}>
                <div>
                  <span className={styles.metaName}>KRIPA HARJWANI</span>
                  <span className={styles.metaRole}>Creative Director • KRIPA FLAUNT IT</span>
                </div>
                <div>
                  <span className={styles.metaName}>STUDIO LOCATION</span>
                  <span className={styles.metaRole}>Koregaon Park • Pune</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Swatch Kit Form */}
        <section className={styles.formSection}>
          <div className={styles.formContent}>
            <div className={styles.formCard}>
              <span className={styles.formLabel}>ATELIER RESERVATION &amp; DISPATCH</span>
              <h2 className={styles.formTitle}>Request Your Physical Swatch Kit</h2>
              <p className={styles.formDesc}>
                Submit your shade specifications above. We will formulate 3 graduated test swatches on your
                preferred silk base and courier them directly to your residence or prepare them for your salon fitting.
              </p>

              <form className={styles.form} onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements[0] as HTMLInputElement).value.trim();
              const phone = (form.elements[1] as HTMLInputElement).value.trim();
              const date = (form.elements[2] as HTMLInputElement).value.trim();
              if (!name || !phone || !date) {
                alert('Please fill in all required fields (Name, Phone, Date).');
                return;
              }
              window.open(`https://wa.me/918975766683?text=Hello%20Kripa!%20I%27m%20${encodeURIComponent(name)}.%20Phone%3A%20${encodeURIComponent(phone)}%2C%20Date%3A%20${encodeURIComponent(date)}.%20I%27ve%20submitted%20a%20shade%20consultation%20request%20for%20a%20physical%20swatch%20kit.`, '_blank');
            }}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formFieldLabel}>FULL NAME *</label>
                    <input type="text" placeholder="e.g. Radhika Deshmukh" className={styles.formInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formFieldLabel}>WHATSAPP PHONE (+91) *</label>
                    <input type="tel" placeholder="+9198220 00000" className={styles.formInput} />
                  </div>
                </div>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formFieldLabel}>WEDDING / OCCASION DATE *</label>
                    <input type="date" className={styles.formInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formFieldLabel}>OCCASION &amp; SILHOUETTE TYPE</label>
                    <input type="text" placeholder="Bridal Pheras Lehenga" className={styles.formInput} />
                  </div>
                </div>

                <div className={styles.formMeta}>
                  <span>Captured Hex: #C47B6A</span>
                  <span>Fabric Base: Pure Mulberry Silk</span>
                  <span>Strike-Off Lead: 4–6 Business Days</span>
                </div>

                <div className={styles.formButtons}>
                  <button type="submit" className={styles.btnSubmit}>SUBMIT SHADE CONSULTATION &amp; REQUEST PHYSICAL SWATCH TRIAL</button>
                  <a href="https://wa.me/918975766683?text=Hello%20Kripa!%20I%27ve%20submitted%20a%20shade%20consultation%20request%20for%20a%20physical%20swatch%20kit." target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    DIRECT WHATSAPP TO KRIPA
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
