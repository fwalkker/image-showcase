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

// Portfolio Collections

// Copper Kettle Kitchen
const copper_kettle_kitchen_items: GalleryItem[] = [
  {
    id: "c1-img-1",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(45degreeProfile).webp",
    title: "Copper Kettle Kitchen 45degreeProfile",
    company: "Copper Kettle Kitchen",
    aspectRatio: "portrait"
  },
  {
    id: "c1-img-2",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(ActionTexture).webp",
    title: "Copper Kettle Kitchen ActionTexture",
    company: "Copper Kettle Kitchen",
    aspectRatio: "landscape"
  },
  {
    id: "c1-img-3",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(ApplicatorDispenser).webp",
    title: "Copper Kettle Kitchen ApplicatorDispenser",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "c1-img-4",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(BackProfile).webp",
    title: "Copper Kettle Kitchen BackProfile",
    company: "Copper Kettle Kitchen",
    aspectRatio: "portrait"
  },
  {
    id: "c1-img-5",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(BrandingCloseUp).webp",
    title: "Copper Kettle Kitchen BrandingCloseUp",
    company: "Copper Kettle Kitchen",
    aspectRatio: "landscape"
  },
  {
    id: "c1-img-6",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(EnvWide).webp",
    title: "Copper Kettle Kitchen EnvWide",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "c1-img-7",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Fantasy).webp",
    title: "Copper Kettle Kitchen Fantasy",
    company: "Copper Kettle Kitchen",
    aspectRatio: "portrait"
  },
  {
    id: "c1-img-8",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Glow).webp",
    title: "Copper Kettle Kitchen Glow",
    company: "Copper Kettle Kitchen",
    aspectRatio: "landscape"
  },
  {
    id: "c1-img-9",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(HandHeld).webp",
    title: "Copper Kettle Kitchen HandHeld",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "c1-img-10",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(HardShadow).webp",
    title: "Copper Kettle Kitchen HardShadow",
    company: "Copper Kettle Kitchen",
    aspectRatio: "portrait"
  },
  {
    id: "c1-img-11",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Hero).webp",
    title: "Copper Kettle Kitchen Hero",
    company: "Copper Kettle Kitchen",
    aspectRatio: "landscape"
  },
  {
    id: "c1-img-12",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(HumanInteraction).webp",
    title: "Copper Kettle Kitchen HumanInteraction",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "c1-img-13",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(IngedSpread).webp",
    title: "Copper Kettle Kitchen IngedSpread",
    company: "Copper Kettle Kitchen",
    aspectRatio: "portrait"
  },
  {
    id: "c1-img-14",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(IntheBag).webp",
    title: "Copper Kettle Kitchen IntheBag",
    company: "Copper Kettle Kitchen",
    aspectRatio: "landscape"
  },
  {
    id: "c1-img-15",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Levetation).webp",
    title: "Copper Kettle Kitchen Levetation",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "c1-img-16",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(MterialCloseUp).webp",
    title: "Copper Kettle Kitchen MterialCloseUp",
    company: "Copper Kettle Kitchen",
    aspectRatio: "portrait"
  },
  {
    id: "c1-img-17",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Packaging).webp",
    title: "Copper Kettle Kitchen Packaging",
    company: "Copper Kettle Kitchen",
    aspectRatio: "landscape"
  },
  {
    id: "c1-img-18",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Reflective).webp",
    title: "Copper Kettle Kitchen Reflective",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "c1-img-19",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(SideProfile).webp",
    title: "Copper Kettle Kitchen SideProfile",
    company: "Copper Kettle Kitchen",
    aspectRatio: "portrait"
  },
  {
    id: "c1-img-20",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(SplashDynamicMotion).webp",
    title: "Copper Kettle Kitchen SplashDynamicMotion",
    company: "Copper Kettle Kitchen",
    aspectRatio: "landscape"
  },
  {
    id: "c1-img-21",
    type: "photo",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(TopDown).webp",
    title: "Copper Kettle Kitchen TopDown",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
];

// Drift Coffee
const drift_coffee_items: GalleryItem[] = [
  {
    id: "c2-img-1",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(45Degree).webp",
    title: "DriftCoffee 45Degree",
    company: "Drift Coffee",
    aspectRatio: "portrait"
  },
  {
    id: "c2-img-2",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(ActionTexture).webp",
    title: "DriftCoffee ActionTexture",
    company: "Drift Coffee",
    aspectRatio: "landscape"
  },
  {
    id: "c2-img-3",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Application).webp",
    title: "DriftCoffee Application",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "c2-img-4",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Back).webp",
    title: "DriftCoffee Back",
    company: "Drift Coffee",
    aspectRatio: "portrait"
  },
  {
    id: "c2-img-5",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Branding).webp",
    title: "DriftCoffee Branding",
    company: "Drift Coffee",
    aspectRatio: "landscape"
  },
  {
    id: "c2-img-6",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Env).webp",
    title: "DriftCoffee Env",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "c2-img-7",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Fantasy).webp",
    title: "DriftCoffee Fantasy",
    company: "Drift Coffee",
    aspectRatio: "portrait"
  },
  {
    id: "c2-img-8",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Front).webp",
    title: "DriftCoffee Front",
    company: "Drift Coffee",
    aspectRatio: "landscape"
  },
  {
    id: "c2-img-9",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Glow).webp",
    title: "DriftCoffee Glow",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "c2-img-10",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(HandHeld).webp",
    title: "DriftCoffee HandHeld",
    company: "Drift Coffee",
    aspectRatio: "portrait"
  },
  {
    id: "c2-img-11",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(HardShadow).webp",
    title: "DriftCoffee HardShadow",
    company: "Drift Coffee",
    aspectRatio: "landscape"
  },
  {
    id: "c2-img-12",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(HumanInteraction).webp",
    title: "DriftCoffee HumanInteraction",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "c2-img-13",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(IngredientSpread).webp",
    title: "DriftCoffee IngredientSpread",
    company: "Drift Coffee",
    aspectRatio: "portrait"
  },
  {
    id: "c2-img-14",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(IntheBag).webp",
    title: "DriftCoffee IntheBag",
    company: "Drift Coffee",
    aspectRatio: "landscape"
  },
  {
    id: "c2-img-15",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Levitation).webp",
    title: "DriftCoffee Levitation",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "c2-img-16",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(MatCloseUp).webp",
    title: "DriftCoffee MatCloseUp",
    company: "Drift Coffee",
    aspectRatio: "portrait"
  },
  {
    id: "c2-img-17",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Open).webp",
    title: "DriftCoffee Open",
    company: "Drift Coffee",
    aspectRatio: "landscape"
  },
  {
    id: "c2-img-18",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Packaging).webp",
    title: "DriftCoffee Packaging",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "c2-img-19",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Reflection).webp",
    title: "DriftCoffee Reflection",
    company: "Drift Coffee",
    aspectRatio: "portrait"
  },
  {
    id: "c2-img-20",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Side).webp",
    title: "DriftCoffee Side",
    company: "Drift Coffee",
    aspectRatio: "landscape"
  },
  {
    id: "c2-img-21",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Social).webp",
    title: "DriftCoffee Social",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "c2-img-22",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(Splash).webp",
    title: "DriftCoffee Splash",
    company: "Drift Coffee",
    aspectRatio: "portrait"
  },
  {
    id: "c2-img-23",
    type: "photo",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(TopDown).webp",
    title: "DriftCoffee TopDown",
    company: "Drift Coffee",
    aspectRatio: "landscape"
  },
];

// Vespera
const vespera_items: GalleryItem[] = [
  {
    id: "c3-img-1",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(45Degree).webp",
    title: "Vespara 45Degree",
    company: "Vespera",
    aspectRatio: "portrait"
  },
  {
    id: "c3-img-2",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(ActionTexture).webp",
    title: "Vespara ActionTexture",
    company: "Vespera",
    aspectRatio: "landscape"
  },
  {
    id: "c3-img-3",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Application).webp",
    title: "Vespara Application",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "c3-img-4",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Back).webp",
    title: "Vespara Back",
    company: "Vespera",
    aspectRatio: "portrait"
  },
  {
    id: "c3-img-5",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Branding).webp",
    title: "Vespara Branding",
    company: "Vespera",
    aspectRatio: "landscape"
  },
  {
    id: "c3-img-6",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Dynamic).webp",
    title: "Vespara Dynamic",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "c3-img-7",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Env).webp",
    title: "Vespara Env",
    company: "Vespera",
    aspectRatio: "portrait"
  },
  {
    id: "c3-img-8",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Fantasy).webp",
    title: "Vespara Fantasy",
    company: "Vespera",
    aspectRatio: "landscape"
  },
  {
    id: "c3-img-9",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Front).webp",
    title: "Vespara Front",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "c3-img-10",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Glow).webp",
    title: "Vespara Glow",
    company: "Vespera",
    aspectRatio: "portrait"
  },
  {
    id: "c3-img-11",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Handheld).webp",
    title: "Vespara Handheld",
    company: "Vespera",
    aspectRatio: "landscape"
  },
  {
    id: "c3-img-12",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(HardShadow).webp",
    title: "Vespara HardShadow",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "c3-img-13",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(HumanInteraction).webp",
    title: "Vespara HumanInteraction",
    company: "Vespera",
    aspectRatio: "portrait"
  },
  {
    id: "c3-img-14",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(IngredientSpread).webp",
    title: "Vespara IngredientSpread",
    company: "Vespera",
    aspectRatio: "landscape"
  },
  {
    id: "c3-img-15",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Inthebag).webp",
    title: "Vespara Inthebag",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "c3-img-16",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Levatation).webp",
    title: "Vespara Levatation",
    company: "Vespera",
    aspectRatio: "portrait"
  },
  {
    id: "c3-img-17",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Matcloseup).webp",
    title: "Vespara Matcloseup",
    company: "Vespera",
    aspectRatio: "landscape"
  },
  {
    id: "c3-img-18",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Open).webp",
    title: "Vespara Open",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "c3-img-19",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Packaging).webp",
    title: "Vespara Packaging",
    company: "Vespera",
    aspectRatio: "portrait"
  },
  {
    id: "c3-img-20",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Reflection).webp",
    title: "Vespara Reflection",
    company: "Vespera",
    aspectRatio: "landscape"
  },
  {
    id: "c3-img-21",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Side).webp",
    title: "Vespara Side",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "c3-img-22",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(Social).webp",
    title: "Vespara Social",
    company: "Vespera",
    aspectRatio: "portrait"
  },
  {
    id: "c3-img-23",
    type: "photo",
    src: "/webp/portfolio/vespera/Vespara(TopDown).webp",
    title: "Vespara TopDown",
    company: "Vespera",
    aspectRatio: "landscape"
  },
];

// Wayward Studio
const wayward_studio_items: GalleryItem[] = [
  {
    id: "c4-img-1",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(45Degree).webp",
    title: "WaywardStudio 45Degree",
    company: "Wayward Studio",
    aspectRatio: "portrait"
  },
  {
    id: "c4-img-2",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(ActionTexture).webp",
    title: "WaywardStudio ActionTexture",
    company: "Wayward Studio",
    aspectRatio: "landscape"
  },
  {
    id: "c4-img-3",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Application).webp",
    title: "WaywardStudio Application",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "c4-img-4",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Back).webp",
    title: "WaywardStudio Back",
    company: "Wayward Studio",
    aspectRatio: "portrait"
  },
  {
    id: "c4-img-5",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Branding).webp",
    title: "WaywardStudio Branding",
    company: "Wayward Studio",
    aspectRatio: "landscape"
  },
  {
    id: "c4-img-6",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Dynamic).webp",
    title: "WaywardStudio Dynamic",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "c4-img-7",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Env).webp",
    title: "WaywardStudio Env",
    company: "Wayward Studio",
    aspectRatio: "portrait"
  },
  {
    id: "c4-img-8",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Glow).webp",
    title: "WaywardStudio Glow",
    company: "Wayward Studio",
    aspectRatio: "landscape"
  },
  {
    id: "c4-img-9",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(HandHeld).webp",
    title: "WaywardStudio HandHeld",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "c4-img-10",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Hardshadow).webp",
    title: "WaywardStudio Hardshadow",
    company: "Wayward Studio",
    aspectRatio: "portrait"
  },
  {
    id: "c4-img-11",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Hero).webp",
    title: "WaywardStudio Hero",
    company: "Wayward Studio",
    aspectRatio: "landscape"
  },
  {
    id: "c4-img-12",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(HumanInteraction).webp",
    title: "WaywardStudio HumanInteraction",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "c4-img-13",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(IngredientSpread).webp",
    title: "WaywardStudio IngredientSpread",
    company: "Wayward Studio",
    aspectRatio: "portrait"
  },
  {
    id: "c4-img-14",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Inthebag).webp",
    title: "WaywardStudio Inthebag",
    company: "Wayward Studio",
    aspectRatio: "landscape"
  },
  {
    id: "c4-img-15",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Levitation).webp",
    title: "WaywardStudio Levitation",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "c4-img-16",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(MatCloseUp).webp",
    title: "WaywardStudio MatCloseUp",
    company: "Wayward Studio",
    aspectRatio: "portrait"
  },
  {
    id: "c4-img-17",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Open).webp",
    title: "WaywardStudio Open",
    company: "Wayward Studio",
    aspectRatio: "landscape"
  },
  {
    id: "c4-img-18",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Pcakaging).webp",
    title: "WaywardStudio Pcakaging",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "c4-img-19",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Reflection).webp",
    title: "WaywardStudio Reflection",
    company: "Wayward Studio",
    aspectRatio: "portrait"
  },
  {
    id: "c4-img-20",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(side.webp",
    title: "WaywardStudio side",
    company: "Wayward Studio",
    aspectRatio: "landscape"
  },
  {
    id: "c4-img-21",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Social).webp",
    title: "WaywardStudio Social",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "c4-img-22",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Spine).webp",
    title: "WaywardStudio Spine",
    company: "Wayward Studio",
    aspectRatio: "portrait"
  },
  {
    id: "c4-img-23",
    type: "photo",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(TopDown).webp",
    title: "WaywardStudio TopDown",
    company: "Wayward Studio",
    aspectRatio: "landscape"
  },
];

export const collections: Collection[] = [
  {
    id: "c1",
    name: "Copper Kettle Kitchen",
    description: "Artisanal kitchenware & gourmet essentials.",
    coverImage: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Hero).webp",
    items: copper_kettle_kitchen_items
  },
  {
    id: "c2",
    name: "Drift Coffee",
    description: "Premium coffee roasters & brewing experiences.",
    coverImage: "/webp/portfolio/drift-coffee/DriftCoffee(45Degree).webp",
    items: drift_coffee_items
  },
  {
    id: "c3",
    name: "Vespera",
    description: "Luxury skincare & beauty.",
    coverImage: "/webp/portfolio/vespera/Vespara(45Degree).webp",
    items: vespera_items
  },
  {
    id: "c4",
    name: "Wayward Studio",
    description: "Contemporary design & lifestyle goods.",
    coverImage: "/webp/portfolio/wayward-studio/WaywardStudio(Hero).webp",
    items: wayward_studio_items
  },
];

// Company Ads (using hero images from each collection)
export const companyAds: GalleryItem[] = [
  {
    id: "ad-1",
    type: "ad",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Hero).webp",
    title: "Campaign 1",
    subtitle: "Sponsored",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "ad-2",
    type: "ad",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(45Degree).webp",
    title: "Campaign 2",
    subtitle: "Sponsored",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "ad-3",
    type: "ad",
    src: "/webp/portfolio/vespera/Vespara(45Degree).webp",
    title: "Campaign 3",
    subtitle: "Sponsored",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "ad-4",
    type: "ad",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Hero).webp",
    title: "Campaign 4",
    subtitle: "Sponsored",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "ad-5",
    type: "ad",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Hero).webp",
    title: "Campaign 5",
    subtitle: "Sponsored",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "ad-6",
    type: "ad",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(45Degree).webp",
    title: "Campaign 6",
    subtitle: "Sponsored",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
  {
    id: "ad-7",
    type: "ad",
    src: "/webp/portfolio/vespera/Vespara(45Degree).webp",
    title: "Campaign 7",
    subtitle: "Sponsored",
    company: "Vespera",
    aspectRatio: "square"
  },
  {
    id: "ad-8",
    type: "ad",
    src: "/webp/portfolio/wayward-studio/WaywardStudio(Hero).webp",
    title: "Campaign 8",
    subtitle: "Sponsored",
    company: "Wayward Studio",
    aspectRatio: "square"
  },
  {
    id: "ad-9",
    type: "ad",
    src: "/webp/portfolio/copper-kettle-kitchen/Copper-Kettle-Kitchen(Hero).webp",
    title: "Campaign 9",
    subtitle: "Sponsored",
    company: "Copper Kettle Kitchen",
    aspectRatio: "square"
  },
  {
    id: "ad-10",
    type: "ad",
    src: "/webp/portfolio/drift-coffee/DriftCoffee(45Degree).webp",
    title: "Campaign 10",
    subtitle: "Sponsored",
    company: "Drift Coffee",
    aspectRatio: "square"
  },
];

// E-commerce Products
export const ecomItems: GalleryItem[] = [
  {
    id: "ecom-1",
    type: "product",
    src: "/webp/Ecom Suit of Photos/AquaPrism - Water Bottle Product.webp",
    title: "AquaPrism   Water Bottle Product",
    price: "$77.62",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-2",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Baroque-Pearl-Earrings-gold-hooks.webp",
    title: "Baroque Pearl Earrings gold hooks",
    price: "$59.43",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-3",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Basin & Range - Lip Balm.webp",
    title: "Basin & Range   Lip Balm",
    price: "$19.92",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-4",
    type: "product",
    src: "/webp/Ecom Suit of Photos/bath-soak-front.webp",
    title: "bath soak front",
    price: "$39.92",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-5",
    type: "product",
    src: "/webp/Ecom Suit of Photos/bath-soak-side.webp",
    title: "bath soak side",
    price: "$49.90",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-6",
    type: "product",
    src: "/webp/Ecom Suit of Photos/birdhouse-front.webp",
    title: "birdhouse front",
    price: "$89.84",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-7",
    type: "product",
    src: "/webp/Ecom Suit of Photos/birdhouse-side.webp",
    title: "birdhouse side",
    price: "$65.96",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-8",
    type: "product",
    src: "/webp/Ecom Suit of Photos/bottle-opener-front.webp",
    title: "bottle opener front",
    price: "$59.42",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-9",
    type: "product",
    src: "/webp/Ecom Suit of Photos/bottle-opener-side.webp",
    title: "bottle opener side",
    price: "$49.57",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-10",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Brambleberry-Farm-Preserves-trio-simple.webp",
    title: "Brambleberry Farm Preserves trio simple",
    price: "$67.61",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-11",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Brambleberry-Farm-Preserves-trio-styled.webp",
    title: "Brambleberry Farm Preserves trio styled",
    price: "$55.26",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-12",
    type: "product",
    src: "/webp/Ecom Suit of Photos/butter-dish-front.webp",
    title: "butter dish front",
    price: "$77.40",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-13",
    type: "product",
    src: "/webp/Ecom Suit of Photos/butter-dish-side.webp",
    title: "butter dish side",
    price: "$71.29",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-14",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Cable-Knit-Sweater-cream-flatlay.webp",
    title: "Cable Knit Sweater cream flatlay",
    price: "$39.27",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-15",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Cable-Knit-Sweater-cream-model-front.webp",
    title: "Cable Knit Sweater cream model front",
    price: "$43.20",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-16",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Cable-Knit-Sweater-cream-model-side.webp",
    title: "Cable Knit Sweater cream model side",
    price: "$68.27",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-17",
    type: "product",
    src: "/webp/Ecom Suit of Photos/cable-organizer-front.webp",
    title: "cable organizer front",
    price: "$63.82",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-18",
    type: "product",
    src: "/webp/Ecom Suit of Photos/cable-organizer-side.webp",
    title: "cable organizer side",
    price: "$46.83",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-19",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Canvas-Apron-leather-straps-flatlay.webp",
    title: "Canvas Apron leather straps flatlay",
    price: "$34.80",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-20",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Canvas-Apron-leather-straps-hanging.webp",
    title: "Canvas Apron leather straps hanging",
    price: "$45.76",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-21",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Canvas-Apron-leather-straps-model-front.webp",
    title: "Canvas Apron leather straps model front",
    price: "$31.73",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-22",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Canvas-Apron-leather-straps-model-side.webp",
    title: "Canvas Apron leather straps model side",
    price: "$28.12",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-23",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Cellar Door Vinegars - Apple Cider Vinegar.webp",
    title: "Cellar Door Vinegars   Apple Cider Vinegar",
    price: "$93.85",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-24",
    type: "product",
    src: "/webp/Ecom Suit of Photos/city-map-front.webp",
    title: "city map front",
    price: "$62.40",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-25",
    type: "product",
    src: "/webp/Ecom Suit of Photos/city-map-side.webp",
    title: "city map side",
    price: "$66.54",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-26",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Clover & Cream - Cosmetic Jar.webp",
    title: "Clover & Cream   Cosmetic Jar",
    price: "$62.57",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-27",
    type: "product",
    src: "/webp/Ecom Suit of Photos/coasters-front.webp",
    title: "coasters front",
    price: "$63.44",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-28",
    type: "product",
    src: "/webp/Ecom Suit of Photos/coasters-side.webp",
    title: "coasters side",
    price: "$100.02",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-29",
    type: "product",
    src: "/webp/Ecom Suit of Photos/coffee-bag-front.webp",
    title: "coffee bag front",
    price: "$103.15",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-30",
    type: "product",
    src: "/webp/Ecom Suit of Photos/coffee-bag-side.webp",
    title: "coffee bag side",
    price: "$57.93",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-31",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Copper & Thread - Tote Bag.webp",
    title: "Copper & Thread   Tote Bag",
    price: "$36.16",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-32",
    type: "product",
    src: "/webp/Ecom Suit of Photos/crystal-box-front.webp",
    title: "crystal box front",
    price: "$39.33",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-33",
    type: "product",
    src: "/webp/Ecom Suit of Photos/crystal-set-front.webp",
    title: "crystal set front",
    price: "$62.73",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-34",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Cured-Crafted-Charcuterie-Selection-angle.webp",
    title: "Cured Crafted Charcuterie Selection angle",
    price: "$42.83",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-35",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Cured-Crafted-Charcuterie-Selection-angle-2.webp",
    title: "Cured Crafted Charcuterie Selection angle 2",
    price: "$90.00",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-36",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Cured-Crafted-Charcuterie-Selection-top.webp",
    title: "Cured Crafted Charcuterie Selection top",
    price: "$50.63",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-37",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Cured-Crafted-Charcuterie-Selection-top-2.webp",
    title: "Cured Crafted Charcuterie Selection top 2",
    price: "$102.16",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-38",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Denim-Jacket-raw-selvedge-front-flatlay.webp",
    title: "Denim Jacket raw selvedge front flatlay",
    price: "$101.83",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-39",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Denim-Jacket-raw-selvedge-model-front.webp",
    title: "Denim Jacket raw selvedge model front",
    price: "$28.00",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-40",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Denim-Jacket-raw-selvedge-model-side.webp",
    title: "Denim Jacket raw selvedge model side",
    price: "$59.65",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-41",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Denim-Jacket-raw-selvedge-side-view.webp",
    title: "Denim Jacket raw selvedge side view",
    price: "$83.20",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-42",
    type: "product",
    src: "/webp/Ecom Suit of Photos/diffuser-front.webp",
    title: "diffuser front",
    price: "$78.69",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-43",
    type: "product",
    src: "/webp/Ecom Suit of Photos/diffuser-side.webp",
    title: "diffuser side",
    price: "$106.20",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-44",
    type: "product",
    src: "/webp/Ecom Suit of Photos/drawstring-bag-front.webp",
    title: "drawstring bag front",
    price: "$28.17",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-45",
    type: "product",
    src: "/webp/Ecom Suit of Photos/drawstring-bag-side.webp",
    title: "drawstring bag side",
    price: "$22.38",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-46",
    type: "product",
    src: "/webp/Ecom Suit of Photos/duck-toy-front.webp",
    title: "duck toy front",
    price: "$96.86",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-47",
    type: "product",
    src: "/webp/Ecom Suit of Photos/duck-toy-side.webp",
    title: "duck toy side",
    price: "$78.61",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-48",
    type: "product",
    src: "/webp/Ecom Suit of Photos/embroidered-patch-front.webp",
    title: "embroidered patch front",
    price: "$19.40",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-49",
    type: "product",
    src: "/webp/Ecom Suit of Photos/embroidered-patch-side.webp",
    title: "embroidered patch side",
    price: "$63.42",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-50",
    type: "product",
    src: "/webp/Ecom Suit of Photos/enamel-pins-front.webp",
    title: "enamel pins front",
    price: "$65.63",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-51",
    type: "product",
    src: "/webp/Ecom Suit of Photos/enamel-pins-side.webp",
    title: "enamel pins side",
    price: "$27.74",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-52",
    type: "product",
    src: "/webp/Ecom Suit of Photos/face-mask-front.webp",
    title: "face mask front",
    price: "$26.59",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-53",
    type: "product",
    src: "/webp/Ecom Suit of Photos/face-mask-side.webp",
    title: "face mask side",
    price: "$100.54",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-54",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Fireside Preserves - Strawberry Jam.webp",
    title: "Fireside Preserves   Strawberry Jam",
    price: "$35.01",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-55",
    type: "product",
    src: "/webp/Ecom Suit of Photos/FloraZen - Levitating Planter.webp",
    title: "FloraZen   Levitating Planter",
    price: "$87.52",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-56",
    type: "product",
    src: "/webp/Ecom Suit of Photos/fox-napkin-front.webp",
    title: "fox napkin front",
    price: "$72.05",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-57",
    type: "product",
    src: "/webp/Ecom Suit of Photos/fox-napkin-side.webp",
    title: "fox napkin side",
    price: "$108.23",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-58",
    type: "product",
    src: "/webp/Ecom Suit of Photos/geometric-mobile-front.webp",
    title: "geometric mobile front",
    price: "$70.36",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-59",
    type: "product",
    src: "/webp/Ecom Suit of Photos/geometric-mobile-side.webp",
    title: "geometric mobile side",
    price: "$82.64",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-60",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Gilt-Gemstone-Opal-Pendant-necklace-front.webp",
    title: "Gilt Gemstone Opal Pendant necklace front",
    price: "$37.43",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-61",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Gilt-Gemstone-Opal-Pendant-necklace-side.webp",
    title: "Gilt Gemstone Opal Pendant necklace side",
    price: "$30.74",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-62",
    type: "product",
    src: "/webp/Ecom Suit of Photos/granola-bag-front.webp",
    title: "granola bag front",
    price: "$23.15",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-63",
    type: "product",
    src: "/webp/Ecom Suit of Photos/granola-bag-side.webp",
    title: "granola bag side",
    price: "$13.24",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-64",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Hive & Harvest - Honey Jar.webp",
    title: "Hive & Harvest   Honey Jar",
    price: "$31.05",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-65",
    type: "product",
    src: "/webp/Ecom Suit of Photos/hot-sauce-front.webp",
    title: "hot sauce front",
    price: "$48.37",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-66",
    type: "product",
    src: "/webp/Ecom Suit of Photos/hot-sauce-side.webp",
    title: "hot sauce side",
    price: "$15.21",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-67",
    type: "product",
    src: "/webp/Ecom Suit of Photos/indigo-napkins-front.webp",
    title: "indigo napkins front",
    price: "$76.96",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-68",
    type: "product",
    src: "/webp/Ecom Suit of Photos/indigo-napkins-side.webp",
    title: "indigo napkins side",
    price: "$88.55",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-69",
    type: "product",
    src: "/webp/Ecom Suit of Photos/jam-jar-front.webp",
    title: "jam jar front",
    price: "$54.58",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-70",
    type: "product",
    src: "/webp/Ecom Suit of Photos/jam-jar-side.webp",
    title: "jam jar side",
    price: "$83.54",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-71",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Kindred Spirits Pottery - Butter Dish.webp",
    title: "Kindred Spirits Pottery   Butter Dish",
    price: "$53.59",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-72",
    type: "product",
    src: "/webp/Ecom Suit of Photos/knit-blanket-front.webp",
    title: "knit blanket front",
    price: "$66.50",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-73",
    type: "product",
    src: "/webp/Ecom Suit of Photos/knit-blanket-side.webp",
    title: "knit blanket side",
    price: "$28.23",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-74",
    type: "product",
    src: "/webp/Ecom Suit of Photos/leather-journal-front.webp",
    title: "leather journal front",
    price: "$31.76",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-75",
    type: "product",
    src: "/webp/Ecom Suit of Photos/leather-journal-side.webp",
    title: "leather journal side",
    price: "$23.41",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-76",
    type: "product",
    src: "/webp/Ecom Suit of Photos/lip-balm-front.webp",
    title: "lip balm front",
    price: "$21.55",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-77",
    type: "product",
    src: "/webp/Ecom Suit of Photos/lip-balm-side.webp",
    title: "lip balm side",
    price: "$75.24",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-78",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Little Bear Knits - Baby Booties.webp",
    title: "Little Bear Knits   Baby Booties",
    price: "$100.86",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-79",
    type: "product",
    src: "/webp/Ecom Suit of Photos/maple-syrup-front.webp",
    title: "maple syrup front",
    price: "$42.98",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-80",
    type: "product",
    src: "/webp/Ecom Suit of Photos/maple-syrup-side.webp",
    title: "maple syrup side",
    price: "$81.79",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-81",
    type: "product",
    src: "/webp/Ecom Suit of Photos/mason-jar-lantern-front.webp",
    title: "mason jar lantern front",
    price: "$25.98",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-82",
    type: "product",
    src: "/webp/Ecom Suit of Photos/mason-jar-lantern-side.webp",
    title: "mason jar lantern side",
    price: "$68.18",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-83",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Meadow Botanics - Dried Flower Bouquet.webp",
    title: "Meadow Botanics   Dried Flower Bouquet",
    price: "$98.39",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-84",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Midnight Oil Studio - Candle.webp",
    title: "Midnight Oil Studio   Candle",
    price: "$81.43",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-85",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Midnight-Adorn-Silver-Cuff-wave-pattern.webp",
    title: "Midnight Adorn Silver Cuff wave pattern",
    price: "$73.92",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-86",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Midnight-Adorn-Silver-Ring-wave-pattern.webp",
    title: "Midnight Adorn Silver Ring wave pattern",
    price: "$79.48",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-87",
    type: "product",
    src: "/webp/Ecom Suit of Photos/moon-dish-front.webp",
    title: "moon dish front",
    price: "$36.17",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-88",
    type: "product",
    src: "/webp/Ecom Suit of Photos/moon-dish-side.webp",
    title: "moon dish side",
    price: "$68.86",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-89",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Moss Fern Studio - Macrame Plant Hanger.webp",
    title: "Moss Fern Studio   Macrame Plant Hanger",
    price: "$51.92",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-90",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Northwood Candle Co - Candle.webp",
    title: "Northwood Candle Co   Candle",
    price: "$43.89",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-91",
    type: "product",
    src: "/webp/Ecom Suit of Photos/notebooks-front.webp",
    title: "notebooks front",
    price: "$98.79",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-92",
    type: "product",
    src: "/webp/Ecom Suit of Photos/notebooks-side.webp",
    title: "notebooks side",
    price: "$105.58",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-93",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Olive-Thyme-Infused-Oils-trio-alternate.webp",
    title: "Olive Thyme Infused Oils trio alternate",
    price: "$98.05",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-94",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Olive-Thyme-Infused-Oils-trio-front.webp",
    title: "Olive Thyme Infused Oils trio front",
    price: "$49.66",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-95",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Paradox Glass - Sculpture.webp",
    title: "Paradox Glass   Sculpture",
    price: "$30.23",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-96",
    type: "product",
    src: "/webp/Ecom Suit of Photos/paris-postcard.webp",
    title: "paris postcard",
    price: "$64.58",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-97",
    type: "product",
    src: "/webp/Ecom Suit of Photos/raku-bowl-front.webp",
    title: "raku bowl front",
    price: "$92.09",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-98",
    type: "product",
    src: "/webp/Ecom Suit of Photos/raku-bowl-side.webp",
    title: "raku bowl side",
    price: "$102.44",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-99",
    type: "product",
    src: "/webp/Ecom Suit of Photos/River Stone Jewelry - Hoop Earrings.webp",
    title: "River Stone Jewelry   Hoop Earrings",
    price: "$71.46",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-100",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Rooted Paper Co - Stationery.webp",
    title: "Rooted Paper Co   Stationery",
    price: "$54.65",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-101",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Saffron-Supper-Spice-Jars-6-pack.webp",
    title: "Saffron Supper Spice Jars 6 pack",
    price: "$22.60",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-102",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Salt & Sage Soap - Lavender Bar.webp",
    title: "Salt & Sage Soap   Lavender Bar",
    price: "$99.72",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-103",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Salt-Marsh-Skincare-Face-Mask-open-ingredients.webp",
    title: "Salt Marsh Skincare Face Mask open ingredients",
    price: "$63.85",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-104",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Salt-Marsh-Skincare-Face-Mask-open-ingredients-2.webp",
    title: "Salt Marsh Skincare Face Mask open ingredients 2",
    price: "$89.51",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-105",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Salt-Marsh-Skincare-Face-Mask-water-splash.webp",
    title: "Salt Marsh Skincare Face Mask water splash",
    price: "$56.75",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-106",
    type: "product",
    src: "/webp/Ecom Suit of Photos/sea-glass-chime-front.webp",
    title: "sea glass chime front",
    price: "$71.52",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-107",
    type: "product",
    src: "/webp/Ecom Suit of Photos/shampoo-bar-front.webp",
    title: "shampoo bar front",
    price: "$26.63",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-108",
    type: "product",
    src: "/webp/Ecom Suit of Photos/shampoo-bar-side.webp",
    title: "shampoo bar side",
    price: "$45.14",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-109",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Silk-Kimono-Robe-blue-cream-model-front.webp",
    title: "Silk Kimono Robe blue cream model front",
    price: "$23.01",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-110",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Silk-Kimono-Robe-blue-cream-side.webp",
    title: "Silk Kimono Robe blue cream side",
    price: "$47.20",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-111",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Smoke-Salt-Cold-Smoked-Salmon-front.webp",
    title: "Smoke Salt Cold Smoked Salmon front",
    price: "$60.03",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-112",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Smoke-Salt-Cold-Smoked-Salmon-side.webp",
    title: "Smoke Salt Cold Smoked Salmon side",
    price: "$74.06",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-113",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Smoke-Salt-Cold-Smoked-Salmon-side-2.webp",
    title: "Smoke Salt Cold Smoked Salmon side 2",
    price: "$79.08",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-114",
    type: "product",
    src: "/webp/Ecom Suit of Photos/stacking-toy-front.webp",
    title: "stacking toy front",
    price: "$73.05",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-115",
    type: "product",
    src: "/webp/Ecom Suit of Photos/stacking-toy-side.webp",
    title: "stacking toy side",
    price: "$85.12",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-116",
    type: "product",
    src: "/webp/Ecom Suit of Photos/stationery-front.webp",
    title: "stationery front",
    price: "$35.39",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-117",
    type: "product",
    src: "/webp/Ecom Suit of Photos/stationery-side.webp",
    title: "stationery side",
    price: "$51.28",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-118",
    type: "product",
    src: "/webp/Ecom Suit of Photos/tea-tin-front.webp",
    title: "tea tin front",
    price: "$29.73",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-119",
    type: "product",
    src: "/webp/Ecom Suit of Photos/tea-tin-side.webp",
    title: "tea tin side",
    price: "$73.13",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-120",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Thistle & Thorn - Jewelry Dish.webp",
    title: "Thistle & Thorn   Jewelry Dish",
    price: "$85.83",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-121",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Thistle-Vine-Gold-Rings-gemstones-front.webp",
    title: "Thistle Vine Gold Rings gemstones front",
    price: "$90.49",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-122",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Thistle-Vine-Gold-Rings-gemstones-stacked.webp",
    title: "Thistle Vine Gold Rings gemstones stacked",
    price: "$32.58",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-123",
    type: "product",
    src: "/webp/Ecom Suit of Photos/tincture-front.webp",
    title: "tincture front",
    price: "$51.28",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-124",
    type: "product",
    src: "/webp/Ecom Suit of Photos/tincture-side.webp",
    title: "tincture side",
    price: "$101.18",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-125",
    type: "product",
    src: "/webp/Ecom Suit of Photos/trail-mix-front.webp",
    title: "trail mix front",
    price: "$63.80",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-126",
    type: "product",
    src: "/webp/Ecom Suit of Photos/trail-mix-side.webp",
    title: "trail mix side",
    price: "$82.53",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-127",
    type: "product",
    src: "/webp/Ecom Suit of Photos/trivet-front.webp",
    title: "trivet front",
    price: "$74.57",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-128",
    type: "product",
    src: "/webp/Ecom Suit of Photos/trivet-side.webp",
    title: "trivet side",
    price: "$58.36",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-129",
    type: "product",
    src: "/webp/Ecom Suit of Photos/vinegar-bottle-front.webp",
    title: "vinegar bottle front",
    price: "$55.47",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-130",
    type: "product",
    src: "/webp/Ecom Suit of Photos/vinegar-bottle-side.webp",
    title: "vinegar bottle side",
    price: "$49.83",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-131",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wildflower-Confections-Lavender-Caramels-gift-box.webp",
    title: "Wildflower Confections Lavender Caramels gift box",
    price: "$72.52",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-132",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wildflower-Confections-Lavender-Caramels-open.webp",
    title: "Wildflower Confections Lavender Caramels open",
    price: "$76.10",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-133",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wildflower-Confections-Lavender-Caramels-open-2.webp",
    title: "Wildflower Confections Lavender Caramels open 2",
    price: "$11.72",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-134",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Willow & Stone Pottery - Mug.webp",
    title: "Willow & Stone Pottery   Mug",
    price: "$27.85",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-135",
    type: "product",
    src: "/webp/Ecom Suit of Photos/wooden-bowl-front.webp",
    title: "wooden bowl front",
    price: "$53.38",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-136",
    type: "product",
    src: "/webp/Ecom Suit of Photos/wooden-bowl-side.webp",
    title: "wooden bowl side",
    price: "$66.95",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-137",
    type: "product",
    src: "/webp/Ecom Suit of Photos/wooden-shelf-front.webp",
    title: "wooden shelf front",
    price: "$99.09",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-138",
    type: "product",
    src: "/webp/Ecom Suit of Photos/wooden-shelf-side.webp",
    title: "wooden shelf side",
    price: "$19.41",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-139",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wool-Scarf-model-front-view.webp",
    title: "Wool Scarf model front view",
    price: "$52.25",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-140",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wool-Scarf-model-side-view.webp",
    title: "Wool Scarf model side view",
    price: "$65.71",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-141",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wool-Throw-Blanket-folded-angle.webp",
    title: "Wool Throw Blanket folded angle",
    price: "$76.20",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-142",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wool-Throw-Blanket-folded-angle-2.webp",
    title: "Wool Throw Blanket folded angle 2",
    price: "$50.13",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-143",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wool-Throw-Blanket-folded-front.webp",
    title: "Wool Throw Blanket folded front",
    price: "$48.48",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-144",
    type: "product",
    src: "/webp/Ecom Suit of Photos/Wren & Sparrow - Phone Case.webp",
    title: "Wren & Sparrow   Phone Case",
    price: "$21.71",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-145",
    type: "product",
    src: "/webp/Ecom Suit of Photos/yellow-pot-front.webp",
    title: "yellow pot front",
    price: "$98.64",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
  {
    id: "ecom-146",
    type: "product",
    src: "/webp/Ecom Suit of Photos/yellow-pot-side.webp",
    title: "yellow pot side",
    price: "$41.96",
    company: "Shop Now",
    aspectRatio: "portrait"
  },
];

// Feed Items (mixed ads and products)
export const feedItems = [
  ...companyAds,
  ...ecomItems
].sort(() => Math.random() - 0.5);

