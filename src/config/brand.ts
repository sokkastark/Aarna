/**
 * Brand Configuration for Aarna Food Products
 * All brand metadata, contact info, and WhatsApp order settings are centralized here.
 */

export const BRAND_CONFIG = {
  name: "Aarna Food Products",
  tagline: "Authentic Mysuru Flavours",
  subTagline: "Made at Home",
  missionStatement: "Traditional recipes, thoughtfully prepared in small batches.",
  location: "Mysuru, Karnataka, India",
  
  // Configurable WhatsApp order number
  whatsappNumber: "+919449371272", 
  displayWhatsappNumber: "+91 94493 71272",
  
  // Pre-order notice
  preOrderNotice: "All products are prepared in small batches upon pre-order to ensure authentic taste and freshness.",
  
  // Delivery & Pickup notes
  orderTypes: {
    pickup: {
      label: "Self Pickup in Mysuru",
      description: "Pick up fresh batch directly from our home kitchen in Mysuru (exact address shared upon confirmation)."
    },
    delivery: {
      label: "Home Delivery",
      description: "Delivered to your address in Mysuru & courier across Karnataka (delivery charges shared on WhatsApp)."
    }
  },

  // Brand Story
  story: {
    title: "The Story Behind Aarna",
    paragraphs: [
      "Named with heartfelt love after our young daughter Aarna, our home kitchen in Mysuru was born from a simple belief: the purest, most comforting South Indian flavors come from traditional recipes crafted with patience and care.",
      "In a world of mass-manufactured spice mixes, we roast every spice in small batches on low heat, using heritage family proportions passed down through generations.",
      "No artificial preservatives, no shortcuts — just authentic Mysuru taste made with the same love we serve at our own family table."
    ],
    pillars: [
      {
        title: "Small-Batch Crafted",
        description: "Freshly roasted and ground in limited quantities to preserve natural essential oils and aroma."
      },
      {
        title: "Authentic Mysuru Heritage",
        description: "Classic Karnataka recipes with the true balance of tang, spice, and aromatic richness."
      },
      {
        title: "Pre-Order Freshness",
        description: "Made to order so you receive fresh blends rather than warehouse-stocked packets."
      }
    ]
  }
};
