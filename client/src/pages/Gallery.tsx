import { useState, useRef } from "react";
import { collections, wordAds, ecomItems } from "@/lib/mockData";
import { GalleryCard } from "@/components/GalleryCard";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [expandedCollection, setExpandedCollection] = useState<string | null>(null);

  const toggleCollection = (collectionId: string) => {
    // Save scroll position before toggle (for mobile)
    const scrollY = window.scrollY;

    setExpandedCollection((prev) => prev === collectionId ? null : collectionId);

    // Restore scroll position after a brief delay (for mobile)
    if (window.innerWidth < 640) {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    }
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
          className="text-xs sm:text-sm font-medium border border-border px-3 sm:px-4 py-2 sm:py-2.5 hover:bg-secondary transition-colors whitespace-nowrap min-h-[44px] flex items-center"
        >
          Contact
        </a>
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

              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-4 sm:mb-8 leading-[1.05] text-foreground">
                Your Products, Your Vision, <span className="sm:hidden"><br /></span><span className="italic">Our Excecution.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground font-light">
                Send us your products and with your vision, we'll transform them into stunning photography.
                From lighting and styling to action shots and advertising creatives—we handle everything.
              </p>
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
              Every product has a story worth telling. We bring that story to life through professional digital photography that captures attention and drives results. Below are just a few of our recent projects:
            </p>
          </header>

          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {collections.map((collection, idx) => {
              const isExpanded = expandedCollection === collection.id;

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
              And Many more!
            </p>
            <a
              href="mailto:finn.walker@optivo.ca"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-foreground text-background text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity min-h-[44px] cursor-pointer"
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
