const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Product = require("./src/models/Product");
require("dotenv").config();

const products = [
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Wireless Bluetooth Headphones",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: 59.99,
    discount: 20,
    discountedPrice: 47.99,
    fastDelivery: true,
    rating: { rate: 3.8, count: 12 },
    productDescription:
      "Experience high-quality sound with these wireless Bluetooth headphones. Featuring noise cancellation, a comfortable fit, and long battery life—perfect for music lovers on the go.",
    variants: [
      { size: "Over-Ear", color: "Black", available: 15 },
      { size: "Over-Ear", color: "Blue", available: 8 },
      { size: "On-Ear", color: "Black", available: 5 },
      { size: "On-Ear", color: "White", available: 0 },
      { size: "In-Ear", color: "Black", available: 20 },
      { size: "In-Ear", color: "Red", available: 12 },
    ],
    reviews: [
      {
        username: "techlover99",
        comment: "Great sound quality and very comfortable to wear.",
        rating: 4.5,
        date: "2025-06-28",
      },
      {
        username: "audiophile22",
        comment:
          "Battery lasts a long time, but could use better noise cancellation.",
        rating: 3.8,
        date: "2025-06-15",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Smartphone with 128GB Storage",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    price: 699.99,
    discount: 15,
    discountedPrice: 594.99,
    fastDelivery: true,
    rating: { rate: 4.2, count: 89 },
    productDescription:
      "Latest smartphone with advanced camera technology, fast processor, and long-lasting battery. Perfect for work and entertainment.",
    variants: [
      { size: "128GB", color: "Black", available: 25 },
      { size: "128GB", color: "Blue", available: 18 },
      { size: "256GB", color: "Black", available: 12 },
      { size: "256GB", color: "Gold", available: 8 },
    ],
    reviews: [
      {
        username: "mobileuser",
        comment: "Excellent camera quality and fast performance.",
        rating: 4.5,
        date: "2025-06-20",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Coffee Maker Machine",
    category: "Kitchen",
    productImage:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    price: 89.99,
    discount: 10,
    discountedPrice: 80.99,
    fastDelivery: false,
    rating: { rate: 4.0, count: 34 },
    productDescription:
      "Brew perfect coffee every morning with this programmable coffee maker. Features auto-shut off and glass carafe.",
    variants: [
      { size: "12-Cup", color: "Black", available: 20 },
      { size: "12-Cup", color: "Silver", available: 15 },
      { size: "8-Cup", color: "Black", available: 10 },
    ],
    reviews: [
      {
        username: "coffeelover",
        comment: "Makes great coffee, easy to use and clean.",
        rating: 4.2,
        date: "2025-06-18",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Running Shoes",
    category: "Sports",
    productImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    price: 79.99,
    discount: 25,
    discountedPrice: 59.99,
    fastDelivery: true,
    rating: { rate: 4.5, count: 67 },
    productDescription:
      "Lightweight running shoes with excellent cushioning and breathable mesh upper. Perfect for daily runs and workouts.",
    variants: [
      { size: "8", color: "Black", available: 12 },
      { size: "9", color: "Black", available: 15 },
      { size: "10", color: "Blue", available: 8 },
      { size: "11", color: "Grey", available: 6 },
    ],
    reviews: [
      {
        username: "runner123",
        comment: "Very comfortable and great for long runs.",
        rating: 4.7,
        date: "2025-06-25",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Laptop Computer",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    price: 999.99,
    discount: 20,
    discountedPrice: 799.99,
    fastDelivery: true,
    rating: { rate: 4.3, count: 156 },
    productDescription:
      "High-performance laptop with fast SSD, excellent display, and long battery life. Ideal for work, study, and entertainment.",
    variants: [
      { size: "15-inch", color: "Silver", available: 10 },
      { size: "15-inch", color: "Space Grey", available: 8 },
      { size: "13-inch", color: "Silver", available: 12 },
    ],
    reviews: [
      {
        username: "techreview",
        comment: "Great performance and build quality.",
        rating: 4.4,
        date: "2025-06-22",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Backpack Travel Bag",
    category: "Fashion",
    productImage:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    price: 45.99,
    discount: 15,
    discountedPrice: 39.09,
    fastDelivery: false,
    rating: { rate: 3.9, count: 23 },
    productDescription:
      "Durable travel backpack with multiple compartments and comfortable straps. Perfect for hiking, travel, and everyday use.",
    variants: [
      { size: "Medium", color: "Black", available: 20 },
      { size: "Large", color: "Grey", available: 15 },
      { size: "Large", color: "Blue", available: 10 },
    ],
    reviews: [
      {
        username: "traveler",
        comment: "Good quality backpack for the price.",
        rating: 4.0,
        date: "2025-06-19",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Wrist Watch",
    category: "Fashion",
    productImage:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    price: 129.99,
    discount: 30,
    discountedPrice: 90.99,
    fastDelivery: true,
    rating: { rate: 4.1, count: 45 },
    productDescription:
      "Elegant wrist watch with leather strap and water-resistant design. Perfect for formal and casual occasions.",
    variants: [
      { size: "42mm", color: "Black", available: 18 },
      { size: "42mm", color: "Brown", available: 12 },
      { size: "38mm", color: "Silver", available: 8 },
    ],
    reviews: [
      {
        username: "watchcollector",
        comment: "Beautiful design and good quality.",
        rating: 4.3,
        date: "2025-06-21",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Wireless Mouse",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    price: 29.99,
    discount: 20,
    discountedPrice: 23.99,
    fastDelivery: true,
    rating: { rate: 3.7, count: 28 },
    productDescription:
      "Ergonomic wireless mouse with precision tracking and long battery life. Compatible with all devices.",
    variants: [
      { size: "Standard", color: "Black", available: 25 },
      { size: "Standard", color: "White", available: 20 },
      { size: "Compact", color: "Grey", available: 15 },
    ],
    reviews: [
      {
        username: "gamer",
        comment: "Good mouse for everyday use.",
        rating: 3.8,
        date: "2025-06-17",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Plant Pot Indoor",
    category: "Home",
    productImage:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    price: 24.99,
    discount: 0,
    discountedPrice: 24.99,
    fastDelivery: false,
    rating: { rate: 4.4, count: 19 },
    productDescription:
      "Beautiful ceramic plant pot perfect for indoor plants. Includes drainage tray and modern design.",
    variants: [
      { size: "Small", color: "White", available: 30 },
      { size: "Medium", color: "Terracotta", available: 25 },
      { size: "Large", color: "Black", available: 15 },
    ],
    reviews: [
      {
        username: "plantlover",
        comment: "Perfect size and beautiful design.",
        rating: 4.5,
        date: "2025-06-16",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Sunglasses",
    category: "Fashion",
    productImage:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    price: 39.99,
    discount: 25,
    discountedPrice: 29.99,
    fastDelivery: true,
    rating: { rate: 4.0, count: 31 },
    productDescription:
      "Stylish sunglasses with UV protection and polarized lenses. Perfect for outdoor activities and fashion.",
    variants: [
      { size: "Standard", color: "Black", available: 22 },
      { size: "Standard", color: "Brown", available: 18 },
      { size: "Large", color: "Blue", available: 10 },
    ],
    reviews: [
      {
        username: "fashionista",
        comment: "Great style and good sun protection.",
        rating: 4.2,
        date: "2025-06-23",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Desk Lamp LED",
    category: "Home",
    productImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    price: 34.99,
    discount: 15,
    discountedPrice: 29.74,
    fastDelivery: false,
    rating: { rate: 4.2, count: 26 },
    productDescription:
      "Adjustable LED desk lamp with multiple brightness levels and USB charging port. Perfect for studying and working.",
    variants: [
      { size: "Standard", color: "White", available: 20 },
      { size: "Standard", color: "Black", available: 15 },
      { size: "Compact", color: "Silver", available: 12 },
    ],
    reviews: [
      {
        username: "student",
        comment: "Great lighting for studying late at night.",
        rating: 4.3,
        date: "2025-06-24",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Wireless Earbuds",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    price: 99.99,
    discount: 30,
    discountedPrice: 69.99,
    fastDelivery: true,
    rating: { rate: 4.4, count: 78 },
    productDescription:
      "True wireless earbuds with active noise cancellation and premium sound quality. Includes wireless charging case.",
    variants: [
      { size: "Standard", color: "White", available: 25 },
      { size: "Standard", color: "Black", available: 20 },
      { size: "Pro", color: "Silver", available: 12 },
    ],
    reviews: [
      {
        username: "musiclover",
        comment: "Amazing sound quality and comfortable fit.",
        rating: 4.6,
        date: "2025-06-26",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Kitchen Knife Set",
    category: "Kitchen",
    productImage:
      "https://images.unsplash.com/photo-1581899487043-fd0ec1ec908a?w=400&h=400&fit=crop",
    price: 69.99,
    discount: 20,
    discountedPrice: 55.99,
    fastDelivery: false,
    rating: { rate: 4.3, count: 42 },
    productDescription:
      "Professional kitchen knife set with sharp stainless steel blades and ergonomic handles. Includes wooden block.",
    variants: [
      { size: "5-Piece", color: "Silver", available: 15 },
      { size: "8-Piece", color: "Black", available: 12 },
      { size: "8-Piece", color: "Silver", available: 8 },
    ],
    reviews: [
      {
        username: "chef",
        comment: "Excellent quality knives for cooking.",
        rating: 4.5,
        date: "2025-06-27",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Yoga Mat",
    category: "Sports",
    productImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    price: 29.99,
    discount: 10,
    discountedPrice: 26.99,
    fastDelivery: true,
    rating: { rate: 4.1, count: 35 },
    productDescription:
      "Non-slip yoga mat with extra cushioning and eco-friendly materials. Perfect for yoga, pilates, and stretching.",
    variants: [
      { size: "Standard", color: "Purple", available: 20 },
      { size: "Standard", color: "Blue", available: 18 },
      { size: "Thick", color: "Pink", available: 12 },
    ],
    reviews: [
      {
        username: "yogamaster",
        comment: "Great grip and comfortable for long sessions.",
        rating: 4.2,
        date: "2025-06-29",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Gaming Keyboard",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    price: 89.99,
    discount: 25,
    discountedPrice: 67.49,
    fastDelivery: true,
    rating: { rate: 4.5, count: 92 },
    productDescription:
      "Mechanical gaming keyboard with RGB backlighting and programmable keys. Built for gaming performance.",
    variants: [
      { size: "Full-Size", color: "Black", available: 18 },
      { size: "Compact", color: "White", available: 15 },
      { size: "Full-Size", color: "RGB", available: 10 },
    ],
    reviews: [
      {
        username: "progamer",
        comment: "Excellent response time and build quality.",
        rating: 4.7,
        date: "2025-06-30",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Water Bottle",
    category: "Sports",
    productImage:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    price: 19.99,
    discount: 15,
    discountedPrice: 16.99,
    fastDelivery: false,
    rating: { rate: 3.8, count: 29 },
    productDescription:
      "Insulated stainless steel water bottle that keeps drinks cold for 24 hours and hot for 12 hours. BPA-free.",
    variants: [
      { size: "500ml", color: "Blue", available: 25 },
      { size: "750ml", color: "Black", available: 20 },
      { size: "1L", color: "Silver", available: 15 },
    ],
    reviews: [
      {
        username: "athlete",
        comment: "Keeps water cold all day during workouts.",
        rating: 4.0,
        date: "2025-07-01",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Table Lamp",
    category: "Home",
    productImage:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    price: 49.99,
    discount: 20,
    discountedPrice: 39.99,
    fastDelivery: false,
    rating: { rate: 4.0, count: 18 },
    productDescription:
      "Modern table lamp with fabric shade and adjustable brightness. Perfect for living room and bedroom decoration.",
    variants: [
      { size: "Medium", color: "White", available: 15 },
      { size: "Large", color: "Grey", available: 12 },
      { size: "Medium", color: "Beige", available: 10 },
    ],
    reviews: [
      {
        username: "decorator",
        comment: "Beautiful design and soft lighting.",
        rating: 4.1,
        date: "2025-07-02",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Bluetooth Speaker",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    price: 79.99,
    discount: 25,
    discountedPrice: 59.99,
    fastDelivery: true,
    rating: { rate: 4.3, count: 67 },
    productDescription:
      "Portable Bluetooth speaker with powerful bass and 360-degree sound. Waterproof design for outdoor use.",
    variants: [
      { size: "Compact", color: "Black", available: 22 },
      { size: "Standard", color: "Blue", available: 18 },
      { size: "Large", color: "Red", available: 12 },
    ],
    reviews: [
      {
        username: "partygoer",
        comment: "Great sound quality and very portable.",
        rating: 4.4,
        date: "2025-07-03",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Baseball Cap",
    category: "Fashion",
    productImage:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    price: 24.99,
    discount: 10,
    discountedPrice: 22.49,
    fastDelivery: true,
    rating: { rate: 3.9, count: 24 },
    productDescription:
      "Classic baseball cap with adjustable strap and breathable fabric. Perfect for casual wear and sun protection.",
    variants: [
      { size: "One-Size", color: "Navy", available: 30 },
      { size: "One-Size", color: "Black", available: 25 },
      { size: "One-Size", color: "Red", available: 20 },
    ],
    reviews: [
      {
        username: "casual",
        comment: "Comfortable fit and good quality.",
        rating: 4.0,
        date: "2025-07-04",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Blender",
    category: "Kitchen",
    productImage:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop",
    price: 119.99,
    discount: 30,
    discountedPrice: 83.99,
    fastDelivery: false,
    rating: { rate: 4.2, count: 58 },
    productDescription:
      "High-performance blender with multiple speed settings and stainless steel blades. Perfect for smoothies and food prep.",
    variants: [
      { size: "1.5L", color: "Black", available: 15 },
      { size: "2L", color: "Silver", available: 12 },
      { size: "1.5L", color: "White", available: 10 },
    ],
    reviews: [
      {
        username: "healthyeater",
        comment: "Makes perfect smoothies every time.",
        rating: 4.3,
        date: "2025-07-05",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Dumbbell Set",
    category: "Sports",
    productImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    price: 149.99,
    discount: 20,
    discountedPrice: 119.99,
    fastDelivery: false,
    rating: { rate: 4.4, count: 73 },
    productDescription:
      "Adjustable dumbbell set with secure locking mechanism. Perfect for home gym and strength training.",
    variants: [
      { size: "10-50lbs", color: "Black", available: 8 },
      { size: "5-25lbs", color: "Silver", available: 12 },
      { size: "15-75lbs", color: "Black", available: 5 },
    ],
    reviews: [
      {
        username: "fitness",
        comment: "Great quality and easy to adjust weight.",
        rating: 4.5,
        date: "2025-07-06",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Wall Clock",
    category: "Home",
    productImage:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop",
    price: 32.99,
    discount: 15,
    discountedPrice: 28.04,
    fastDelivery: false,
    rating: { rate: 3.7, count: 22 },
    productDescription:
      "Modern wall clock with silent movement and elegant design. Perfect for any room in your home.",
    variants: [
      { size: "12-inch", color: "White", available: 20 },
      { size: "15-inch", color: "Black", available: 15 },
      { size: "12-inch", color: "Wood", available: 12 },
    ],
    reviews: [
      {
        username: "homeowner",
        comment: "Nice design and keeps accurate time.",
        rating: 3.8,
        date: "2025-07-07",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Webcam HD",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=400&h=400&fit=crop",
    price: 59.99,
    discount: 25,
    discountedPrice: 44.99,
    fastDelivery: true,
    rating: { rate: 4.1, count: 48 },
    productDescription:
      "High-definition webcam with auto-focus and built-in microphone. Perfect for video calls and streaming.",
    variants: [
      { size: "1080p", color: "Black", available: 20 },
      { size: "4K", color: "White", available: 15 },
      { size: "1080p", color: "Silver", available: 12 },
    ],
    reviews: [
      {
        username: "remote",
        comment: "Clear video quality for online meetings.",
        rating: 4.2,
        date: "2025-07-08",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Handbag",
    category: "Fashion",
    productImage:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    price: 79.99,
    discount: 20,
    discountedPrice: 63.99,
    fastDelivery: true,
    rating: { rate: 4.0, count: 36 },
    productDescription:
      "Elegant leather handbag with multiple compartments and adjustable strap. Perfect for work and casual occasions.",
    variants: [
      { size: "Medium", color: "Black", available: 18 },
      { size: "Large", color: "Brown", available: 15 },
      { size: "Small", color: "Tan", available: 12 },
    ],
    reviews: [
      {
        username: "fashionlover",
        comment: "Beautiful bag with good storage space.",
        rating: 4.1,
        date: "2025-07-09",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Air Purifier",
    category: "Home",
    productImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: 199.99,
    discount: 25,
    discountedPrice: 149.99,
    fastDelivery: false,
    rating: { rate: 4.3, count: 84 },
    productDescription:
      "HEPA air purifier with smart sensors and quiet operation. Removes 99.97% of allergens and pollutants.",
    variants: [
      { size: "Small-Room", color: "White", available: 12 },
      { size: "Large-Room", color: "Black", available: 8 },
      { size: "Medium-Room", color: "Silver", available: 10 },
    ],
    reviews: [
      {
        username: "cleaner",
        comment: "Significantly improved air quality in my home.",
        rating: 4.4,
        date: "2025-07-10",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Electric Toothbrush",
    category: "Personal Care",
    productImage:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop",
    price: 89.99,
    discount: 30,
    discountedPrice: 62.99,
    fastDelivery: true,
    rating: { rate: 4.2, count: 91 },
    productDescription:
      "Electric toothbrush with multiple cleaning modes and smart timer. Includes charging station and travel case.",
    variants: [
      { size: "Standard", color: "White", available: 25 },
      { size: "Standard", color: "Black", available: 20 },
      { size: "Pro", color: "Blue", available: 15 },
    ],
    reviews: [
      {
        username: "dental",
        comment: "Much better than manual brushing.",
        rating: 4.3,
        date: "2025-07-11",
      },
    ],
  },
  {
    productId: `P-${uuidv4().slice(0, 8)}`,
    productName: "Gaming Monitor",
    category: "Electronics",
    productImage:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    price: 299.99,
    discount: 20,
    discountedPrice: 239.99,
    fastDelivery: true,
    rating: { rate: 4.5, count: 123 },
    productDescription:
      "27-inch gaming monitor with 144Hz refresh rate and 1ms response time. Perfect for competitive gaming.",
    variants: [
      { size: "24-inch", color: "Black", available: 15 },
      { size: "27-inch", color: "Black", available: 12 },
      { size: "32-inch", color: "Silver", available: 8 },
    ],
    reviews: [
      {
        username: "gamer",
        comment: "Smooth gameplay and excellent color accuracy.",
        rating: 4.6,
        date: "2025-07-12",
      },
    ],
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to MongoDB");
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database seeded with 25 products");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error seeding database:", err);
  });
