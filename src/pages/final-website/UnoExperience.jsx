import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import UnoHouseRulesWidget from '../../components/final-website/UnoHouseRulesWidget';
import Footer from '../../components/final-website/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './UnoExperience.css';
import infoGraphic from '../../assets/uno-content/info-graphic.webp';
import officialRulesPdf from '../../assets/uno-content/official-rules.pdf';
import unoCardIcon from '../../assets/icons/Uno-card.webp';
import imgKorea from '../../assets/uno-content/Asia.webp';
import imgBrazil from '../../assets/uno-content/Brazil.webp';
import imgRome from '../../assets/uno-content/Rome.webp';
import teddyImage from '../../assets/uno-content/teddy.webp';
import intenseGameVideo from '../../assets/uno-content/Intense-game.mov';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Family Quote Typewriter Component
const FamilyQuoteTypewriter = () => {
  const quoteRef = useRef(null);
  const isInView = useInView(quoteRef, { once: true, amount: 0.5 });
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullQuote = "A family that PLAYS together STAYS together.";
  
  useEffect(() => {
    if (isInView && displayedText.length < fullQuote.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullQuote.slice(0, displayedText.length + 1));
      }, 50); // Speed of typing
      return () => clearTimeout(timeout);
    } else if (displayedText.length === fullQuote.length) {
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
      }, 500);
      return () => clearTimeout(completeTimeout);
    }
  }, [isInView, displayedText]);

  // Function to render text with highlighted words
  const renderStyledText = (text) => {
    return text.split(/(PLAYS|STAYS)/g).map((part, index) => {
      if (part === 'PLAYS') {
        return <span key={index} className="uno-highlight-plays">{part}</span>;
      } else if (part === 'STAYS') {
        return <span key={index} className="uno-highlight-stays">{part}</span>;
      }
      return part;
    });
  };

  return (
    <motion.div 
      ref={quoteRef}
      className="uno-family-quote"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="uno-quote-content">
        <span className="uno-quote-mark uno-quote-open">"</span>
        
        <div className="uno-quote-text-wrapper">
          <p className="uno-quote-text">
            {renderStyledText(displayedText)}
            <span className={`uno-quote-pen ${isComplete ? 'uno-pen-hidden' : ''}`}>
              <svg className="uno-pen-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path 
                  d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" 
                  fill="rgba(237, 28, 36, 0.2)"
                />
                <path d="M16 8L2 22" />
                <path d="M17.5 15H9" />
              </svg>
            </span>
          </p>
        </div>
        
        <span className="uno-quote-mark uno-quote-close">"</span>
      </div>
      
      <motion.div 
        className="uno-quote-emojis"
        initial={{ opacity: 0, y: 20 }}
        animate={isComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3 }}
      >
        <span className="uno-quote-emoji">😂</span>
        <span className="uno-quote-emoji">❤️</span>
        <span className="uno-quote-emoji">🙏</span>
        <span className="uno-quote-emoji">😂</span>
      </motion.div>
    </motion.div>
  );
};

const FinalWebsiteUnoExperience = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  // Set page title
  useEffect(() => {
    document.title = 'UNO® | Mattel × AI Lab';
    return () => { document.title = 'Mattel × AI Lab'; };
  }, []);

  // Handle hash navigation - scroll to section when navigating from other pages
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const elementId = location.hash.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: "Hey there, UNO champion! 🎴 I'd love to hear YOUR UNO stories! How do YOU play? Got any epic wins, hilarious moments, or house rules? Share away! (I can also answer any questions about the game)" }
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  
  // Community Modal State
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [communityForm, setCommunityForm] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Video loading state
  const [loadedVideos, setLoadedVideos] = useState({});
  
  // Expanded infographic state
  const [expandedInfographic, setExpandedInfographic] = useState(null);
  
  // Intense game video state
  const [intenseVideoLoaded, setIntenseVideoLoaded] = useState(false);
  const [intenseVideoState, setIntenseVideoState] = useState('muted'); // 'muted' | 'unmuted' | 'normal'
  const intenseVideoRef = useRef(null);
  const intenseVideoWrapperRef = useRef(null);

  // Auto-play video when in viewport (muted)
  useEffect(() => {
    const video = intenseVideoRef.current;
    const wrapper = intenseVideoWrapperRef.current;
    if (!video || !wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.02 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [intenseVideoLoaded]);

  // Handle custom play button clicks
  const handleIntenseVideoClick = () => {
    const video = intenseVideoRef.current;
    if (!video) return;

    if (intenseVideoState === 'muted') {
      // First click: unmute and play
      video.muted = false;
      video.play();
      setIntenseVideoState('unmuted');
    } else if (intenseVideoState === 'unmuted') {
      // Second click: restart from beginning with sound
      video.currentTime = 0;
      video.muted = false;
      video.play();
      setIntenseVideoState('normal');
    }
    // After 'normal', the native controls handle everything
  };
  
  // Countdown timer state for meetup section
  const [countdownTime, setCountdownTime] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const handleVideoLoad = (videoId) => {
    setLoadedVideos(prev => ({ ...prev, [videoId]: true }));
  };

  // Custom scrollbar for shorts container
  const shortsScrollRef = useRef(null);
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [isScrollbarDragging, setIsScrollbarDragging] = useState(false);
  const scrollbarDragStart = useRef({ x: 0, scrollLeft: 0 });

  // Update custom scrollbar thumb position and size
  const updateScrollbar = () => {
    if (!shortsScrollRef.current || !scrollbarRef.current) return;
    
    const container = shortsScrollRef.current;
    const scrollbar = scrollbarRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    
    // Calculate thumb width (proportional to visible area)
    const thumbWidthPercent = (clientWidth / scrollWidth) * 100;
    const newThumbWidth = Math.max((thumbWidthPercent / 100) * scrollbar.clientWidth, 60);
    setThumbWidth(newThumbWidth);
    
    // Calculate thumb position
    const maxScrollLeft = scrollWidth - clientWidth;
    const scrollPercent = maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0;
    const maxThumbLeft = scrollbar.clientWidth - newThumbWidth;
    setThumbLeft(scrollPercent * maxThumbLeft);
  };

  // Listen to scroll events
  useEffect(() => {
    const container = shortsScrollRef.current;
    if (!container) return;
    
    updateScrollbar();
    container.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);
    
    return () => {
      container.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []);

  // Handle scrollbar thumb drag
  const handleScrollbarMouseDown = (e) => {
    e.preventDefault();
    setIsScrollbarDragging(true);
    scrollbarDragStart.current = {
      x: e.clientX,
      scrollLeft: shortsScrollRef.current?.scrollLeft || 0
    };
    
    if (thumbRef.current) {
      thumbRef.current.classList.add('is-dragging');
    }
    if (scrollbarRef.current) {
      scrollbarRef.current.classList.add('is-dragging');
    }
  };

  // Handle track click to jump to position
  const handleTrackClick = (e) => {
    if (!shortsScrollRef.current || !scrollbarRef.current || isScrollbarDragging) return;
    
    const rect = scrollbarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const scrollbar = scrollbarRef.current;
    const container = shortsScrollRef.current;
    
    // Calculate scroll position from click
    const clickPercent = clickX / scrollbar.clientWidth;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    container.scrollLeft = clickPercent * maxScrollLeft;
  };

  // Global mouse move and up handlers for scrollbar dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isScrollbarDragging || !shortsScrollRef.current || !scrollbarRef.current) return;
      
      const deltaX = e.clientX - scrollbarDragStart.current.x;
      const scrollbar = scrollbarRef.current;
      const container = shortsScrollRef.current;
      
      // Convert thumb movement to scroll movement
      const scrollbarWidth = scrollbar.clientWidth - thumbWidth;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const scrollDelta = (deltaX / scrollbarWidth) * maxScrollLeft;
      
      container.scrollLeft = scrollbarDragStart.current.scrollLeft + scrollDelta;
    };

    const handleGlobalMouseUp = () => {
      if (isScrollbarDragging) {
        setIsScrollbarDragging(false);
        if (thumbRef.current) {
          thumbRef.current.classList.remove('is-dragging');
        }
        if (scrollbarRef.current) {
          scrollbarRef.current.classList.remove('is-dragging');
        }
      }
    };

    if (isScrollbarDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isScrollbarDragging, thumbWidth]);

  // Auto-scroll to latest message - only when user has sent messages (more than initial bot greeting)
  const hasUserInteracted = useRef(false);
  useEffect(() => {
    // Only scroll if user has interacted (sent at least one message)
    // Initial chatHistory has 1 message (bot greeting), so only scroll when > 1
    if (chatHistory.length > 1 && hasUserInteracted.current) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  // Smart response based on user message
  const generateResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    
    // Keywords that indicate a question about rules/how to play
    const ruleQuestions = ['how', 'what', 'when', 'can i', 'do i', 'rules', 'start', 'begin', 'cards', 'draw', 'skip', 'reverse', 'wild', 'uno', 'win', 'play', 'turn', 'color', 'number', 'match'];
    const isQuestion = ruleQuestions.some(q => lowerMsg.includes(q)) && (lowerMsg.includes('?') || lowerMsg.startsWith('how') || lowerMsg.startsWith('what') || lowerMsg.startsWith('when') || lowerMsg.startsWith('can') || lowerMsg.startsWith('do'));
    
    // Keywords that indicate a story/experience
    const storyIndicators = ['my', 'i ', 'we ', 'our', 'friend', 'family', 'played', 'game night', 'won', 'lost', 'hilarious', 'funny', 'crazy', 'epic', 'best', 'worst', 'remember', 'time', 'once', 'yesterday', 'last', 'always', 'never', 'love', 'hate', 'house rule', 'tradition'];
    const isStory = storyIndicators.some(s => lowerMsg.includes(s)) && !isQuestion;
    
    // Rule-based responses (from PDF/infographic knowledge)
    const ruleResponses = {
      start: "🎯 **Starting the Game:** Each player gets 7 cards. Flip the top card from the draw pile to start the discard pile. The player left of the dealer goes first!",
      cards: "🃏 **Card Types:** UNO has Number cards (0-9 in 4 colors), Action cards (Skip, Reverse, Draw Two), and Wild cards (Wild & Wild Draw Four). Match by color OR number!",
      draw: "📥 **Draw Two Card:** When played, the next player must draw 2 cards AND lose their turn. The card can only be played on a matching color or another Draw Two!",
      skip: "⏭️ **Skip Card:** This skips the next player's turn completely! Play it on a matching color or another Skip card. Timing is everything!",
      reverse: "🔄 **Reverse Card:** Changes the direction of play! In a 2-player game, it acts like a Skip. Strategic gold!",
      wild: "🌈 **Wild Cards:** Can be played ANY time! You choose the next color. Wild Draw Four makes the next player draw 4 cards—but you can only play it if you have no matching colors!",
      win: "🏆 **Winning:** Be first to play all your cards! Don't forget to yell 'UNO!' when you have ONE card left, or you'll draw 2 penalty cards if caught!",
      uno: "📢 **Saying UNO:** You MUST say 'UNO!' when playing your second-to-last card. If someone catches you forgetting before the next player goes, you draw 2 cards!",
      default: "🎮 **Quick Rules:** Match the top card by color OR number. Use action cards strategically. Say 'UNO!' at one card. First to empty their hand wins! Check out our infographic above for visual guides!"
    };
    
    // Story appreciation responses
    const storyResponses = [
      "🙌 OH WOW! That's AMAZING! Thank you SO much for sharing your UNO story! Stories like yours make this community incredible and help other players discover new ways to enjoy the game! Keep those epic moments coming! 🎴✨",
      "😂 LOVE THIS! Your story just made my day! Thanks for sharing—experiences like yours inspire other UNO fans and make game nights everywhere more fun! You're helping build an awesome community! 🌟",
      "🔥 LEGENDARY! This is exactly the kind of story we live for! Thank you for contributing to the UNO community—your experience might just inspire someone's next game night tradition! Keep playing, keep sharing! 🃏💫",
      "❤️ This is GOLD! Thank you for opening up and sharing your UNO memories with us! Every story helps other players feel connected and discover new ways to enjoy the game. You're what makes UNO special! 🎉",
      "🤩 INCREDIBLE! I'm saving this one! Thank you for sharing such a great moment—stories like yours remind everyone why UNO brings people together. The community is better because of players like you! 🏆"
    ];
    
    // Determine response type
    if (isStory) {
      return storyResponses[Math.floor(Math.random() * storyResponses.length)];
    } else if (isQuestion) {
      // Try to match specific rule question
      if (lowerMsg.includes('start') || lowerMsg.includes('begin') || lowerMsg.includes('deal')) {
        return ruleResponses.start;
      } else if (lowerMsg.includes('draw two') || lowerMsg.includes('+2')) {
        return ruleResponses.draw;
      } else if (lowerMsg.includes('skip')) {
        return ruleResponses.skip;
      } else if (lowerMsg.includes('reverse')) {
        return ruleResponses.reverse;
      } else if (lowerMsg.includes('wild')) {
        return ruleResponses.wild;
      } else if (lowerMsg.includes('win') || lowerMsg.includes('end')) {
        return ruleResponses.win;
      } else if (lowerMsg.includes('uno') || lowerMsg.includes('say') || lowerMsg.includes('yell')) {
        return ruleResponses.uno;
      } else if (lowerMsg.includes('card')) {
        return ruleResponses.cards;
      } else {
        return ruleResponses.default;
      }
    } else {
      // Encourage sharing
      const encourageResponses = [
        "Ooh, tell me more! 🤔 I'd love to hear about YOUR UNO experiences! Any favorite memories, house rules, or epic moments? Don't be shy—your stories help other players too!",
        "Thanks for reaching out! 🎴 Got any fun UNO stories to share? I love hearing about game nights, crazy comebacks, and house rules! (Or ask me anything about how to play!)",
        "Hey there! 👋 I'm all ears! Whether you want to share an UNO story or ask about rules, I'm here for it. What's on your mind?"
      ];
      return encourageResponses[Math.floor(Math.random() * encourageResponses.length)];
    }
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    // Mark that user has interacted - enables auto-scroll in chat
    hasUserInteracted.current = true;
    
    const userMsg = chatMessage;
    setChatHistory(prev => [...prev, { type: 'user', message: userMsg }]);
    setChatMessage('');
    setIsTyping(true);
    
    // Generate smart response
    setTimeout(() => {
      const response = generateResponse(userMsg);
      setChatHistory(prev => [...prev, { type: 'bot', message: response }]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  // Download PDF when Learn Rules is clicked
  const handleLearnRules = () => {
    const link = document.createElement('a');
    link.href = officialRulesPdf;
    link.download = 'UNO-Official-Rules.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show community modal
  const handleJoinCommunity = () => {
    setShowCommunityModal(true);
    setFormSubmitted(false);
  };

  // Handle community form submission
  const handleCommunitySubmit = (e) => {
    e.preventDefault();
    if (communityForm.name && communityForm.email) {
      // Simulate submission
      setFormSubmitted(true);
      setTimeout(() => {
        setShowCommunityModal(false);
        setCommunityForm({ name: '', email: '' });
      }, 2500);
    }
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setChatMessage(transcript);
      };
      
      recognition.start();
    } else {
      alert('Voice input is not supported in this browser. Try Chrome!');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="uno-experience">
      {/* Hero Section */}
      <section className="uno-hero">
        <div className="uno-hero-cards-bg">
          <div className="uno-floating-card uno-fc-1"></div>
          <div className="uno-floating-card uno-fc-2"></div>
          <div className="uno-floating-card uno-fc-3"></div>
          <div className="uno-floating-card uno-fc-4"></div>
        </div>
        
        <motion.div 
          className="uno-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="uno-hero-eyebrow" variants={fadeInDown}>
            <img src={unoCardIcon} alt="UNO card game icon" className="uno-eyebrow-icon-img" />
            <span>{t('uno.worldsNo1')}</span>
          </motion.div>
          
          <motion.h1 className="uno-hero-title" variants={fadeInUp}>
            {t('uno.everyGameNight')}
            <br />
            <span className="uno-title-accent">{t('uno.deservesToBe')}</span>
            <br />
            <span className="uno-title-wild">{t('uno.wild')}</span>
          </motion.h1>
          
          <motion.p className="uno-hero-desc" variants={fadeInUp}>
            {t('uno.heroDesc')}
          </motion.p>
          
          <motion.div className="uno-hero-ctas" variants={fadeInUp}>
            <motion.button 
              className="uno-cta-primary" 
              onClick={handleJoinCommunity}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(237, 28, 36, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('uno.joinCommunity')}
            </motion.button>
            <motion.button 
              className="uno-cta-secondary" 
              onClick={handleLearnRules}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('uno.learnRules')}
            </motion.button>
          </motion.div>

          {/* Stats Callouts */}
          <motion.div 
            className="uno-hero-stats"
            variants={staggerContainer}
          >
            <motion.div 
              className="uno-stat-card uno-stat-red"
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <span className="uno-stat-number">80+</span>
              <span className="uno-stat-label">COUNTRIES</span>
            </motion.div>
            <motion.div 
              className="uno-stat-card uno-stat-yellow"
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <span className="uno-stat-number">600+</span>
              <span className="uno-stat-label">EDITIONS</span>
            </motion.div>
            <motion.div 
              className="uno-stat-card uno-stat-green"
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <span className="uno-stat-number">2-10</span>
              <span className="uno-stat-label">PLAYERS</span>
            </motion.div>
            <motion.div 
              className="uno-stat-card uno-stat-blue"
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <span className="uno-stat-number">7+</span>
              <span className="uno-stat-label">AGES</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="uno-section uno-section-shorts">
        <div className="uno-section-container">
          <motion.div 
            className="uno-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.div className="uno-shorts-badge" variants={fadeInDown}>
              <span className="uno-shorts-icon">▶</span>
              <span>Shorts</span>
            </motion.div>
            <motion.h2 variants={fadeInUp}>UNO Moments</motion.h2>
            <motion.p variants={fadeInUp}>Quick clips of epic plays, funny moments, and UNO chaos from the community.</motion.p>
          </motion.div>
          
          <div className="uno-shorts-scroll-wrapper">
            <div 
              className="uno-shorts-scroll-container"
              ref={shortsScrollRef}
            >
              <div className="uno-shorts-track">
                {[
                  { id: 'uteejNCW02w', title: 'UNO Short 1' },
                  { id: 'VdNd86nxkN8', title: 'UNO Short 2' },
                  { id: '3Ss3tLAlH6I', title: 'UNO Short 3' },
                  { id: 's6acqgKT1JY', title: 'UNO Short 4' },
                  { id: 'HksIDO9Qjj0', title: 'UNO Short 5' },
                  { id: 'aWerO3ClGBs', title: 'UNO Short 6' },
                  { id: '7v5s-iD12U8', title: 'UNO Short 7' },
                  { id: 'mgJNbcY8H1w', title: 'UNO Short 8' },
                  { id: 'XpHbrpviNrA', title: 'UNO Short 9' },
                ].map((video) => (
                  <div className="uno-short-card" key={video.id}>
                    {!loadedVideos[video.id] && (
                      <div className="video-loading-overlay">
                        <div className="video-spinner"></div>
                      </div>
                    )}
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => handleVideoLoad(video.id)}
                    ></iframe>
                  </div>
                ))}
                {[
                  { id: 'F6m0BpJaMrw', title: 'UNO Short 10' },
                  { id: 'Jw88cCvIEEE', title: 'UNO Short 11' },
                  { id: 'BcD2NmfmGz8', title: 'UNO Short 12' },
                  { id: 'Y4j9dqwxXS8', title: 'UNO Short 13' },
                  { id: 'P777c4eX7s8', title: 'UNO Short 14' },
                ].map((video) => (
                  <div className="uno-short-card" key={video.id}>
                    {!loadedVideos[video.id] && (
                      <div className="video-loading-overlay">
                        <div className="video-spinner"></div>
                      </div>
                    )}
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => handleVideoLoad(video.id)}
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Custom Scrollbar */}
            <div 
              className="uno-custom-scrollbar"
              ref={scrollbarRef}
              onClick={handleTrackClick}
            >
              <div 
                className="uno-scrollbar-thumb"
                ref={thumbRef}
                style={{ 
                  width: `${thumbWidth}px`, 
                  left: `${thumbLeft}px` 
                }}
                onMouseDown={handleScrollbarMouseDown}
              />
            </div>
          </div>
          
          <p className="uno-shorts-hint">
            ← Scroll to see more shorts →
          </p>
        </div>
      </section>

      {/* Intense Game Video Section */}
      <section className="uno-section uno-section-intense">
        <div className="uno-intense-texture"></div>
        <div className="uno-section-container">
          <motion.div 
            className="uno-intense-bento"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text Side */}
            <motion.div 
              className="uno-intense-text-side"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="uno-intense-badge"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <span>🔥</span>
                <span>Real Talk</span>
              </motion.div>
              
              <h2 className="uno-intense-title">
                <motion.span 
                  className="uno-intense-word uno-word-the"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  The
                </motion.span>
                <motion.span 
                  className="uno-intense-word uno-word-game"
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  Game
                </motion.span>
                <motion.span 
                  className="uno-intense-word uno-word-can"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Can Get
                </motion.span>
                <motion.span 
                  className="uno-intense-word uno-word-intense"
                  initial={{ opacity: 0, scale: 1.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
                >
                  INTENSE
                </motion.span>
              </h2>
              
              <motion.p 
                className="uno-intense-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="uno-intense-but">but don't worry...</span>
                <motion.span 
                  className="uno-intense-safe"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  this is a <span className="uno-safe-highlight">safe space</span> 🤗
                </motion.span>
              </motion.p>
              
              <motion.div 
                className="uno-intense-emojis"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <img src={unoCardIcon} alt="UNO card" className="uno-card-float" />
                <img src={unoCardIcon} alt="UNO card" className="uno-card-float" />
                <img src={unoCardIcon} alt="UNO card" className="uno-card-float" />
                <img src={unoCardIcon} alt="UNO card" className="uno-card-float" />
              </motion.div>
            </motion.div>
            
            {/* Video Side */}
            <motion.div 
              className="uno-intense-video-side"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="uno-intense-video-wrapper" ref={intenseVideoWrapperRef}>
                {!intenseVideoLoaded && (
                  <div className="uno-video-loading-overlay">
                    <div className="uno-video-spinner"></div>
                    <span>Loading the drama...</span>
                  </div>
                )}
                <video
                  ref={intenseVideoRef}
                  className="uno-intense-video"
                  src={intenseGameVideo}
                  controls={intenseVideoState === 'normal'}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedData={() => setIntenseVideoLoaded(true)}
                />
                <div className="uno-video-frame-deco uno-frame-tl"></div>
                <div className="uno-video-frame-deco uno-frame-tr"></div>
                <div className="uno-video-frame-deco uno-frame-bl"></div>
                <div className="uno-video-frame-deco uno-frame-br"></div>
              </div>
              
              {/* Control Buttons Below Video */}
              {intenseVideoState !== 'normal' && intenseVideoLoaded && (
                <button 
                  className="uno-video-control-btn"
                  onClick={handleIntenseVideoClick}
                  aria-label={intenseVideoState === 'muted' ? 'Unmute video' : 'Restart video'}
                >
                  {intenseVideoState === 'muted' ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="uno-control-icon">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                      <span>Tap for Sound</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="uno-control-icon">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span>Replay from Start</span>
                    </>
                  )}
                </button>
              )}
              
              <p className="uno-intense-caption">*Viewer discretion advised: UNO chaos inside.*</p>
            </motion.div>
          </motion.div>
          
          {/* Playful Quote Section with Typewriter Effect */}
          <FamilyQuoteTypewriter />
        </div>
      </section>

      {/* Infographic & Chatbot Section */}
      <section className="uno-section uno-section-learn">
        <div className="uno-section-container">
          {/* Infographic */}
          <motion.div 
            className="uno-infographic-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <div className="uno-infographic-badge">
              <span>📖</span>
              <span>Quick Guide</span>
            </div>
            <div 
              className="uno-infographic-clickable"
              onClick={() => setExpandedInfographic({ src: infoGraphic, alt: 'How to Play UNO - Infographic' })}
            >
              <motion.img 
                src={infoGraphic} 
                alt="How to Play UNO - Infographic" 
                className="uno-infographic-img"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div className="uno-expand-hint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
                <span>Click to expand</span>
              </div>
            </div>
          </motion.div>

          {/* Chatbot */}
          <motion.div 
            className="uno-chatbot-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="uno-chatbot-header">
              <div className="uno-chatbot-avatar">
                <img src={unoCardIcon} alt="UNO AI chatbot avatar" className="uno-chatbot-avatar-img" />
                <div className="uno-chatbot-pulse"></div>
              </div>
              <div className="uno-chatbot-title">
                <h3>Forget the rules… how do you play?</h3>
                <p>We'd love to hear from you!</p>
              </div>
              <div className="uno-chatbot-status">
                <span className="uno-status-dot"></span>
                <span>Online</span>
              </div>
            </div>

            <div className="uno-chatbot-messages">
              {chatHistory.map((chat, index) => (
                <div 
                  key={index} 
                  className={`uno-chat-bubble ${chat.type === 'user' ? 'uno-chat-user' : 'uno-chat-bot'}`}
                >
                  {chat.type === 'bot' && (
                    <div className="uno-chat-avatar">🎴</div>
                  )}
                  <div className="uno-chat-content">
                    <p>{chat.message}</p>
                  </div>
                  {chat.type === 'user' && (
                    <div className="uno-chat-avatar uno-chat-avatar-user">👤</div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="uno-chat-bubble uno-chat-bot">
                  <div className="uno-chat-avatar">🎴</div>
                  <div className="uno-chat-content uno-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="uno-chatbot-input-area">
              <div className="uno-quick-prompts">
                <button onClick={() => setChatMessage("Let me tell you about my craziest UNO moment...")}>
                  🎉 Share my story
                </button>
                <button onClick={() => setChatMessage("Our family has this house rule where...")}>
                  🏠 House rules
                </button>
                <button onClick={() => setChatMessage("How do I play UNO?")}>
                  🎯 How to play?
                </button>
                <button onClick={() => setChatMessage("What's your best UNO strategy tip?")}>
                  💡 Pro tips?
                </button>
              </div>
              
              <div className="uno-chatbot-input-wrapper">
                <button 
                  className={`uno-voice-btn ${isListening ? 'listening' : ''}`}
                  onClick={handleVoiceInput}
                  title="Speak your question"
                >
                  {isListening ? (
                    <span className="uno-voice-waves">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  ) : (
                    <span>🎤</span>
                  )}
                </button>
                
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about UNO..."
                  className="uno-chatbot-input"
                />
                
                <button 
                  className="uno-send-btn"
                  onClick={handleSendMessage}
                  disabled={!chatMessage.trim()}
                >
                  <span>🚀</span>
                </button>
              </div>
              
              <p className="uno-chatbot-hint">
                💡 Tip: Try voice input for hands-free questions!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Players Section */}
      <section className="uno-section uno-section-global-players">
        <div className="uno-floating-flags">
          <span>🇺🇸</span><span>🇯🇵</span><span>🇧🇷</span><span>🇮🇹</span><span>🇫🇷</span>
          <span>🇰🇷</span><span>🇲🇽</span><span>🇨🇦</span><span>🇩🇪</span><span>🇮🇳</span>
          <span>🇦🇺</span><span>🇪🇸</span><span>🇬🇧</span><span>🇨🇳</span><span>🇿🇦</span>
          <span>🇰🇪</span><span>🇯🇲</span><span>🇳🇬</span><span>🇵🇰</span><span>🇷🇼</span>
          <span>🇪🇬</span><span>🇺🇦</span><span>🇬🇭</span><span>🇹🇿</span><span>🇦🇷</span>
        </div>
        <div className="uno-section-container">
          <motion.div 
            className="uno-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>Players Around the World</motion.h2>
            <motion.p variants={fadeInUp}>From Tokyo to Rio, UNO speaks every language.</motion.p>
          </motion.div>

          <motion.div 
            className="uno-bento-grid uno-bento-grid-reverse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="uno-bento-stack" variants={fadeInLeft}>
              <motion.div 
                className="uno-bento-small uno-player-card uno-card-bg-blue"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <img src={imgBrazil} alt="Players in Brazil" className="uno-player-img" />
                <div className="uno-location-pill uno-pill-yellow">
                  <span className="uno-pin">📍</span> Rio de Janeiro, Brazil
                </div>
              </motion.div>
              
              <motion.div 
                className="uno-bento-small uno-player-card uno-card-bg-yellow"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <img src={imgRome} alt="Players in Rome" className="uno-player-img" />
                <div className="uno-location-pill uno-pill-green">
                  <span className="uno-pin">📍</span> Rome, Italy
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="uno-bento-main uno-player-card uno-card-bg-green"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <img src={imgKorea} alt="Players in Seoul" className="uno-player-img" />
              <div className="uno-location-pill uno-pill-red">
                <span className="uno-pin">📍</span> Seoul, South Korea
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Persona Section - Meet Teddy */}
      <section className="uno-section uno-section-persona-new">
        {/* Floating UNO Cards Background */}
        <div className="uno-persona-bg">
          <div className="uno-floating-card-bg uno-card-red"></div>
          <div className="uno-floating-card-bg uno-card-yellow"></div>
          <div className="uno-floating-card-bg uno-card-green"></div>
          <div className="uno-floating-card-bg uno-card-blue"></div>
        </div>
        
        <div className="uno-section-container">
          <motion.div 
            className="uno-persona-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.div className="uno-persona-badge-new" variants={fadeInDown}>
              <img src={unoCardIcon} alt="UNO Card" className="uno-badge-card-icon" />
              <span>PLAYER SPOTLIGHT</span>
            </motion.div>
            <motion.h2 className="uno-persona-title-new" variants={fadeInUp}>
              Meet <span className="uno-title-gradient">Teddy</span>
            </motion.h2>
          </motion.div>

          <div className="uno-persona-layout">
            {/* Main Player Card */}
            <motion.div 
              className="uno-player-card-main"
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Card Color Strip */}
              <div className="uno-card-stripe">
                <span className="uno-stripe-red"></span>
                <span className="uno-stripe-yellow"></span>
                <span className="uno-stripe-green"></span>
                <span className="uno-stripe-blue"></span>
              </div>
              
              <div className="uno-player-card-inner">
                <div className="uno-player-image-container">
                  <motion.img 
                    src={teddyImage} 
                    alt="Teddy - UNO Player"
                    className="uno-player-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                  <div className="uno-player-age-badge">
                    <span className="uno-age-number">10</span>
                    <span className="uno-age-label">yrs old</span>
                  </div>
                </div>
                
                <div className="uno-player-info">
                  <h3 className="uno-player-name-large">Teddy</h3>
                  <p className="uno-player-location">
                    <span className="uno-location-icon">📍</span> Charlotte, NC
                  </p>
                  <p className="uno-player-tagline">
                    "I'm energetic, friendly, and always ready to play and have a good time!"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats & Details Cards */}
            <div className="uno-persona-details-grid">
              {/* Motivators Card */}
              <motion.div 
                className="uno-detail-card uno-card-motivators"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="uno-detail-header uno-header-red">
                  <span className="uno-detail-icon">🔥</span>
                  <h4>What Drives Me</h4>
                </div>
                <div className="uno-motivator-list">
                  <motion.div 
                    className="uno-motivator-item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="uno-motivator-emoji">🎉</span>
                    <span>Having Fun</span>
                  </motion.div>
                  <motion.div 
                    className="uno-motivator-item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="uno-motivator-emoji">🏆</span>
                    <span>Competition</span>
                  </motion.div>
                  <motion.div 
                    className="uno-motivator-item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="uno-motivator-emoji">👫</span>
                    <span>Playing with Friends</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Favorite Brands Card */}
              <motion.div 
                className="uno-detail-card uno-card-brands"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="uno-detail-header uno-header-blue">
                  <span className="uno-detail-icon">⭐</span>
                  <h4>Favorite Brands</h4>
                </div>
                <div className="uno-brands-grid">
                  <div className="uno-brand-tag uno-brand-uno">🎴 UNO</div>
                  <div className="uno-brand-tag uno-brand-mrbeast">🐯 MrBeast</div>
                  <div className="uno-brand-tag uno-brand-roblox">🎮 Roblox</div>
                  <div className="uno-brand-tag uno-brand-nintendo">🕹️ Nintendo</div>
                </div>
              </motion.div>

              {/* Fun Facts Card */}
              <motion.div 
                className="uno-detail-card uno-card-facts"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="uno-detail-header uno-header-green">
                  <span className="uno-detail-icon">💫</span>
                  <h4>About Teddy</h4>
                </div>
                <div className="uno-facts-content">
                  <div className="uno-fact-item">
                    <span className="uno-fact-label">Family</span>
                    <span className="uno-fact-value">2 sisters, Mom & Dad</span>
                  </div>
                  <div className="uno-fact-item">
                    <span className="uno-fact-label">Personality</span>
                    <span className="uno-fact-value">Curious, Strategic, Easily Excited!</span>
                  </div>
                  <div className="uno-fact-item">
                    <span className="uno-fact-label">Loves</span>
                    <span className="uno-fact-value">Games, Fun Videos, Learning New Things</span>
                  </div>
                </div>
              </motion.div>

              {/* Quote Card */}
              <motion.div 
                className="uno-detail-card uno-card-quote"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="uno-detail-header uno-header-yellow">
                  <span className="uno-detail-icon">💬</span>
                  <h4>Teddy Says</h4>
                </div>
                <blockquote className="uno-player-quote">
                  "I love playing UNO with my friends and family. My favorite move? Saving my Wild Draw 4 until someone's about to win! 😈"
                </blockquote>
              </motion.div>
            </div>
          </div>

          {/* Game Night Banner */}
          <motion.div 
            className="uno-game-night-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="uno-banner-content">
              <p className="uno-banner-text">
                Every Friday night is <strong>UNO night</strong> in Teddy's house!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* House Rules Widget Section */}
      <section className="uno-section uno-section-widget">
        <div className="uno-section-container">
          <motion.div 
            className="uno-widget-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>{t('uno.createPerfect')}</motion.h2>
            <motion.p variants={fadeInUp}>
              {t('uno.standardRules')}
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <UnoHouseRulesWidget />
          </motion.div>
        </div>
      </section>

      {/* Meetup Countdown Section */}
      <section className="uno-section uno-section-meetup" id="upcoming-events">
        <div className="uno-section-container">
          <motion.div 
            className="uno-meetup-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="uno-meetup-eyebrow">NEXT UNO COMMUNITY MEETUP</span>
          </motion.div>
          
          <motion.div 
            className="uno-countdown"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="uno-countdown-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="uno-countdown-number">{String(countdownTime.days).padStart(2, '0')}</span>
              <span className="uno-countdown-label">DAYS</span>
            </motion.div>
            <span className="uno-countdown-separator">:</span>
            <motion.div 
              className="uno-countdown-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="uno-countdown-number">{String(countdownTime.hours).padStart(2, '0')}</span>
              <span className="uno-countdown-label">HOURS</span>
            </motion.div>
            <span className="uno-countdown-separator">:</span>
            <motion.div 
              className="uno-countdown-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="uno-countdown-number">{String(countdownTime.minutes).padStart(2, '0')}</span>
              <span className="uno-countdown-label">MINUTES</span>
            </motion.div>
            <span className="uno-countdown-separator">:</span>
            <motion.div 
              className="uno-countdown-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="uno-countdown-number">{String(countdownTime.seconds).padStart(2, '0')}</span>
              <span className="uno-countdown-label">SECONDS</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="uno-meetup-cities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.a 
              href="https://www.meetup.com/uno-game-night-los-angeles/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="uno-city-card"
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <span className="uno-city-icon">📍</span>
              <div className="uno-city-info">
                <h4>Los Angeles, CA</h4>
                <span>Dec 18 @ 7:00 PM</span>
              </div>
              <span className="uno-city-badge">Meetup</span>
            </motion.a>
            <motion.a 
              href="https://www.eventbrite.com/e/uno-championship-night-nyc-tickets" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="uno-city-card"
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <span className="uno-city-icon">📍</span>
              <div className="uno-city-info">
                <h4>New York City, NY</h4>
                <span>Dec 20 @ 6:30 PM</span>
              </div>
              <span className="uno-city-badge uno-city-badge-eb">Eventbrite</span>
            </motion.a>
            <motion.a 
              href="https://www.meetup.com/chicago-uno-players/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="uno-city-card"
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <span className="uno-city-icon">📍</span>
              <div className="uno-city-info">
                <h4>Chicago, IL</h4>
                <span>Dec 22 @ 8:00 PM</span>
              </div>
              <span className="uno-city-badge">Meetup</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Video Content Section */}
      <section className="uno-section uno-section-videos">
        <div className="uno-section-container">
          <motion.div 
            className="uno-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>Community Highlights</motion.h2>
            <motion.p variants={fadeInUp}>Watch how players around the world are making UNO their own.</motion.p>
          </motion.div>
          
          <motion.div 
            className="uno-bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="uno-bento-main uno-video-card uno-card-bg-red"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {!loadedVideos['gOhDPwxzKFg'] && (
                <div className="video-loading-overlay">
                  <div className="video-spinner"></div>
                </div>
              )}
              <iframe
                src="https://www.youtube.com/embed/gOhDPwxzKFg"
                title="Sidemen UNO Showdown"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => handleVideoLoad('gOhDPwxzKFg')}
              ></iframe>
              <div className="uno-video-pill uno-pill-white">
                <span>🏆</span> Tournament
              </div>
            </motion.div>
            
            <motion.div className="uno-bento-stack" variants={fadeInUp}>
              <motion.div 
                className="uno-bento-small uno-video-card uno-card-bg-blue"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {!loadedVideos['q0bNRPVgNvE'] && (
                  <div className="video-loading-overlay">
                    <div className="video-spinner"></div>
                  </div>
                )}
                <iframe
                  src="https://www.youtube.com/embed/q0bNRPVgNvE"
                  title="UNO Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => handleVideoLoad('q0bNRPVgNvE')}
                ></iframe>
                <div className="uno-video-pill uno-pill-white">
                  <span>🎰</span> Vegas
              </div>
            </motion.div>
            
              <motion.div 
                className="uno-bento-small uno-video-card uno-card-bg-yellow"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {!loadedVideos['NFnXep4pGOk'] && (
                  <div className="video-loading-overlay">
                    <div className="video-spinner"></div>
                  </div>
                )}
                <iframe
                  src="https://www.youtube.com/embed/NFnXep4pGOk"
                  title="Family Game Night"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => handleVideoLoad('NFnXep4pGOk')}
                ></iframe>
                <div className="uno-video-pill uno-pill-dark">
                  <span>🎲</span> Game Night
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="uno-video-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            📺 Videos curated from YouTube creators 
          </motion.p>
        </div>
      </section>

      {/* Community Modal */}
      <AnimatePresence>
        {showCommunityModal && (
          <motion.div 
            className="uno-modal-overlay" 
            onClick={() => setShowCommunityModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="uno-modal" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <button className="uno-modal-close" onClick={() => setShowCommunityModal(false)}>×</button>
              
              {!formSubmitted ? (
                <>
                  <div className="uno-modal-header">
                    <motion.img 
                      src={unoCardIcon} 
                      alt="UNO" 
                      className="uno-modal-icon"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                    <h2>Join the UNO Community!</h2>
                    <p>Get exclusive updates, tips, and be first to know about new editions!</p>
                  </div>
                  
                  <form onSubmit={handleCommunitySubmit} className="uno-modal-form">
                    <div className="uno-form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="What should we call you?"
                        value={communityForm.name}
                        onChange={(e) => setCommunityForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="uno-form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        value={communityForm.email}
                        onChange={(e) => setCommunityForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <motion.button 
                      type="submit" 
                      className="uno-modal-submit"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(237, 28, 36, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🎴 Join Now
                    </motion.button>
                  </form>
                  
                  <p className="uno-modal-privacy">
                    We respect your privacy. No spam, ever!
                  </p>
                </>
              ) : (
                <motion.div 
                  className="uno-modal-success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.span 
                    className="uno-success-icon"
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    🎉
                  </motion.span>
                  <h2>Welcome to the Family!</h2>
                  <p>Thanks for joining, {communityForm.name}! Check your inbox for a welcome surprise.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Infographic Modal */}
      <AnimatePresence>
        {expandedInfographic && (
          <motion.div
            className="uno-infographic-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedInfographic(null)}
          >
            <motion.div
              className="uno-infographic-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="uno-infographic-close"
                onClick={() => setExpandedInfographic(null)}
                aria-label="Close expanded image"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img 
                src={expandedInfographic.src} 
                alt={expandedInfographic.alt}
                className="uno-infographic-expanded"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FinalWebsiteUnoExperience;
