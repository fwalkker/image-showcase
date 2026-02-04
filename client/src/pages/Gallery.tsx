import { useState } from "react";
import { collections, feedItems } from "@/lib/mockData";
import { GalleryCard } from "@/components/GalleryCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Gallery() {
  const [expandedCollections, setExpandedCollections] = useState<Set<string>>(new Set());

  const toggleCollection = (collectionId: string) => {
    setExpandedCollections(prev => {
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
        <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Collections</a>
          <a href="#" className="hover:text-foreground transition-colors">Editorial</a>
          <a href="#" className="hover:text-foreground transition-colors">Shop</a>
        </div>
        <button className="text-sm font-medium border border-border px-4 py-2 hover:bg-secondary transition-colors">
          Menu
        </button>
      </nav>

      <main className="pt-24 pb-20">
        
        {/* Section 1: The 4 Companies (Collections) */}
        <section className="container mx-auto px-4 mb-24">
          <header className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Curated Collections</h1>
            <p className="text-muted-foreground">Exploring the intersection of art, nature, and commerce.</p>
          </header>

          <div className="space-y-32">
            {collections.map((collection, idx) => {
              const isExpanded = expandedCollections.has(collection.id);
              const itemsToShow = isExpanded ? collection.items : collection.items.slice(0, 6);

              return (
                <div key={collection.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                  {/* Collection Info Sticky */}
                  <div className="md:col-span-4 md:sticky md:top-32 mb-8 md:mb-0">
                    <span className="text-xs font-mono text-muted-foreground mb-2 block">0{idx + 1} / COLLECTION</span>
                    <h2 className="text-3xl font-serif mb-4">{collection.name}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {collection.description} A comprehensive series of twenty-one selected works showcasing the brand's unique visual identity and artistic direction.
                    </p>
                    <button
                      onClick={() => toggleCollection(collection.id)}
                      className="text-sm border-b border-foreground pb-0.5 hover:opacity-50 transition-opacity"
                    >
                      {isExpanded ? 'Show Less' : `View All ${collection.items.length} Items`}
                    </button>
                  </div>

                  {/* Collection Preview Grid */}
                  <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {itemsToShow.map((item) => (
                      <GalleryCard key={item.id} item={item} />
                    ))}
                    {!isExpanded && collection.items.length > 6 && (
                      <div className="col-span-full flex justify-center py-8">
                        <span className="text-xs text-muted-foreground italic">
                          + {collection.items.length - 6} more items in this collection
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Separator className="my-20" />

        {/* Section 2: The Feed (Ads + Ecom) */}
        <section className="container mx-auto px-4">
          <header className="mb-16">
            <h2 className="text-3xl font-serif">Marketplace & Discover</h2>
            <p className="text-muted-foreground mt-2">Sponsored campaigns and curated products.</p>
          </header>

          {/* Masonry-ish Grid for the Feed */}
          {/* Using CSS Columns for true masonry effect with simple setup */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {feedItems.slice(0, 50).map((item) => (
              <div key={item.id} className="break-inside-avoid">
                <GalleryCard item={item} className="mb-4" />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-muted-foreground mb-4">Showing 50 of {feedItems.length} items</p>
             <button className="px-8 py-3 bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
               Load More
             </button>
          </div>
        </section>

      </main>

      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl mb-4">Lumina.</h3>
          <p className="text-sm text-muted-foreground">© 2024 Lumina Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
