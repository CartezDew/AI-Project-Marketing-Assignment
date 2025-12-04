import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedPrompt, setExpandedPrompt] = useState(null);
  const [optimizationOpen, setOptimizationOpen] = useState(false);

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

### 2.1.1 HERO SECTION – Youthful, Playful, Conference-Style Layout (FOCUS HERE)

Design the global hero to feel like a **modern creative summit landing page**.

**Layout**
• Use a **two-column CSS grid** for the hero:
  - Left grid column: headline, subheading, and two primary call-to-action buttons.
  - Right grid column: a vertical collage of character portraits and colorful shapes/doodles.
• Full-width hero on a **mostly white background** with pops of color.

**Typography & Copy**
• Use a bold, expressive headline with mixed weights & sizes, for example:
  - "Mattel x AI Brand Lab:"
  - "Unleashing Playful Brand Experiences"
• Under the headline, add a concise subheading such as:
  - "Explore how AI reimagines UNO game nights and Hot Wheels collector worlds — all in one playful digital lab."

**Primary CTAs (LEFT SIDE OF THE GRID)**
• Place the CTAs directly under the subheading, clearly aligned in the left grid column:
  - Solid primary button: **"Let's Play UNO"**
  - Secondary / outline button: **"HotWheels Collectors Edition"**
• Buttons should feel friendly and tappable, with clear hover states.

**Right-Side Visuals (RIGHT SIDE OF THE GRID)**
• The right grid column should contain 2–3 portrait-style images representing:
  - A kid or family enjoying UNO.
  - A teen/young adult in a game-night vibe.
  - A Hot Wheels fan/collector.
• Mask these photos in **rounded vertical shapes/ovals** with backgrounds using UNO/Hot Wheels colors (yellow, blue, red, cyan).
• Add **hand-drawn doodles** around them:
  - Stars, bursts, scribbles, motion lines, card icons, track curves.
• The composition should feel **dynamic and youthful**, with slight overlaps and depth.

**Hero Micro-Details**
• Include a small "Powered with AI-assisted design" tag near the hero or nav.
• Optionally, add a narrow strip under the hero with either:
  - A countdown to a fictional "Live AI Brand Lab Demo", or
  - A stats row: **"2 Iconic Brands • 1 AI Lab • Unlimited Play"**.

**Navigation Bar**
• Top navigation with:
  - Mattel x AI Brand Lab logo/wordmark on the left.
  - Simple nav links in the center (e.g., "Overview", "UNO", "Hot Wheels", "How AI Helps").
  - A right-side CTA such as "View the Case Study" or "Watch AI in Action".

The hero should instantly feel **fun, optimistic, and youth-friendly**, while clearly showing:
  - CTAs on the LEFT ("Let's Play UNO" + "HotWheels Collectors Edition")
  - Portrait images and shapes on the RIGHT of the grid container.

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

  const prompt4FullText = `You are a world-class brand UI/UX designer + front-end architect tasked with building a React/Vite web experience for a Mattel x AI Brand Lab.

We are NOT building a generic "AI website."
We are building a branded digital experience that shows how AI can help Mattel express TWO of its iconic sub-brands in distinct, authentic ways:

• UNO® – the world's most beloved card game, social, fast, playful
• Hot Wheels® – high-speed play and deep collector culture, full-throttle, bold, imaginative

The site must celebrate Mattel as the parent brand and then split into two clearly different brand experiences: an UNO Player Community and a Hot Wheels Collectors Community.

Important for this iteration:
Your primary task is to design and implement a NEW global LANDING HERO SECTION that feels youthful, playful, and energetic, similar to a modern creative conference site (big typography on the left, colorful character portraits and shapes on the right, fun doodles, clear CTAs). The rest of the site can be stubbed out.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2.1.1 HERO SECTION – Youthful, Playful, Conference-Style Layout (FOCUS HERE)

Design the global hero to feel like a modern creative summit landing page.

Layout:
• Use a two-column CSS grid for the hero
• Left grid column: headline, subheading, and two primary call-to-action buttons
• Right grid column: a vertical collage of character portraits and colorful shapes/doodles
• Full-width hero on a mostly white background with pops of color

Typography & Copy:
• Use a bold, expressive headline with mixed weights & sizes
• "Mattel x AI Brand Lab:" / "Unleashing Playful Brand Experiences"
• Under the headline, add a concise subheading

Primary CTAs (LEFT SIDE OF THE GRID):
• Solid primary button: "Let's Play UNO"
• Secondary / outline button: "HotWheels Collectors Edition"
• Buttons should feel friendly and tappable, with clear hover states

Right-Side Visuals (RIGHT SIDE OF THE GRID):
• Display 2–3 portrait-style images representing:
  - A kid or family enjoying UNO
  - A teen/young adult in a game-night vibe
  - A Hot Wheels fan/collector
• Mask these photos in rounded vertical shapes/ovals with backgrounds using UNO/Hot Wheels colors
• Add hand-drawn doodles: Stars, bursts, scribbles, motion lines, card icons, track curves

Hero Micro-Details:
• Include a small "Powered with AI-assisted design" tag near the hero or nav
• Add a stats row: "2 Iconic Brands • 1 AI Lab • Unlimited Play"

Navigation Bar:
• Mattel x AI Brand Lab logo/wordmark on the left
• Simple nav links in the center (e.g., "Overview", "UNO", "Hot Wheels", "How AI Helps")
• A right-side CTA such as "View the Case Study"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TECHNICAL REQUIREMENTS:
• All styling must be in separate .css files (No inline styles, No CSS-in-JS, No Tailwind)
• Use React Router for routing
• Make the hero section responsive and visually engaging on both desktop and mobile`;

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
      link: "/prompt1/index.html",
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
      link: "/prompt2/index.html",
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
      isWinner: false,
      link: "/prompt3/index.html",
      fullPrompt: prompt3FullText
    },
    {
      id: 4,
      title: "Prompt 4",
      subtitle: "Conference Hero",
      llm: "Claude Opus 4.5",
      platform: "Cursor IDE",
      thinkTime: "~90 seconds",
      filesGenerated: 16,
      linesOfCode: "~3,200",
      features: ["React 18 + Vite", "Two-column hero grid", "Portrait collage", "Hand-drawn doodles", "Separate CSS"],
      strengths: ["Modern conference-style design", "Youthful & playful aesthetic", "Clear dual CTAs", "Best hero section"],
      weaknesses: ["More complex CSS structure", "Longer generation time"],
      color: "linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%)",
      isWinner: true,
      link: "/prompt4/index.html",
      fullPrompt: prompt4FullText
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
          </tr>
          <tr><td>LLM Used</td><td>Gemini 3 Pro</td><td>Gemini 3 Pro</td><td>Claude Opus 4.5</td></tr>
          <tr><td>Platform</td><td>Google AI Studio</td><td>Cursor IDE</td><td>Cursor IDE</td></tr>
          <tr><td>Think Time</td><td>20 seconds</td><td>~45 seconds</td><td>~60 seconds</td></tr>
          <tr><td>Files Generated</td><td>14 files</td><td>12 files</td><td>14 files</td></tr>
          <tr><td>Lines of Code</td><td>~1,200</td><td>~1,800</td><td>~2,400</td></tr>
          <tr><td>Overall Score</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
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
      {/* Completed Website Section */}
      <section className="completed-website-section">
        <div className="completed-website-content">
          <h1 className="completed-title">✨ Completed Website</h1>
          <p className="completed-subtitle">Scroll down to see all prompts used</p>
          
          <a href="/prompt3/index.html" className="view-completed-btn">
            🚀 View Final Website
          </a>
          
          {/* Optimization Accordion */}
          <div className="optimization-accordion">
            <div 
              className={`accordion-header ${optimizationOpen ? 'open' : ''}`}
              onClick={() => setOptimizationOpen(!optimizationOpen)}
            >
              <span className="accordion-title">
                Optimization <span className="accordion-meta">(Features, Media, Prompts)</span>
              </span>
              <span className="accordion-icon">{optimizationOpen ? '−' : '+'}</span>
            </div>
            
            {optimizationOpen && (
              <div className="accordion-content">
                <ul className="optimization-list">
                  <li>
                    <span className="opt-icon">🎨</span>
                    <span className="opt-text">Hero images generated with <strong>Google Gemini Imagen 3</strong></span>
                  </li>
                  <li>
                    <span className="opt-icon">🎠</span>
                    <span className="opt-text"><strong>Infinite carousel</strong> with 5x duplicated cards for seamless looping</span>
                  </li>
                  <li>
                    <span className="opt-icon">🎨</span>
                    <span className="opt-text"><strong>18 CSS variables</strong> for UNO/Hot Wheels brand colors (--uno-red, --hw-flame, etc.)</span>
                  </li>
                  <li>
                    <span className="opt-icon">✨</span>
                    <span className="opt-text"><strong>77+ @keyframes animations</strong> including float, wiggle, pulse, and glow effects</span>
                  </li>
                  <li>
                    <span className="opt-icon">🤖</span>
                    <span className="opt-text"><strong>AI team doodles</strong> with color-cycling stars, spirals, and floating AI icons</span>
                  </li>
                  <li>
                    <span className="opt-icon">🔗</span>
                    <span className="opt-text"><strong>Dynamic navbar dropdown</strong> with conditional Home/Prompts links</span>
                  </li>
                  <li>
                    <span className="opt-icon">🃏</span>
                    <span className="opt-text">Brand logos (UNO, Hot Wheels, Mattel) integrated into navigation</span>
                  </li>
                  <li>
                    <span className="opt-icon">👥</span>
                    <span className="opt-text">Team cards with <strong>individual brand colors</strong> and higher z-index layering</span>
                  </li>
                </ul>
                
                <div className="prompts-used-section">
                  <h4 className="prompts-used-title">💬 Sample Prompts Used:</h4>
                  <ul className="prompts-used-list">
                    <li>"make the carousel scroll infinite with animation, it should never get to the end because the scroll is looped"</li>
                    <li>"add star doodles in the section, basically use similar doodles to the hero section"</li>
                    <li>"replace the ai robot doodle with the ai-icon doodle in the logos folder"</li>
                    <li>"add light brand colors of purple, red, yellow, orange, blue for team cards with light gradients"</li>
                    <li>"add an About dropdown that takes users to different sections of the home page"</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
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
                    
                    <a href={prompt.link} className="view-btn">
                      View Website →
                    </a>
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

export default App;
