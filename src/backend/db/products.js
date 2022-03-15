import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    name: "Aloe",
    originalPrice: 3999,
    discount: 25,
    discountedPrice: 2999,
    description:
      "This prehistoric-looking chick is anything but old-fashioned. She'll grab the attention - or the sleeve - of anyone who walks by.",
    rating: 4.5,
    botanicalName: "Aloe Vera",
    size: "small",
    sunlight: "high",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: true,
    isTrending: false,
    images: [
      "assets/Products/Aloe/photo-1.webp",
      "assets/Products/Aloe/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "ZZ Plant",
    originalPrice: 7999,
    discount: 25,
    discountedPrice: 5999,
    description:
      "The ZZ is everything you'd want in a beginner plant. Stunning + impossible to kill + air-purifying = houseplant perfection.",
    rating: 4,
    botanicalName: "Zamioculcas Zamiifolia",
    size: "large",
    sunlight: "high",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: true,
    images: [
      "assets/Products/ZZ-Plant/photo-1.webp",
      "assets/Products/ZZ-Plant/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Snake Plant",
    originalPrice: 5799,
    discount: 22,
    discountedPrice: 4499,
    description:
      "Her sleek, architectural leaves will add an undeniable element of cool to your home or office. Natural variations in color and pattern are to be expected with this plant. Rough edges are part of her charm.",
    rating: 4,
    botanicalName: "Sansevieria Zeylanica",
    size: "medium",
    sunlight: "medium",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: true,
    isTrending: false,
    images: [
      "assets/Products/Snake-Plant/photo-1.webp",
      "assets/Products/Snake-Plant/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Peace Lily",
    originalPrice: 7999,
    discount: 25,
    discountedPrice: 5999,
    description:
      "This graceful gal brings a bright, calming presence to any room she enters. Her vivid leaves, elegant white flowers, and forgiving nature will quickly make her one of your favorite houseplants.",
    rating: 4,
    botanicalName: "Spathiphyllum",
    size: "large",
    sunlight: "medium",
    maintenance: "high",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: true,
    images: [
      "assets/Products/Peace-Lily/photo-1.webp",
      "assets/Products/Peace-Lily/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Monstera",
    originalPrice: 3499,
    discount: 28,
    discountedPrice: 2499,
    description:
      "Add a touch of the tropics to your space with this popular babe. As she matures, her glossy heart-shaped leaves will start developing those signature holes and split edges she's famous for.",
    rating: 4.5,
    botanicalName: "Monstera Deliciosa",
    size: "medium",
    sunlight: "high",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: true,
    isTrending: false,
    images: [
      "assets/Products/Monstera/photo-1.webp",
      "assets/Products/Monstera/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Rubber Tree",
    originalPrice: 5999,
    discount: 16,
    discountedPrice: 4999,
    description:
      "The OG of houseplants, this dark and timeless beauty will be a staple in your home for years to come. Set her near a window in indirect light and watch her shine.",
    rating: 4,
    botanicalName: "Ficus Elastica",
    size: "large",
    sunlight: "medium",
    maintenance: "high",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Rubber-Tree/photo-1.webp",
      "assets/Products/Rubber-Tree/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Jade",
    originalPrice: 3499,
    discount: 28,
    discountedPrice: 2499,
    description:
      "This lucky lady will be your new favorite. Find her a sunny spot to keep her glossy, oval leaves standing tall.",
    rating: 4,
    botanicalName: "Crassula Ovata",
    size: "small",
    sunlight: "high",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: true,
    isTrending: false,
    images: [
      "assets/Products/Jade/photo-1.webp",
      "assets/Products/Jade/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },

  {
    _id: uuid(),
    name: "Song of India",
    originalPrice: 2999,
    discount: 16,
    discountedPrice: 2599,
    description:
      "This mellow plant's long yellow striped leaves twist and dance to the beat of their own drum.",
    rating: 4,
    botanicalName: "Dracaena Reflexa",
    size: "small",
    sunlight: "medium",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: true,
    images: [
      "assets/Products/Song-of-India/photo-1.webp",
      "assets/Products/Song-of-India/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },

  {
    _id: uuid(),
    name: "Palm",
    originalPrice: 7999,
    discount: 25,
    discountedPrice: 5999,
    description:
      "Tall and graceful, this statuesque beauty will have you dreaming of your next vacation. Her feathery, arching leaves will add a touch of the tropics to your space.",
    rating: 4.5,
    botanicalName: "Dypsis Lutescens",
    size: "large",
    sunlight: "medium",
    maintenance: "high",
    categories: ["Air-Purifying", "Pet-Friendly"],
    isBestseller: false,
    isTrending: true,
    images: [
      "assets/Products/Palm/photo-1.webp",
      "assets/Products/Palm/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Banana",
    originalPrice: 5999,
    discount: 16,
    discountedPrice: 4999,
    description:
      "This plant is bananas, B-A-N-A-N-A-S. No really—she can actually produce the fruit we all know and love. Her huge, thin leaves will have you dreaming of island vacations and sipping on piña coladas.",
    rating: 3.5,
    botanicalName: "Musa Acuminata",
    size: "medium",
    sunlight: "high",
    maintenance: "high",
    categories: ["Air-Purifying", "Pet-Friendly"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Banana/photo-1.webp",
      "assets/Products/Banana/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },

  {
    _id: uuid(),
    name: "Umbrella",
    originalPrice: 3499,
    discount: 14,
    discountedPrice: 2999,
    description:
      "This lush lady is one of the friendliest houseplants you'll meet. Her oval green leaves droop gracefully from a central stalk, like tiny umbrellas.",
    rating: 3.5,
    botanicalName: "Schefflera Arboricola",
    size: "small",
    sunlight: "medium",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Rubber-Tree/photo-1.webp",
      "assets/Products/Rubber-Tree/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Aurora",
    originalPrice: 5999,
    discount: 25,
    discountedPrice: 3499,
    description:
      "Vibrant and easy, this gorgeous plant will become the center of attention in your space. With her bright pink edged leaves and light pink stems, she's anything but average.",
    rating: 3.5,
    botanicalName: "Mussaenda Philippica",
    size: "medium",
    sunlight: "medium",
    maintenance: "high",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Aurora/photo-1.webp",
      "assets/Products/Aurora/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Fiddle-Leaf Fig",
    originalPrice: 3499,
    discount: 14,
    discountedPrice: 2999,
    description:
      "She's undeniably one of the cool girls amongst houseplants. The Fiddle-leaf Fig is sculptural, dramatic, and her large, waxy foliage works with virtually any type of decor style.",
    rating: 3.5,
    botanicalName: "Ficus Lyrata",
    size: "small",
    sunlight: "medium",
    maintenance: "high",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Fiddle-Leaf-Fig/photo-1.webp",
      "assets/Products/Fiddle-Leaf-Fig/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Devil's Ivy",
    originalPrice: 5499,
    discount: 18,
    discountedPrice: 4499,
    description:
      "Not only will this plant's variegated, heart-shaped leaves charm you for years to come, but she's the perfect beginner plant; hard to kill and easy to grow.",
    rating: 3.5,
    botanicalName: "Epipremnum Aureum",
    size: "medium",
    sunlight: "medium",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Devil's-Ivy/photo-1.webp",
      "assets/Products/Devil's-Ivy/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Peperomia",
    originalPrice: 5499,
    discount: 18,
    discountedPrice: 4499,
    description:
      "Not one for direct sunlight, this chick likes to play it cool in the background. She doesn't need much to keep her signature verdant leaves looking glossy, thick, and vibrant.",
    rating: 4,
    botanicalName: "Peperomia Obtusifolia",
    size: "medium",
    sunlight: "medium",
    maintenance: "medium",
    categories: ["Air-Purifying", "Pet-Friendly"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Peperomia/photo-1.webp",
      "assets/Products/Peperomia/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Blue Star Fern",
    originalPrice: 5499,
    discount: 18,
    discountedPrice: 4499,
    description:
      "This playful plant will instantly liven up your space with her sprawling, minty green fronds.",
    rating: 4,
    botanicalName: "Phlebodium Aureum",
    size: "medium",
    sunlight: "medium",
    maintenance: "medium",
    categories: ["Air-Purifying", "Pet-Friendly"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Blue-Star-Fern/photo-1.webp",
      "assets/Products/Blue-Star-Fern/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Yucca",
    originalPrice: 5499,
    discount: 18,
    discountedPrice: 4499,
    description:
      "This Southwestern stunner will thrive in bright light as she woos you with her one-of-a-kind charm and easy-going personality. She’s just what you need to instantly spice up your space.",
    rating: 3.5,
    botanicalName: "Yucca Elephantipes",
    size: "medium",
    sunlight: "medium",
    maintenance: "low",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Yucca/photo-1.webp",
      "assets/Products/Yucca/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Pilea",
    originalPrice: 3499,
    discount: 14,
    discountedPrice: 2999,
    description:
      "This lively plant's bright green, coin-shaped leaves are what give her the nickname, The Chinese Money Plant. She's known to bring good luck and fortune—aka the perfect housewarming gift.",
    rating: 4,
    botanicalName: "Pilea Peperomioides",
    size: "small",
    sunlight: "low",
    maintenance: "low",
    categories: ["Air-Purifying", "Pet-Friendly"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Pilea/phto-1.webp",
      "assets/Products/Pilea/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Dracaena",
    originalPrice: 3499,
    discount: 14,
    discountedPrice: 2999,
    description:
      "You'd almost think she was fake, but she's as real as they come. Her perfectly symmetrical, glossy forest green leaves will help you bring a touch of the outdoors in.",
    rating: 4,
    botanicalName: "Dracaena Fragrans",
    size: "small",
    sunlight: "low",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Dracaena/photo-1.webp",
      "assets/Products/Dracaena/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Dragon Tree",
    originalPrice: 4999,
    discount: 20,
    discountedPrice: 3999,
    description:
      "This plant's cascading multi-toned leaves may look dainty, but she's one of the most resilient houseplants you'll meet.",
    rating: 4,
    botanicalName: "Dracaena Marginata",
    size: "medium",
    sunlight: "medium",
    maintenance: "high",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Dragon-Tree/photo-1.webp",
      "assets/Products/Dragon-Tree/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Croton Petra",
    originalPrice: 3499,
    discount: 14,
    discountedPrice: 2999,
    description:
      "This beachy babe's vibrant leaves will have you dreaming of a tropical sunset.",
    rating: 4,
    botanicalName: "Codiaeum Variegatum",
    size: "small",
    sunlight: "medium",
    maintenance: "high",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Croton-Petra/photo-1.webp",
      "assets/Products/Croton-Petra/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Bird's Nest Fern",
    originalPrice: 3499,
    discount: 14,
    discountedPrice: 2999,
    description:
      "This playful plant will instantly liven up your space with her long, bright green fronds.",
    rating: 3.5,
    botanicalName: "Asplenium Nidus",
    size: "large",
    sunlight: "medium",
    maintenance: "medium",
    categories: ["Air-Purifying"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Bird's-Nest-Fern/photo-1.webp",
      "assets/Products/Bird's-Nest-Fern/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Zebra Plant",
    originalPrice: 3499,
    discount: 14,
    discountedPrice: 2999,
    description:
      "She's wildly striking, but this dark, striped lady is a bit temperamental and needs a little extra TLC. Keep her in the sun, but not too direct; give her a bit of water, but not too much. With the right love and attention, she'll stay happy.",
    rating: 3.5,
    botanicalName: "Aphelandra Squarrosa",
    size: "medium",
    sunlight: "medium",
    maintenance: "high",
    categories: ["Air-Purifying", "Pet-Friendly"],
    isBestseller: false,
    isTrending: false,
    images: [
      "assets/Products/Zebra-Plant/photo-1.webp",
      "assets/Products/Zebra-Plant/photo-2.webp",
    ],
    quantity: 10,
    inStock: true,
  },
];
