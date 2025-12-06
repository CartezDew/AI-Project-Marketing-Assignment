import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Gamepad2, Car, Users, Globe, Zap, Heart, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './FAQ.css';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [accordionRef, accordionVisible] = useScrollAnimation({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.3 });

  // SEO & AEO Optimized FAQ Questions
  // Long-tail keywords: UNO card game rules, Hot Wheels collector community, 
  // AI-powered games, family game night ideas, Mattel toys, etc.
  const faqItems = [
    {
      icon: <Gamepad2 size={24} />,
      color: '#ED1C24', // UNO Red
      question: "What is UNO and how do you play the world's #1 card game?",
      answer: "UNO is Mattel's iconic card game loved by over 80+ countries worldwide! The goal is simple: be the first to get rid of all your cards by matching colors or numbers. When you're down to your last card, shout 'UNO!' or face a penalty. With Wild cards, Skip cards, Reverse cards, and the infamous Draw Four, every game is full of surprises. Perfect for 2-10 players ages 7+, UNO brings families and friends together for unforgettable game nights.",
      keywords: "UNO rules, how to play UNO, UNO card game instructions, family card games"
    },
    {
      icon: <Car size={24} />,
      color: '#0057B8', // Hot Wheels Blue
      question: "How do I start collecting Hot Wheels cars and what are rare finds worth?",
      answer: "Starting a Hot Wheels collection is exciting and accessible! Begin with mainline cars available at most retailers for around $1-2. As you grow your collection, explore Treasure Hunts (T-Hunts), Super Treasure Hunts (STHs), and Red Line Club exclusives. Rare Hot Wheels can be worth hundreds or even thousands—the 1969 Pink Rear-Loading Beach Bomb sold for $175,000! Join collector communities, follow drop calendars, and check packaging for special markings. With over 20,000+ designs since 1968, there's always something new to discover.",
      keywords: "Hot Wheels collecting guide, rare Hot Wheels value, treasure hunt Hot Wheels"
    },
    {
      icon: <Sparkles size={24} />,
      color: '#FFD53D', // Yellow
      question: "What AI features power the Mattel Brand Lab experience?",
      answer: "Our AI-powered platform brings innovative features to enhance your play experience! The UNO House Rules Generator creates custom game variations based on your group size and preferred playing style. For Hot Wheels enthusiasts, AI helps design dream track layouts and suggests collecting strategies. We use intelligent recommendations to personalize content, suggest game night ideas, and connect you with community stories from players worldwide. It's creativity meets technology—all designed to spark imagination and bring fans together.",
      keywords: "AI games, Mattel AI technology, AI house rules generator, smart toy features"
    },
    {
      icon: <Users size={24} />,
      color: '#55AA55', // UNO Green
      question: "How can I join the UNO and Hot Wheels community events and meetups?",
      answer: "Connect with fellow fans through official Mattel community events! UNO tournaments and game nights happen in major cities—check our meetup calendar for events in Los Angeles, New York, Chicago, and more. Hot Wheels collectors gather at conventions, swap meets, and Red Line Club exclusive events. Follow us on social media for virtual tournaments, live streams, and community challenges. Whether you're a casual player or competitive champion, there's a place for you in our global family of millions of fans.",
      keywords: "UNO tournaments near me, Hot Wheels conventions, Mattel community events, game night meetups"
    },
    {
      icon: <HelpCircle size={24} />,
      color: '#FF6B00', // Orange
      question: "What are the best UNO house rules for family game night?",
      answer: "Spice up your game night with popular house rules! 'Stacking' lets players add Draw 2s or Draw 4s to pass the penalty. '7-0 Rule' means playing a 7 swaps hands with another player, while 0 rotates all hands. 'Jump-In' allows playing identical cards out of turn. 'No Bluffing' removes Wild Draw 4 challenges. For family fun, try 'Silent UNO' where talking means drawing cards, or 'Speed UNO' with a 3-second play timer. Our AI generator creates unique rules based on your group's style—chaotic, strategic, or family-friendly!",
      keywords: "UNO house rules list, best UNO variations, UNO stacking rules, family game night rules"
    },
    {
      icon: <Globe size={24} />,
      color: '#9932CC', // Purple
      question: "Is this platform available in multiple languages worldwide?",
      answer: "Yes! We believe play should have no language barriers. Our platform supports 35+ languages including English, Spanish, French, Portuguese, German, Japanese, Korean, Chinese, Hindi, Arabic, Swahili, and many more. From Kinyarwanda to Tagalog, from Yoruba to Ukrainian—fans worldwide can explore UNO strategies and Hot Wheels collections in their native language. Simply use the language selector in the navigation bar to switch instantly. We're committed to making the magic of Mattel brands accessible to everyone, everywhere.",
      keywords: "Mattel multilingual support, UNO in different languages, international toy communities"
    },
    {
      icon: <Star size={24} />,
      color: '#C8102E', // Mattel Red
      question: "What makes Hot Wheels Red Line Club membership worth it for collectors?",
      answer: "The Red Line Club (RLC) is the ultimate destination for serious Hot Wheels collectors! Members get exclusive access to limited-edition cars not available anywhere else—often with special paint, Real Riders rubber tires, and premium packaging. Benefits include early notifications for drops, behind-the-scenes content, voting rights on new designs, and access to members-only events. RLC cars often appreciate in value, making membership an investment. Annual fees are reasonable considering the exclusive drops, community access, and collector prestige that comes with being part of this elite club.",
      keywords: "Hot Wheels Red Line Club benefits, RLC membership worth it, exclusive Hot Wheels collecting"
    },
    {
      icon: <Zap size={24} />,
      color: '#4A8CFF', // Blue
      question: "How do I build the best Hot Wheels track for epic stunts and races?",
      answer: "Building amazing Hot Wheels tracks is an art! Start with the basics: launch zones for speed, loops for excitement, and landing areas for safe landings. Key tips: maintain consistent elevation drops for momentum, use boosters strategically, and create wide curves to prevent derailments. Popular track pieces include the Loop & Launch, Corkscrew Crash, and Super Ultimate Garage. For advanced builders, combine multiple sets, add lighting, and create themed environments. Our AI Track Builder suggests layouts based on your space, budget, and stunt preferences—from beginner-friendly to professional-grade courses!",
      keywords: "Hot Wheels track building tips, best Hot Wheels track sets, how to build stunt tracks"
    },
    {
      icon: <Heart size={24} />,
      color: '#FF69B4', // Pink
      question: "Why is UNO perfect for kids' development and family bonding?",
      answer: "UNO is more than entertainment—it's a powerful learning tool! Children develop critical skills including color and number recognition, strategic thinking, patience, and good sportsmanship. The game teaches turn-taking, following rules, and handling both winning and losing gracefully. For families, UNO creates device-free quality time and lasting memories. Studies show regular family game nights improve communication and strengthen relationships. With simple rules but endless strategy, UNO engages players aged 7 to 97. It's why educators and child psychologists recommend UNO as one of the best games for childhood development.",
      keywords: "UNO educational benefits, family bonding games, best card games for kids, UNO child development"
    },
    {
      icon: <Gamepad2 size={24} />,
      color: '#00CED1', // Teal
      question: "What special UNO editions and themed decks are available to collect?",
      answer: "UNO offers an incredible variety of themed editions! Popular choices include UNO Flip (double-sided cards with Dark Side rules), UNO Attack (card launcher), UNO No Mercy (brutal new action cards), and UNO All Wild (every card is wild!). Licensed editions feature beloved franchises: Disney, Marvel, Harry Potter, Minions, BTS, and sports teams. Collector's editions include premium metal tins, 50th Anniversary sets, and artist collaborations. Limited releases like UNO Artiste Series and brand partnerships (McDonald's, Fender) become valuable collectibles. With 600+ editions worldwide, there's an UNO for every fan!",
      keywords: "UNO special editions list, UNO Flip rules, collectible UNO decks, themed UNO games"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      {/* Top Creative Border - Layered Waves */}
      <div className="faq-border-top">
        {/* Background gradient layer */}
        <div className="faq-border-top-bg"></div>
        {/* Yellow wave layer */}
        <svg className="faq-wave-layer faq-wave-yellow" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        {/* Red wave layer */}
        <svg className="faq-wave-layer faq-wave-red" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        {/* Blue wave layer */}
        <svg className="faq-wave-layer faq-wave-blue" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        {/* Decorative dots */}
        <div className="faq-border-dots">
          <span className="faq-dot faq-dot-1"></span>
          <span className="faq-dot faq-dot-2"></span>
          <span className="faq-dot faq-dot-3"></span>
          <span className="faq-dot faq-dot-4"></span>
          <span className="faq-dot faq-dot-5"></span>
        </div>
      </div>

      {/* Playful Background Elements */}
      <div className="faq-bg-elements">
        <div className="faq-blob faq-blob-1"></div>
        <div className="faq-blob faq-blob-2"></div>
        <div className="faq-blob faq-blob-3"></div>
        <div className="faq-sparkle faq-sparkle-1">✦</div>
        <div className="faq-sparkle faq-sparkle-2">★</div>
        <div className="faq-sparkle faq-sparkle-3">✧</div>
        <div className="faq-sparkle faq-sparkle-4">✺</div>
        <div className="faq-question-mark faq-qm-1">?</div>
        <div className="faq-question-mark faq-qm-2">?</div>
      </div>

      {/* Shadow Images - Cutouts of People Playing */}
      
      {/* 1. Kids Running (Top Left) */}
      <div className="faq-shadow-image faq-shadow-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,40 C115,40 125,25 115,15 C105,5 90,5 80,15 C70,25 85,40 100,40 Z" fill="#e0e7ff" />
          <path d="M95,45 C80,55 60,60 40,50 L20,40 C15,35 10,45 15,55 L35,75 C50,90 60,100 65,120 L55,170 C50,185 70,190 75,175 L90,130 L105,175 C110,190 130,185 125,170 L115,120 C120,100 130,90 145,75 L165,55 C170,45 165,35 160,40 L140,50 C120,60 110,55 95,45 Z" fill="#e0e7ff" />
        </svg>
      </div>

      {/* 2. Teen Jumping (Top Right) */}
      <div className="faq-shadow-image faq-shadow-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="30" r="15" fill="#fce7f3" />
          <path d="M100,50 C120,60 140,40 160,20 C170,10 180,20 170,30 L150,60 C140,80 130,90 130,110 L140,160 C145,175 125,180 120,165 L100,120 L80,165 C75,180 55,175 60,160 L70,110 C70,90 60,80 50,60 L30,30 C20,20 30,10 40,20 C60,40 80,60 100,50 Z" fill="#fce7f3" />
        </svg>
      </div>

      {/* 3. Family Holding Hands (Bottom Left) */}
      <div className="faq-shadow-image faq-shadow-3">
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          {/* Parent */}
          <circle cx="80" cy="40" r="15" fill="#dbeafe" />
          <path d="M80,60 C60,70 60,100 60,130 L55,190 C50,200 70,200 75,190 L80,140 L85,190 C90,200 110,200 105,190 L100,130 C100,100 100,70 80,60" fill="#dbeafe" />
          {/* Child */}
          <circle cx="150" cy="70" r="12" fill="#dbeafe" />
          <path d="M150,85 C135,95 135,115 135,140 L130,190 C125,200 140,200 145,190 L150,150 L155,190 C160,200 175,200 170,190 L165,140 C165,115 165,95 150,85" fill="#dbeafe" />
          {/* Connected Arms */}
          <path d="M80,70 Q115,100 150,95" stroke="#dbeafe" strokeWidth="10" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* 4. Friends Running (Bottom Right) */}
      <div className="faq-shadow-image faq-shadow-4">
        <svg viewBox="0 0 250 200" xmlns="http://www.w3.org/2000/svg">
          {/* Person 1 */}
          <circle cx="60" cy="40" r="14" fill="#ffe4e6" />
          <path d="M60,60 C50,70 40,90 40,120 L30,180 C25,190 45,195 50,185 L60,140 L70,185 C75,195 95,190 90,180 L80,120 C80,90 70,70 60,60" fill="#ffe4e6" />
          {/* Person 2 */}
          <circle cx="120" cy="50" r="14" fill="#ffe4e6" />
          <path d="M120,70 C110,80 100,100 100,130 L90,190 C85,200 105,205 110,195 L120,150 L130,195 C135,205 155,200 150,190 L140,130 C140,100 130,80 120,70" fill="#ffe4e6" />
        </svg>
      </div>

      <div className="faq-container">
        {/* Header */}
        <div className="faq-header" ref={headerRef}>
          <span className={`faq-badge scroll-animate fade-up ${headerVisible ? 'visible' : ''}`}>
            <HelpCircle size={16} />
            Got Questions?
          </span>
          <h2 className={`faq-title scroll-animate fade-up delay-100 ${headerVisible ? 'visible' : ''}`}>
            Frequently Asked <span className="faq-title-highlight">Questions</span>
          </h2>
          <p className={`faq-subtitle scroll-animate fade-up delay-200 ${headerVisible ? 'visible' : ''}`}>
            Everything you need to know about UNO, Hot Wheels, and our AI-powered platform
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion" ref={accordionRef}>
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`faq-item scroll-animate fade-up stagger-${Math.min(index + 1, 10)} ${accordionVisible ? 'visible' : ''} ${openIndex === index ? 'faq-item-open' : ''}`}
              style={{ '--item-color': item.color }}
            >
              <button 
                className="faq-question-btn"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <div className="faq-question-left">
                  <span className="faq-icon" style={{ background: item.color }}>
                    {item.icon}
                  </span>
                  <span className="faq-question-text">{item.question}</span>
                </div>
                <span className={`faq-chevron ${openIndex === index ? 'faq-chevron-open' : ''}`}>
                  <ChevronDown size={24} />
                </span>
              </button>
              
              <div className={`faq-answer-wrapper ${openIndex === index ? 'faq-answer-open' : ''}`}>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="faq-bottom-cta" ref={ctaRef}>
          <p className={`scroll-animate fade-up ${ctaVisible ? 'visible' : ''}`}>Still have questions? We'd love to help!</p>
          <div className={`faq-cta-buttons scroll-animate fade-up delay-200 ${ctaVisible ? 'visible' : ''}`}>
            <a href="#team" className="faq-cta-btn faq-cta-primary">
              <Users size={18} />
              Meet the Team
            </a>
            <a href="https://about.mattel.com/" target="_blank" rel="noopener noreferrer" className="faq-cta-btn faq-cta-secondary">
              <Globe size={18} />
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Creative Border - Layered Waves (Inverted) */}
      <div className="faq-border-bottom">
        {/* Background gradient layer */}
        <div className="faq-border-bottom-bg"></div>
        {/* Blue wave layer */}
        <svg className="faq-wave-layer faq-wave-blue-bottom" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
        {/* Red wave layer */}
        <svg className="faq-wave-layer faq-wave-red-bottom" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
        {/* Yellow wave layer */}
        <svg className="faq-wave-layer faq-wave-yellow-bottom" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,90.7C1120,96,1280,96,1360,96L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
        {/* Decorative circles */}
        <div className="faq-border-circles">
          <span className="faq-circle faq-circle-1"></span>
          <span className="faq-circle faq-circle-2"></span>
          <span className="faq-circle faq-circle-3"></span>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

