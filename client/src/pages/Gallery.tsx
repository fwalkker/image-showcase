import { useState, useEffect } from "react";
import { collections, wordAds, ecomItems } from "@/lib/mockData";
import { GalleryCard } from "@/components/GalleryCard";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [expandedCollections, setExpandedCollections] = useState<Set<string>>(new Set());
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % wordAds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleCollection = (collectionId: string) => {
    setExpandedCollections((prev) => {
      const next = new Set(prev);
      if (next.has(collectionId)) {
        next.delete(collectionId);
      } else {
        next.add(collectionId);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="text-xl font-serif font-bold tracking-tight">Lumina.</div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Featured</a>
          <a href="#collections" className="text-muted-foreground hover:text-foreground transition-colors">Collections</a>
          <a href="#shop" className="text-muted-foreground hover:text-foreground transition-colors">Shop</a>
        </div>
        <a
          href="mailto:finn.walker@optivo.ca"
          className="text-sm font-medium border border-border px-4 py-2 hover:bg-secondary transition-colors"
        >
          Contact
        </a>
      </nav>

      <main className="pt-20">

        {/* HERO SECTION - Word Ads Showcase */}
        <section id="hero" className="relative h-[85vh] overflow-hidden bg-black">
          {/* Background Images with Crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={wordAds[currentHeroIndex].src}
                alt={wordAds[currentHeroIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </motion.div>
          </AnimatePresence>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-xs font-mono text-white/60 tracking-widest uppercase mb-4 block">
                Featured Campaign
              </span>
              <h1 className="text-4xl md:text-7xl font-serif text-white mb-4 max-w-3xl leading-tight">
                Your Products.<br />Our Vision.
              </h1>
              <p className="text-white/70 max-w-xl mb-8 leading-relaxed">
                Send us your products and we'll transform them into stunning photography.
                From lighting and styling to action shots and advertising creatives—we handle everything.
              </p>
            </motion.div>

            {/* Hero Navigation Dots */}
            <div className="flex items-center gap-2">
              {wordAds.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHeroIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentHeroIndex
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side Preview Thumbnails */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
            {wordAds.slice(0, 5).map((ad, idx) => (
              <button
                key={ad.id}
                onClick={() => setCurrentHeroIndex(idx)}
                className={`w-16 h-16 overflow-hidden transition-all duration-300 ${
                  idx === currentHeroIndex
                    ? "ring-2 ring-white scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={ad.src}
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 1: Portfolio Collections - Organized by Shot Type */}
        <section id="collections" className="container mx-auto px-4 py-24">
          <header className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Curated Collections</h2>
            <p className="text-muted-foreground leading-relaxed">
              Exploring the intersection of art, nature, and commerce through product photography.
            </p>
          </header>

          <div className="space-y-32">
            {collections.map((collection, idx) => {
              const isExpanded = expandedCollections.has(collection.id);

              return (
                <div key={collection.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                  {/* Collection Info Sticky */}
                  <div className="md:col-span-4 md:sticky md:top-32 mb-8 md:mb-0">
                    <span className="text-xs font-mono text-muted-foreground mb-2 block">
                      0{idx + 1} / COLLECTION
                    </span>
                    <h3 className="text-3xl font-serif mb-4">{collection.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {collection.description} A comprehensive visual identity system showcasing
                      advertising, lifestyle, and e-commerce photography.
                    </p>

                    {/* Shot Type Legend */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-3 h-3 bg-foreground/80 rounded-full"></span>
                        <span>Advertising ({collection.advertisingShots.length})</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-3 h-3 bg-foreground/50 rounded-full"></span>
                        <span>Lifestyle ({collection.lifestyleShots.length})</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-3 h-3 bg-foreground/30 rounded-full"></span>
                        <span>E-commerce ({collection.ecomShots.length})</span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleCollection(collection.id)}
                      className="text-sm border-b border-foreground pb-0.5 hover:opacity-50 transition-opacity"
                    >
                      {isExpanded ? "Show Less" : "View All Shots"}
                    </button>
                  </div>

                  {/* Collection Images Grid */}
                  <div className="md:col-span-8">
                    {/* ADVERTISING SHOTS - Always visible (Fantasy, Levitation, Splash, Hard Shadow, Reflection, Glow, Ingredients Spread) */}
                    <div className="mb-8">
                      <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4 block">
                        Advertising & Hero Shots
                      </span>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {collection.advertisingShots.map((item) => (
                          <GalleryCard key={item.id} item={item} />
                        ))}
                      </div>
                    </div>

                    {/* LIFESTYLE SHOTS - Shown on expand (Material Close-Up, Branding, Action Texture, Applicator, Hand-Held, In the Bag, Environmental, Human Interaction, Social) */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-8">
                            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4 block">
                              Lifestyle & Detail Shots
                            </span>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                              {collection.lifestyleShots.map((item) => (
                                <GalleryCard key={item.id} item={item} />
                              ))}
                            </div>
                          </div>

                          {/* E-COMMERCE SHOTS (Hero Front, 45-Degree, Back, Side, Top-Down, Open, Packaging) */}
                          <div>
                            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4 block">
                              E-commerce Product Shots
                            </span>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                              {collection.ecomShots.map((item) => (
                                <GalleryCard key={item.id} item={item} />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isExpanded && (
                      <div className="flex justify-center py-4">
                        <span className="text-xs text-muted-foreground italic">
                          + {collection.lifestyleShots.length + collection.ecomShots.length} more shots in this collection
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Separator className="my-8" />

        {/* SECTION 2: E-commerce Product Grid - Smaller Images */}
        <section id="shop" className="container mx-auto px-4 py-24">
          <header className="mb-12">
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2 block">
              Shop
            </span>
            <h2 className="text-3xl font-serif">Product Gallery</h2>
            <p className="text-muted-foreground mt-2">
              E-commerce photography showcase. Clean, professional product shots.
            </p>
          </header>

          {/* Dense Grid for E-commerce - Smaller images */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2">
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
                  <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <p className="text-[10px] font-medium truncate">{item.title}</p>
                    <p className="text-[10px] font-mono opacity-70">{item.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4 text-sm">
              Showing {ecomItems.length} products
            </p>
            <a
              href="mailto:finn.walker@optivo.ca"
              className="inline-block px-8 py-3 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Request Quote
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl mb-4">Lumina.</h3>
          <p className="text-sm text-muted-foreground">Product Photography Studio</p>
          <p className="text-xs text-muted-foreground mt-2">© 2024 Lumina Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
