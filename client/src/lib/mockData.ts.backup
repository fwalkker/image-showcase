export type ItemType = "photo" | "ad" | "product" | "wordAd";

export interface GalleryItem {
  id: string;
  type: ItemType;
  src: string;
  title: string;
  subtitle?: string;
  company?: string;
  price?: string;
  aspectRatio: "square" | "portrait" | "landscape";
  shotType?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  items: GalleryItem[];
  // Organized by shot type
  advertisingShots: GalleryItem[];
  lifestyleShots: GalleryItem[];
  ecomShots: GalleryItem[];
}

// Word Ads for Hero Section (10 images)
export const wordAds: GalleryItem[] = [
  { id: "word-1", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_6sgwln6sgwln6sgw.webp", title: "Word Ad 1", aspectRatio: "landscape" },
  { id: "word-2", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_8etlq88etlq88etl.webp", title: "Word Ad 2", aspectRatio: "landscape" },
  { id: "word-3", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_dwz4g4dwz4g4dwz4.webp", title: "Word Ad 3", aspectRatio: "landscape" },
  { id: "word-4", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_e1fy3xe1fy3xe1fy.webp", title: "Word Ad 4", aspectRatio: "landscape" },
  { id: "word-5", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_jqlbdyjqlbdyjqlb.webp", title: "Word Ad 5", aspectRatio: "landscape" },
  { id: "word-6", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_o4naglo4naglo4na.webp", title: "Word Ad 6", aspectRatio: "landscape" },
  { id: "word-7", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_ox4yn7ox4yn7ox4y.webp", title: "Word Ad 7", aspectRatio: "landscape" },
  { id: "word-8", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_qkw3acqkw3acqkw3.webp", title: "Word Ad 8", aspectRatio: "landscape" },
  { id: "word-9", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_shcay3shcay3shca.webp", title: "Word Ad 9", aspectRatio: "landscape" },
  { id: "word-10", type: "wordAd", src: "/images-out/public/images-in/Word ads/Gemini_Generated_Image_tasgeltasgeltasg.webp", title: "Word Ad 10", aspectRatio: "landscape" },
];

// Shot type definitions for organizing images
const ADVERTISING_SHOT_ORDER = [
  "Fantasy",
  "Levitation", "Levetation", "Levatation", // spelling variations
  "Splash", "SplashDynamicMotion", "Dynamic",
  "HardShadow", "Hardshadow",
  "Reflection", "Reflective",
  "Glow",
  "IngredientSpread", "IngedSpread",
];

const LIFESTYLE_SHOT_ORDER = [
  "MterialCloseUp", "MatCloseUp", "Matcloseup", // Material Close-Up
  "Branding", "BrandingCloseUp",
  "ActionTexture",
  "ApplicatorDispenser", "Application",
  "HandHeld", "Handheld",
  "IntheBag", "Inthebag",
  "EnvWide", "Env",
  "HumanInteraction",
  "Social",
];

const ECOM_SHOT_ORDER = [
  "Hero", "Front",
  "45Degree", "45degreeProfile",
  "Back", "BackProfile",
  "Side", "SideProfile",
  "TopDown",
  "Open",
  "Packaging", "Pcakaging",
  "Spine",
];

// Helper function to find shot type from filename
function getShotType(filename: string): string {
  const match = filename.match(/\(([^)]+)\)/);
  return match ? match[1] : "";
}

// Helper function to categorize and sort images
function categorizeImages(items: GalleryItem[], basePath: string, company: string) {
  const advertising: GalleryItem[] = [];
  const lifestyle: GalleryItem[] = [];
  const ecom: GalleryItem[] = [];

  items.forEach(item => {
    const shotType = getShotType(item.src);
    item.shotType = shotType;

    if (ADVERTISING_SHOT_ORDER.some(s => shotType.toLowerCase().includes(s.toLowerCase()))) {
      advertising.push(item);
    } else if (LIFESTYLE_SHOT_ORDER.some(s => shotType.toLowerCase().includes(s.toLowerCase()))) {
      lifestyle.push(item);
    } else if (ECOM_SHOT_ORDER.some(s => shotType.toLowerCase().includes(s.toLowerCase()))) {
      ecom.push(item);
    } else {
      // Default to lifestyle if unknown
      lifestyle.push(item);
    }
  });

  // Sort each category by the defined order
  const sortByOrder = (arr: GalleryItem[], order: string[]) => {
    return arr.sort((a, b) => {
      const aType = a.shotType || "";
      const bType = b.shotType || "";
      const aIndex = order.findIndex(o => aType.toLowerCase().includes(o.toLowerCase()));
      const bIndex = order.findIndex(o => bType.toLowerCase().includes(o.toLowerCase()));
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });
  };

  return {
    advertising: sortByOrder(advertising, ADVERTISING_SHOT_ORDER),
    lifestyle: sortByOrder(lifestyle, LIFESTYLE_SHOT_ORDER),
    ecom: sortByOrder(ecom, ECOM_SHOT_ORDER),
  };
}

// Copper Kettle Kitchen
const copper_kettle_kitchen_all: GalleryItem[] = [
  { id: "c1-img-1", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(45degreeProfile).webp", title: "45° Profile", company: "Copper Kettle Kitchen", aspectRatio: "portrait" },
  { id: "c1-img-2", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(ActionTexture).webp", title: "Action Texture", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-3", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(ApplicatorDispenser).webp", title: "Applicator", company: "Copper Kettle Kitchen", aspectRatio: "square" },
  { id: "c1-img-4", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(BackProfile).webp", title: "Back Profile", company: "Copper Kettle Kitchen", aspectRatio: "portrait" },
  { id: "c1-img-5", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(BrandingCloseUp).webp", title: "Branding Close-Up", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-6", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(EnvWide).webp", title: "Environmental Wide", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-7", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Fantasy).webp", title: "Fantasy", company: "Copper Kettle Kitchen", aspectRatio: "portrait" },
  { id: "c1-img-8", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Glow).webp", title: "Glow", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-9", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(HandHeld).webp", title: "Hand-Held POV", company: "Copper Kettle Kitchen", aspectRatio: "square" },
  { id: "c1-img-10", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(HardShadow).webp", title: "Hard Shadow", company: "Copper Kettle Kitchen", aspectRatio: "portrait" },
  { id: "c1-img-11", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Hero).webp", title: "Hero", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-12", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(HumanInteraction).webp", title: "Human Interaction", company: "Copper Kettle Kitchen", aspectRatio: "square" },
  { id: "c1-img-13", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(IngedSpread).webp", title: "Ingredients Spread", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-14", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(IntheBag).webp", title: "In the Bag", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-15", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Levetation).webp", title: "Levitation", company: "Copper Kettle Kitchen", aspectRatio: "portrait" },
  { id: "c1-img-16", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(MterialCloseUp).webp", title: "Material Close-Up", company: "Copper Kettle Kitchen", aspectRatio: "square" },
  { id: "c1-img-17", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Packaging).webp", title: "Packaging", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-18", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Reflective).webp", title: "Reflection", company: "Copper Kettle Kitchen", aspectRatio: "square" },
  { id: "c1-img-19", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(SideProfile).webp", title: "Side Profile", company: "Copper Kettle Kitchen", aspectRatio: "portrait" },
  { id: "c1-img-20", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(SplashDynamicMotion).webp", title: "Splash / Dynamic Motion", company: "Copper Kettle Kitchen", aspectRatio: "landscape" },
  { id: "c1-img-21", type: "photo", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(TopDown).webp", title: "Top-Down", company: "Copper Kettle Kitchen", aspectRatio: "square" },
];

const copper_kettle_categorized = categorizeImages(copper_kettle_kitchen_all, "/webp/portfolio/copper-kettle-kitchen/", "Copper Kettle Kitchen");

// Drift Coffee
const drift_coffee_all: GalleryItem[] = [
  { id: "c2-img-1", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(45Degree).webp", title: "45° Angle", company: "Drift Coffee", aspectRatio: "portrait" },
  { id: "c2-img-2", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(ActionTexture).webp", title: "Action Texture", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-3", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Application).webp", title: "Application", company: "Drift Coffee", aspectRatio: "square" },
  { id: "c2-img-4", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Back).webp", title: "Back", company: "Drift Coffee", aspectRatio: "portrait" },
  { id: "c2-img-5", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Branding).webp", title: "Branding", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-6", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Env).webp", title: "Environmental", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-7", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Fantasy).webp", title: "Fantasy", company: "Drift Coffee", aspectRatio: "portrait" },
  { id: "c2-img-8", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Front).webp", title: "Front Hero", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-9", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Glow).webp", title: "Glow", company: "Drift Coffee", aspectRatio: "portrait" },
  { id: "c2-img-10", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(HandHeld).webp", title: "Hand-Held POV", company: "Drift Coffee", aspectRatio: "square" },
  { id: "c2-img-11", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(HardShadow).webp", title: "Hard Shadow", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-12", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(HumanInteraction).webp", title: "Human Interaction", company: "Drift Coffee", aspectRatio: "square" },
  { id: "c2-img-13", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(IngredientSpread).webp", title: "Ingredients Spread", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-14", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(IntheBag).webp", title: "In the Bag", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-15", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Levitation).webp", title: "Levitation", company: "Drift Coffee", aspectRatio: "portrait" },
  { id: "c2-img-16", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(MatCloseUp).webp", title: "Material Close-Up", company: "Drift Coffee", aspectRatio: "square" },
  { id: "c2-img-17", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Open).webp", title: "Open Shot", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-18", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Packaging).webp", title: "Packaging", company: "Drift Coffee", aspectRatio: "square" },
  { id: "c2-img-19", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Reflection).webp", title: "Reflection", company: "Drift Coffee", aspectRatio: "portrait" },
  { id: "c2-img-20", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Side).webp", title: "Side Profile", company: "Drift Coffee", aspectRatio: "landscape" },
  { id: "c2-img-21", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Social).webp", title: "Social Shot", company: "Drift Coffee", aspectRatio: "square" },
  { id: "c2-img-22", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(Splash).webp", title: "Splash", company: "Drift Coffee", aspectRatio: "portrait" },
  { id: "c2-img-23", type: "photo", src: "/webp/portfolio/drift-coffee/DriftCoffee(TopDown).webp", title: "Top-Down", company: "Drift Coffee", aspectRatio: "landscape" },
];

const drift_coffee_categorized = categorizeImages(drift_coffee_all, "/webp/portfolio/drift-coffee/", "Drift Coffee");

// Vespera
const vespera_all: GalleryItem[] = [
  { id: "c3-img-1", type: "photo", src: "/webp/portfolio/vespera/Vespara(45Degree).webp", title: "45° Angle", company: "Vespera", aspectRatio: "portrait" },
  { id: "c3-img-2", type: "photo", src: "/webp/portfolio/vespera/Vespara(ActionTexture).webp", title: "Action Texture", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-3", type: "photo", src: "/webp/portfolio/vespera/Vespara(Application).webp", title: "Application", company: "Vespera", aspectRatio: "square" },
  { id: "c3-img-4", type: "photo", src: "/webp/portfolio/vespera/Vespara(Back).webp", title: "Back", company: "Vespera", aspectRatio: "portrait" },
  { id: "c3-img-5", type: "photo", src: "/webp/portfolio/vespera/Vespara(Branding).webp", title: "Branding", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-6", type: "photo", src: "/webp/portfolio/vespera/Vespara(Dynamic).webp", title: "Dynamic Motion", company: "Vespera", aspectRatio: "portrait" },
  { id: "c3-img-7", type: "photo", src: "/webp/portfolio/vespera/Vespara(Env).webp", title: "Environmental", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-8", type: "photo", src: "/webp/portfolio/vespera/Vespara(Fantasy).webp", title: "Fantasy", company: "Vespera", aspectRatio: "portrait" },
  { id: "c3-img-9", type: "photo", src: "/webp/portfolio/vespera/Vespara(Front).webp", title: "Front Hero", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-10", type: "photo", src: "/webp/portfolio/vespera/Vespara(Glow).webp", title: "Glow", company: "Vespera", aspectRatio: "portrait" },
  { id: "c3-img-11", type: "photo", src: "/webp/portfolio/vespera/Vespara(Handheld).webp", title: "Hand-Held POV", company: "Vespera", aspectRatio: "square" },
  { id: "c3-img-12", type: "photo", src: "/webp/portfolio/vespera/Vespara(HardShadow).webp", title: "Hard Shadow", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-13", type: "photo", src: "/webp/portfolio/vespera/Vespara(HumanInteraction).webp", title: "Human Interaction", company: "Vespera", aspectRatio: "square" },
  { id: "c3-img-14", type: "photo", src: "/webp/portfolio/vespera/Vespara(IngredientSpread).webp", title: "Ingredients Spread", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-15", type: "photo", src: "/webp/portfolio/vespera/Vespara(Inthebag).webp", title: "In the Bag", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-16", type: "photo", src: "/webp/portfolio/vespera/Vespara(Levatation).webp", title: "Levitation", company: "Vespera", aspectRatio: "portrait" },
  { id: "c3-img-17", type: "photo", src: "/webp/portfolio/vespera/Vespara(Matcloseup).webp", title: "Material Close-Up", company: "Vespera", aspectRatio: "square" },
  { id: "c3-img-18", type: "photo", src: "/webp/portfolio/vespera/Vespara(Open).webp", title: "Open Shot", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-19", type: "photo", src: "/webp/portfolio/vespera/Vespara(Packaging).webp", title: "Packaging", company: "Vespera", aspectRatio: "square" },
  { id: "c3-img-20", type: "photo", src: "/webp/portfolio/vespera/Vespara(Reflection).webp", title: "Reflection", company: "Vespera", aspectRatio: "portrait" },
  { id: "c3-img-21", type: "photo", src: "/webp/portfolio/vespera/Vespara(Side).webp", title: "Side Profile", company: "Vespera", aspectRatio: "landscape" },
  { id: "c3-img-22", type: "photo", src: "/webp/portfolio/vespera/Vespara(Social).webp", title: "Social Shot", company: "Vespera", aspectRatio: "square" },
  { id: "c3-img-23", type: "photo", src: "/webp/portfolio/vespera/Vespara(TopDown).webp", title: "Top-Down", company: "Vespera", aspectRatio: "landscape" },
];

const vespera_categorized = categorizeImages(vespera_all, "/webp/portfolio/vespera/", "Vespera");

// Wayward Studio
const wayward_studio_all: GalleryItem[] = [
  { id: "c4-img-1", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(45Degree).webp", title: "45° Angle", company: "Wayward Studio", aspectRatio: "portrait" },
  { id: "c4-img-2", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(ActionTexture).webp", title: "Action Texture", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-3", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Application).webp", title: "Application", company: "Wayward Studio", aspectRatio: "square" },
  { id: "c4-img-4", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Back).webp", title: "Back", company: "Wayward Studio", aspectRatio: "portrait" },
  { id: "c4-img-5", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Branding).webp", title: "Branding", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-6", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Dynamic).webp", title: "Dynamic Motion", company: "Wayward Studio", aspectRatio: "portrait" },
  { id: "c4-img-7", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Env).webp", title: "Environmental", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-8", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Glow).webp", title: "Glow", company: "Wayward Studio", aspectRatio: "portrait" },
  { id: "c4-img-9", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(HandHeld).webp", title: "Hand-Held POV", company: "Wayward Studio", aspectRatio: "square" },
  { id: "c4-img-10", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Hardshadow).webp", title: "Hard Shadow", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-11", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Hero).webp", title: "Hero", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-12", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(HumanInteraction).webp", title: "Human Interaction", company: "Wayward Studio", aspectRatio: "square" },
  { id: "c4-img-13", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(IngredientSpread).webp", title: "Ingredients Spread", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-14", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Inthebag).webp", title: "In the Bag", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-15", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Levitation).webp", title: "Levitation", company: "Wayward Studio", aspectRatio: "portrait" },
  { id: "c4-img-16", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(MatCloseUp).webp", title: "Material Close-Up", company: "Wayward Studio", aspectRatio: "square" },
  { id: "c4-img-17", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Open).webp", title: "Open Shot", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-18", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Pcakaging).webp", title: "Packaging", company: "Wayward Studio", aspectRatio: "square" },
  { id: "c4-img-19", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Reflection).webp", title: "Reflection", company: "Wayward Studio", aspectRatio: "portrait" },
  { id: "c4-img-20", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(side.webp", title: "Side Profile", company: "Wayward Studio", aspectRatio: "landscape" },
  { id: "c4-img-21", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Social).webp", title: "Social Shot", company: "Wayward Studio", aspectRatio: "square" },
  { id: "c4-img-22", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(Spine).webp", title: "Spine", company: "Wayward Studio", aspectRatio: "portrait" },
  { id: "c4-img-23", type: "photo", src: "/webp/portfolio/wayward-studio/WaywardStudio(TopDown).webp", title: "Top-Down", company: "Wayward Studio", aspectRatio: "landscape" },
];

const wayward_studio_categorized = categorizeImages(wayward_studio_all, "/webp/portfolio/wayward-studio/", "Wayward Studio");

export const collections: Collection[] = [
  {
    id: "c1",
    name: "Copper Kettle Kitchen",
    description: "Artisanal kitchenware & gourmet essentials.",
    coverImage: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Hero).webp",
    items: copper_kettle_kitchen_all,
    advertisingShots: copper_kettle_categorized.advertising,
    lifestyleShots: copper_kettle_categorized.lifestyle,
    ecomShots: copper_kettle_categorized.ecom,
  },
  {
    id: "c2",
    name: "Drift Coffee",
    description: "Premium coffee roasters & brewing experiences.",
    coverImage: "/webp/portfolio/drift-coffee/DriftCoffee(Fantasy).webp",
    items: drift_coffee_all,
    advertisingShots: drift_coffee_categorized.advertising,
    lifestyleShots: drift_coffee_categorized.lifestyle,
    ecomShots: drift_coffee_categorized.ecom,
  },
  {
    id: "c3",
    name: "Vespera",
    description: "Luxury skincare & beauty.",
    coverImage: "/webp/portfolio/vespera/Vespara(Fantasy).webp",
    items: vespera_all,
    advertisingShots: vespera_categorized.advertising,
    lifestyleShots: vespera_categorized.lifestyle,
    ecomShots: vespera_categorized.ecom,
  },
  {
    id: "c4",
    name: "Wayward Studio",
    description: "Contemporary design & lifestyle goods.",
    coverImage: "/webp/portfolio/wayward-studio/WaywardStudio(Hero).webp",
    items: wayward_studio_all,
    advertisingShots: wayward_studio_categorized.advertising,
    lifestyleShots: wayward_studio_categorized.lifestyle,
    ecomShots: wayward_studio_categorized.ecom,
  },
];

// E-commerce Products
export const ecomItems: GalleryItem[] = [
  { id: "ecom-1", type: "product", src: "/webp/Ecom Suit of Photos/AquaPrism - Water Bottle Product.webp", title: "AquaPrism Water Bottle", price: "$77.62", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-2", type: "product", src: "/webp/Ecom Suit of Photos/Baroque-Pearl-Earrings-gold-hooks.webp", title: "Baroque Pearl Earrings", price: "$59.43", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-3", type: "product", src: "/webp/Ecom Suit of Photos/Basin & Range - Lip Balm.webp", title: "Basin & Range Lip Balm", price: "$19.92", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-4", type: "product", src: "/webp/Ecom Suit of Photos/bath-soak-front.webp", title: "Bath Soak", price: "$39.92", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-5", type: "product", src: "/webp/Ecom Suit of Photos/birdhouse-front.webp", title: "Artisan Birdhouse", price: "$89.84", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-6", type: "product", src: "/webp/Ecom Suit of Photos/bottle-opener-front.webp", title: "Bottle Opener", price: "$59.42", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-7", type: "product", src: "/webp/Ecom Suit of Photos/Brambleberry-Farm-Preserves-trio-simple.webp", title: "Brambleberry Preserves", price: "$67.61", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-8", type: "product", src: "/webp/Ecom Suit of Photos/butter-dish-front.webp", title: "Ceramic Butter Dish", price: "$77.40", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-9", type: "product", src: "/webp/Ecom Suit of Photos/Cable-Knit-Sweater-cream-flatlay.webp", title: "Cable Knit Sweater", price: "$39.27", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-10", type: "product", src: "/webp/Ecom Suit of Photos/Canvas-Apron-leather-straps-flatlay.webp", title: "Canvas Apron", price: "$34.80", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-11", type: "product", src: "/webp/Ecom Suit of Photos/Cellar Door Vinegars - Apple Cider Vinegar.webp", title: "Apple Cider Vinegar", price: "$93.85", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-12", type: "product", src: "/webp/Ecom Suit of Photos/Clover & Cream - Cosmetic Jar.webp", title: "Clover & Cream Cosmetic", price: "$62.57", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-13", type: "product", src: "/webp/Ecom Suit of Photos/coasters-front.webp", title: "Artisan Coasters", price: "$63.44", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-14", type: "product", src: "/webp/Ecom Suit of Photos/coffee-bag-front.webp", title: "Specialty Coffee", price: "$103.15", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-15", type: "product", src: "/webp/Ecom Suit of Photos/Copper & Thread - Tote Bag.webp", title: "Copper & Thread Tote", price: "$36.16", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-16", type: "product", src: "/webp/Ecom Suit of Photos/crystal-set-front.webp", title: "Crystal Set", price: "$62.73", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-17", type: "product", src: "/webp/Ecom Suit of Photos/Cured-Crafted-Charcuterie-Selection-angle.webp", title: "Charcuterie Selection", price: "$42.83", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-18", type: "product", src: "/webp/Ecom Suit of Photos/Denim-Jacket-raw-selvedge-front-flatlay.webp", title: "Raw Selvedge Denim", price: "$101.83", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-19", type: "product", src: "/webp/Ecom Suit of Photos/diffuser-front.webp", title: "Reed Diffuser", price: "$78.69", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-20", type: "product", src: "/webp/Ecom Suit of Photos/Fireside Preserves - Strawberry Jam.webp", title: "Strawberry Jam", price: "$35.01", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-21", type: "product", src: "/webp/Ecom Suit of Photos/FloraZen - Levitating Planter.webp", title: "Levitating Planter", price: "$87.52", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-22", type: "product", src: "/webp/Ecom Suit of Photos/Gilt-Gemstone-Opal-Pendant-necklace-front.webp", title: "Opal Pendant Necklace", price: "$37.43", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-23", type: "product", src: "/webp/Ecom Suit of Photos/granola-bag-front.webp", title: "Artisan Granola", price: "$23.15", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-24", type: "product", src: "/webp/Ecom Suit of Photos/Hive & Harvest - Honey Jar.webp", title: "Raw Honey", price: "$31.05", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-25", type: "product", src: "/webp/Ecom Suit of Photos/hot-sauce-front.webp", title: "Artisan Hot Sauce", price: "$48.37", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-26", type: "product", src: "/webp/Ecom Suit of Photos/Kindred Spirits Pottery - Butter Dish.webp", title: "Pottery Butter Dish", price: "$53.59", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-27", type: "product", src: "/webp/Ecom Suit of Photos/knit-blanket-front.webp", title: "Chunky Knit Blanket", price: "$66.50", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-28", type: "product", src: "/webp/Ecom Suit of Photos/leather-journal-front.webp", title: "Leather Journal", price: "$31.76", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-29", type: "product", src: "/webp/Ecom Suit of Photos/Little Bear Knits - Baby Booties.webp", title: "Baby Booties", price: "$100.86", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-30", type: "product", src: "/webp/Ecom Suit of Photos/maple-syrup-front.webp", title: "Maple Syrup", price: "$42.98", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-31", type: "product", src: "/webp/Ecom Suit of Photos/Meadow Botanics - Dried Flower Bouquet.webp", title: "Dried Flower Bouquet", price: "$98.39", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-32", type: "product", src: "/webp/Ecom Suit of Photos/Midnight Oil Studio - Candle.webp", title: "Midnight Oil Candle", price: "$81.43", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-33", type: "product", src: "/webp/Ecom Suit of Photos/Midnight-Adorn-Silver-Cuff-wave-pattern.webp", title: "Silver Wave Cuff", price: "$73.92", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-34", type: "product", src: "/webp/Ecom Suit of Photos/Moss Fern Studio - Macrame Plant Hanger.webp", title: "Macrame Plant Hanger", price: "$51.92", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-35", type: "product", src: "/webp/Ecom Suit of Photos/Northwood Candle Co - Candle.webp", title: "Northwood Candle", price: "$43.89", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-36", type: "product", src: "/webp/Ecom Suit of Photos/notebooks-front.webp", title: "Artisan Notebooks", price: "$98.79", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-37", type: "product", src: "/webp/Ecom Suit of Photos/Olive-Thyme-Infused-Oils-trio-front.webp", title: "Infused Oils Trio", price: "$49.66", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-38", type: "product", src: "/webp/Ecom Suit of Photos/Paradox Glass - Sculpture.webp", title: "Glass Sculpture", price: "$30.23", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-39", type: "product", src: "/webp/Ecom Suit of Photos/raku-bowl-front.webp", title: "Raku Bowl", price: "$92.09", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-40", type: "product", src: "/webp/Ecom Suit of Photos/River Stone Jewelry - Hoop Earrings.webp", title: "Stone Hoop Earrings", price: "$71.46", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-41", type: "product", src: "/webp/Ecom Suit of Photos/Rooted Paper Co - Stationery.webp", title: "Handmade Stationery", price: "$54.65", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-42", type: "product", src: "/webp/Ecom Suit of Photos/Saffron-Supper-Spice-Jars-6-pack.webp", title: "Spice Jars Set", price: "$22.60", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-43", type: "product", src: "/webp/Ecom Suit of Photos/Salt & Sage Soap - Lavender Bar.webp", title: "Lavender Soap Bar", price: "$99.72", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-44", type: "product", src: "/webp/Ecom Suit of Photos/Silk-Kimono-Robe-blue-cream-model-front.webp", title: "Silk Kimono Robe", price: "$23.01", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-45", type: "product", src: "/webp/Ecom Suit of Photos/Thistle & Thorn - Jewelry Dish.webp", title: "Jewelry Dish", price: "$85.83", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-46", type: "product", src: "/webp/Ecom Suit of Photos/Thistle-Vine-Gold-Rings-gemstones-front.webp", title: "Gold Gemstone Ring", price: "$90.49", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-47", type: "product", src: "/webp/Ecom Suit of Photos/Wildflower-Confections-Lavender-Caramels-gift-box.webp", title: "Lavender Caramels", price: "$72.52", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-48", type: "product", src: "/webp/Ecom Suit of Photos/Willow & Stone Pottery - Mug.webp", title: "Pottery Mug", price: "$27.85", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-49", type: "product", src: "/webp/Ecom Suit of Photos/wooden-bowl-front.webp", title: "Wooden Bowl", price: "$53.38", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-50", type: "product", src: "/webp/Ecom Suit of Photos/Wool-Throw-Blanket-folded-front.webp", title: "Wool Throw Blanket", price: "$48.48", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-51", type: "product", src: "/webp/Ecom Suit of Photos/Wren & Sparrow - Phone Case.webp", title: "Artisan Phone Case", price: "$21.71", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-52", type: "product", src: "/webp/Ecom Suit of Photos/yellow-pot-front.webp", title: "Ceramic Planter", price: "$98.64", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-53", type: "product", src: "/webp/Ecom Suit of Photos/tea-tin-front.webp", title: "Tea Tin", price: "$29.73", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-54", type: "product", src: "/webp/Ecom Suit of Photos/tincture-front.webp", title: "Herbal Tincture", price: "$51.28", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-55", type: "product", src: "/webp/Ecom Suit of Photos/trail-mix-front.webp", title: "Trail Mix", price: "$63.80", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-56", type: "product", src: "/webp/Ecom Suit of Photos/trivet-front.webp", title: "Wooden Trivet", price: "$74.57", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-57", type: "product", src: "/webp/Ecom Suit of Photos/vinegar-bottle-front.webp", title: "Artisan Vinegar", price: "$55.47", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-58", type: "product", src: "/webp/Ecom Suit of Photos/shampoo-bar-front.webp", title: "Shampoo Bar", price: "$26.63", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-59", type: "product", src: "/webp/Ecom Suit of Photos/lip-balm-front.webp", title: "Lip Balm", price: "$21.55", company: "Shop Now", aspectRatio: "portrait" },
  { id: "ecom-60", type: "product", src: "/webp/Ecom Suit of Photos/jam-jar-front.webp", title: "Artisan Jam", price: "$54.58", company: "Shop Now", aspectRatio: "portrait" },
];

// Company Ads (using hero/fantasy images from collections)
export const companyAds: GalleryItem[] = [
  { id: "ad-1", type: "ad", src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Fantasy).webp", title: "Copper Kettle Fantasy", subtitle: "Sponsored", company: "Copper Kettle Kitchen", aspectRatio: "square" },
  { id: "ad-2", type: "ad", src: "/webp/portfolio/drift-coffee/DriftCoffee(Fantasy).webp", title: "Drift Coffee Fantasy", subtitle: "Sponsored", company: "Drift Coffee", aspectRatio: "square" },
  { id: "ad-3", type: "ad", src: "/webp/portfolio/vespera/Vespara(Fantasy).webp", title: "Vespera Fantasy", subtitle: "Sponsored", company: "Vespera", aspectRatio: "square" },
  { id: "ad-4", type: "ad", src: "/webp/portfolio/wayward-studio/WaywardStudio(Hero).webp", title: "Wayward Studio Hero", subtitle: "Sponsored", company: "Wayward Studio", aspectRatio: "square" },
];

// Feed Items (mixed ads and products)
export const feedItems = [...companyAds, ...ecomItems];
