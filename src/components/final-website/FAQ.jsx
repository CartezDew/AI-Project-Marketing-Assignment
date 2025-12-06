import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Gamepad2, Car, Users, Globe, Zap, Heart, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

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

      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <span className="faq-badge">
            <HelpCircle size={16} />
            Got Questions?
          </span>
          <h2 className="faq-title">
            Frequently Asked <span className="faq-title-highlight">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about UNO, Hot Wheels, and our AI-powered platform
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
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
        <div className="faq-bottom-cta">
          <p>Still have questions? We'd love to help!</p>
          <div className="faq-cta-buttons">
            <a href="#team" className="faq-cta-btn faq-cta-primary">
              <Users size={18} />
              Meet the Team
            </a>
            <a href="#overview" className="faq-cta-btn faq-cta-secondary">
              <Globe size={18} />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

