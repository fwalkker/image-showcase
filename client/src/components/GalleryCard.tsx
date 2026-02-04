import { GalleryItem } from "@/lib/mockData";
import { motion } from "framer-motion";

interface GalleryCardProps {
  item: GalleryItem;
  className?: string;
}

export function GalleryCard({ item, className = "" }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden bg-gray-100 ${className}`}
    >
      <div className={`w-full h-full overflow-hidden ${
        item.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 
        item.aspectRatio === 'landscape' ? 'aspect-[16/9]' : 'aspect-square'
      }`}>
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Overlay Information */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/60 to-transparent text-white">
        <p className="text-xs font-medium uppercase tracking-wider mb-1 opacity-80">
          {item.type === 'ad' ? 'Sponsored' : item.company}
        </p>
        <h3 className="font-serif text-lg leading-tight">
          {item.title}
        </h3>
        {item.price && (
          <p className="mt-1 font-mono text-sm">{item.price}</p>
        )}
      </div>

      {/* Type Badge */}
      {item.type === 'ad' && (
        <div className="absolute top-2 right-2 bg-white/90 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
          Ad
        </div>
      )}
    </motion.div>
  );
}
