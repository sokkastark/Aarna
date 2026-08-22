import { Product } from '../types';
import puliyogarePasteImg from '../assets/images/puliyogare_paste_1787377095868.jpg';
import vangiBathImg from '../assets/images/vangi_bath_powder_1787339748872.jpg';
import bisiBeleBathImg from '../assets/images/bisibelebath_powder_1787339763697.jpg';
import chatniPudiImg from '../assets/images/chatni_pudi_1787377112072.jpg';
import sambarPowderImg from '../assets/images/sambar_powder_1787377123649.jpg';
import rasamPowderImg from '../assets/images/rasam_powder_1787377135166.jpg';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "puliyogare-paste",
    name: "Puliyogre Paste",
    kannadaName: "ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು / ಪೇಸ್ಟ್",
    tagline: "Rich • Tangy • Temple Recipe",
    shortDescription: "Signature temple-style tamarind gojju simmered with gingelly oil, roasted peanuts, curry leaves, and secret spices.",
    description: "Our Puliyogare Paste (Gojju) is prepared the authentic traditional way—slow-cooked with thick ripe tamarind extract, pure cold-pressed sesame oil, organic jaggery, crisp peanuts, and our secret temple-blend spices. Ready to mix directly with hot steamed rice with zero extra cooking needed.",
    category: "Pastes & Chutney Podis",
    available: true,
    availabilityNote: "Fresh batch made on pre-order",
    imageUrl: puliyogarePasteImg,
    badge: "Mysuru Temple Style",
    themeColor: {
      bg: "bg-[#F7EBE8]",
      text: "text-[#7B1E28]",
      border: "border-[#DDB6AD]",
      pillBg: "bg-[#7B1E28]",
      pillText: "text-[#FAF7F2]"
    },
    variants: [
      { id: "100g", weight: "100g", pricePlaceholder: "₹110" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹250", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹480" }
    ],
    highlights: [
      "Ready-to-eat instant tamarind gojju paste",
      "Slow-simmered in pure cold-pressed sesame oil",
      "Loaded with crunchy roasted peanuts and curry leaves",
      "Authentic Melukote & Mysuru temple flavor profile"
    ],
    ingredientsPlaceholder: [
      "Thick Tamarind Extract",
      "Cold-Pressed Sesame (Gingelly) Oil",
      "Roasted Peanuts & Mustard Seeds",
      "Byadagi Red Chillies & Fenugreek",
      "Organic Jaggery (Bella)",
      "Curry Leaves & Asafoetida (Hing)",
      "Rock Salt"
    ],
    servingSuggestion: "Mix 2-3 tablespoons of paste directly with warm cooked rice. Let it rest for 15 minutes before serving so the flavors permeate the grains.",
    flavorNotes: ["Rich Tamarind Tang", "Nutty Peanut Crunch", "Warm Sesame Aroma", "Subtle Jaggery Balance"]
  },
  {
    id: "bisi-bele-bath-powder",
    name: "Bisibele bath powder",
    kannadaName: "ಬಿಸಿಬೇಳೆಭಾತ್ ಪುಡಿ",
    tagline: "Comforting • Spiced • Classic",
    shortDescription: "The soul of Karnataka cuisine: a complex blend of 14 roasted spices, kapok buds, and lentils for rich lentil-rice.",
    description: "Nothing spells Mysuru home cooking quite like steaming hot Bisi Bele Bath topped with pure ghee. Our special masala powder is meticulously slow-roasted on an iron griddle using 14 traditional spices, marathi moggu (kapok buds), stone flower, and roasted lentils to create a deeply comforting one-pot feast.",
    category: "Rice Masala Powders",
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
      { id: "100g", weight: "100g", pricePlaceholder: "₹85" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹200", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹380" }
    ],
    highlights: [
      "14 heritage spices including Kapok Buds (Marathi Moggu)",
      "Slow-roasted for rich golden-brown depth",
      "Creates the comforting aroma of authentic Mysuru feasts",
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
    servingSuggestion: "Simmer cooked rice, toor dal, and vegetables with tamarind pulp and 3 tablespoons of Bisi Bele Bath powder. Finish with hot homemade ghee and crisp kara boondi.",
    flavorNotes: ["Rich Spiced Lentil", "Kapok Bud Aromatics", "Mellow Tamarind Tang", "Ghee Complement"]
  },
  {
    id: "vangi-bath-powder",
    name: "vangibath powder",
    kannadaName: "ವಾಂಗಿಬಾತ್ ಪುಡಿ",
    tagline: "Aromatic • Rich • Flavourful",
    shortDescription: "Aromatic spiced blend with cloves, cinnamon bark, and roasted dry coconut for classic brinjal & capsicum rice.",
    description: "A staple in traditional Karnataka festive feasts, our Vangi Bath Powder brings together fragrant whole spices—cloves, cinnamon bark, cardamom, and roasted dry coconut (kobbari)—with roasted lentils. It gives tender brinjals or capsicum a deeply aromatic coating that pairs magnificently with warm rice.",
    category: "Rice Masala Powders",
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
    id: "chatni-pudi",
    name: "ChatniPudi",
    kannadaName: "ಚಟ್ನಿ ಪುಡಿ",
    tagline: "Crunchy • Savoury • Everyday Essential",
    shortDescription: "Classic Karnataka spiced gunpowder with roasted lentils, dry coconut copra, curry leaves, and Byadagi chillies.",
    description: "A quintessential accompaniment in every South Indian home. Coarsely ground roasted Bengal gram, urad dal, fragrant curry leaves, roasted dry copra (kobbari), and Byadagi red chillies. Perfect with hot idlis, crispy dosas, akki rotti, or mixed with hot rice and melted ghee.",
    category: "Pastes & Chutney Podis",
    available: true,
    availabilityNote: "Fresh batch made on pre-order",
    imageUrl: chatniPudiImg,
    badge: "Daily Essential",
    themeColor: {
      bg: "bg-[#FAF5E6]",
      text: "text-[#8A6A15]",
      border: "border-[#E8DAAA]",
      pillBg: "bg-[#8A6A15]",
      pillText: "text-[#FAF7F2]"
    },
    variants: [
      { id: "100g", weight: "100g", pricePlaceholder: "₹70" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹160", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹300" }
    ],
    highlights: [
      "Coarsely ground for satisfying crunch",
      "Toasted dry coconut copra & sun-dried curry leaves",
      "Pairs with Idli, Dosa, Akki Rotti, Ragi Mudde & Hot Rice",
      "Made fresh in small batches"
    ],
    ingredientsPlaceholder: [
      "Roasted Chana Dal & Urad Dal",
      "Dry Coconut Copra (Kobbari)",
      "Byadagi Red Chillies",
      "Freshly Toasted Curry Leaves",
      "Cumin Seeds & Asafoetida",
      "Tamarind Hint & Jaggery Touch",
      "Rock Salt"
    ],
    servingSuggestion: "Sprinkle generously over hot ghee dosas, or mix with coconut oil or warm ghee and enjoy alongside steaming idlis and akki rotti.",
    flavorNotes: ["Roasted Dal Crunch", "Toasted Coconut", "Mild Smoky Chillies", "Savory Umami"]
  },
  {
    id: "sambar-powder",
    name: "Sambar Powder(Huli Pudi)",
    kannadaName: "ಸಾಂಬಾರ್ ಪುಡಿ (ಹುಳಿ ಪುಡಿ)",
    tagline: "Aromatic • Authentic • Homestyle",
    shortDescription: "Traditional Karnataka homestyle Huli Pudi with roasted coriander, fenugreek, cumin, and vibrant Byadagi chillies.",
    description: "Our Sambar Powder (Huli Pudi) is the heartbeat of everyday Karnataka cooking. Roasted whole coriander seeds, cumin, fenugreek, black pepper, and Byadagi chillies give everyday vegetable sambars a vibrant color, comforting aroma, and rich, balanced flavor.",
    category: "Curry & Rasam Powders",
    available: true,
    availabilityNote: "Fresh batch made on pre-order",
    imageUrl: sambarPowderImg,
    badge: "Homestyle Huli",
    themeColor: {
      bg: "bg-[#FDF2E9]",
      text: "text-[#9C3814]",
      border: "border-[#E8C2B0]",
      pillBg: "bg-[#9C3814]",
      pillText: "text-[#FAF7F2]"
    },
    variants: [
      { id: "100g", weight: "100g", pricePlaceholder: "₹80" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹190", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹360" }
    ],
    highlights: [
      "Slow-roasted whole coriander & fenugreek aroma",
      "Authentic Karnataka Brahmin household formula",
      "Vibrant natural color with Byadagi chillies",
      "Ideal for drumstick, mixed veg, and lentil sambars"
    ],
    ingredientsPlaceholder: [
      "Whole Coriander Seeds (Dhaniya)",
      "Byadagi & Guntur Red Chillies",
      "Bengal Gram (Chana Dal)",
      "Cumin Seeds & Fenugreek (Menthya)",
      "Black Peppercorns & Turmeric",
      "Curry Leaves & Asafoetida (Hing)"
    ],
    servingSuggestion: "Add 2 spoonfuls when boiling vegetables and cooked toor dal with tamarind and salt. Simmer for 5 minutes and finish with mustard and ghee tadka.",
    flavorNotes: ["Deep Coriander Aroma", "Mellow Fenugreek Warmth", "Balanced Spice", "Lentil Body"]
  },
  {
    id: "rasam-powder",
    name: "Rasam powder",
    kannadaName: "ಸಾರಿನ ಪುಡಿ / ರಸಂ ಪುಡಿ",
    tagline: "Fiery • Aromatic • Soothing",
    shortDescription: "Aromatic Saaru Pudi with crushed black peppercorns, roasted cumin, coriander, and hing for comforting South Indian Rasam.",
    description: "Experience the soothing, digestive magic of authentic Mysuru Saaru (Rasam). Packed with freshly roasted Malabar black pepper, cumin seeds, coriander seeds, and a touch of asafoetida. It creates a piping-hot, soul-warming rasam that refreshes and satisfies.",
    category: "Curry & Rasam Powders",
    available: true,
    availabilityNote: "Fresh batch made on pre-order",
    imageUrl: rasamPowderImg,
    badge: "Digestive & Soothing",
    themeColor: {
      bg: "bg-[#FDF0ED]",
      text: "text-[#A82A2A]",
      border: "border-[#EDBABA]",
      pillBg: "bg-[#A82A2A]",
      pillText: "text-[#FAF7F2]"
    },
    variants: [
      { id: "100g", weight: "100g", pricePlaceholder: "₹75" },
      { id: "250g", weight: "250g", pricePlaceholder: "₹170", isDefault: true },
      { id: "500g", weight: "500g", pricePlaceholder: "₹320" }
    ],
    highlights: [
      "Loaded with freshly roasted Malabar black pepper & cumin",
      "Soothing digestive blend for authentic tomato & dal rasam",
      "Deep aroma of roasted hing and curry leaves",
      "Quick 5-minute traditional Mysuru Saaru"
    ],
    ingredientsPlaceholder: [
      "Whole Black Peppercorns",
      "Cumin Seeds (Jeerige)",
      "Coriander Seeds (Dhaniya)",
      "Byadagi Red Chillies",
      "Toor Dal & Chana Dal",
      "Curry Leaves & Compounded Hing",
      "Salem Turmeric"
    ],
    servingSuggestion: "Boil crushed tomatoes with tamarind water, curry leaves, and 1.5 tsp Rasam Powder. Add boiled toor dal water, simmer till frothy, and temper with ghee, mustard, and cumin.",
    flavorNotes: ["Peppery Warmth", "Cumin Earthiness", "Soothing Tang", "Aromatic Tempering"]
  }
];

