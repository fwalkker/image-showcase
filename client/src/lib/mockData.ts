import companyA from "@/assets/images/company-a.jpg";
import companyB from "@/assets/images/company-b.jpg";
import companyC from "@/assets/images/company-c.jpg";
import companyD from "@/assets/images/company-d.jpg";
import product1 from "@/assets/images/product-ad_1.jpg";
import product2 from "@/assets/images/product-ad_2.jpg";

export type ItemType = "photo" | "ad" | "product";

export interface GalleryItem {
  id: string;
  type: ItemType;
  src: string;
  title: string;
  subtitle?: string;
  company?: string;
  price?: string;
  aspectRatio: "square" | "portrait" | "landscape";
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  items: GalleryItem[];
}

// 4 Main Companies
const COMPANIES = [
  { id: "c1", name: "Lumina Studio", desc: "Avant-garde fashion.", img: companyA },
  { id: "c2", name: "Terra Firma", desc: "Landscapes & Nature.", img: companyB },
  { id: "c3", name: "Urban Core", desc: "City architecture.", img: companyC },
  { id: "c4", name: "Noir Portraits", desc: "Emotive portraiture.", img: companyD },
];

export const collections: Collection[] = COMPANIES.map((company) => ({
  id: company.id,
  name: company.name,
  description: company.desc,
  coverImage: company.img,
  items: Array.from({ length: 21 }).map((_, i) => ({
    id: `${company.id}-img-${i}`,
    type: "photo",
    src: company.img, // In a real app, these would be different
    title: `${company.name} Shot ${i + 1}`,
    company: company.name,
    aspectRatio: i % 3 === 0 ? "portrait" : i % 2 === 0 ? "landscape" : "square",
  })),
}));

// 10 Company Ads
export const companyAds: GalleryItem[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `ad-${i}`,
  type: "ad",
  src: i % 2 === 0 ? product1 : product2,
  title: `Campaign ${i + 1}`,
  subtitle: "Sponsored",
  company: "Partner Brand",
  aspectRatio: "square",
}));

// 300 E-com Ads
export const ecomItems: GalleryItem[] = Array.from({ length: 300 }).map((_, i) => ({
  id: `ecom-${i}`,
  type: "product",
  src: i % 3 === 0 ? product1 : product2, // Alternating product shots
  title: `Product ${i + 1}`,
  price: `$${(Math.random() * 100 + 10).toFixed(2)}`,
  company: "Shop Now",
  aspectRatio: "portrait", // Products often look good in portrait
}));

// Helper to mix them for a "Feed"
export const feedItems = [
  ...companyAds,
  ...ecomItems
].sort(() => Math.random() - 0.5); // Shuffle for variety
