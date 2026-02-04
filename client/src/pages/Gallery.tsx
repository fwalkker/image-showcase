import { useState } from "react";
import { collections, wordAds, ecomItems } from "@/lib/mockData";
import { GalleryCard } from "@/components/GalleryCard";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [expandedCollections, setExpandedCollections] = useState<Set<string>>(new Set());

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation - Mobile Optimized */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="h-7 sm:h-8 md:h-10 flex-shrink-0">
          <img
            src="/images-optimized/public/webp/Advertizing Photos/optivo-logo.webp"
            alt="Optivo Logo"
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Featured</a>
          <a href="#collections" className="text-muted-foreground hover:text-foreground transition-colors">Collections</a>
          <span className="text-muted-foreground">Website coming soon!</span>
        </div>
        <a
          href="mailto:finn.walker@optivo.ca"
          className="text-xs sm:text-sm font-medium border border-border px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-secondary transition-colors whitespace-nowrap"
        >
          Contact
        </a>
      </nav>

      <main className="pt-16 sm:pt-20">

        {/* HERO SECTION - Overlay Design */}
        <section id="hero" className="relative min-h-[85vh] flex items-center py-16 sm:py-20 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">

            {/* Centered Hero Text with Dramatic Shadows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24"
            >
              <span
                className="inline-block text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase mb-4 sm:mb-6 text-white/90"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.5)'
                }}
              >
                Featured Campaigns
              </span>

              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 sm:mb-8 leading-[1.1] text-white"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8), 0 8px 40px rgba(0,0,0,0.6)'
                }}
              >
                Your Products.<br />
                <span className="italic">Our Vision.</span>
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/95 font-light px-4"
                style={{
                  textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7)'
                }}
              >
                Send us your products and we'll transform them into stunning photography.
                From lighting and styling to action shots and advertising creatives—we handle everything.
              </p>
            </motion.div>

            {/* Image Grid as Background - Staggered Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
              {wordAds.map((ad, index) => (
                <motion.div
                  key={ad.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  className="group relative overflow-hidden rounded-lg shadow-2xl"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
                    <img
                      src={ad.src}
                      alt={ad.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <p className="text-xs sm:text-sm font-medium text-white mb-1 drop-shadow-lg">{ad.title}</p>
                        <p className="text-[10px] sm:text-xs text-white/80 drop-shadow-md">{ad.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ambient Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900 -z-10" />

          {/* Subtle Noise Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] -z-10"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            }}
          />
        </section>

        {/* SECTION 1: Portfolio Collections - Organized by Shot Type */}
        <section id="collections" className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
          <header className="mb-10 sm:mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3 sm:mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4">We Transform Products</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
              Every product has a story worth telling. We bring that story to life through professional digital photography that captures attention and drives results.
            </p>
          </header>

          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {collections.map((collection, idx) => {
              const isExpanded = expandedCollections.has(collection.id);

              return (
                <div key={collection.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

                  {/* Collection Info - Mobile: Full width, Desktop: Sticky sidebar */}
                  <div className="md:col-span-4 md:sticky md:top-24 lg:top-32">
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
                        className="text-xs sm:text-sm border-b border-foreground pb-0.5 hover:opacity-50 transition-opacity mt-3 sm:mt-4"
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
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
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
                          className="text-[11px] sm:text-xs text-muted-foreground italic hover:text-foreground transition-colors cursor-pointer"
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
              And Many more!
            </p>
            <a
              href="mailto:finn.walker@optivo.ca"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-foreground text-background text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Request Quote
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-border py-8 sm:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src="/images-optimized/public/webp/Advertizing Photos/optivo-logo.webp"
              alt="Optivo Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">Product Photography Studio</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2">© 2024 Optivo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
