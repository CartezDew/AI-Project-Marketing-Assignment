import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HotWheelsCommunity.css';

/**
 * Hot Wheels Collectors Community Hub
 * Features: Blog posts, CRUD operations, comments, user interactions
 */
const HotWheelsCommunity = ({ selectedBuildStyle }) => {
  // Sample initial posts - organized by build styles and categories
  const initialPosts = [
    // === SPEED RACER BUILD STYLE POSTS ===
    {
      id: 1,
      author: 'SpeedDemon_24',
      authorAvatar: '🏎️',
      title: 'Ultimate Speed Racer Setup: My Top 10 Fastest Cars',
      content: 'After testing over 200 cars on my speed track, here are my top 10 fastest Hot Wheels! The McLaren P1 took first place with an average of 2.3 seconds on a 30ft drop. Speed Racer builds need low-friction wheels and aerodynamic bodies. Full rankings inside!',
      category: 'General',
      buildStyle: 'speed',
      images: [],
      likes: 892,
      liked: false,
      timestamp: new Date('2024-12-06T14:30:00'),
      comments: [
        { id: 1, author: 'TurboKid', authorAvatar: '⚡', content: 'The McLaren is insane! I clocked mine at 2.1 seconds!', timestamp: new Date('2024-12-06T15:00:00'), likes: 24 },
        { id: 2, author: 'DragRacer99', authorAvatar: '🏁', content: 'What about the Tesla Roadster? That thing flies!', timestamp: new Date('2024-12-06T16:30:00'), likes: 18 }
      ]
    },
    {
      id: 2,
      author: 'NitroNinja',
      authorAvatar: '💨',
      title: 'Speed Track Engineering: How to Build for Maximum Velocity',
      content: 'Want your cars to go FASTER? Its all about the physics! Steeper drops, smooth transitions, and polished track surfaces. I increased my track speeds by 40% using these techniques. Tutorial with diagrams included!',
      category: 'Tutorial',
      buildStyle: 'speed',
      images: [],
      likes: 567,
      liked: false,
      timestamp: new Date('2024-12-05T11:15:00'),
      comments: [
        { id: 1, author: 'PhysicsNerd', authorAvatar: '🧪', content: 'The friction coefficient breakdown is genius!', timestamp: new Date('2024-12-05T12:00:00'), likes: 15 }
      ]
    },
    {
      id: 3,
      author: 'F1Fanatic',
      authorAvatar: '🏎️',
      title: 'Custom Speed Racer: Turning a $1 Mainline into a Champion',
      content: 'Bought a basic mainline, swapped the wheels for graphite-lubed axles, polished the base, and added weight to the front. Now it beats every premium car in my collection. Cost: $3 total!',
      category: 'Custom',
      buildStyle: 'speed',
      images: [],
      likes: 445,
      liked: false,
      timestamp: new Date('2024-12-04T09:00:00'),
      comments: []
    },

    // === RETRO CRUISER BUILD STYLE POSTS ===
    {
      id: 4,
      author: 'VintageVibes',
      authorAvatar: '🚗',
      title: "My Vintage '67 Camaro Restoration Journey",
      content: 'Started with a rusty mainline from 1968. After 6 months of careful restoration, added custom Real Riders wheels and a spectraflame blue repaint. The transformation was incredible! Retro cruisers deserve the love.',
      category: 'Restoration',
      buildStyle: 'retro',
      images: [],
      likes: 734,
      liked: false,
      timestamp: new Date('2024-12-05T10:30:00'),
      comments: [
        { id: 1, author: 'CollectorKing', authorAvatar: '🏆', content: 'Amazing work! What paint did you use?', timestamp: new Date('2024-12-05T11:00:00'), likes: 12 },
        { id: 2, author: 'ClassicCarGuy', authorAvatar: '🚙', content: 'This is restoration goals! 🔥', timestamp: new Date('2024-12-05T12:30:00'), likes: 8 }
      ]
    },
    {
      id: 5,
      author: 'RetroRider',
      authorAvatar: '🚙',
      title: 'Complete Guide to Identifying Redline Era Hot Wheels',
      content: 'The Redline era (1968-1977) produced some of the most valuable Hot Wheels ever. Heres how to identify authentic pieces: look for the red stripe on the tires, check the base for "Hong Kong" or "US" markings, and examine the spectraflame paint quality.',
      category: 'Tutorial',
      buildStyle: 'retro',
      images: [],
      likes: 612,
      liked: false,
      timestamp: new Date('2024-12-04T16:45:00'),
      comments: [
        { id: 1, author: 'AntiqueHunter', authorAvatar: '🔍', content: 'Found a 1969 Beach Bomb at a garage sale using these tips!', timestamp: new Date('2024-12-04T17:30:00'), likes: 42 }
      ]
    },
    {
      id: 6,
      author: 'ClassicCruiser',
      authorAvatar: '🚗',
      title: 'My 1970s Muscle Car Collection - 50 Years of Nostalgia',
      content: 'Sharing my collection of 70s muscle cars: Chevelle SS, Plymouth Barracuda, Ford Torino, and more. Each one tells a story of American automotive history. These retro cruisers are my pride and joy!',
      category: 'Collection',
      buildStyle: 'retro',
      images: [],
      likes: 523,
      liked: false,
      timestamp: new Date('2024-12-03T14:20:00'),
      comments: []
    },
    {
      id: 7,
      author: 'NostalgiaKing',
      authorAvatar: '📻',
      title: 'Unboxing: 50th Anniversary Retro Series Complete Set',
      content: 'Just got the complete 50th Anniversary retro series! These reimagined classics with modern details are perfect for any retro cruiser fan. The packaging alone is a collectors item.',
      category: 'Unboxing',
      buildStyle: 'retro',
      images: [],
      likes: 389,
      liked: false,
      timestamp: new Date('2024-12-02T11:00:00'),
      comments: []
    },

    // === OFF-ROAD BUILD STYLE POSTS ===
    {
      id: 8,
      author: 'MudSlinger',
      authorAvatar: '🛻',
      title: 'Off-Road Beast: Building the Ultimate Monster Truck Track',
      content: 'Created an outdoor off-road course with real dirt, rocks, and water crossings! My Monster Jam trucks handle it like champs. Tips for weatherproofing your off-road builds inside!',
      category: 'Track Build',
      buildStyle: 'offroad',
      images: [],
      likes: 678,
      liked: false,
      timestamp: new Date('2024-12-06T08:00:00'),
      comments: [
        { id: 1, author: 'DirtDevil', authorAvatar: '🏔️', content: 'This is EXACTLY what Ive been wanting to build!', timestamp: new Date('2024-12-06T09:15:00'), likes: 28 }
      ]
    },
    {
      id: 9,
      author: 'TrailBlazer',
      authorAvatar: '🏕️',
      title: 'Off-Road Collection Spotlight: Baja Trucks Through the Years',
      content: 'From the original Baja Bug to the latest desert racers, off-road Hot Wheels have come so far. Heres my complete Baja collection spanning 30 years of wild adventure builds!',
      category: 'Collection',
      buildStyle: 'offroad',
      images: [],
      likes: 445,
      liked: false,
      timestamp: new Date('2024-12-05T13:30:00'),
      comments: []
    },
    {
      id: 10,
      author: 'JeepLife',
      authorAvatar: '🛻',
      title: 'Custom Off-Road Build: Adding Real Suspension to a Mainline',
      content: 'Modded a basic Jeep Wrangler with working suspension using tiny springs! Now it actually bounces over obstacles. Full tutorial with parts list - perfect for off-road enthusiasts!',
      category: 'Custom',
      buildStyle: 'offroad',
      images: [],
      likes: 534,
      liked: false,
      timestamp: new Date('2024-12-04T10:45:00'),
      comments: [
        { id: 1, author: 'ModMaster', authorAvatar: '🔧', content: 'Where did you find springs that small?!', timestamp: new Date('2024-12-04T11:30:00'), likes: 19 }
      ]
    },
    {
      id: 11,
      author: 'WildWheels',
      authorAvatar: '🌲',
      title: 'Unboxing: Monster Trucks Live 2024 Exclusive Set',
      content: 'Got the exclusive Monster Trucks Live event set! Grave Digger, El Toro Loco, and Megalodon in special metallic finishes. These beasts are made for off-road action!',
      category: 'Unboxing',
      buildStyle: 'offroad',
      images: [],
      likes: 412,
      liked: false,
      timestamp: new Date('2024-12-03T16:00:00'),
      comments: []
    },

    // === FANTASY DRIFTER BUILD STYLE POSTS ===
    {
      id: 12,
      author: 'DragonDrifter',
      authorAvatar: '🐉',
      title: 'Fantasy Builds: Creating Mythical Hot Wheels Customs',
      content: 'Turned a basic casting into a dragon-themed drift car! Custom paint with scales, LED eyes, and flame decals. Fantasy drifter builds let your imagination run wild. Step-by-step process included!',
      category: 'Custom',
      buildStyle: 'fantasy',
      images: [],
      likes: 756,
      liked: false,
      timestamp: new Date('2024-12-06T12:00:00'),
      comments: [
        { id: 1, author: 'ArtistWheel', authorAvatar: '🎨', content: 'The scale detail is incredible! What brush size?', timestamp: new Date('2024-12-06T13:00:00'), likes: 31 },
        { id: 2, author: 'FantasyFan', authorAvatar: '✨', content: 'This belongs in a museum!', timestamp: new Date('2024-12-06T14:00:00'), likes: 22 }
      ]
    },
    {
      id: 13,
      author: 'CosmicRacer',
      authorAvatar: '🌌',
      title: 'My Sci-Fi Fantasy Collection: Space Cars & Alien Rides',
      content: 'From the Deora II to custom UFO builds, my fantasy collection explores what cars might look like in other galaxies. 47 unique pieces that defy physics and reality!',
      category: 'Collection',
      buildStyle: 'fantasy',
      images: [],
      likes: 523,
      liked: false,
      timestamp: new Date('2024-12-05T09:30:00'),
      comments: []
    },
    {
      id: 14,
      author: 'MythMaker',
      authorAvatar: '🦄',
      title: 'Tutorial: Painting Fantasy Themes on Die-Cast',
      content: 'Master the art of fantasy painting! This guide covers gradient techniques, metallic effects, and how to create that magical "glow" effect. Perfect for creative fantasy drifter builds.',
      category: 'Tutorial',
      buildStyle: 'fantasy',
      images: [],
      likes: 445,
      liked: false,
      timestamp: new Date('2024-12-04T15:00:00'),
      comments: []
    },
    {
      id: 15,
      author: 'NeonNight',
      authorAvatar: '💜',
      title: 'Unboxing: Character Cars Fantasy Series',
      content: 'The new Character Cars fantasy series is HERE! Dragons, unicorns, and mythical beasts transformed into Hot Wheels. The detail on these fantasy drifters is unreal!',
      category: 'Unboxing',
      buildStyle: 'fantasy',
      images: [],
      likes: 389,
      liked: false,
      timestamp: new Date('2024-12-03T11:45:00'),
      comments: []
    },

    // === GARAGE BUILDER BUILD STYLE POSTS ===
    {
      id: 16,
      author: 'TrackMaster_HW',
      authorAvatar: '🔧',
      title: 'Epic Garage Track Build - Full Tutorial',
      content: 'Built a 50-foot track system in my garage using orange track, loops, and a custom motorized launcher. Heres my step-by-step guide with all the parts you need! True garage builder spirit!',
      category: 'Track Build',
      buildStyle: 'garage',
      images: [],
      likes: 856,
      liked: false,
      timestamp: new Date('2024-12-06T15:45:00'),
      comments: [
        { id: 1, author: 'LoopLegend', authorAvatar: '🔄', content: 'How did you mount the launcher? Been trying to figure that out!', timestamp: new Date('2024-12-06T16:00:00'), likes: 15 }
      ]
    },
    {
      id: 17,
      author: 'DIYDave',
      authorAvatar: '🛠️',
      title: 'Building a Wall-Mounted Display for 500+ Cars',
      content: 'Designed and built a custom wall display system that holds over 500 cars! Uses LED lighting, rotating platforms, and easy-access panels. Full blueprints and materials list included.',
      category: 'Tutorial',
      buildStyle: 'garage',
      images: [],
      likes: 678,
      liked: false,
      timestamp: new Date('2024-12-05T14:00:00'),
      comments: [
        { id: 1, author: 'ShelfMaster', authorAvatar: '📐', content: 'This is exactly what my collection needs!', timestamp: new Date('2024-12-05T15:00:00'), likes: 23 }
      ]
    },
    {
      id: 18,
      author: 'WorkshopWizard',
      authorAvatar: '⚙️',
      title: 'DIY: Custom Launcher That Shoots Cars 40+ Feet',
      content: 'Garage builders unite! Built a pneumatic launcher that sends cars flying over 40 feet! Uses simple PVC parts and a bike pump. Safety tips and build instructions inside.',
      category: 'Custom',
      buildStyle: 'garage',
      images: [],
      likes: 534,
      liked: false,
      timestamp: new Date('2024-12-04T12:30:00'),
      comments: []
    },
    {
      id: 19,
      author: 'MakerDad',
      authorAvatar: '👨‍🔧',
      title: 'My Workshop Setup: The Ultimate Hot Wheels Garage',
      content: 'Tour of my dedicated Hot Wheels workshop! Custom workbench, paint booth, wheel lathe, and tool organization. Every garage builder needs a proper space. Took 2 years to perfect!',
      category: 'General',
      buildStyle: 'garage',
      images: [],
      likes: 445,
      liked: false,
      timestamp: new Date('2024-12-03T10:00:00'),
      comments: []
    },
    {
      id: 20,
      author: 'BuilderBob',
      authorAvatar: '🔧',
      title: 'Unboxing: Track Builder Unlimited Power Boost Set',
      content: 'The new Track Builder Unlimited set has EVERYTHING a garage builder dreams of! Motorized boosters, loops, and 15 feet of track. Building this beast tonight!',
      category: 'Unboxing',
      buildStyle: 'garage',
      images: [],
      likes: 367,
      liked: false,
      timestamp: new Date('2024-12-02T09:30:00'),
      comments: []
    },

    // === COLLECTOR PRO BUILD STYLE POSTS ===
    {
      id: 21,
      author: 'RedLineRacer',
      authorAvatar: '🏆',
      title: 'Unboxing: 2024 Red Line Club Exclusive Set',
      content: 'Just received my RLC exclusive set! The spectraflame finishes are absolutely stunning. Every collector pro needs these in their vault. Detailed photos and quality analysis inside.',
      category: 'Unboxing',
      buildStyle: 'collector',
      images: [],
      likes: 989,
      liked: false,
      timestamp: new Date('2024-12-06T09:15:00'),
      comments: [
        { id: 1, author: 'VaultKeeper', authorAvatar: '🔐', content: 'The spectraflame on that Camaro is perfect!', timestamp: new Date('2024-12-06T10:00:00'), likes: 34 }
      ]
    },
    {
      id: 22,
      author: 'RarityHunter',
      authorAvatar: '💎',
      title: 'Found a $3,000 Super Treasure Hunt at Walmart!',
      content: 'CANNOT believe this happened! Found a 2019 RLC Super Treasure Hunt in a dump bin at Walmart. The TH logo was hidden but I spotted the Real Riders wheels. Collector pro tip: ALWAYS check dump bins!',
      category: 'General',
      buildStyle: 'collector',
      images: [],
      likes: 1245,
      liked: false,
      timestamp: new Date('2024-12-05T18:00:00'),
      comments: [
        { id: 1, author: 'JealousJoe', authorAvatar: '😱', content: 'NO WAY! I check that Walmart weekly!', timestamp: new Date('2024-12-05T18:30:00'), likes: 56 },
        { id: 2, author: 'STHunter', authorAvatar: '🎯', content: 'This gives me hope! Hunting tomorrow!', timestamp: new Date('2024-12-05T19:00:00'), likes: 28 }
      ]
    },
    {
      id: 23,
      author: 'InvestorWheels',
      authorAvatar: '📈',
      title: 'Hot Wheels Investment Guide: What to Buy in 2025',
      content: 'As a collector pro for 15 years, here are my predictions for 2025s most valuable releases: RLC exclusives, Convention pieces, and specific JDM castings. Data-driven analysis inside!',
      category: 'Tutorial',
      buildStyle: 'collector',
      images: [],
      likes: 734,
      liked: false,
      timestamp: new Date('2024-12-04T16:30:00'),
      comments: []
    },
    {
      id: 24,
      author: 'GradeMaster',
      authorAvatar: '📊',
      title: 'Complete Guide to Grading Your Hot Wheels Collection',
      content: 'Understanding the grading scale is essential for any collector pro. From C1 (poor) to C10 (mint), heres how to accurately assess your collections condition and value.',
      category: 'Tutorial',
      buildStyle: 'collector',
      images: [],
      likes: 567,
      liked: false,
      timestamp: new Date('2024-12-03T13:15:00'),
      comments: []
    },
    {
      id: 25,
      author: 'VaultCollector',
      authorAvatar: '🏆',
      title: 'My $50,000 Premium Collection - Full Showcase',
      content: 'Revealing my premium vault! Includes 1969 Pink Beach Bomb, complete Redline set, and every RLC exclusive since 2010. Insurance appraised at $50K. Collector pro lifestyle!',
      category: 'Collection',
      buildStyle: 'collector',
      images: [],
      likes: 1567,
      liked: false,
      timestamp: new Date('2024-12-02T14:00:00'),
      comments: [
        { id: 1, author: 'Amazed', authorAvatar: '🤯', content: 'That Beach Bomb alone is worth a car!', timestamp: new Date('2024-12-02T15:00:00'), likes: 89 }
      ]
    },

    // === GENERAL CATEGORY (MORE POSTS) ===
    {
      id: 26,
      author: 'CommunityMod',
      authorAvatar: '⭐',
      title: 'Welcome New Collectors! Start Here',
      content: 'New to Hot Wheels collecting? This post covers everything: where to buy, what to look for, how to spot fakes, storage tips, and community etiquette. Pin this and share with newbies!',
      category: 'General',
      images: [],
      likes: 2341,
      liked: false,
      timestamp: new Date('2024-12-06T07:00:00'),
      comments: [
        { id: 1, author: 'Newbie2024', authorAvatar: '🆕', content: 'This is so helpful! Just started collecting last week!', timestamp: new Date('2024-12-06T08:00:00'), likes: 45 }
      ]
    },
    {
      id: 27,
      author: 'WeeklyHunter',
      authorAvatar: '🎯',
      title: 'December 2024 Hunting Report: Whats Hitting Shelves NOW',
      content: 'This weeks finds: 2025 A Case mainlines spotted at Target, new Team Transport at Walmart, and Car Culture Mix 3 at AutoZone! Happy hunting everyone!',
      category: 'General',
      images: [],
      likes: 567,
      liked: false,
      timestamp: new Date('2024-12-06T06:00:00'),
      comments: []
    },
    {
      id: 28,
      author: 'EventsGuy',
      authorAvatar: '📅',
      title: '2025 Hot Wheels Events Calendar - Save These Dates!',
      content: 'All confirmed 2025 events: LA Convention (April), Nationals (October), Cars & Coffee meetups, and Mattel HQ tours. Start planning your collector road trips now!',
      category: 'General',
      images: [],
      likes: 445,
      liked: false,
      timestamp: new Date('2024-12-05T08:00:00'),
      comments: []
    },
    {
      id: 29,
      author: 'ToyotaFan',
      authorAvatar: '🚗',
      title: 'Hot Take: JDM Cars Are Taking Over Hot Wheels (And I Love It)',
      content: 'Skylines, Supras, RX-7s everywhere! The JDM trend in Hot Wheels is amazing. Sharing my favorite JDM releases from 2024 and what we might see in 2025.',
      category: 'General',
      images: [],
      likes: 623,
      liked: false,
      timestamp: new Date('2024-12-04T17:00:00'),
      comments: []
    },
    {
      id: 30,
      author: 'FamilyCollector',
      authorAvatar: '👨‍👩‍👧‍👦',
      title: 'Collecting with Kids: Making Hot Wheels a Family Hobby',
      content: 'Started collecting to bond with my 7-year-old. Now the whole family hunts together every weekend! Tips for making this a fun, budget-friendly family activity.',
      category: 'General',
      images: [],
      likes: 789,
      liked: false,
      timestamp: new Date('2024-12-04T11:00:00'),
      comments: [
        { id: 1, author: 'ParentWheels', authorAvatar: '👪', content: 'We do the same! Best family bonding ever!', timestamp: new Date('2024-12-04T12:00:00'), likes: 34 }
      ]
    },
    {
      id: 31,
      author: 'BudgetCollector',
      authorAvatar: '💰',
      title: 'Building an Amazing Collection on $50/Month',
      content: 'You dont need to spend thousands! Heres how I built a 400+ car collection spending only $50 monthly: focus on mainlines, hunt smart, trade duplicates, and avoid hype.',
      category: 'General',
      images: [],
      likes: 934,
      liked: false,
      timestamp: new Date('2024-12-03T15:30:00'),
      comments: []
    },
    {
      id: 32,
      author: 'StoragePro',
      authorAvatar: '📦',
      title: 'Best Storage Solutions for Every Collection Size',
      content: 'From 50 cars to 5000, Ive tested every storage option: cases, wall mounts, tackle boxes, and custom solutions. Full comparison with pros/cons and costs.',
      category: 'General',
      images: [],
      likes: 678,
      liked: false,
      timestamp: new Date('2024-12-02T13:00:00'),
      comments: []
    },

    // === MORE RESTORATION POSTS ===
    {
      id: 33,
      author: 'RestoreMaster',
      authorAvatar: '🔄',
      title: 'Restoration 101: Tools Every Restorer Needs',
      content: 'Complete guide to restoration tools: micro screwdrivers, wheel pullers, paint strippers, and airbrush setups. Invest in quality tools and your restorations will shine!',
      category: 'Restoration',
      images: [],
      likes: 456,
      liked: false,
      timestamp: new Date('2024-12-05T16:00:00'),
      comments: []
    },
    {
      id: 34,
      author: 'PaintPro',
      authorAvatar: '🎨',
      title: 'Restoring Spectraflame: My Secret Technique',
      content: 'Spectraflame restoration is an art. After years of experimentation, Ive perfected a technique using candy paints over polished zinc. Before/after photos included!',
      category: 'Restoration',
      images: [],
      likes: 523,
      liked: false,
      timestamp: new Date('2024-12-04T14:30:00'),
      comments: []
    },

    // === MORE TRACK BUILD POSTS ===
    {
      id: 35,
      author: 'LoopKing',
      authorAvatar: '🔄',
      title: 'Multi-Level Track Build: 3 Stories of Pure Speed',
      content: 'Built a 3-story track system with elevators, crossovers, and synchronized dual racing! Uses servo motors and Arduino for automation. Ultimate track builder project!',
      category: 'Track Build',
      images: [],
      likes: 734,
      liked: false,
      timestamp: new Date('2024-12-05T12:00:00'),
      comments: []
    },
    {
      id: 36,
      author: 'RaceSetup',
      authorAvatar: '🏁',
      title: 'Building a Timed Racing Track with Sensors',
      content: 'Created a professional timing system using IR sensors and a Raspberry Pi! Accurate to 0.001 seconds. Perfect for competitive track build racing nights!',
      category: 'Track Build',
      images: [],
      likes: 567,
      liked: false,
      timestamp: new Date('2024-12-03T09:00:00'),
      comments: []
    },

    // === MORE CUSTOM POSTS ===
    {
      id: 37,
      author: 'WheelSwapKing',
      authorAvatar: '🔧',
      title: 'Wheel Swap Guide: Finding the Perfect Fit',
      content: 'Not all wheels fit all cars! This comprehensive guide covers axle sizes, wheel diameters, and the best donor cars for wheel swaps. Custom builders bookmark this!',
      category: 'Custom',
      images: [],
      likes: 612,
      liked: false,
      timestamp: new Date('2024-12-05T10:00:00'),
      comments: []
    },
    {
      id: 38,
      author: 'DetailDemon',
      authorAvatar: '✨',
      title: 'Adding Realistic Details: Interior & Engine Customs',
      content: 'Take your customs to the next level with detailed interiors and engine bays. Using epoxy clay, wire, and patience. My latest custom has 47 individual parts!',
      category: 'Custom',
      images: [],
      likes: 489,
      liked: false,
      timestamp: new Date('2024-12-02T16:30:00'),
      comments: []
    },

    // === MORE COLLECTION POSTS ===
    {
      id: 39,
      author: 'ThemeCollector',
      authorAvatar: '🎭',
      title: 'Theme Collecting: My Complete Movie Cars Collection',
      content: 'Every Hot Wheels movie car ever made: Fast & Furious, James Bond, Batman, Back to the Future, and more! 156 cars organized by franchise. Theme collecting is addicting!',
      category: 'Collection',
      images: [],
      likes: 834,
      liked: false,
      timestamp: new Date('2024-12-04T13:00:00'),
      comments: []
    },
    {
      id: 40,
      author: 'SeriesComplete',
      authorAvatar: '✅',
      title: 'Finally Completed: Every Car Culture Series 2018-2024',
      content: '6 years of hunting and trading! Finally have every Car Culture release from 2018 to 2024. 240 cars total. The satisfaction of completion is real!',
      category: 'Collection',
      images: [],
      likes: 678,
      liked: false,
      timestamp: new Date('2024-12-01T11:00:00'),
      comments: []
    }
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [expandedPost, setExpandedPost] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeBuildFilter, setActiveBuildFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Update build filter when selectedBuildStyle prop changes
  useEffect(() => {
    if (selectedBuildStyle) {
      setActiveBuildFilter(selectedBuildStyle);
      setActiveFilter('all'); // Reset category filter when build style is selected
    }
  }, [selectedBuildStyle]);

  // New post form state
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'General'
  });

  const categories = ['All', 'Top Posts', 'General', 'Restoration', 'Track Build', 'Unboxing', 'Custom', 'Collection', 'Tutorial'];

  // Format timestamp
  const formatDate = (date) => {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  // CRUD Operations
  const handleCreatePost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const post = {
      id: Date.now(),
      author: 'You',
      authorAvatar: '👤',
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      images: [],
      likes: 0,
      liked: false,
      timestamp: new Date(),
      comments: []
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', category: 'General' });
    setShowCreateModal(false);
  };

  const handleUpdatePost = () => {
    if (!editingPost) return;

    setPosts(posts.map(p => 
      p.id === editingPost.id 
        ? { ...p, title: editingPost.title, content: editingPost.content, category: editingPost.category }
        : p
    ));
    setEditingPost(null);
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== postId));
      if (expandedPost === postId) setExpandedPost(null);
    }
  };

  const handleLikePost = (postId) => {
    setPosts(posts.map(p => 
      p.id === postId 
        ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
        : p
    ));
  };

  const handleAddComment = (postId) => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: 'You',
      authorAvatar: '👤',
      content: newComment,
      timestamp: new Date(),
      likes: 0
    };

    setPosts(posts.map(p => 
      p.id === postId 
        ? { ...p, comments: [...p.comments, comment] }
        : p
    ));
    setNewComment('');
  };

  // Build style display names
  const buildStyleNames = {
    speed: 'Speed Racer',
    retro: 'Retro Cruiser',
    offroad: 'Off-Road',
    fantasy: 'Fantasy Drifter',
    garage: 'Garage Builder',
    collector: 'Collector Pro'
  };

  // Filter posts
  const filteredPosts = (() => {
    // Handle Top Posts filter - sort by engagement (likes + comments weighted)
    if (activeFilter === 'top posts') {
      const searchFiltered = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             post.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
      });
      
      // Sort by engagement score (likes + comments * 10 to weight comments higher)
      const sorted = [...searchFiltered].sort((a, b) => {
        const scoreA = a.likes + (a.comments.length * 10);
        const scoreB = b.likes + (b.comments.length * 10);
        return scoreB - scoreA;
      });
      
      // Return top posts (at least 6, or more if they have good engagement)
      return sorted.slice(0, Math.max(10, sorted.filter(p => p.likes >= 400 || p.comments.length >= 1).length));
    }
    
    return posts.filter(post => {
      const matchesCategory = activeFilter === 'all' || post.category.toLowerCase() === activeFilter.toLowerCase();
      const matchesBuildStyle = !activeBuildFilter || post.buildStyle === activeBuildFilter;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesBuildStyle && matchesSearch;
    });
  })();

  // Clear build filter
  const clearBuildFilter = () => {
    setActiveBuildFilter(null);
  };

  return (
    <section className="hwc-community-section">
      <div className="hwc-community-container">
        {/* Header */}
        <motion.div 
          className="hwc-community-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="hwc-community-header-content">
            <span className="hwc-community-badge">🏁 COLLECTORS COMMUNITY</span>
            <h2 className="hwc-community-title">Share Your <span className="hwc-title-accent">Collection</span></h2>
            <p className="hwc-community-subtitle">Connect with fellow collectors, share your builds, and get inspired</p>
          </div>
          <button 
            className="hwc-create-btn"
            onClick={() => setShowCreateModal(true)}
          >
            <span className="hwc-create-icon">+</span>
            Create Post
          </button>
        </motion.div>

        {/* Filters & Search */}
        <div className="hwc-community-toolbar">
          <div className="hwc-filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`hwc-filter-tab ${activeFilter === cat.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.toLowerCase())}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hwc-search-box">
            <span className="hwc-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Active Build Style Filter Banner */}
        <AnimatePresence>
          {activeBuildFilter && (
            <motion.div 
              className="hwc-build-filter-banner"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <span className="hwc-build-filter-icon">
                {activeBuildFilter === 'speed' && '🏎️'}
                {activeBuildFilter === 'retro' && '🚗'}
                {activeBuildFilter === 'offroad' && '🛻'}
                {activeBuildFilter === 'fantasy' && '🐉'}
                {activeBuildFilter === 'garage' && '🔧'}
                {activeBuildFilter === 'collector' && '🏆'}
              </span>
              <span className="hwc-build-filter-text">
                Showing posts for: <strong>{buildStyleNames[activeBuildFilter]}</strong>
              </span>
              <button className="hwc-build-filter-clear" onClick={clearBuildFilter}>
                ✕ Clear Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Posts Grid */}
        <div className="hwc-posts-grid">
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className={`hwc-post-card ${expandedPost === post.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                {/* Post Header */}
                <div className="hwc-post-header">
                  <div className="hwc-post-author">
                    <span className="hwc-author-avatar">{post.authorAvatar}</span>
                    <div className="hwc-author-info">
                      <span className="hwc-author-name">{post.author}</span>
                      <span className="hwc-post-time">{formatDate(post.timestamp)}</span>
                    </div>
                  </div>
                  <span className={`hwc-post-category hwc-cat-${post.category.toLowerCase().replace(' ', '-')}`}>
                    {post.category}
                  </span>
                </div>

                {/* Post Content */}
                <div className="hwc-post-content">
                  <h3 className="hwc-post-title">{post.title}</h3>
                  <p className="hwc-post-text">{post.content}</p>
                </div>

                {/* Post Actions */}
                <div className="hwc-post-actions">
                  <button 
                    className={`hwc-action-btn hwc-like-btn ${post.liked ? 'liked' : ''}`}
                    onClick={() => handleLikePost(post.id)}
                  >
                    <span>{post.liked ? '❤️' : '🤍'}</span>
                    <span>{post.likes}</span>
                  </button>
                  <button 
                    className="hwc-action-btn"
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  >
                    <span>💬</span>
                    <span>{post.comments.length}</span>
                  </button>
                  <button className="hwc-action-btn">
                    <span>🔗</span>
                    <span>Share</span>
                  </button>
                  {post.author === 'You' && (
                    <>
                      <button 
                        className="hwc-action-btn hwc-edit-btn"
                        onClick={() => setEditingPost(post)}
                      >
                        ✏️
                      </button>
                      <button 
                        className="hwc-action-btn hwc-delete-btn"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        🗑️
                      </button>
                    </>
                  )}
                </div>

                {/* Comments Section */}
                <AnimatePresence>
                  {expandedPost === post.id && (
                    <motion.div
                      className="hwc-comments-section"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="hwc-comments-list">
                        {post.comments.length === 0 ? (
                          <p className="hwc-no-comments">No comments yet. Be the first!</p>
                        ) : (
                          post.comments.map(comment => (
                            <div key={comment.id} className="hwc-comment">
                              <span className="hwc-comment-avatar">{comment.authorAvatar}</span>
                              <div className="hwc-comment-content">
                                <div className="hwc-comment-header">
                                  <span className="hwc-comment-author">{comment.author}</span>
                                  <span className="hwc-comment-time">{formatDate(comment.timestamp)}</span>
                                </div>
                                <p className="hwc-comment-text">{comment.content}</p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                      <div className="hwc-comment-input">
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                        />
                        <button onClick={() => handleAddComment(post.id)}>Post</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Create Post Modal */}
        <AnimatePresence>
          {showCreateModal && (
            <motion.div
              className="hwc-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreateModal(false)}
            >
              <motion.div
                className="hwc-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="hwc-modal-header">
                  <h3>Create New Post</h3>
                  <button className="hwc-modal-close" onClick={() => setShowCreateModal(false)}>×</button>
                </div>
                <div className="hwc-modal-body">
                  <div className="hwc-form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Give your post a catchy title..."
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                  </div>
                  <div className="hwc-form-group">
                    <label>Category</label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    >
                      {categories.filter(c => c !== 'All').map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="hwc-form-group">
                    <label>Content</label>
                    <textarea
                      placeholder="Share your story, tips, or showcase your collection..."
                      rows={6}
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    />
                  </div>
                </div>
                <div className="hwc-modal-footer">
                  <button className="hwc-btn-secondary" onClick={() => setShowCreateModal(false)}>Cancel</button>
                  <button className="hwc-btn-primary" onClick={handleCreatePost}>Publish Post</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Edit Post Modal */}
        <AnimatePresence>
          {editingPost && (
            <motion.div
              className="hwc-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingPost(null)}
            >
              <motion.div
                className="hwc-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="hwc-modal-header">
                  <h3>Edit Post</h3>
                  <button className="hwc-modal-close" onClick={() => setEditingPost(null)}>×</button>
                </div>
                <div className="hwc-modal-body">
                  <div className="hwc-form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      value={editingPost.title}
                      onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                    />
                  </div>
                  <div className="hwc-form-group">
                    <label>Category</label>
                    <select
                      value={editingPost.category}
                      onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                    >
                      {categories.filter(c => c !== 'All').map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="hwc-form-group">
                    <label>Content</label>
                    <textarea
                      rows={6}
                      value={editingPost.content}
                      onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                    />
                  </div>
                </div>
                <div className="hwc-modal-footer">
                  <button className="hwc-btn-secondary" onClick={() => setEditingPost(null)}>Cancel</button>
                  <button className="hwc-btn-primary" onClick={handleUpdatePost}>Save Changes</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HotWheelsCommunity;

