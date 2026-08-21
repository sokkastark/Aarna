import { Product } from '../types';
import puliyogareImg from '../assets/images/puliyogare_powder_1787339731415.jpg';
import vangiBathImg from '../assets/images/vangi_bath_powder_1787339748872.jpg';
import bisiBeleBathImg from '../assets/images/bisibelebath_powder_1787339763697.jpg';
import chitrannaImg from '../assets/images/chitranna_mix_1787339778424.jpg';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "puliyogare-powder",
    name: "Puliyogare Powder",
    kannadaName: "ಹುಳಿಯೋಗರೆ ಪುಡಿ",
    tagline: "Tangy • Spiced • Traditional",
    shortDescription: "Signature temple-style tamarind rice spice blend with roasted lentils, sesame, and aromatic spices.",
    description: "Our Puliyogare Powder is crafted following the revered Mysuru temple tradition. Slow-roasted Byadagi chillies, selected coriander seeds, black sesame, fenugreek, and warming spices are hand-ground to deliver that deep crimson color, signature tang, and earthy spice that makes every plate of tamarind rice unforgettable.",
    category: "Traditional Powders",
    available: true,
    availabilityNote: "Fresh batch made on pre-order",
    imageUrl: puliyogareImg,
    badge: "Mysuru Classic",
    themeColor: {
      bg: "bg-[#F7EBE8]",
      text: "text-[#7B1E28]",
      border: "border-[#DDB6AD]",
      pillBg: "bg-[#7B1E28]",
      pillText: "text-[#FAF7F2]"
    },
    variants: [
      { id: "100g", weight: "100g", pricePlaceholder: "₹80" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹190", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹360" }
    ],
    highlights: [
      "Authentic Mysuru temple-style recipe",
      "Rich color with genuine Byadagi chillies",
      "Roasted sesame and chana dal aroma",
      "Ready in minutes with hot steamed rice"
    ],
    ingredientsPlaceholder: [
      "Byadagi & Guntur Dried Red Chillies",
      "Coriander Seeds (Dhaniya)",
      "Bengal Gram & Urad Dal",
      "Black Sesame Seeds",
      "Fenugreek & Cumin Seeds",
      "Asafoetida (Hing)",
      "Curry Leaves & Mustard"
    ],
    servingSuggestion: "Toss 2 tablespoons of powder in hot sesame oil with peanuts and curry leaves, mix gently with cooked rice, and let it rest for 15 minutes for flavors to deepen.",
    flavorNotes: ["Tamarind Tang", "Warming Spice", "Nutty Sesame", "Tempered Crunch"]
  },
  {
    id: "vangi-bath-powder",
    name: "Vangi Bath Powder",
    kannadaName: "ವಾಂಗಿಬಾತ್ ಪುಡಿ",
    tagline: "Aromatic • Rich • Flavourful",
    shortDescription: "Aromatic spiced blend with cloves, cinnamon, and roasted dry coconut for classic brinjal/capsicum rice.",
    description: "A staple in traditional Karnataka festive feasts, our Vangi Bath Powder brings together fragrant whole spices—cloves, cinnamon bark, cardamom, and roasted dry coconut (kobbari)—with roasted lentils. It gives tender brinjals or capsicum a deeply aromatic, rich coating that pairs magnificently with warm rice.",
    category: "Bath Powders",
    available: true,
    availabilityNote: "Fresh batch made on pre-order",
    imageUrl: vangiBathImg,
    badge: "Festive Favourite",
    themeColor: {
      bg: "bg-[#EBF2EC]",
      text: "text-[#234E35]",
      border: "border-[#B8D5C0]",
      pillBg: "bg-[#234E35]",
      pillText: "text-[#FAF7F2]"
    },
    variants: [
      { id: "100g", weight: "100g", pricePlaceholder: "₹85" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹200", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹380" }
    ],
    highlights: [
      "Heritage Karnataka Brahmin household recipe",
      "Aromatic whole spices with pure dry coconut (kobbari)",
      "Versatile with brinjal, capsicum, ivy gourd (tindora) or paneer",
      "Zero artificial colors or preservatives"
    ],
    ingredientsPlaceholder: [
      "Dry Coconut (Kobbari)",
      "Byadagi Red Chillies",
      "Coriander Seeds & Chana Dal",
      "Cloves (Lavanga) & Cinnamon (Chakke)",
      "Cardamom & Star Anise",
      "Urad Dal & Cumin"
    ],
    servingSuggestion: "Sauté sliced brinjals in coconut oil until tender, stir in 2-3 spoonfuls of Vangi Bath Powder, fold in hot rice, and garnish with fresh grated coconut and roasted cashews.",
    flavorNotes: ["Clove & Cinnamon Aroma", "Toasted Coconut", "Balanced Mild Heat", "Herbaceous"]
  },
  {
    id: "bisi-bele-bath-powder",
    name: "Bisi Bele Bath Powder",
    kannadaName: "ಬಿಸಿಬೇಳೆಭಾತ್ ಪುಡಿ",
    tagline: "Comforting • Spiced • Classic",
    shortDescription: "The soul of Karnataka cuisine: a complex blend of 14 roasted spices and lentils for rich lentil-rice porridge.",
    description: "Nothing spells Mysuru home cooking quite like steaming hot Bisi Bele Bath topped with pure ghee. Our special masala powder is meticulously slow-roasted on a stone griddle using 14 traditional spices, marathi moggu (kapok buds), stone flower, and roasted lentils to create a wholesome, deeply comforting one-pot feast.",
    category: "Bath Powders",
    available: true,
    availabilityNote: "Fresh batch made on pre-order",
    imageUrl: bisiBeleBathImg,
    badge: "Karnataka Signature",
    themeColor: {
      bg: "bg-[#F7EFE8]",
      text: "text-[#8C4320]",
      border: "border-[#DFBFAD]",
      pillBg: "bg-[#8C4320]",
      pillText: "text-[#FAF7F2]"
    },
    variants: [
      { id: "100g", weight: "100g", pricePlaceholder: "₹90" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹210", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹400" }
    ],
    highlights: [
      "14 heritage spices including Kapok Buds (Marathi Moggu)",
      "Slow-roasted for rich golden-brown depth",
      "Creates the comforting texture and aroma of authentic Mysuru hotel style",
      "Pairs delightfully with boondi or potato chips"
    ],
    ingredientsPlaceholder: [
      "Byadagi & Salem Chillies",
      "Coriander Seeds & Cumin",
      "Toor Dal & Chana Dal",
      "Marathi Moggu (Kapok Buds)",
      "Dry Coconut, Cinnamon, Cloves",
      "Fenugreek, Mustard & Curry Leaves",
      "Nutmeg hint & Asafoetida"
    ],
    servingSuggestion: "Simmer cooked rice, toor dal, and seasonal vegetables with tamarind pulp and 3 tablespoons of Bisi Bele Bath powder. Finish with a generous drizzle of hot homemade ghee and crisp kara boondi.",
    flavorNotes: ["Rich Spiced Lentil", "Kapok Bud Aromatics", "Mellow Tamarind Tang", "Ghee Complement"]
  },
  {
    id: "lemon-rice-chitranna-mix",
    name: "Lemon Rice / Chitranna Mix",
    kannadaName: "ಚಿತ್ರಾನ್ನ ಮಿಕ್ಸ್ / ಪೌಡರ್",
    tagline: "Fresh • Zesty • Easy",
    shortDescription: "A vibrant, zesty traditional mix with turmeric, mustard, roasted lentils, and ginger-spice undertones.",
    description: "Chitranna (Lemon Rice) is the heartwarming, bright yellow celebratory dish of Karnataka homes. Our instant Chitranna mix packs the authentic seasoning of mustard seeds, golden split lentils, green chilli notes, turmeric, and dried ginger so you can prepare fragrant, zesty lemon rice in just 2 minutes with leftover or fresh rice.",
    category: "Quick Mixes",
    available: true,
    availabilityNote: "Fresh batch made on pre-order",
    imageUrl: chitrannaImg,
    badge: "Quick & Refreshing",
    themeColor: {
      bg: "bg-[#FAF5E6]",
      text: "text-[#8A6A15]",
      border: "border-[#E8DAAA]",
      pillBg: "bg-[#8A6A15]",
      pillText: "text-[#FAF7F2]"
    },
    variants: [
      { id: "100g", weight: "100g", pricePlaceholder: "₹75" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹175", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹330" }
    ],
    highlights: [
      "Ready in 2 minutes with fresh lemon juice",
      "Crisp roasted lentils & roasted groundnut aroma",
      "Pure golden organic turmeric & tempered spices",
      "Perfect for lunchboxes, quick breakfasts, and travel"
    ],
    ingredientsPlaceholder: [
      "Pure Salem Turmeric (Haldi)",
      "Roasted Chana Dal & Urad Dal",
      "Mustard Seeds & Cumin",
      "Green Chilli Notes & Dry Ginger",
      "Curry Leaf Flakes & Hing",
      "Rock Salt"
    ],
    servingSuggestion: "Warm 1 tbsp oil, add 2 tbsp Chitranna mix, toss with warm rice, and squeeze 1/2 fresh lemon with chopped coriander for an instant Mysuru breakfast.",
    flavorNotes: ["Bright Lemon Zest", "Crunchy Dal Tempering", "Warm Turmeric", "Ginger Spark"]
  }
];
