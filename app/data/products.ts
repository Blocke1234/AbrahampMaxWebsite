// ============================================================
// SHARED PRODUCT CATALOG
// Single source of truth for the Shop (/products) and the
// Bundle Builder (/bundle). Add or edit products here only.
// ============================================================

export interface Product {
  id: string
  name: string
  price: number
  compareAt: number
  description: string
  details: string
  image: string
  category: string
  type: 'digital' | 'physical'
  badge?: string
  icon?: string
}

export const PRODUCTS: Product[] = [
  // ── DIGITAL ────────────────────────────────────────────────────────────────
  {
    id: 'driving-guide',
    name: 'The Driving Guide',
    price: 5,
    compareAt: 6.65,
    description: 'Everything you need to know behind the wheel — one PDF, one price.',
    details: 'A straightforward PDF guide covering driving fundamentals, safety habits, and road knowledge. One-time purchase. Instant download after checkout.',
    image: '',
    category: 'PDF Guide',
    type: 'digital',
    icon: '🚗',
  },
  {
    id: 'financial-literacy-2026',
    name: 'Financial Literacy for 2026',
    price: 30,
    compareAt: 39.99,
    description: 'Your money playbook for 2026 — budgeting, investing, and building wealth.',
    details: 'A comprehensive PDF breaking down financial literacy for the modern era. Covers budgeting frameworks, investment basics, credit management, and wealth-building strategies relevant to 2026 and beyond. One-time purchase. Instant download.',
    image: '',
    category: 'PDF Guide',
    type: 'digital',
    badge: 'Featured',
    icon: '💰',
  },
  {
    id: 'successful-young-man',
    name: 'How to Be a Successful Young Man',
    price: 5,
    compareAt: 6.65,
    description: 'The blueprint nobody handed me — discipline, mindset, and making moves.',
    details: 'A direct, no-fluff PDF guide written from lived experience. Covers mindset, discipline, relationships, money habits, and how to carry yourself in rooms that matter. One-time purchase. Instant download.',
    image: '',
    category: 'PDF Guide',
    type: 'digital',
    icon: '👑',
  },

  // ── PHYSICAL ───────────────────────────────────────────────────────────────
  {
    id: 'neck-massager',
    name: '4D Shiatsu Neck & Shoulder Massager with Heat',
    price: 89.99,
    compareAt: 119.99,
    description: 'Deep-tissue kneading with infrared heat. 15 minutes is all you need.',
    details: 'Deep-tissue kneading massage heads with infrared heat therapy. 15 minutes is all your neck and shoulders need to recover from the grind. Cordless, rechargeable, auto shut-off after 15 min.',
    image: '/products/neck-massager.jpg',
    category: 'Wellness',
    type: 'physical',
    badge: 'Flagship',
    icon: '💆',
  },
  {
    id: 'rfid-wallet',
    name: 'Genuine Leather RFID-Blocking Trifold Wallet',
    price: 27.99,
    compareAt: 36.99,
    description: 'Real leather. RFID-blocking tech. The wallet you stop replacing.',
    details: 'Real leather. RFID-blocking technology. ID window, multiple card slots, and a bill compartment built to last. The wallet you stop replacing every year.',
    image: '/products/rfid-wallet.jpg',
    category: 'Accessories',
    type: 'physical',
    icon: '👜',
  },
  {
    id: 'tool-card',
    name: '46-in-1 Stainless Steel Pocket Multi-Tool Card',
    price: 14.99,
    compareAt: 19.99,
    description: '46 tools in one credit-card-sized piece of steel. Fits in your wallet.',
    details: '46 tools in one credit-card-sized piece of stainless steel. Hex wrenches, screwdrivers, bottle opener, phone stand — fits in your wallet. TSA-compliant.',
    image: '/products/tool-card.jpg',
    category: 'Accessories',
    type: 'physical',
    badge: 'Best Value',
    icon: '🔧',
  },
  {
    id: 'travel-adapter',
    name: 'Universal Travel Adapter — USB-C PD Fast Charge',
    price: 39.99,
    compareAt: 52.99,
    description: 'Every outlet on the planet covered. 3 USB-A + 1 USB-C PD.',
    details: 'Covers every outlet on the planet: US, UK, EU, Australia. 3 USB-A ports + 1 USB-C PD. Charge everything at once. Compact enough for a carry-on pocket.',
    image: '/products/travel-adapter.jpg',
    category: 'Travel',
    type: 'physical',
    badge: 'Staff Pick',
    icon: '✈️',
  },
  {
    id: 'posture-corrector',
    name: 'Smart Posture Corrector — Rechargeable with Vibration Alert',
    price: 24.99,
    compareAt: 32.99,
    description: 'Vibrates the second you slouch. Invisible under clothes.',
    details: 'Vibrates the second you slouch. Rechargeable, invisible under clothes, built-in LCD. The military taught me what bad posture costs — back pain, neck strain, and a presence that doesn\'t command a room.',
    image: '/products/posture-corrector.jpg',
    category: 'Wellness',
    type: 'physical',
    badge: 'Cash Cow',
    icon: '🧍',
  },
  {
    id: 'acupressure-mat',
    name: 'TOMSHOO Acupressure Mat & Pillow Recovery Set',
    price: 64.99,
    compareAt: 85.99,
    description: 'Mat, pillow, massage balls. 15 minutes and the tension melts.',
    details: 'Mat, pillow, and massage balls in a carry bag. 15 minutes on this after a long day and the tension melts. Thousands of pressure points target your back, neck, and feet.',
    image: '/products/acupressure-mat.jpg',
    category: 'Recovery',
    type: 'physical',
    icon: '🧘',
  },
  {
    id: 'red-light-panel',
    name: 'LED Red Light Therapy Panel — 225 LEDs',
    price: 64.99,
    compareAt: 85.99,
    description: 'Skin rejuvenation + muscle recovery. 15 minutes a day.',
    details: 'Red light therapy for skin rejuvenation, muscle recovery, and pain relief. 225 medical-grade LEDs, 15 minutes a day. Recovery isn\'t a luxury — it\'s the edge.',
    image: '/products/red-light-panel.avif',
    category: 'Recovery',
    type: 'physical',
    badge: 'Trending',
    icon: '💡',
  },
  {
    id: 'forearm-roller',
    name: 'Forearm Strengthener Wrist Roller — Wooden Handle',
    price: 14.99,
    compareAt: 19.99,
    description: 'Grip strength separates the strong from the average.',
    details: 'Grip strength separates the strong from the average. Wooden handle, steel carabiner clip, hang it anywhere. 3 sets a day and your handshake alone closes deals.',
    image: '/products/forearm-roller.jpg',
    category: 'Fitness',
    type: 'physical',
    icon: '💪',
  },
  {
    id: 'body-scrubber',
    name: 'Exfoliating Body Scrubber Set — Back Scrubber, Glove & Loofah',
    price: 12.99,
    compareAt: 16.99,
    description: 'Three tools, one shower. Clean skin is discipline.',
    details: 'Three tools, one shower. Back scrubber hits where your hands can\'t reach, exfoliating glove clears dead skin, loofah finishes the job. Clean skin isn\'t vanity — it\'s discipline.',
    image: '/products/body-scrubber.avif',
    category: 'Grooming',
    type: 'physical',
    badge: '990+ Reviews',
    icon: '🚿',
  },
  {
    id: 'wedge-pillow',
    name: 'Orthopedic Wedge Pillow — Anti-Snore & Recovery Sleep',
    price: 59.99,
    compareAt: 79.99,
    description: 'Your recovery starts when you sleep. Stop waking up broken.',
    details: 'Adjustable incline eliminates acid reflux, reduces snoring, and keeps your spine aligned. 8 hours of repair instead of 8 hours of damage.',
    image: '/products/wedge-pillow.jpg',
    category: 'Recovery',
    type: 'physical',
    icon: '😴',
  },
]

// ============================================================
// BUNDLE RULES — single source of truth for the discount.
// Select this many distinct items (or more) to unlock the deal.
// ============================================================
export const BUNDLE_MIN_ITEMS = 3
export const BUNDLE_DISCOUNT = 0.2 // 20% off

/** Does a set of distinct item ids qualify for the bundle discount? */
export function qualifiesForBundle(distinctItemCount: number): boolean {
  return distinctItemCount >= BUNDLE_MIN_ITEMS
}
