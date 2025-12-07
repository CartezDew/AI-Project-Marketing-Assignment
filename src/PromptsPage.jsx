import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PromptsPage.css';
import aiIcon from './assets/icons/ai-icon.webp';

function PromptsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedPrompt, setExpandedPrompt] = useState(null);
  const [finalWebsiteAccordionOpen, setFinalWebsiteAccordionOpen] = useState(false);
  const [expandedEnhancement, setExpandedEnhancement] = useState(null);

  const aiEnhancements = [
    {
      id: 1,
      title: "Hero Section Imagery (Lifestyle AI Images)",
      model: "Google Gemini 3 Pro",
      type: "🎨 AI Images",
      description: "Custom hero illustrations showcasing Mattel brands and community play.",
      prompt: `"Generate 3 lifestyle images for a Mattel brand website:

(1) A diverse group playing UNO at game night—warm, fun atmosphere.
(2) Parent + child racing Hot Wheels cars on an orange track—colorful, vibrant.
(3) A family enjoying board games in a modern living room—authentic and joyful.

Style: photorealistic, warm, inclusive, brand-aligned."`,
      challenge: "Gemini 3 Pro struggled with consistent brand colors and sometimes generated images with incorrect product representations. Multiple iterations were needed to get usable results. The model also had difficulty with text on UNO cards and Hot Wheels logos appearing correctly."
    },
    {
      id: 2,
      title: "Team Headshot Backgrounds (Brand Gradient Visuals)",
      model: "Google Gemini 3 Pro",
      type: "🎨 AI Images",
      description: "Professional headshot backgrounds using Mattel's signature color energy.",
      prompt: `"Create professional headshot backgrounds using subtle Mattel-inspired gradients in red, yellow, blue, and orange. Clean, modern, corporate-friendly with soft glow lighting."`,
      challenge: "Image generation was inconsistent—some outputs were too vibrant and overpowering for headshot backgrounds. Required multiple regenerations to achieve the right balance of subtle gradients without distracting from the subject."
    },
    {
      id: 3,
      title: "Core Website Feature Enhancements",
      model: "Claude Opus 4.5",
      type: "⚡ Features",
      description: "UI/UX redesign, interactivity, component-level upgrades.",
      prompt: `"Enhance the website with:

• Playful hero section (doodles, countdown timer, image pills)
• Updated Mattel Overview with stats + brand highlights
• Separate UNO + Hot Wheels mini-experiences
• Auto-scrolling 'What We're Creating' carousel
• Team Section with animated doodles + newsletter signup
• Interactive brand selection cards

Use youthful Mattel colors: red, yellow, blue, green, orange."`
    },
    {
      id: 4,
      title: "Hero Section UI/UX Improvements",
      model: "Claude Opus 4.5",
      type: "🎨 Design",
      description: "Senior web developer approach to make the hero section more playful, youthful, and visually appealing while keeping the same layout.",
      prompt: `"You are a senior web developer with extensive experience in UI and UX design for front-end websites. Help me improve the hero section of the final website to make it more playful, youthful, engaging, and visually appealing.

I like this image I've uploaded (Design Hub conference site), but I don't want to change the content on the hero section, just the design. I also want to keep the same layout it currently has with the hero content in the top center, and the hero images below. But add more flare and creativity to the webpage.

This is a family games and collectors website, so keep it fun and youthful. Ideal colors are yellow, red, black, green, blue, orange. Be intentional with your use of the colors not to overwhelm the users."`,
      outputs: [
        "Colorful top accent bar (red, orange, yellow, green, blue)",
        "Playful SVG doodles (stars, loops, squiggles, arrows)",
        "Animated countdown timer for community events",
        "Image pills with hover effects and labels",
        "Hand-drawn underline effects on key words"
      ]
    },
    {
      id: 5,
      title: "Mattel Overview Section",
      model: "Claude Opus 4.5",
      type: "📝 Content",
      description: "New section explaining Mattel's brand history and highlights with creative, unique design styling.",
      prompt: `"You are a senior web developer. Add a section for Mattel explaining the brand and its history. You have full permission to be creative and use your own unique design style for the new section. Add a component called Overview and its own CSS file. This is for the final website page only."`,
      outputs: [
        "Brand marquee with iconic Mattel brands",
        "6 highlight cards (Global Leadership, Iconic Brands, Innovation, Entertainment, Sustainability, Community)",
        "Hot Wheels spotlight section with stats (1968, 6B+ cars, 20K+ models)",
        "UNO spotlight section with live deck counter (17 decks sold/minute)",
        "Colorful stat tiles and animated elements"
      ]
    },
    {
      id: 6,
      title: "Brand Identity Expansion: UNO & Hot Wheels",
      model: "ChatGPT 5.1 (OpenAI)",
      type: "🔍 Research",
      description: "Ensure the site reflects true brand identity, not generic AI styling.",
      prompt: `"Do a deep dive into official UNO and Hot Wheels branding across websites, marketing, product pages, and collector communities. Extract tone, colors, taglines, messaging, and user experiences. Use this to guide the design of two unique brand experiences—not generic AI designs."`,
      outputs: [
        "UNO page tone (social, competitive, community-driven)",
        "Hot Wheels page tone (speed, collectors, customization, showcasing builds)",
        "Color palettes, micro-cues, typographic energy"
      ]
    },
    {
      id: 7,
      title: "Section Title & Subtitle Improvements",
      model: "ChatGPT 5.1",
      type: "✏️ Copy",
      description: "Multiple upgrades for subtitles, headers, and brand storytelling.",
      prompts: [
        {
          prompt: `"Improve the 'Our Brands' subtitle — make it playful, nostalgic, aligned with Mattel's mission."`,
          output: `"Where nostalgia, innovation, and AI collide to elevate Mattel's most iconic brands."`
        },
        {
          prompt: `"Revise 'Who We're Designing For' to be more engaging."`,
          output: `"Who We're Creating For — Designing experiences that bring communities together."`
        },
        {
          prompt: `"Create an event header describing community UNO games with rotating dates."`,
          output: "Output themed around community-hosted UNO Nights."
        }
      ]
    },
    {
      id: 8,
      title: "Team Leadership Titles (Website Roles)",
      model: "ChatGPT 5.1",
      type: "👔 Branding",
      description: "Professional C-suite style titles for team members.",
      prompt: `"Assign leadership titles like CMO, Chief Data Architect, etc., based on each team member's contribution."`,
      outputs: ["CSO", "CAIO", "CCO", "CCMO", "CDEO"]
    },
    {
      id: 9,
      title: "Content Section: 'What We're Creating'",
      model: "ChatGPT 5.1",
      type: "📝 Content",
      description: "Community + AI Play Experiences section.",
      prompt: `"Help me create a section telling users what we are creating using AI and community, bringing everything into one experience across UNO + Hot Wheels."`,
      outputs: [
        "A unified 'A New Way to Play & Create' section",
        "Hot Wheels custom car design + collector energy",
        "UNO rule variations + community play",
        "Emojis, playful separators, micro-animations",
        "Countdown timer integration"
      ]
    },
    {
      id: 10,
      title: "Header Pill Replacement Concepts (Navigation)",
      model: "ChatGPT 5.1",
      type: "🧭 Navigation",
      description: "Ideas to replace navigation labels with brand-aligned options.",
      prompt: `"Give ideas to replace 'Family Hub' with something brand-aligned for Games & Collectibles."`,
      outputs: ["Play Studio", "Community Events", "Creator Lab", "Collector Zone", "Game Night Center"]
    },
    {
      id: 11,
      title: "Event Header Naming",
      model: "ChatGPT 5.1",
      type: "🎯 Naming",
      description: "Community event naming for UNO experiences.",
      prompt: `"What can I name the event header? I want to say UNO games hosted in local communities."`,
      outputs: ["UNO Community Game Nights", "Local UNO Meetups", "Upcoming UNO Events"]
    },
    {
      id: 12,
      title: "Technical Fixes & Development Support",
      model: "ChatGPT 5.1",
      type: "🔧 Dev Support",
      description: "Cursor, Vite, Git, and dev-server troubleshooting.",
      prompts: [
        { prompt: `"Why is Cursor formatting my CSS this way?"` },
        { prompt: `"Why do I see a build folder now?"` },
        { prompt: `"Why isn't my CSS updating in dev tools?"` },
        { prompt: `"How do I hide build folders?"` },
        { prompt: `"How to stash changes and switch branches?"` },
        { prompt: `"How to discard changes and move branches safely?"` }
      ],
      note: "Resulted in improved workflow instructions, Git cleanup, and local dev troubleshooting."
    },
    {
      id: 13,
      title: "Team Presentation Structure Prompts",
      model: "ChatGPT 5.1",
      type: "📊 Presentation",
      description: "Group presentation content and structure.",
      outputs: ["Assigning sections", "Speaking durations", "Role descriptions", "Narrative alignment"],
      note: "Both website and class deliverables benefited from these."
    },
    {
      id: 14,
      title: "Additional Creative Content Prompts",
      model: "ChatGPT 5.1",
      type: "✨ Creative",
      description: "Various improvements to headers, taglines, CTAs, and microcopy.",
      outputs: [
        "Section headers",
        "Taglines",
        "CTA structure",
        "Brand identity microcopy",
        "Accordion formatting",
        "Professional tone refinement",
        "Tone alignment with Mattel, UNO, Hot Wheels"
      ],
      note: "All powered primarily by ChatGPT 5.1."
    },
    {
      id: 15,
      title: "Global Language Support (15 Languages)",
      model: "Claude Opus 4.5",
      type: "🌍 Internationalization",
      description: "Added a comprehensive language selection dropdown to the navbar, enabling users worldwide to experience the website in their native language. Supports the top 15 most spoken languages worldwide for true global accessibility.",
      prompt: `"Add a new feature: a dropdown list of the most common spoken languages in the world. Be sure to include all languages in the list and feel free to add other common languages. Use country flags associated with the languages to the left of the language name and add the dropdown to the navbar so users across the globe can change the language of the text so it's readable in their most fluent language.

English should be the first language and set as default. The language selected should change the text on the final website page, the UNO page, and the Hot Wheels page of the final website build.

Languages to include: English, Chinese (Mandarin), Hindi, Spanish, Arabic (Modern Standard), French, Bengali, Igbo, Kinyarwanda, Amharic, Portuguese (pt-BR for Brazil), Russian, Yoruba, Urdu, Indonesian (Bahasa Indonesia), German, Japanese, Swahili (Kiswahili), Marathi, Telugu, Vietnamese, Turkish, Italian, Tamil, Tagalog/Filipino, Korean, Persian (Farsi), Thai, Polish, Ukrainian, Hausa, Oromo, Somali, Gujarati, Punjabi.

Be creative and intentional, thoughtful in the UX/UI design of the language dropdown feature on the navbar. There should be a country flag next to the language listed."`,
      outputs: [
        "Language Context API for global state management",
        "LanguageDropdown component with search functionality",
        "15 language translations for all UI text",
        "Country flags for visual language identification",
        "localStorage persistence for user preference",
        "RTL (Right-to-Left) support for Arabic, Urdu, Persian",
        "Responsive dropdown design for mobile devices",
        "Animated globe icon in dropdown header"
      ],
      challenge: "Creating accurate translations for 15 languages required careful attention to cultural nuances and proper character encoding for non-Latin scripts (Arabic, Hindi, Chinese, Japanese, Korean, etc.). The dropdown needed to be both visually appealing and functional across all device sizes."
    },
    {
      id: 16,
      title: "Interactive UNO Chatbot Experience",
      model: "Claude Opus 4.5",
      type: "🤖 AI Chatbot",
      description: "Built an intelligent, playful chatbot for the UNO page that encourages users to share their UNO playing experiences while also answering game rules questions. Features voice input, smart response detection, and community engagement focus.",
      prompt: `"The chatbot should ask users how they play, answer how to play. But the emphasis should be on them sharing their UNO playing experiences. When they share, thank them for sharing and improving other users' experiences, but it should also answer questions about the game.

Use the PDF file and infographic image to answer their questions. There is also a PDF in the uno-content folder.

When a user selects the 'Learn the Rules' CTA button, download the PDF file from the official-rules.pdf automatically when the button is pressed.

When the 'Join the Community' button is pressed on the UNO page, give them a popup modal asking for their email and name."`,
      outputs: [
        "Smart message detection (questions vs stories)",
        "Contextual responses based on user intent",
        "Story appreciation & thank you responses",
        "Rule-based answers from PDF/infographic content",
        "Voice input with Speech Recognition API",
        "Auto-scroll to latest messages",
        "Quick prompt buttons for common topics",
        "Community signup modal with form validation",
        "PDF auto-download on Learn Rules click",
        "Playful UNO-themed UI with animations"
      ],
      challenge: "Creating a chatbot that intelligently distinguishes between users sharing personal stories versus asking rule questions required sophisticated keyword detection and response categorization. The emphasis on community building meant crafting appreciative, engaging responses that encourage continued participation."
    },
    {
      id: 17,
      title: "UNO Infographic Design",
      model: "Google NotebookLM",
      type: "📊 Visual Design",
      description: "Created a visually engaging infographic explaining UNO gameplay rules and card types using NotebookLM's AI-powered design capabilities. The infographic serves as a quick reference guide integrated into the UNO page.",
      prompt: `"Create a creative infographic image of players playing the game. I uploaded the game rules and the instructions to create the graphic."

[Uploaded: UNO Official Rules PDF, Game Instructions Document]

The AI was provided with the complete UNO rulebook and instructional materials to generate an accurate, visually appealing infographic that explains:
- How to start a game
- Card types and their effects
- Key action cards (Draw Two, Reverse, Skip, Wild Draw 4)
- When to say "UNO!"
- Winning conditions`,
      outputs: [
        "Visual card type explanations",
        "Key Action Cards reference guide",
        "Draw Two, Reverse, Skip, Wild Draw 4 illustrations",
        "Player setup instructions",
        "Turn flow visualization",
        "WebP format for optimal web performance",
        "Integrated below YouTube Shorts section"
      ],
      challenge: "Converting complex game rules into a single, digestible visual required careful information hierarchy and engaging illustrations. The infographic needed to be scannable for quick reference while still being comprehensive enough for new players."
    },
    {
      id: 18,
      title: "FAQ Section with SEO & AEO Optimization",
      model: "Google Gemini 3 Pro",
      type: "📋 Content & SEO",
      description: "Created a comprehensive FAQ section with accordion functionality, optimized for search engines (SEO) and answer engine optimization (AEO). Features 10 strategically crafted questions targeting long-tail keywords and user intent, designed with playful, colorful UI by a senior web designer.",
      prompt: `"now add a faq section with an accordian to the final-website page above the team section. make the FAQ section, playful, colorful, designed as if you are a senior webdesigner ux/ui professional. do a deep search of the web app to create 10 questions answered by the FAQ that is optimized for SEO and AEO and answering search engines optimazation, key terms, longtail form"`,
      outputs: [
        "10 SEO/AEO optimized FAQ questions with long-tail keywords",
        "Playful accordion interface with color-coded icons",
        "Animated wave borders (top and bottom) for seamless section transitions",
        "4 staggered shadow cutouts of people/families playing (kids, teens, families)",
        "Responsive design with mobile optimization",
        "Staggered animation effects on page load",
        "Creative visual elements: floating sparkles, question marks, gradient blobs",
        "Bottom CTA section with 'Meet the Team' and 'Learn More' links",
        "FAQ link added to navbar dropdown menu",
        "Questions targeting: UNO rules, Hot Wheels collecting, AI features, community events, house rules, multilingual support, Red Line Club, track building, educational benefits, special editions"
      ],
      keywords: [
        "UNO rules",
        "how to play UNO",
        "UNO card game instructions",
        "Hot Wheels collecting guide",
        "rare Hot Wheels value",
        "treasure hunt Hot Wheels",
        "AI games",
        "Mattel AI technology",
        "AI house rules generator",
        "UNO tournaments near me",
        "Hot Wheels conventions",
        "Mattel community events",
        "UNO house rules list",
        "best UNO variations",
        "UNO stacking rules",
        "family game night rules",
        "Mattel multilingual support",
        "UNO in different languages",
        "Hot Wheels Red Line Club benefits",
        "RLC membership worth it",
        "Hot Wheels track building tips",
        "best Hot Wheels track sets",
        "UNO educational benefits",
        "family bonding games",
        "best card games for kids",
        "UNO child development",
        "UNO special editions list",
        "UNO Flip rules",
        "collectible UNO decks",
        "themed UNO games"
      ],
      challenge: "Creating FAQ questions that balance SEO optimization with natural, user-friendly language required extensive keyword research and understanding of search intent. The accordion design needed to be visually engaging while maintaining accessibility and performance. Integrating the FAQ seamlessly with existing page sections required careful CSS positioning and responsive breakpoints."
    },
    {
      id: 19,
      title: "Hot Wheels Community Blog & Checkered Background",
      model: "Nano Banana + Google Gemini 3 Pro",
      type: "🏁 UI Design & Patterns",
      description: "Created a full-featured Hot Wheels Collectors Community section with CRUD blog functionality, checkered racing flag background pattern, scroll animations, and racing-themed visual design. The checkered pattern uses CSS conic gradients at a 45° angle for authentic racing aesthetics.",
      prompt: `"add lighly placed black and white checked boards on the background of the share your collection section. the checkered boards should be subtle and not overbearing and at an angle"`,
      outputs: [
        "Angled checkered flag background pattern using CSS conic-gradient",
        "Full CRUD blog system (Create, Read, Update, Delete posts)",
        "Comment system with nested replies",
        "Category filtering (Speed, Retro, Off-Road, Fantasy, Garage, Collector, General)",
        "Top Posts filter for posts with 5+ comments",
        "Build style integration - auto-filter posts based on avatar selection",
        "Framer Motion scroll animations throughout the page",
        "Racing-themed borders and visual accents",
        "40+ diverse blog posts with realistic comments",
        "Responsive design with mobile optimization"
      ],
      challenge: "Creating a checkered pattern that covers the entire background while remaining subtle and angled required experimenting with multiple CSS approaches. The final solution uses repeating-conic-gradient with background-blend-mode for seamless coverage. Integrating the blog CRUD system with the avatar selection required careful state management and smooth scroll behavior."
    },
    {
      id: 20,
      title: "Interactive Hot Wheels Avatar (Lesley Alejandra)",
      model: "Google AI Studio (Gemini 3 Pro)",
      type: "🎨 3D Avatar & Interaction",
      description: "Designed an interactive Hot Wheels avatar based on the persona Lesley Alejandra – a Gen Z, Hispanic, social and creative small-business owner, student, traveler, and car enthusiast who collects and displays Hot Wheels. The avatar visually matches this persona and supports the app's experience design: playful, nostalgic, expressive, and optimized for quick, bite-sized interactions.",
      prompt: `"Create an avatar for my website that looks like a young 20-year-old Hispanic girl with black hair and glasses. Use the reference image only for inspiration, not replication. The avatar should be designed from the upper body up, with a natural, realistic pose. I want her to feel friendly, expressive, and modern, matching a Gen Z creator and Hot Wheels collector persona. The avatar must be compatible with interactive website behavior, meaning the eyes and head should be able to move toward the user's mouse for a lively, responsive effect.

The upper body design you generated earlier is perfect — do not change it. The main adjustment needed is the hair. In the early versions, her hair fell incorrectly in front of her shoulders, so please reposition the hair so it rests naturally behind her shoulders. Only leave a couple of strands in the front. In the next revision, make those front strands smaller and curly so they frame her face without covering the body. Then refine it further: add two small curly strands on each shoulder, keeping them delicate and light. Finally, add subtle highlights throughout her black hair to give it depth and a more natural, realistic texture. Everything else about the avatar should remain the same — the facial expression, glasses, posture, and styling should reflect a youthful Hispanic girl with personality, confidence, and creativity.

The avatar also needed to support six Hot Wheels archetypes that users can choose from when building their cars and tracks:

• Speed Racer – sleek supercars, neon city loops, high-speed energy
• Retro Cruiser – vintage, lowriders, sunset highway tracks
• Off-Road Adventurer – monster trucks, dirt trails, jungle jumps
• Fantasy Drifter – dragon/shark/space cars on floating or lava tracks
• Garage Builder – DIY, modded builds in workshop/test-track spaces
• Collector Pro – premium die-casts displayed on neon pedestals

It took eight prompt iterations to fine-tune these details—especially the hair, glasses, and upper-body proportions—before arriving at the final avatar design that felt true to Lesley and the Hot Wheels collector community."`,
      outputs: [
        "SVG-based 3D avatar with Hispanic features matching persona",
        "Interactive mouse tracking - head tilts and eyes follow cursor",
        "Physics-based hair animation with natural movement",
        "Six Hot Wheels archetype build options arranged in circular layout",
        "Hover effects with dynamic color changes per archetype",
        "Orange halo glow behind avatar matching Hot Wheels branding",
        "Floating animation effect for premium feel",
        "Collector profile card with stats (Collection, Rare Finds, Member years)",
        "Build style selection triggers blog post filtering",
        "Framer Motion animations for smooth interactions",
        "Orbit rings with subtle animations",
        "Responsive design adapting to all screen sizes"
      ],
      archetypes: [
        "Speed Racer – 🏎️ Fast & Futuristic",
        "Retro Cruiser – 🚗 Nostalgic Vibes",
        "Off-Road – 🛻 Wild Adventure",
        "Fantasy Drifter – 🐉 Creative & Bold",
        "Garage Builder – 🔧 DIY Spirit",
        "Collector Pro – 🏆 Premium Taste"
      ],
      challenge: "Creating an interactive avatar that responds naturally to mouse movement while maintaining visual appeal required implementing physics-based animations for hair and precise eye/head tracking calculations. Balancing the SVG complexity with performance, ensuring the avatar looked authentically Hispanic, and integrating six distinct build archetypes into an intuitive circular interface took eight prompt iterations to perfect."
    },
    {
      id: 21,
      title: "Build Stats Dashboard & Tech Glossary",
      model: "Claude Opus 4.5",
      type: "📊 UI & Education",
      description: "Added a comprehensive build statistics dashboard showing project metrics (build time, pages, components, features, languages, AI models) and a tech glossary section explaining AI/development terminology for non-technical users.",
      prompt: `"Now let's add build time: 5 hr & 37 minutes | 3 pages | and do a count of the number of components. Add these details above the AI Enhancements & Feature Build-Out on the prompts page.

Then below the AI enhancements add a glossary. Explain what LLMs are, explain what IDEs are, for example users may not know what Cursor IDE is. Then do a count of all the features in the final-website app and add it to the top stats with '|' separated. Be creative in your design choice, you have free rein to be creative."`,
      outputs: [
        "Build Stats Dashboard with pill-shaped gradient design",
        "6 key metrics: Build Time (5h 37m), Pages (3), Components (13), Features (47+), Languages (15), AI Models (4)",
        "Pipe-separated stats with hover effects and responsive grid",
        "Tech & AI Glossary section with 6 educational cards",
        "LLM explanation (Claude, ChatGPT, Gemini)",
        "IDE explanation (Cursor IDE, VS Code, Google AI Studio)",
        "Vite + React framework explanation",
        "AI Image Generation tools overview",
        "CRUD Operations definition for blog functionality",
        "SEO & AEO optimization concepts",
        "Decorative gradient orbs and colored example tags",
        "Responsive design with mobile grid layout"
      ],
      challenge: "Counting all features across the final-website app required careful analysis of 13 components and 3 pages to tally 47+ distinct features. The glossary needed to explain technical concepts in accessible language while maintaining visual appeal. The stats dashboard design balanced information density with readability using gradient text effects and semantic grouping."
    },
    {
      id: 22,
      title: "Hot Wheels DIY Infographics (Custom Car & Garage Build)",
      model: "Notebook LLM",
      type: "📊 Visual Design",
      description: "Created two comprehensive step-by-step infographics for Hot Wheels DIY projects: custom car customization and garage build guides. Generated using Notebook LLM by analyzing YouTube tutorial videos to extract tools, materials, and step-by-step instructions.",
      prompt: `You are a **visual design and technical documentation specialist** working with a **Notebook LLM** to create detailed, step-by-step infographics for Hot Wheels DIY projects.

## Objective

Create two comprehensive infographics based on YouTube tutorial videos:

1. **Custom Hot Wheels Car Build** - Step-by-step guide for customizing Hot Wheels cars
2. **Hot Wheels Car Garage Build** - Complete guide for building a custom display garage

## Source Materials

I've provided two YouTube video links that contain the full tutorials:

**Video 1 - Custom Car Build:**
https://www.youtube.com/watch?v=OtNwdscXUoI

**Video 2 - Garage Build:**
https://www.youtube.com/watch?v=6bNi7IzoXb4

## Task Requirements

### 1. Watch and Analyze Videos
- Extract all key steps, tools, and materials mentioned in each video
- Identify the sequence of operations
- Note any safety warnings or special considerations
- Capture visual details that would be important for the infographic

### 2. Create Infographic Structure

For each infographic, include:

**Header Section:**
- Project title (e.g., "Create Custom Hot Wheels Car" or "Build Your Own Toy Car Garage")
- Estimated difficulty level (Easy/Medium/Hard)
- Estimated time to complete
- Adult supervision required notice

**Tools & Materials Section:**
- Complete list of all tools needed (with icons/visuals if possible)
- All materials required (paints, adhesives, hardware, etc.)
- Optional/recommended items

**Step-by-Step Instructions:**
- Numbered steps with clear visual progression
- Key actions highlighted
- Visual indicators for critical steps
- Safety warnings where applicable
- Tips and tricks from the video

**Visual Design Requirements:**
- Clean, modern layout suitable for web display
- Hot Wheels brand colors (orange #FF6B00, red, yellow accents)
- High contrast for readability
- Icons and illustrations for tools/materials
- Professional, instructional design aesthetic
- WebP format, optimized for web

### 3. Technical Specifications

**Format:** WebP image format
**Dimensions:** Optimized for web display (suggest 1200-1600px width)
**Style:** Modern, clean infographic design
**Brand Alignment:** Hot Wheels visual identity
**Accessibility:** High contrast, clear typography, readable at various sizes

### 4. Content Accuracy

- Ensure all steps match the video tutorials exactly
- Include all tools and materials mentioned
- Preserve the correct sequence of operations
- Include any safety warnings or adult supervision requirements
- Note any special techniques or tips from the videos

### 5. Output

Generate two complete infographic images:
1. \`create-custom-car-infographic.webp\` - Custom car build guide
2. \`build-toy-car-garage-infographic.webp\` - Garage build guide

Each infographic should be:
- Self-contained and complete
- Visually appealing and professional
- Easy to follow for DIY enthusiasts
- Brand-appropriate for Hot Wheels

## Additional Notes

- These infographics will be used on the Hot Wheels Experience page
- They should inspire confidence and make the projects approachable
- Include "Adult supervision required" messaging prominently
- Design for both desktop and mobile viewing
- Consider that users may print these guides

Please create both infographics based on the YouTube video content provided.`,
      outputs: [
        "Custom Car Build Infographic with complete tool list (drill, screwdriver, Dremel, brushes, etc.)",
        "Garage Build Infographic with materials and step-by-step construction guide",
        "Difficulty level indicators (Hard for car, Medium for garage)",
        "Adult supervision required notices prominently displayed",
        "Hot Wheels brand-aligned color scheme (orange #FF6B00 accents)",
        "WebP format optimized for web performance",
        "Integrated into Hot Wheels Experience page DIY section",
        "Click-to-expand functionality for detailed viewing",
        "Responsive design for mobile and desktop viewing"
      ],
      challenge: "Analyzing YouTube videos to extract accurate step-by-step instructions required careful attention to detail and multiple viewings. Converting video content into clear, visual infographics while maintaining brand alignment and ensuring all tools and materials were correctly listed was time-intensive. The infographics needed to be comprehensive yet scannable, balancing detailed instructions with visual clarity."
    }
  ];

  const prompt1FullText = `⭐ Prompt for Gemini 3 Pro – Build Full Website (Modern, Apple-Level UI)

You are a world-class UI/UX website designer and front-end architect. Build a modern, polished, human-crafted website for a class assignment involving UNO and Hot Wheels. Use all of the requirements, content directions, personas, and structural choices below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 PROJECT CONTEXT

This website supports a marketing project that uses AI Drafting techniques to build long-form content, blog posts, and interactive components for two brands:

• UNO – targeting Teddy, a 10-year-old Gen Alpha boy
• Hot Wheels – targeting Lesley, a 29-year-old creative collector

Reference both persona profiles and incorporate them visually and contextually.

This assignment includes a working prototype website and blog content to support the long-form drafting process explained in the Development Guide.

The team agreed in the meeting to build:
  ✓ A landing page
  ✓ Blog post(s) for personas
  ✓ Interactive widgets
  ✓ Embedded YouTube & TikTok content
  ✓ Clear CTAs
  ✓ Clean, modern UI similar to Apple.com (but not copied)
  ✓ A visually appealing, intuitive design that avoids "AI-generated" generic styles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 BUILD A MODERN WEBSITE WITH THE FOLLOWING REQUIREMENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ DESIGN STYLE GUIDELINES

Produce a UI that is:
  • Sleek, clean, minimalistic, polished, and premium (Apple-inspired)
  • Highly visual with strong imagery, white space, and clean geometry
  • Human-crafted (NOT generic AI styles, no purple, no default gradients, no robotic typography)
  • Modern micro-interactions and scroll-reveals

Smooth typography using a sophisticated pair like:
  • San Francisco / Inter / Neue Montreal / Avenir / Helvetica Now

Vibrant but clean use of color accents derived from:
  • UNO card palette (selectively)
  • Hot Wheels blues + metallic tones (lightly)
  • No overuse of color—very intentional, restrained, premium.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2️⃣ SITE STRUCTURE (REQUIRED)

A. LANDING PAGE
Include:
  • Hero section with bold headline
  • Subhead describing the project
  • Clean CTA buttons (e.g., Explore UNO, Explore Hot Wheels, Discover Your Play Style)
  • Ideal persona imagery for Teddy & Lesley

Scannable sections:
  • About UNO – playful, kid-friendly
  • About Hot Wheels – creative, nostalgic, collector-friendly
  • "Are You Playing UNO Correctly?" section using official vs. house rules
  • Interactive Widget Area
  • Embedded TikTok + YouTube content
  • Consumer Persona Spotlights with optional blog previews
  • Community & Storytelling

B. BLOG PAGE(S) – One for Each Persona
  • Lesley (Hot Wheels) blog post
  • Teddy (UNO) blog post

Each should use the long-form content principles from the Development Guide, including:
  • Skimmable layout
  • Visual placements
  • Strong narrative hooks
  • Clear CTA at bottom

C. INTERACTIVE WIDGETS
Create lightweight interactive components such as:

  📌 UNO House Rules Generator
     Users answer quick questions → Output new ways to play

  📌 Hot Wheels Collection Inspiration Widget
     Users click prompts → Get aesthetic display ideas

These do not need functioning JavaScript but should be structurally included with placeholder logic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3️⃣ CONTENT REQUIREMENTS

Use details from the personas:

👦 TEDDY (UNO)
  • Loves Roblox, Nintendo, Mr. Beast
  • Motivated by fun, fast games, competition
  • Prefers YouTube + TikTok
  • Tone: playful, energetic, bold

👩 LESLEY (HOT WHEELS)
  • Creative, nostalgic, community-minded
  • Loves displays, aesthetics, Instagram-style visuals
  • Tone: cozy, creative, expressive

Include:
  • High-quality persona images (use placeholders and alt text)
  • Persona sections
  • CTA blocks (e.g., Try a New UNO Rule, Share Your Hot Wheels Display)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4️⃣ MULTIMEDIA INTEGRATION

Embed Video Content – Use 3–5 examples of:
  • UNO gameplay tutorials
  • UNO house rule variations
  • Hot Wheels collection videos
  • Fun TikToks of kids or creators playing or showcasing collections

Embed using safe dummy URLs or placeholders.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5️⃣ COPYWRITING REQUIREMENTS

Use the Development Guide to produce:
  • Persona-aligned storytelling
  • Long-form content sections
  • SEO-friendly headlines and subheaders
  • Conversational tone appropriate to each persona
  • Clear CTAs
  • Community invitations
  • Nostalgic + energetic voice differences

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6️⃣ IMPROVING USER EXPERIENCE (ADD THESE)

Gemini should also include enhancements such as:
  ✓ Sticky navigation
  ✓ Smooth scroll
  ✓ Dark-mode compatibility
  ✓ Accessibility features (alt text, readable contrasts, minimal animations for sensitive users)
  ✓ Light micro-interactions
  ✓ Highly polished spacing hierarchy
  ✓ Professional grid layout

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7️⃣ DELIVERABLES FOR THIS OUTPUT

Gemini 3 Pro should provide:

A. Fully generated website content
  • Landing page copy
  • Page structure
  • CTA text
  • Blog posts for both personas
  • Widget logic description
  • Community section content

B. Full HTML/CSS/JS code OR components depending on its capability
  • Clean structure
  • Semantic HTML
  • Modular CSS (no Tailwind or frameworks unless explicitly chosen)
  • Smooth Apple-like UI elements

C. Suggestions for improvements & next steps
  • Additional features the site could include
  • How to further integrate AI, UX, or community features
  • Ideas for final optimization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8️⃣ TONE & QUALITY EXPECTATIONS

The final output should feel:
  ✓ Human-crafted
  ✓ Premium, polished, and intentional
  ✓ Creative & modern
  ✓ Non-template
  ✓ Non-generic
  ✓ Authentically tailored to this project

It should NOT resemble a default coding pattern, boilerplate template, or AI-generated site.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 FINAL INSTRUCTION

Using all the above requirements, build the full website, blog content, UI layout, copy, CTA blocks, embedded content, and interactive widget structure in a clean, modern, visually compelling style.

Ensure every part is aligned with the meeting direction and the Development Guide requirements for long-form content creation.`;

  const prompt2FullText = `You are a **world-class brand UI/UX designer + front-end architect** tasked with building a React/Vite web experience for a **Mattel x AI Brand Lab**.

We are NOT building a generic "AI website."
We are building a **branded digital experience** that shows how AI can help Mattel express TWO of its iconic sub-brands in distinct, authentic ways:

• **UNO®** – the world's most beloved card game, social, fast, playful
• **Hot Wheels®** – high-speed play and deep collector culture, full-throttle, bold, imaginative

The site must celebrate **Mattel as the parent brand** and **then split into two clearly different brand experiences**: an **UNO Player Community** and a **Hot Wheels Collectors Community**.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 0. RESEARCH FIRST (MANDATORY)

Before designing or coding ANYTHING, you must deeply research Mattel's current branding for UNO and Hot Wheels.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### A. Study Official UNO Experiences

Search the web and review at least these types of sources:
• Mattel's UNO pages (classic game, themed decks, UNO Elite, UNO All Wild, etc.)
• The official UNO mobile / digital game site (often branded as "UNO!™ – the world's #1 card game")
• Mattel Creations / UNO collectibles pages

From these, extract:

**1. Core UNO Brand Traits**
   Messaging examples:
   • "classic family card game that's easy to learn and so much fun to play"
   • "world's most beloved card game"
   • fast, social, easy to pick up, impossible to put down
   
   Positioning: family fun, social play, quick matches, house rules, challenges, digital + physical play.

**2. UNO Visual Identity**
   Colors:
   • Primary: **black** as a strong base/background
   • Accent: UNO logo red + the 4 card colors (**red, yellow, green, blue**) used in a bold, graphic way
   
   Design patterns:
   • Curved shapes and card arcs
   • High contrast: black + bright colors
   • Large, bold card art and icons

**3. UNO UX & Community Patterns**
   • UNO challenges, tournaments, house rules discussions
   • "Shout UNO" behaviors, social gaming moments
   • Reference UNO content that emphasizes:
     - Friends & family night
     - Online play, quick matchmaking
     - Custom/house rules and creative twists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### B. Study Official Hot Wheels Experiences

Search and review at least:
• Mattel's main Hot Wheels product pages (cars, tracks, playsets, "Start Your Engines," etc.)
• Official **Hot Wheels Collectors / Red Line Club** pages on Mattel Creations
• Hot Wheels social presence (e.g., Instagram @hotwheelsofficial, content around collectors, special drops, Legends Tour, etc.)

From these, extract:

**1. Core Hot Wheels Brand Traits**
   Messaging examples:
   • "For over five decades, Hot Wheels cars and toys have ignited imaginations…"
   • "full-throttle fun," "high-speed action"
   • For collectors: "artistry meets adrenaline," "thrill of the chase," "rare drops," "car culture"
   
   Positioning:
   • For kids: stunts, building tracks, racing, creativity
   • For collectors: limited releases, precision detail, community, legacy, flexing collections.

**2. Hot Wheels Visual Identity**
   Colors: strong, high-energy palette like:
   • **Hot Wheels red**, bright **yellow**, bold **blues**, accented with **orange track** vibes.
   
   Design patterns:
   • Diagonal angles and racing motifs
   • Speed lines, motion blur, dynamic compositions
   • Photos of cars, tracks, flames, asphalt, garages, neon/gloss.

**3. Hot Wheels UX & Community Patterns**
   Experiences around:
   • Building and modifying tracks
   • Showcasing collections
   • Red Line Club / premium drops
   • Legends Tour & live/virtual events
   • Forum-style or "collector hub" layouts: galleries, drop calendars, spotlights.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1. CONCEPT FOR OUR SITE

You are designing a **Mattel x AI Brand Lab** experience that demonstrates how AI can help build modern, on-brand digital experiences for **two Mattel sub-brands**:

• Parent layer: **Mattel** (simple, neutral, "Empowering Generations Through Play")
• Branch 1: **UNO Community** – focused on play, social fun, house rules, and inclusive game nights.
• Branch 2: **Hot Wheels Collectors & Racers** – focused on car culture, display, collection, and high-speed play.

The site must make this structure obvious:

> "This isn't just a generic game site — it's a **brand lab** exploring how AI can create different UX experiences tailored to each Mattel brand."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 2. EXPERIENCE ARCHITECTURE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 2.1 Global (Mattel x AI Lab) Layer

Create a **landing experience** that:
• Briefly introduces Mattel as the parent company
• Introduces the idea of using AI to help design branded digital experiences
• Has a **clean, neutral Mattel-inspired aesthetic** (white/soft gray, small color hints)
• Features **two big entry paths**:
  - "Enter UNO Community Experience"
  - "Enter Hot Wheels Collectors Experience"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 2.2 UNO Experience (Sub-Brand Microsite)

Once the user chooses UNO, the UI should "flip" into a **UNO-branded mode**:
• Black base, bold card colors (red, yellow, green, blue) and accent red from the UNO logo.
• Rounded card shapes, arcs, overlapping cards as layout frames.

**UNO Sections to include:**

1️⃣ **Hero – Game Night Energy**
   • Messaging aligned with UNO brand voice (family fun, easy to learn, social, quick).
   • Visual: large UNO hand / card arc motif.
   • Clear CTAs: "Explore UNO House Rules" | "See UNO Community Stories" | "Try a New Challenge"

2️⃣ **Personas & Community**
   • An ideal user inspired by "Teddy" (10-year-old UNO fan)
   • Section for family game night ideas, UNO challenges

3️⃣ **UNO House Rules & Interactive Widget**
   • Users select what kind of night they want (chaotic, quick, strategic, family-friendly)
   • Receive suggested house rules or twists (like a UNO rules generator)

4️⃣ **Embedded UNO Video Content**
   • Embed YouTube/TikTok content of people playing UNO, creators explaining custom rules

5️⃣ **UNO Blog / Long-Form Content**
   • At least one long-form article: "10 UNO House Rules That Turn Game Night Into an Event"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 2.3 Hot Wheels Experience (Sub-Brand Microsite)

Once the user chooses Hot Wheels, the UI should shift into a **Hot Wheels-branded mode**:
• Deep blues + Hot Wheels red + bright yellow, with hints of orange race track.
• Dynamic lines, angled sections, sense of motion and speed.

**Hot Wheels Sections to include:**

1️⃣ **Hero – Full-Throttle, Collector-Ready**
   • Messaging for both kids ("ignites imaginations") and collectors ("thrill of the chase")
   • Visual: car lineup, track shot, collector shelf.

2️⃣ **Personas & Community**
   • Represent both kids building tracks AND adult collectors
   • Copy about rare drops, display ideas, Legends Tour

3️⃣ **Collectors Hub UX**
   • Upcoming drops calendar, spotlight car of the week
   • "Join the Community" / "Show Your Shelf" callouts

4️⃣ **Track Builder / Garage Widget**
   • Choose mood (stunts, downhill, multi-car race, garage scene)
   • Receive suggested track concepts or display ideas

5️⃣ **Embedded Hot Wheels Video Content**
   • Track builds, collector shelf tours, Hot Wheels Legends clips

6️⃣ **Hot Wheels Blog / Long-Form Content**
   • "From Track to Shelf: How Hot Wheels Bridges Play and Collecting"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 3. VISUAL & UX REQUIREMENTS

### 3.1 Overall Principles
• This site **must not look AI-generated or generic.**
• No random gradients, no stock-looking component patterns, no "generic purple startup" vibe.
• The parent layer is **minimal & neutral**; each sub-brand is **visually distinct**.

### 3.2 Brand-Specific Visual Directions

**UNO:**
• Primary: black background with UNO card color accents
• Bold shapes inspired by UNO cards (rounded rectangles, arcs)
• Emphasize ease, fun, social energy

**Hot Wheels:**
• Dynamic shapes (angled panels, speed lines)
• Palette: Hot Wheels red, bright yellow, strong blues, hints of orange track
• Convey speed, shine, and collector pride

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 4. COMMUNITY & AI STORYTELLING

Include microcopy explaining:
• "Built with AI-assisted design & drafting"
• How AI can suggest house rules (UNO), recommend track layouts (Hot Wheels), draft community stories

Include **subtle UI touches** (tooltips, sidebars) that talk about:
• "How AI helped design this section"
• "This widget is a concept for how AI could co-create with fans."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 5. TECHNICAL IMPLEMENTATION

### 5.1 Code & Project Structure
• Use **React with JSX**
• Use React Router for: \`/\` → Landing | \`/uno\` → UNO | \`/hotwheels\` → Hot Wheels

### 5.2 Styling
• **All styling must be in separate \`.css\` files.**
• No inline styles. No CSS-in-JS. No Tailwind.
• CSS should implement brand palettes, use flexbox/grid, emphasize spacing and hover states.

### 5.3 Netlify Readiness
• Use a \`_redirects\` file for SPA routing: \`/*  /index.html  200\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 6. OUTPUT EXPECTATIONS

Your response should include:
1. A short explanation of how you interpreted UNO and Hot Wheels branding
2. The proposed page structure and component breakdown
3. **JSX code** for the key pages and components
4. **Separate \`.css\` files** with meaningful class names
5. Clear comments explaining where embedded videos, images, and future AI hooks would go

Focus on **creativity, community, and distinct UNO vs Hot Wheels experiences**.`;

  const prompt3FullText = `You are a **world-class brand UI/UX designer + front-end architect** tasked with building a React/Vite web experience for a **Mattel x AI Brand Lab**.

We are NOT building a generic "AI website."
We are building a **branded digital experience** that shows how AI can help Mattel express TWO of its iconic sub-brands in distinct, authentic ways:

• **UNO®** – the world's most beloved card game, social, fast, playful
• **Hot Wheels®** – high-speed play and deep collector culture, full-throttle, bold, imaginative

The site must celebrate **Mattel as the parent brand** and **then split into two clearly different brand experiences**: an **UNO Player Community** and a **Hot Wheels Collectors Community**.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 0. RESEARCH FIRST (MANDATORY)

Before designing or coding ANYTHING, you must deeply research Mattel's current branding for UNO and Hot Wheels.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### A. Study Official UNO Experiences

Search the web and review at least these types of sources:

• Mattel's UNO pages (classic game, themed decks, UNO Elite, UNO All Wild, etc.)
  - Example: classic UNO product pages and UNO Elite/entertainment collections
• The official UNO mobile / digital game site (often branded as "UNO!™ – the world's #1 card game")
• Mattel Creations / UNO collectibles pages

From these, extract:

**1. Core UNO Brand Traits**

   Messaging examples:
   • "classic family card game that's easy to learn and so much fun to play"
   • "world's most beloved card game"
   • fast, social, easy to pick up, impossible to put down

   Positioning: family fun, social play, quick matches, house rules, challenges, digital + physical play.

**2. UNO Visual Identity**

   Colors:
   • Primary: **black** as a strong base/background
   • Accent: UNO logo red + the 4 card colors (**red, yellow, green, blue**) used in a bold, graphic way

   Design patterns:
   • Curved shapes and card arcs
   • High contrast: black + bright colors
   • Large, bold card art and icons

**3. UNO UX & Community Patterns**

   • UNO challenges, tournaments, house rules discussions
   • "Shout UNO" behaviors, social gaming moments
   • Reference UNO content that emphasizes:
     - Friends & family night
     - Online play, quick matchmaking
     - Custom/house rules and creative twists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### B. Study Official Hot Wheels Experiences

Search and review at least:

• Mattel's main Hot Wheels product pages (cars, tracks, playsets, "Start Your Engines," etc.)
• Official **Hot Wheels Collectors / Red Line Club** pages on Mattel Creations
• Hot Wheels social presence (e.g., Instagram @hotwheelsofficial, content around collectors, special drops, Legends Tour, etc.)

From these, extract:

**1. Core Hot Wheels Brand Traits**

   Messaging examples:
   • "For over five decades, Hot Wheels cars and toys have ignited imaginations…"
   • "full-throttle fun," "high-speed action"
   • For collectors: "artistry meets adrenaline," "thrill of the chase," "rare drops," "car culture"

   Positioning:
   • For kids: stunts, building tracks, racing, creativity
   • For collectors: limited releases, precision detail, community, legacy, flexing collections.

**2. Hot Wheels Visual Identity**

   Colors: strong, high-energy palette like:
   • **Hot Wheels red**, bright **yellow**, bold **blues**, accented with **orange track** vibes.

   Design patterns:
   • Diagonal angles and racing motifs
   • Speed lines, motion blur, dynamic compositions
   • Photos of cars, tracks, flames, asphalt, garages, neon/gloss.

**3. Hot Wheels UX & Community Patterns**

   Experiences around:
   • Building and modifying tracks
   • Showcasing collections
   • Red Line Club / premium drops
   • Legends Tour & live/virtual events
   • Forum-style or "collector hub" layouts: galleries, drop calendars, spotlights.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1. CONCEPT FOR OUR SITE

You are designing a **Mattel x AI Brand Lab** experience that demonstrates how AI can help build modern, on-brand digital experiences for **two Mattel sub-brands**:

• Parent layer: **Mattel** (simple, neutral, "Empowering Generations Through Play")
• Branch 1: **UNO Community** – focused on play, social fun, house rules, and inclusive game nights.
• Branch 2: **Hot Wheels Collectors & Racers** – focused on car culture, display, collection, and high-speed play.

The site must make this structure obvious:

> "This isn't just a generic game site — it's a **brand lab** exploring how AI can create different UX experiences tailored to each Mattel brand."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 2. EXPERIENCE ARCHITECTURE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 2.1 Global (Mattel x AI Lab) Layer

Create a **landing experience** that:

• Briefly introduces:
  - Mattel as the parent company
  - The idea of using AI to help design branded digital experiences

• Has a **clean, neutral Mattel-inspired aesthetic** (white/soft gray, small color hints) so that:
  - The **UNO section** and **Hot Wheels section** visually "pop" with their own identity.

• Features **two big entry paths**:
  - "Enter UNO Community Experience"
  - "Enter Hot Wheels Collectors Experience"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 2.2 UNO Experience (Sub-Brand Microsite)

Once the user chooses UNO:

• The UI should "flip" into a **UNO-branded mode**:
  - Black base, bold card colors (red, yellow, green, blue) and accent red from the UNO logo.
  - Rounded card shapes, arcs, overlapping cards as layout frames.

**UNO Sections to include:**

1️⃣ **Hero – Game Night Energy**
   • Messaging aligned with UNO brand voice (family fun, easy to learn, social, quick).
   • Visual: large UNO hand / card arc motif.
   • Clear CTAs:
     - "Explore UNO House Rules"
     - "See UNO Community Stories"
     - "Try a New Challenge"

2️⃣ **Personas & Community**
   • An ideal user inspired by "Teddy" (10-year-old UNO fan):
     - Loves Roblox, Nintendo, MrBeast-style challenges.
     - Wants fun, fast-paced games with friends and family.
   • Section for:
     - Family game night ideas
     - UNO challenges (e.g., 7-card challenge, speed rounds)

3️⃣ **UNO House Rules & Interactive Widget**
   • An interactive UX concept where users:
     - Select what kind of night they want (chaotic, quick, strategic, family-friendly)
     - Receive suggested house rules or twists (like a UNO rules generator).
   • Show how this could be AI-assisted in the future.

4️⃣ **Embedded UNO Video Content**
   • Embed YouTube/TikTok content of:
     - People playing UNO
     - Creators explaining custom rules or tournaments
   • Clear explanation of where these videos would come from (e.g., playlists curated via YouTube API).

5️⃣ **UNO Blog / Long-Form Content**
   • At least one long-form article section such as:
     - "10 UNO House Rules That Turn Game Night Into an Event"
     - With headings, sub-headings, visuals, and community call-to-action.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 2.3 Hot Wheels Experience (Sub-Brand Microsite)

Once the user chooses Hot Wheels:

• The UI should shift into a **Hot Wheels-branded mode**:
  - Deep blues + Hot Wheels red + bright yellow, with hints of orange race track.
  - Dynamic lines, angled sections, sense of motion and speed.

**Hot Wheels Sections to include:**

1️⃣ **Hero – Full-Throttle, Collector-Ready**
   • Messaging aligned with both:
     - High-speed play for kids ("ignites imaginations", "epic racing action")
     - Serious collectors ("artistry meets adrenaline", "thrill of the chase").
   • Visual: car lineup, track shot, collector shelf.

2️⃣ **Personas & Community**
   • Represent both:
     - Kids building wild tracks
     - Adult collectors curating premium models (inspired by Hot Wheels Collectors / Red Line Club).
   • Copy that talks about:
     - Rare drops
     - Display ideas
     - Events like Legends Tour.

3️⃣ **Collectors Hub UX**
   • A "Collectors Hub" section inspired by Hot Wheels Collectors & Red Line Club:
     - Upcoming drops calendar (dummy data is fine)
     - Spotlight car or collection of the week
     - Callout "Join the Community" / "Show Your Shelf"

4️⃣ **Track Builder / Garage Widget**
   • An interactive UX concept where users:
     - Choose mood (stunts, downhill, multi-car race, garage scene)
     - Receive suggested track concepts or display ideas.
   • Again, show how this could be AI-assisted.

5️⃣ **Embedded Hot Wheels Video Content**
   • Embed YouTube/TikTok:
     - Track builds
     - Collector shelf tours
     - Hot Wheels Legends / events clips

6️⃣ **Hot Wheels Blog / Long-Form Content**
   • At least one long-form article such as:
     - "From Track to Shelf: How Hot Wheels Bridges Play and Collecting"
     - Or "5 Ways Collectors Display Their Favorite Hot Wheels".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 3. VISUAL & UX REQUIREMENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 3.1 Overall Principles

• This site **must not look AI-generated or generic.**
• No random gradients, no stock-looking component patterns, no "generic purple startup" vibe.
• The parent layer is **minimal & neutral**; each sub-brand is **visually distinct** but still obviously part of Mattel.

### 3.2 Brand-Specific Visual Directions

**UNO:**
• Primary: black background or sections with UNO card color accents.
• Use bold shapes inspired by UNO cards (rounded rectangles, arcs).
• Emphasize ease, fun, social energy.

**Hot Wheels:**
• Use more dynamic shapes (angled panels, speed lines).
• Palette: Hot Wheels red, bright yellow, strong blues, hints of orange track.
• Convey speed, shine, and collector pride.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 4. COMMUNITY & AI STORYTELLING

This site is ALSO about **AI-assisted branding and web creation**, so:

• Include microcopy explaining:
  - "Built with AI-assisted design & drafting"
  - How AI can:
    - Suggest house rules (UNO)
    - Recommend track layouts or display ideas (Hot Wheels)
    - Draft community stories and blog content based on personas.

• Include **subtle UI touches** (tooltips, sidebars, or small sections) that talk about:
  - "How AI helped design this section"
  - "This widget is a concept for how AI could co-create with fans."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 5. TECHNICAL IMPLEMENTATION

The final output should be a **React + Vite** web app, deployable on **Netlify**.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 5.1 Code & Project Structure

• Use **React with JSX**.
• Assume a Vite React template (\`main.jsx\`, \`App.jsx\`, etc.).
• Use React Router for:
  - \`/\` → Mattel x AI Lab landing
  - \`/uno\` → UNO Experience
  - \`/hotwheels\` → Hot Wheels Experience

### 5.2 Styling

• **All styling must be in separate \`.css\` files.**
  - No inline styles.
  - No CSS-in-JS.
  - No Tailwind.

• Suggested structure:
  - \`src/components/Navbar.jsx\` + \`Navbar.css\`
  - \`src/pages/Landing.jsx\` + \`Landing.css\`
  - \`src/pages/UnoExperience.jsx\` + \`UnoExperience.css\`
  - \`src/pages/HotWheelsExperience.jsx\` + \`HotWheelsExperience.css\`
  - \`src/components/UnoHouseRulesWidget.jsx\` + \`UnoHouseRulesWidget.css\`
  - \`src/components/HotWheelsCollectorsHub.jsx\` + \`HotWheelsCollectorsHub.css\`

• CSS should:
  - Implement the brand palettes described above.
  - Use modern layout: flexbox / grid.
  - Emphasize spacing, typography hierarchy, and hover states.

### 5.3 Netlify Readiness

• Provide a recommended folder structure.
• Mention using a \`_redirects\` file for SPA routing:
  - Contents: \`/*  /index.html  200\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 6. OUTPUT EXPECTATIONS

Your response should include:

1. A short explanation of how you interpreted UNO and Hot Wheels branding from the official sources you reviewed.
2. The proposed page structure and component breakdown.
3. **JSX code** for the key pages and components.
4. **Separate \`.css\` files** with meaningful class names that reflect UNO vs Hot Wheels branding.
5. Clear comments explaining where embedded videos, images, and future AI hooks would go.

Focus on **creativity, community, and distinct UNO vs Hot Wheels experiences**, while remaining faithful to Mattel's brand identities and the idea of using AI to power modern branded websites.`;

  const prompt22FullText = `You are a **visual design and technical documentation specialist** working with a **Notebook LLM** to create detailed, step-by-step infographics for Hot Wheels DIY projects.

## Objective

Create two comprehensive infographics based on YouTube tutorial videos:

1. **Custom Hot Wheels Car Build** - Step-by-step guide for customizing Hot Wheels cars
2. **Hot Wheels Car Garage Build** - Complete guide for building a custom display garage

## Source Materials

I've provided two YouTube video links that contain the full tutorials:

**Video 1 - Custom Car Build:**
https://www.youtube.com/watch?v=OtNwdscXUoI

**Video 2 - Garage Build:**
https://www.youtube.com/watch?v=6bNi7IzoXb4

## Task Requirements

### 1. Watch and Analyze Videos
- Extract all key steps, tools, and materials mentioned in each video
- Identify the sequence of operations
- Note any safety warnings or special considerations
- Capture visual details that would be important for the infographic

### 2. Create Infographic Structure

For each infographic, include:

**Header Section:**
- Project title (e.g., "Create Custom Hot Wheels Car" or "Build Your Own Toy Car Garage")
- Estimated difficulty level (Easy/Medium/Hard)
- Estimated time to complete
- Adult supervision required notice

**Tools & Materials Section:**
- Complete list of all tools needed (with icons/visuals if possible)
- All materials required (paints, adhesives, hardware, etc.)
- Optional/recommended items

**Step-by-Step Instructions:**
- Numbered steps with clear visual progression
- Key actions highlighted
- Visual indicators for critical steps
- Safety warnings where applicable
- Tips and tricks from the video

**Visual Design Requirements:**
- Clean, modern layout suitable for web display
- Hot Wheels brand colors (orange #FF6B00, red, yellow accents)
- High contrast for readability
- Icons and illustrations for tools/materials
- Professional, instructional design aesthetic
- WebP format, optimized for web

### 3. Technical Specifications

**Format:** WebP image format
**Dimensions:** Optimized for web display (suggest 1200-1600px width)
**Style:** Modern, clean infographic design
**Brand Alignment:** Hot Wheels visual identity
**Accessibility:** High contrast, clear typography, readable at various sizes

### 4. Content Accuracy

- Ensure all steps match the video tutorials exactly
- Include all tools and materials mentioned
- Preserve the correct sequence of operations
- Include any safety warnings or adult supervision requirements
- Note any special techniques or tips from the videos

### 5. Output

Generate two complete infographic images:
1. \`create-custom-car-infographic.webp\` - Custom car build guide
2. \`build-toy-car-garage-infographic.webp\` - Garage build guide

Each infographic should be:
- Self-contained and complete
- Visually appealing and professional
- Easy to follow for DIY enthusiasts
- Brand-appropriate for Hot Wheels

## Additional Notes

- These infographics will be used on the Hot Wheels Experience page
- They should inspire confidence and make the projects approachable
- Include "Adult supervision required" messaging prominently
- Design for both desktop and mobile viewing
- Consider that users may print these guides

Please create both infographics based on the YouTube video content provided.`;

  const prompts = [
    {
      id: 1,
      title: "Prompt 1",
      subtitle: "Mattel Experience",
      llm: "Google Gemini 3 Pro",
      platform: "Google AI Studio",
      thinkTime: "20 seconds",
      filesGenerated: 14,
      linesOfCode: "~1,200",
      features: ["React 18 + TypeScript", "Tailwind CSS", "Gemini API Integration", "HashRouter"],
      strengths: ["Fast generation", "Clean code structure", "API integration ready"],
      weaknesses: ["Required manual file creation", "Less detailed styling"],
      color: "#0f172a",
      link: "/prompt1",
      fullPrompt: prompt1FullText
    },
    {
      id: 2,
      title: "Prompt 2",
      subtitle: "Brand Lab",
      llm: "Google Gemini 3 Pro",
      platform: "Cursor IDE",
      thinkTime: "~45 seconds",
      filesGenerated: 12,
      linesOfCode: "~1,800",
      features: ["React 18 + JSX", "Separate CSS files", "Brand theming", "No Tailwind"],
      strengths: ["Brand-specific styling", "Modular CSS", "Good component separation"],
      weaknesses: ["More verbose CSS", "Manual widget logic"],
      color: "#e3002b",
      link: "/prompt2",
      fullPrompt: prompt2FullText
    },
    {
      id: 3,
      title: "Prompt 3",
      subtitle: "Opus Edition",
      llm: "Claude Opus 4.5",
      platform: "Cursor IDE",
      thinkTime: "~60 seconds",
      filesGenerated: 14,
      linesOfCode: "~2,400",
      features: ["React 18 + JSX", "CSS Variables", "Advanced animations", "Detailed AI widgets"],
      strengths: ["Most creative design", "Best UX details", "Comprehensive features", "Polished animations"],
      weaknesses: ["Longer generation time", "More complex codebase"],
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      isWinner: true,
      link: "/prompt3",
      fullPrompt: prompt3FullText
    },
    {
      id: 22,
      title: "Prompt 22",
      subtitle: "Hot Wheels Infographics",
      llm: "Notebook LLM",
      platform: "Notebook",
      thinkTime: "~30 minutes",
      filesGenerated: 2,
      linesOfCode: "N/A (Image Generation)",
      features: ["Infographic Design", "WebP Format", "Step-by-Step Guides", "Video Analysis"],
      strengths: ["Visual clarity", "Complete tool/material lists", "Brand-aligned design", "Safety messaging"],
      weaknesses: ["Requires video analysis", "Manual design process"],
      color: "#FF6B00",
      link: "#",
      fullPrompt: prompt22FullText
    }
  ];

  const generateFullReportPDF = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(getFullReportContent());
    printWindow.document.close();
    printWindow.print();
  };

  const generateFullReportWord = () => {
    const content = getFullReportContent();
    const blob = new Blob([content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI_Prompt_Comparison_Full_Report.doc';
    a.click();
    URL.revokeObjectURL(url);
  };

  const generatePromptPDF = (prompt) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(getPromptDocument(prompt));
    printWindow.document.close();
    printWindow.print();
  };

  const generatePromptWord = (prompt) => {
    const content = getPromptDocument(prompt);
    const blob = new Blob([content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${prompt.title.replace(' ', '_')}_Full_Prompt.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getPromptDocument = (prompt) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${prompt.title}: ${prompt.subtitle} - Full Prompt</title>
        <style>
          body { 
            font-family: 'Segoe UI', Arial, sans-serif; 
            max-width: 850px; 
            margin: 0 auto; 
            padding: 50px; 
            line-height: 1.8; 
            color: #333;
          }
          h1 { 
            color: #1a1a1a; 
            border-bottom: 3px solid ${prompt.isWinner ? '#667eea' : '#e3002b'}; 
            padding-bottom: 15px;
            font-size: 28px;
          }
          .meta { 
            background: #f8f9fa; 
            padding: 25px; 
            border-radius: 12px; 
            margin: 25px 0;
            border-left: 4px solid ${prompt.isWinner ? '#667eea' : '#e3002b'};
          }
          .meta-item { 
            margin: 10px 0; 
            font-size: 15px;
          }
          .meta-label { 
            font-weight: 600; 
            color: #555;
            display: inline-block;
            width: 150px;
          }
          .prompt-content { 
            background: #1e1e1e; 
            color: #d4d4d4;
            padding: 35px; 
            border-radius: 12px; 
            white-space: pre-wrap; 
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
            font-size: 13px;
            line-height: 1.7;
            overflow-x: auto;
          }
          .winner-badge {
            display: inline-block;
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: #78350f;
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: bold;
            margin-left: 15px;
            font-size: 14px;
          }
          h2 {
            color: #444;
            margin-top: 40px;
            font-size: 22px;
          }
          @media print { 
            body { padding: 30px; } 
            .prompt-content { 
              font-size: 10px; 
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <h1>
          ${prompt.title}: ${prompt.subtitle}
          ${prompt.isWinner ? '<span class="winner-badge">🏆 WINNER</span>' : ''}
        </h1>
        
        <div class="meta">
          <div class="meta-item"><span class="meta-label">LLM Used:</span> ${prompt.llm}</div>
          <div class="meta-item"><span class="meta-label">Platform:</span> ${prompt.platform}</div>
          <div class="meta-item"><span class="meta-label">Generation Time:</span> ${prompt.thinkTime}</div>
          <div class="meta-item"><span class="meta-label">Files Generated:</span> ${prompt.filesGenerated} files</div>
          <div class="meta-item"><span class="meta-label">Lines of Code:</span> ${prompt.linesOfCode}</div>
        </div>

        <h2>Full Prompt Text</h2>
        <div class="prompt-content">${prompt.fullPrompt}</div>

        <hr style="margin-top: 50px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #888; font-size: 13px; margin-top: 20px;"><em>Generated for Mattel Marketing Project - Educational Use Only</em></p>
      </body>
      </html>
    `;
  };

  const getFullReportContent = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Prompts Report - Mattel Marketing Project</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 850px; margin: 0 auto; padding: 50px; line-height: 1.7; color: #333; }
          h1 { color: #1a1a1a; border-bottom: 3px solid #667eea; padding-bottom: 15px; font-size: 28px; }
          h2 { color: #333; margin-top: 40px; font-size: 22px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          h3 { color: #555; font-size: 18px; }
          .winner { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 8px 20px; border-radius: 20px; display: inline-block; font-weight: bold; }
          table { width: 100%; border-collapse: collapse; margin: 25px 0; }
          th, td { border: 1px solid #ddd; padding: 14px; text-align: left; }
          th { background: #f5f5f5; font-weight: 600; }
          .prompt-section { margin: 35px 0; padding: 30px; background: #fafafa; border-radius: 12px; border-left: 4px solid #667eea; page-break-inside: avoid; }
          pre { background: #1e1e1e; color: #d4d4d4; padding: 25px; border-radius: 10px; overflow-x: auto; font-size: 11px; white-space: pre-wrap; line-height: 1.6; }
          .meta-info { background: #f0f0f0; padding: 15px 20px; border-radius: 8px; margin-bottom: 20px; }
          @media print { body { padding: 30px; } pre { font-size: 9px; } }
        </style>
      </head>
      <body>
        <h1>Prompts Report</h1>
        <p><strong>Project:</strong> Mattel Marketing Assignment - UNO & Hot Wheels Digital Experience</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Purpose:</strong> Compare AI-generated website outputs from different LLMs and prompting strategies</p>

        <h2>Executive Summary</h2>
        <p>This report compares three different AI-generated website implementations for a Mattel marketing project. Each prompt was designed to create a branded digital experience for UNO and Hot Wheels sub-brands.</p>
        <p><span class="winner">🏆 Winner: Prompt 3 (Opus Edition)</span></p>
        <p>Prompt 3, powered by Claude Opus 4.5, delivered the most comprehensive, creative, and polished output with superior UX details and animations.</p>

        <h2>Comparison Table</h2>
        <table>
          <tr>
            <th>Metric</th>
            <th>Prompt 1 (Gemini)</th>
            <th>Prompt 2 (Gemini)</th>
            <th>Prompt 3 (Opus 4.5) 🏆</th>
            <th>Prompt 22 (Notebook LLM)</th>
          </tr>
          <tr><td>LLM Used</td><td>Gemini 3 Pro</td><td>Gemini 3 Pro</td><td>Claude Opus 4.5</td><td>Notebook LLM</td></tr>
          <tr><td>Platform</td><td>Google AI Studio</td><td>Cursor IDE</td><td>Cursor IDE</td><td>Notebook</td></tr>
          <tr><td>Think Time</td><td>20 seconds</td><td>~45 seconds</td><td>~60 seconds</td><td>~30 minutes</td></tr>
          <tr><td>Files Generated</td><td>14 files</td><td>12 files</td><td>14 files</td><td>2 infographics</td></tr>
          <tr><td>Lines of Code</td><td>~1,200</td><td>~1,800</td><td>~2,400</td><td>N/A (Images)</td></tr>
          <tr><td>Overall Score</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
        </table>

        <h2>Full Prompts Used</h2>

        <div class="prompt-section">
          <h3>Prompt 1: Mattel Experience</h3>
          <div class="meta-info">
            <strong>LLM:</strong> Google Gemini 3 Pro &nbsp;|&nbsp; 
            <strong>Platform:</strong> Google AI Studio &nbsp;|&nbsp;
            <strong>Time:</strong> 20 seconds &nbsp;|&nbsp; 
            <strong>Files:</strong> 14
          </div>
          <pre>${prompt1FullText}</pre>
        </div>

        <div class="prompt-section">
          <h3>Prompt 2: Brand Lab</h3>
          <div class="meta-info">
            <strong>LLM:</strong> Google Gemini 3 Pro &nbsp;|&nbsp; 
            <strong>Platform:</strong> Cursor IDE &nbsp;|&nbsp;
            <strong>Time:</strong> ~45 seconds &nbsp;|&nbsp; 
            <strong>Files:</strong> 12
          </div>
          <pre>${prompt2FullText}</pre>
        </div>

        <div class="prompt-section">
          <h3>Prompt 3: Opus Edition 🏆 WINNER</h3>
          <div class="meta-info">
            <strong>LLM:</strong> Claude Opus 4.5 &nbsp;|&nbsp; 
            <strong>Platform:</strong> Cursor IDE &nbsp;|&nbsp;
            <strong>Time:</strong> ~60 seconds &nbsp;|&nbsp; 
            <strong>Files:</strong> 14
          </div>
          <pre>${prompt3FullText}</pre>
        </div>

        <div class="prompt-section">
          <h3>Prompt 22: Hot Wheels Infographics</h3>
          <div class="meta-info">
            <strong>LLM:</strong> Notebook LLM &nbsp;|&nbsp; 
            <strong>Platform:</strong> Notebook &nbsp;|&nbsp;
            <strong>Time:</strong> ~30 minutes &nbsp;|&nbsp; 
            <strong>Files:</strong> 2 (Infographics)
          </div>
          <pre>${prompt22FullText}</pre>
        </div>

        <h2>Why Prompt 3 Won</h2>
        <ul>
          <li><strong>Most Creative Design:</strong> Unique typography (Bebas Neue + Outfit), distinctive visual identity</li>
          <li><strong>Best UX Details:</strong> Floating animations, glow effects, polished micro-interactions</li>
          <li><strong>Comprehensive Widgets:</strong> 4 build modes, complexity levels, detailed suggestions</li>
          <li><strong>Collectors Hub:</strong> Drop calendar, spotlight car, community features</li>
          <li><strong>Code Quality:</strong> CSS variables, consistent naming, thorough documentation</li>
        </ul>

        <hr style="margin-top: 50px;">
        <p style="color: #888;"><em>Report generated for educational purposes - Mattel Marketing Project</em></p>
      </body>
      </html>
    `;
  };

  return (
    <div className="app-container">
      {/* Final Website Section */}
      <section className="final-website-section">
        <div className="final-website-content">
          {/* Floating AI Doodle Icons */}
          <img 
            src={aiIcon} 
            alt="" 
            className="floating-ai-icon floating-ai-1"
          />
          <img 
            src={aiIcon} 
            alt="" 
            className="floating-ai-icon floating-ai-2"
          />
          
          <div className="final-badge">
            <span>✨ Final AI Project</span>
          </div>
          <h1 className="final-title">Mattel x AI Brand Lab</h1>
          <p className="final-subtitle">The completed website combining all prompt iterations with enhanced features</p>
          <div className="final-scroll-hint">
            <span className="scroll-hint-text">*scroll down to view prompts</span>
            <div className="scroll-mouse">
              <div className="mouse-body">
                <div className="mouse-wheel"></div>
              </div>
              <div className="mouse-arrows">
                <span className="arrow-down"></span>
                <span className="arrow-down"></span>
              </div>
            </div>
          </div>
          
          <Link to="/final-website" className="final-website-btn">
            🚀 View Final Website
          </Link>
          
          {/* Build Stats Dashboard */}
          <div className="build-stats-dashboard">
            <div className="build-stat-item">
              <span className="build-stat-icon">⏱️</span>
              <span className="build-stat-value">5h 37m</span>
              <span className="build-stat-label">Build Time</span>
            </div>
            <div className="build-stat-divider">|</div>
            <div className="build-stat-item">
              <span className="build-stat-icon">📄</span>
              <span className="build-stat-value">3</span>
              <span className="build-stat-label">Pages</span>
            </div>
            <div className="build-stat-divider">|</div>
            <div className="build-stat-item">
              <span className="build-stat-icon">🧩</span>
              <span className="build-stat-value">13</span>
              <span className="build-stat-label">Components</span>
            </div>
            <div className="build-stat-divider">|</div>
            <div className="build-stat-item">
              <span className="build-stat-icon">✨</span>
              <span className="build-stat-value">47+</span>
              <span className="build-stat-label">Features</span>
            </div>
            <div className="build-stat-divider">|</div>
            <div className="build-stat-item">
              <span className="build-stat-icon">🌍</span>
              <span className="build-stat-value">15</span>
              <span className="build-stat-label">Languages</span>
            </div>
            <div className="build-stat-divider">|</div>
            <div className="build-stat-item">
              <span className="build-stat-icon">🤖</span>
              <span className="build-stat-value">4</span>
              <span className="build-stat-label">AI Models</span>
            </div>
          </div>
          
          {/* Final Website Accordion */}
          <div className="final-accordion">
            <div 
              className={`final-accordion-header ${finalWebsiteAccordionOpen ? 'open' : ''}`}
              onClick={() => setFinalWebsiteAccordionOpen(!finalWebsiteAccordionOpen)}
            >
              <span className="accordion-title">
                AI Enhancements & Feature Build-Out <span className="accordion-meta">(22 Items)</span>
              </span>
              <span className="accordion-icon">{finalWebsiteAccordionOpen ? '−' : '+'}</span>
            </div>
            
            {finalWebsiteAccordionOpen && (
              <div className="final-accordion-content">
                <div className="accordion-intro">
                  <h4 className="accordion-section-title">⭐ AI Enhancements & Feature Build-Out</h4>
                  <p className="accordion-description">A consolidated record of all AI models, prompts, and feature upgrades applied throughout the website creation process.</p>
                </div>
                
                {/* Expandable Enhancement Items */}
                <div className="enhancements-list">
                  {aiEnhancements.map((item) => (
                    <div key={item.id} className={`enhancement-item ${expandedEnhancement === item.id ? 'expanded' : ''}`}>
                      <div 
                        className="enhancement-header"
                        onClick={() => setExpandedEnhancement(expandedEnhancement === item.id ? null : item.id)}
                      >
                        <div className="enhancement-header-left">
                          <span className="enhancement-number">{item.id}</span>
                          <div className="enhancement-title-group">
                            <h5 className="enhancement-title">{item.title}</h5>
                            <div className="enhancement-tags">
                              <span className="etag etag-model">🤖 {item.model}</span>
                              <span className="etag etag-type">{item.type}</span>
                            </div>
                          </div>
                        </div>
                        <span className="enhancement-toggle">{expandedEnhancement === item.id ? '−' : '+'}</span>
                      </div>
                      
                      {expandedEnhancement === item.id && (
                        <div className="enhancement-content">
                          <p className="enhancement-desc">{item.description}</p>
                          
                          {item.prompt && (
                            <div className="enhancement-prompt-block">
                              <span className="prompt-label">Prompt Used:</span>
                              <code className="prompt-code-block">{item.prompt}</code>
                            </div>
                          )}
                          
                          {item.prompts && (
                            <div className="enhancement-prompts-list">
                              {item.prompts.map((p, idx) => (
                                <div key={idx} className="multi-prompt-item">
                                  <span className="prompt-label">Prompt {idx + 1}:</span>
                                  <code className="prompt-code-block">{p.prompt}</code>
                                  {p.output && (
                                    <div className="prompt-output">
                                      <span className="output-label">Output:</span>
                                      <span className="output-text">{p.output}</span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {item.outputs && (
                            <div className="enhancement-outputs">
                              <span className="outputs-label">Outputs:</span>
                              <ul className="outputs-list">
                                {item.outputs.map((output, idx) => (
                                  <li key={idx}>{output}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {item.challenge && (
                            <div className="enhancement-challenge">
                              <span className="challenge-label">⚠️ Challenge:</span>
                              <p className="challenge-text">{item.challenge}</p>
                            </div>
                          )}
                          
                          {item.note && (
                            <p className="enhancement-note">💡 {item.note}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tools & Models Summary */}
                <div className="tools-summary">
                  <h5 className="tools-title">⭐ Tools & Models Used</h5>
                  <div className="tools-grid">
                    <div className="tool-row">
                      <span className="tool-purpose">Website content, branding, UX writing</span>
                      <span className="tool-name">ChatGPT 5.1</span>
                    </div>
                    <div className="tool-row">
                      <span className="tool-purpose">Image generation (Hero, Headshots)</span>
                      <span className="tool-name">Google Gemini 3 Pro</span>
                    </div>
                    <div className="tool-row">
                      <span className="tool-purpose">Feature enhancements, components</span>
                      <span className="tool-name">Claude Opus 4.5</span>
                    </div>
                    <div className="tool-row">
                      <span className="tool-purpose">Development environment</span>
                      <span className="tool-name">Cursor IDE & Google AI Studio</span>
                    </div>
                    <div className="tool-row">
                      <span className="tool-purpose">Framework</span>
                      <span className="tool-name">Vite + React</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* AI & Tech Glossary */}
          <div className="tech-glossary">
            <div className="glossary-header">
              <span className="glossary-icon">📚</span>
              <h3 className="glossary-title">Tech & AI Glossary</h3>
              <p className="glossary-subtitle">New to AI development? Here's what the buzzwords mean.</p>
            </div>
            
            <div className="glossary-grid">
              <div className="glossary-card">
                <div className="glossary-card-header">
                  <span className="glossary-emoji">🤖</span>
                  <h4>LLM (Large Language Model)</h4>
                </div>
                <p>AI systems trained on massive text datasets to understand and generate human-like text. Examples include <strong>Claude</strong>, <strong>ChatGPT</strong>, and <strong>Gemini</strong>. They power chatbots, code generation, and content creation.</p>
                <div className="glossary-examples">
                  <span className="example-tag">Claude Opus 4.5</span>
                  <span className="example-tag">ChatGPT 5.1</span>
                  <span className="example-tag">Gemini 3 Pro</span>
                </div>
              </div>
              
              <div className="glossary-card">
                <div className="glossary-card-header">
                  <span className="glossary-emoji">💻</span>
                  <h4>IDE (Integrated Development Environment)</h4>
                </div>
                <p>Software applications where developers write, test, and debug code. <strong>Cursor IDE</strong> is an AI-powered code editor that integrates LLMs directly into the coding experience, allowing developers to generate and edit code using natural language prompts.</p>
                <div className="glossary-examples">
                  <span className="example-tag">Cursor IDE</span>
                  <span className="example-tag">VS Code</span>
                  <span className="example-tag">Google Antigravity</span>
                  
                </div>
              </div>
              
              <div className="glossary-card">
                <div className="glossary-card-header">
                  <span className="glossary-emoji">⚡</span>
                  <h4>Vite + React</h4>
                </div>
                <p><strong>React</strong> is a JavaScript library for building user interfaces with reusable components. <strong>Vite</strong> is an ultra-fast build tool that makes development lightning quick with instant hot module replacement.</p>
                <div className="glossary-examples">
                  <span className="example-tag">JSX Components</span>
                  <span className="example-tag">Hot Reload</span>
                  <span className="example-tag">npm</span>
                </div>
              </div>
              
              <div className="glossary-card">
                <div className="glossary-card-header">
                  <span className="glossary-emoji">🎨</span>
                  <h4>AI Image Generation</h4>
                </div>
                <p>Models like <strong>Gemini 3 Pro</strong> create images from text descriptions. These tools transformed hero section visuals and custom backgrounds in this project, though they sometimes struggle with brand-specific elements.</p>
                <div className="glossary-examples">
                  <span className="example-tag">Imagen 3</span>
                  <span className="example-tag">DALL·E</span>
                  <span className="example-tag">Midjourney</span>
                </div>
              </div>
              
              <div className="glossary-card">
                <div className="glossary-card-header">
                  <span className="glossary-emoji">🔄</span>
                  <h4>CRUD Operations</h4>
                </div>
                <p>The four basic functions of data management: <strong>Create</strong>, <strong>Read</strong>, <strong>Update</strong>, <strong>Delete</strong>. The Hot Wheels community blog uses CRUD to let users create posts, view them, edit, and remove content.</p>
                <div className="glossary-examples">
                  <span className="example-tag">Blog Posts</span>
                  <span className="example-tag">Comments</span>
                  <span className="example-tag">User Content</span>
                </div>
              </div>
              
              <div className="glossary-card">
                <div className="glossary-card-header">
                  <span className="glossary-emoji">🌐</span>
                  <h4>SEO & AEO</h4>
                </div>
                <p><strong>SEO</strong> (Search Engine Optimization) helps websites rank on Google. <strong>AEO</strong> (Answer Engine Optimization) optimizes content for AI assistants and featured snippets. The FAQ section targets both for maximum discoverability.</p>
                <div className="glossary-examples">
                  <span className="example-tag">Long-tail Keywords</span>
                  <span className="example-tag">Featured Snippets</span>
                  <span className="example-tag">Schema</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-accent"></div>
      </section>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="main-title">Prompts</h1>
          <p className="subtitle">AI Prompt Comparison Lab: Mattel Marketing Assignment</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="tab-nav">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-btn ${activeTab === 'comparison' ? 'active' : ''}`}
          onClick={() => setActiveTab('comparison')}
        >
          Detailed Comparison
        </button>
        <button 
          className={`tab-btn ${activeTab === 'prompts' ? 'active' : ''}`}
          onClick={() => setActiveTab('prompts')}
        >
          Full Prompts
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === 'overview' && (
          <>
            {/* Download Section */}
            <section className="download-section">
              <h2>📄 Download Full Report</h2>
              <p>Get the complete analysis with all prompts, statistics, and recommendations.</p>
              <div className="download-buttons">
                <button className="download-btn pdf" onClick={generateFullReportPDF}>
                  <span className="btn-icon">📕</span>
                  Download PDF
                </button>
                <button className="download-btn word" onClick={generateFullReportWord}>
                  <span className="btn-icon">📘</span>
                  Download Word
                </button>
              </div>
            </section>

            {/* Prompt Cards */}
            <section className="prompts-grid">
              {prompts.map((prompt) => (
                <div key={prompt.id} className={`prompt-card ${prompt.isWinner ? 'winner' : ''}`}>
                  {prompt.isWinner && (
                    <div className="winner-badge">
                      <span className="trophy">🏆</span>
                      <span className="winner-text">WINNER</span>
                    </div>
                  )}
                  
                  <div className="card-header" style={{ background: prompt.color }}>
                    <h3 className="card-title">{prompt.title}</h3>
                    <p className="card-subtitle">{prompt.subtitle}</p>
                  </div>
                  
                  <div className="card-body">
                    <div className="llm-badge">
                      <span className="llm-icon">🤖</span>
                      <span>{prompt.llm}</span>
                    </div>
                    
                    <div className="stats-grid">
                      <div className="stat">
                        <span className="stat-value">{prompt.thinkTime}</span>
                        <span className="stat-label">Think Time</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{prompt.filesGenerated}</span>
                        <span className="stat-label">Files</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{prompt.linesOfCode}</span>
                        <span className="stat-label">Lines</span>
                      </div>
                    </div>
                    
                    <div className="platform-info">
                      <span className="platform-label">Platform:</span>
                      <span className="platform-value">{prompt.platform}</span>
                    </div>
                    
                    <Link to={prompt.link} className="view-btn">
                      View Website →
                    </Link>
                  </div>
                </div>
              ))}
            </section>
          </>
        )}

        {activeTab === 'comparison' && (
          <section className="comparison-section">
            <h2>Performance Comparison</h2>
            
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Prompt 1</th>
                  <th>Prompt 2</th>
                  <th className="winner-col">Prompt 3 🏆</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LLM</td>
                  <td>Gemini 3 Pro</td>
                  <td>Gemini 3 Pro</td>
                  <td className="winner-col">Claude Opus 4.5</td>
                </tr>
                <tr>
                  <td>Platform</td>
                  <td>Google AI Studio</td>
                  <td>Cursor IDE</td>
                  <td className="winner-col">Cursor IDE</td>
                </tr>
                <tr>
                  <td>Generation Time</td>
                  <td>20 seconds</td>
                  <td>~45 seconds</td>
                  <td className="winner-col">~60 seconds</td>
                </tr>
                <tr>
                  <td>Files Generated</td>
                  <td>14</td>
                  <td>12</td>
                  <td className="winner-col">14</td>
                </tr>
                <tr>
                  <td>Lines of Code</td>
                  <td>~1,200</td>
                  <td>~1,800</td>
                  <td className="winner-col">~2,400</td>
                </tr>
                <tr>
                  <td>Styling</td>
                  <td>Tailwind CSS</td>
                  <td>Separate CSS</td>
                  <td className="winner-col">CSS Variables</td>
                </tr>
                <tr>
                  <td>Animations</td>
                  <td>Basic</td>
                  <td>Moderate</td>
                  <td className="winner-col">Advanced</td>
                </tr>
                <tr>
                  <td>Widget Complexity</td>
                  <td>Simple</td>
                  <td>Moderate</td>
                  <td className="winner-col">Comprehensive</td>
                </tr>
                <tr>
                  <td>Brand Accuracy</td>
                  <td>Good</td>
                  <td>Very Good</td>
                  <td className="winner-col">Excellent</td>
                </tr>
                <tr>
                  <td>Overall Score</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td className="winner-col">⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>

            <div className="winner-summary">
              <h3>🏆 Why Prompt 3 Won</h3>
              <ul>
                <li><strong>Most Creative:</strong> Unique typography (Bebas Neue + Outfit), distinctive visual identity</li>
                <li><strong>Best UX:</strong> Floating animations, glow effects, polished micro-interactions</li>
                <li><strong>Comprehensive Widgets:</strong> 4 build modes, complexity levels, detailed suggestions</li>
                <li><strong>Collectors Hub:</strong> Drop calendar, spotlight car, community features</li>
                <li><strong>Code Quality:</strong> CSS variables, consistent naming, thorough documentation</li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === 'prompts' && (
          <section className="prompts-section">
            <h2>Full Prompts Used</h2>
            <p className="prompts-intro">Click on each prompt to expand and view the full text. Download individual prompts as PDF or Word documents.</p>
            
            {prompts.map((prompt) => (
              <div key={prompt.id} className={`prompt-detail ${prompt.isWinner ? 'prompt-winner' : ''}`}>
                <div 
                  className="prompt-header-bar"
                  onClick={() => setExpandedPrompt(expandedPrompt === prompt.id ? null : prompt.id)}
                >
                  <div className="prompt-header-left">
                    <h3>
                      {prompt.title}: {prompt.subtitle}
                      {prompt.isWinner && <span className="inline-winner-badge">🏆 WINNER</span>}
                    </h3>
                    <div className="prompt-meta">
                      <span>🤖 {prompt.llm}</span>
                      <span>⏱️ {prompt.thinkTime}</span>
                      <span>📁 {prompt.filesGenerated} files</span>
                      <span>📝 {prompt.linesOfCode}</span>
                    </div>
                  </div>
                  <span className="expand-icon">{expandedPrompt === prompt.id ? '▼' : '▶'}</span>
                </div>

                <div className="prompt-download-row">
                  <button className="prompt-download-btn pdf-small" onClick={() => generatePromptPDF(prompt)}>
                    📕 Download PDF
                  </button>
                  <button className="prompt-download-btn word-small" onClick={() => generatePromptWord(prompt)}>
                    📘 Download Word
                  </button>
                </div>
                
                {expandedPrompt === prompt.id && (
                  <div className="prompt-full-content">
                    <pre className="prompt-code">{prompt.fullPrompt}</pre>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Prompts | Educational Use Only | Mattel Marketing Project</p>
      </footer>
    </div>
  );
}

export default PromptsPage;
