import { useState, useRef, useEffect } from "react";
import { collections, wordAds, ecomItems } from "@/lib/mockData";
import { GalleryCard } from "@/components/GalleryCard";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [expandedCollection, setExpandedCollection] = useState<string | null>(null);
  const [showNavPricing, setShowNavPricing] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', product: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  // Show nav pricing badge only after scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowNavPricing(window.scrollY > heroBottom - 100);
        setShowStickyCTA(window.scrollY > heroBottom + 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCollection = (collectionId: string) => {
    const scrollY = window.scrollY;
    setExpandedCollection((prev) => prev === collectionId ? null : collectionId);
    if (window.innerWidth < 640) {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    }
  };

  // GA4 event tracking helper
  const trackEvent = (eventName: string, params?: Record<string, string>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

    // Track form submission in GA4
    trackEvent('generate_lead', {
      form_name: 'free_sample_request',
      form_location: 'contact_section'
    });

    try {
      // Send via Web3Forms (free email API)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '6685ac1a-7a91-483c-a694-00a6c5430f32',
          subject: `New Lead: ${formData.name} - Free Sample Request`,
          from_name: formData.name,
          replyto: formData.email,
          email: formData.email,
          name: formData.name,
          product_description: formData.product,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\n\nProduct Description:\n${formData.product}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', product: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setFormError('Failed to send. Please email us directly at finn.walker@optivo.ca');
      console.error('Form submission error:', error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleCTAClick = (ctaLocation: string) => {
    trackEvent('cta_click', {
      cta_location: ctaLocation,
      cta_text: 'get_free_sample'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky CTA - appears after scrolling */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background py-3 px-4 sm:py-4 shadow-2xl"
          >
            <div className="container mx-auto flex items-center justify-between gap-4">
              <div className="hidden sm:block">
                <p className="text-sm font-medium">Transform your products today</p>
                <p className="text-xs opacity-80">Starting at just $9/image</p>
              </div>
              <p className="sm:hidden text-sm font-medium">$9/image — Get started</p>
              <a
                href="#contact"
                onClick={() => handleCTAClick('sticky_bar')}
                className="px-6 py-2.5 bg-background text-foreground text-sm font-medium hover:bg-background/90 transition-colors whitespace-nowrap"
              >
                Get Free Sample
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation - Mobile Optimized */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="h-9 sm:h-10 md:h-12 flex-shrink-0">
          <img
            src="/images-optimized/public/webp/Advertizing Photos/optivo-logo.webp"
            alt="Optivo Logo"
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Featured</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#collections" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-foreground text-background text-[10px] sm:text-xs font-medium tracking-wide transition-opacity duration-300 ${showNavPricing ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            Starting at $9/image
          </span>
          <a
            href="#contact"
            onClick={() => handleCTAClick('nav_header')}
            className="text-xs sm:text-sm font-medium bg-foreground text-background px-4 sm:px-5 py-2 sm:py-2.5 hover:bg-foreground/90 transition-colors whitespace-nowrap min-h-[44px] flex items-center"
          >
            Get Started
          </a>
        </div>
      </nav>

      <main className="pt-16 sm:pt-20">

        {/* HERO SECTION - Text Overlaying Images */}
        <section id="hero" className="relative overflow-hidden">
          {/* Mobile: Scrolling marquee of images */}
          <div className="sm:hidden relative h-[70vh]">
            <div className="absolute inset-0 flex flex-col gap-2 animate-scroll-up">
              {/* First set of images - 9 for 3x3 grid */}
              <div className="grid grid-cols-3 gap-2 px-2 flex-shrink-0">
                {wordAds.slice(0, 9).map((ad) => (
                  <img
                    key={ad.id}
                    src={ad.src}
                    alt={ad.title}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="grid grid-cols-3 gap-2 px-2 flex-shrink-0">
                {wordAds.slice(0, 9).map((ad) => (
                  <img
                    key={`${ad.id}-dup`}
                    src={ad.src}
                    alt={ad.title}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 -mt-52 md:-mt-64 lg:-mt-80">
            {wordAds.map((ad, index) => (
              <motion.div
                key={ad.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <img
                  src={ad.src}
                  alt={ad.title}
                  className="w-full h-auto block transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Light gray overlay for contrast */}
          <div className="absolute inset-0 bg-gray-200/50 pointer-events-none" />

          {/* Overlay Text - Higher position with white box */}
          <div className="absolute inset-0 flex items-center sm:items-start justify-center pointer-events-none sm:pt-12 md:pt-16 px-0 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center w-full sm:max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-5 sm:py-8 md:py-10 bg-white/95 backdrop-blur-sm"
            >
              <span className="inline-block text-xs sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-6 text-muted-foreground">
                Featured Campaigns
              </span>

              <h1 className="font-serif mb-4 sm:mb-8 leading-[1.05] text-foreground">
                <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl sm:whitespace-nowrap">Your Products,<span className="sm:hidden"><br /></span> Your Vision,</span>
                <span className="sm:hidden"><br /></span>
                <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl italic"> Our Execution.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground font-light">
                Send us your products and with your vision, we'll transform them into stunning photography.
                From lighting and styling to action shots and advertising creatives—we handle everything.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center pointer-events-auto">
                <a
                  href="#contact"
                  onClick={() => handleCTAClick('hero_primary')}
                  className="group px-8 py-4 bg-foreground text-background text-sm sm:text-base font-medium hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your Free Sample
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <span className="px-6 py-4 text-sm sm:text-base text-muted-foreground font-medium flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Starting at $9/image
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TRUST STRIP - Social Proof */}
        <section className="py-10 sm:py-14 border-b border-border/50 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-serif text-foreground">20+</span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-1 tracking-wide uppercase">Shot Types</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-border"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-serif text-foreground">24hr</span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-1 tracking-wide uppercase">Turnaround Time</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-border"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-serif text-foreground">100%</span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-1 tracking-wide uppercase">Satisfaction Guarantee</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-16 sm:py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 sm:mb-20"
            >
              <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Three Simple Steps</h2>
            </motion.header>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Send Your Product",
                  description: "Ship us your product or simply snap a photo with your phone. We'll handle the rest.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                {
                  step: "02",
                  title: "We Create Magic",
                  description: "Our team transforms your product into professional advertising and e-commerce photography.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  step: "03",
                  title: "Download & Grow",
                  description: "Receive high-resolution images optimized for web, social media, and print—ready to boost sales.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center group"
                >
                  {/* Connector line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border"></div>
                  )}

                  <div className="relative z-10 mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary border border-border group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                    {item.icon}
                  </div>

                  <span className="block text-xs font-mono text-muted-foreground tracking-widest mb-2">{item.step}</span>
                  <h3 className="text-xl sm:text-2xl font-serif mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-14 sm:mt-20"
            >
              <a
                href="#contact"
                onClick={() => handleCTAClick('how_it_works')}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: Portfolio Collections - Organized by Shot Type */}
        <section id="collections" className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
          <header className="mb-10 sm:mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3 sm:mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4">We Transform Products</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
              Just snap a quick photo of your product with your phone—it doesn't need to be perfect. Using our team of professional editors, we transform your casual snapshots into stunning visuals for all platforms. Below are just a few examples of what we create:
            </p>
          </header>

          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {collections.map((collection, idx) => {
              const isExpanded = expandedCollection === collection.id;

              return (
                <div key={collection.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

                  {/* Collection Info - Mobile: Full width, Desktop: Sticky sidebar */}
                  <div className="md:col-span-4 collection-sidebar-sticky">
                    <span className="text-[10px] sm:text-xs font-mono text-muted-foreground mb-2 block">
                      0{idx + 1} / COLLECTION
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif mb-3 sm:mb-4">{collection.name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {collection.description} A comprehensive visual identity system showcasing
                      advertising, lifestyle, and e-commerce photography.
                    </p>

                    {/* Shot Type Legend */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-foreground/80 rounded-full flex-shrink-0"></span>
                        <span>Advertising ({collection.advertisingShots.length})</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-foreground/50 rounded-full flex-shrink-0"></span>
                        <span>Lifestyle ({collection.lifestyleShots.length})</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-foreground/30 rounded-full flex-shrink-0"></span>
                        <span>E-commerce ({collection.ecomShots.length})</span>
                      </div>

                      {/* View All Button */}
                      <button
                        onClick={() => toggleCollection(collection.id)}
                        className="text-xs sm:text-sm border-b border-foreground pb-0.5 hover:opacity-50 transition-opacity mt-3 sm:mt-4 cursor-pointer min-h-[44px] flex items-center"
                      >
                        {isExpanded ? "Show Less" : "View All Shots"}
                      </button>
                    </div>
                  </div>

                  {/* Collection Images Grid */}
                  <div className="md:col-span-8">
                    {/* ADVERTISING SHOTS - Show 6 when collapsed, all when expanded */}
                    <div className="mb-6 sm:mb-8">
                      <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3 sm:mb-4 block">
                        Advertising & Hero Shots
                      </span>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        {(isExpanded ? collection.advertisingShots : collection.advertisingShots.slice(0, 6)).map((item) => (
                          <GalleryCard key={item.id} item={item} />
                        ))}
                      </div>
                    </div>

                    {/* LIFESTYLE SHOTS - Shown on expand */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="mb-6 sm:mb-8">
                            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3 sm:mb-4 block">
                              Lifestyle & Detail Shots
                            </span>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                              {collection.lifestyleShots.map((item) => (
                                <GalleryCard key={item.id} item={item} />
                              ))}
                            </div>
                          </div>

                          {/* E-COMMERCE SHOTS */}
                          <div>
                            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3 sm:mb-4 block">
                              E-commerce Product Shots
                            </span>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                              {collection.ecomShots.map((item) => (
                                <GalleryCard key={item.id} item={item} />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand Button - Show remaining count */}
                    {!isExpanded && (
                      <div className="flex justify-center py-3 sm:py-4">
                        <button
                          onClick={() => toggleCollection(collection.id)}
                          className="text-xs sm:text-sm border-b border-foreground pb-0.5 hover:opacity-50 transition-opacity cursor-pointer min-h-[44px] flex items-center"
                        >
                          + {(collection.advertisingShots.length - 6) + collection.lifestyleShots.length + collection.ecomShots.length} more shots in this collection
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Separator className="my-6 sm:my-8" />

        {/* SECTION 2: E-commerce Product Grid - Smaller Images */}
        <section id="shop" className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
          <header className="mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2 block">
              Shop
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif">Product Gallery</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              E-commerce photography showcase. Clean, professional product shots.
            </p>
          </header>

          {/* Dense Grid for E-commerce - Mobile optimized with better gap */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-1.5 sm:gap-2">
            {ecomItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden bg-gray-100"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white w-full">
                    <p className="text-[8px] sm:text-[10px] font-medium truncate">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm italic">
              And many more styles available
            </p>
            <a
              href="#contact"
              onClick={() => handleCTAClick('product_gallery')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-foreground text-background text-xs sm:text-sm font-medium hover:bg-foreground/90 transition-all min-h-[44px] cursor-pointer"
            >
              Get Your Free Sample
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* CONTACT / LEAD CAPTURE SECTION */}
        <section id="contact" className="py-20 sm:py-28 md:py-36 bg-foreground text-background relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 sm:mb-16"
              >
                <span className="text-[10px] sm:text-xs font-mono text-background/60 tracking-[0.3em] uppercase mb-4 block">
                  Let's Create Together
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
                  Ready to Transform<br />Your Products?
                </h2>
                <p className="text-base sm:text-lg text-background/70 max-w-xl mx-auto leading-relaxed">
                  Send us your product details and we'll create a <span className="text-background font-medium">free sample image</span> within 24 hours. No commitment required.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background text-foreground p-8 sm:p-10 md:p-12 max-w-2xl mx-auto"
              >
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif mb-3">You're All Set!</h3>
                    <p className="text-muted-foreground mb-4">We've received your request and will reply within 24 hours.</p>
                    <div className="bg-secondary/50 p-4 text-sm text-left">
                      <p className="font-medium mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Next Step:
                      </p>
                      <p className="text-muted-foreground">Reply to our email with a quick phone photo of your product. It doesn't need to be perfect—we'll transform it into something stunning!</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono tracking-wide uppercase text-muted-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 border border-border bg-background text-foreground focus:border-foreground focus:outline-none transition-colors text-sm"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono tracking-wide uppercase text-muted-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 border border-border bg-background text-foreground focus:border-foreground focus:outline-none transition-colors text-sm"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-xs font-mono tracking-wide uppercase text-muted-foreground mb-2">
                        Tell Us About Your Product
                      </label>
                      <textarea
                        id="product"
                        required
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3.5 border border-border bg-background text-foreground focus:border-foreground focus:outline-none transition-colors text-sm resize-none"
                        placeholder="e.g., Handmade soy candles in amber jars, lavender scent..."
                      />
                      <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Snap a quick photo with your phone and reply with it—we'll handle the rest!
                      </p>
                    </div>

                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                        {formError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formLoading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Get My Free Sample Image
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      No payment required. See results before you commit.
                    </p>
                  </form>
                )}
              </motion.div>

              {/* Alternative contact methods */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
              >
                <p className="text-background/50 text-sm mb-4">Or reach us directly</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <a href="mailto:finn.walker@optivo.ca" className="text-background/80 hover:text-background transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    finn.walker@optivo.ca
                  </a>
                  <a href="tel:+16477674047" className="text-background/80 hover:text-background transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (647) 767-4047
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/images-optimized/public/webp/Advertizing Photos/optivo-logo.webp"
                alt="Optivo Logo"
                className="h-10 sm:h-12 w-auto object-contain mb-3"
              />
              <p className="text-xs sm:text-sm text-muted-foreground">Marketing & Photography</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
                <a href="#collections" className="hover:text-foreground transition-colors">Portfolio</a>
                <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">© 2025 Optivo. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom padding for sticky CTA */}
      <div className={`h-16 sm:h-20 transition-all duration-300 ${showStickyCTA ? 'block' : 'hidden'}`}></div>
    </div>
  );
}
