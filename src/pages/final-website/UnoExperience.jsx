import React, { useState, useRef, useEffect } from 'react';
import UnoHouseRulesWidget from '../../components/final-website/UnoHouseRulesWidget';
import { useLanguage } from '../../context/LanguageContext';
import './UnoExperience.css';
import infoGraphic from '../../assets/uno-content/info-graphic.webp';
import officialRulesPdf from '../../assets/uno-content/official-rules.pdf';
import unoCardIcon from '../../assets/icons/Uno-card.webp';
import imgKorea from '../../assets/uno-content/Asia.webp';
import imgBrazil from '../../assets/uno-content/Brazil.webp';
import imgRome from '../../assets/uno-content/Rome.webp';

const FinalWebsiteUnoExperience = () => {
  const { t } = useLanguage();
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

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        
        <div className="uno-hero-content">
          <div className="uno-hero-eyebrow">
            <img src={unoCardIcon} alt="UNO" className="uno-eyebrow-icon-img" />
            <span>{t('uno.worldsNo1')}</span>
          </div>
          
          <h1 className="uno-hero-title">
            {t('uno.everyGameNight')}
            <br />
            <span className="uno-title-accent">{t('uno.deservesToBe')}</span>
            <br />
            <span className="uno-title-wild">{t('uno.wild')}</span>
          </h1>
          
          <p className="uno-hero-desc">
            {t('uno.heroDesc')}
          </p>
          
          <div className="uno-hero-ctas">
            <button className="uno-cta-primary" onClick={handleJoinCommunity}>{t('uno.joinCommunity')}</button>
            <button className="uno-cta-secondary" onClick={handleLearnRules}>{t('uno.learnRules')}</button>
          </div>

          {/* Stats Callouts */}
          <div className="uno-hero-stats">
            <div className="uno-stat-card uno-stat-red">
              <span className="uno-stat-number">80+</span>
              <span className="uno-stat-label">COUNTRIES</span>
            </div>
            <div className="uno-stat-card uno-stat-yellow">
              <span className="uno-stat-number">600+</span>
              <span className="uno-stat-label">EDITIONS</span>
            </div>
            <div className="uno-stat-card uno-stat-green">
              <span className="uno-stat-number">2-10</span>
              <span className="uno-stat-label">PLAYERS</span>
            </div>
            <div className="uno-stat-card uno-stat-blue">
              <span className="uno-stat-number">7+</span>
              <span className="uno-stat-label">AGES</span>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="uno-section uno-section-shorts">
        <div className="uno-section-container">
          <div className="uno-section-header">
            <div className="uno-shorts-badge">
              <span className="uno-shorts-icon">▶</span>
              <span>Shorts</span>
            </div>
            <h2>UNO Moments</h2>
            <p>Quick clips of epic plays, funny moments, and UNO chaos from the community.</p>
          </div>
          
          <div className="uno-shorts-scroll-container">
            <div className="uno-shorts-track">
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/uteejNCW02w"
                  title="UNO Short 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/VdNd86nxkN8"
                  title="UNO Short 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/3Ss3tLAlH6I"
                  title="UNO Short 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/s6acqgKT1JY"
                  title="UNO Short 4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/HksIDO9Qjj0"
                  title="UNO Short 5"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/aWerO3ClGBs"
                  title="UNO Short 6"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/7v5s-iD12U8"
                  title="UNO Short 7"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/mgJNbcY8H1w"
                  title="UNO Short 8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/XpHbrpviNrA"
                  title="UNO Short 9"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/F6m0BpJaMrw"
                  title="UNO Short 10"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="uno-short-card">
                <iframe
                  src="https://www.youtube.com/embed/Jw88cCvIEEE"
                  title="UNO Short 11"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          <p className="uno-shorts-hint">
            ← Scroll to see more shorts →
          </p>
        </div>
      </section>

      {/* Infographic & Chatbot Section */}
      <section className="uno-section uno-section-learn">
        <div className="uno-section-container">
          {/* Infographic */}
          <div className="uno-infographic-wrapper">
            <div className="uno-infographic-badge">
              <span>📖</span>
              <span>Quick Guide</span>
            </div>
            <img 
              src={infoGraphic} 
              alt="How to Play UNO - Infographic" 
              className="uno-infographic-img"
            />
          </div>

          {/* Chatbot */}
          <div className="uno-chatbot-container">
            <div className="uno-chatbot-header">
              <div className="uno-chatbot-avatar">
                <img src={unoCardIcon} alt="UNO" className="uno-chatbot-avatar-img" />
                <div className="uno-chatbot-pulse"></div>
              </div>
              <div className="uno-chatbot-title">
                <h3>REVERSE! Tell US how YOU play UNO.</h3>
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
          </div>
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
          <div className="uno-section-header">
            <h2>Players Around the World</h2>
            <p>From Tokyo to Rio, UNO speaks every language.</p>
          </div>

          <div className="uno-bento-grid uno-bento-grid-reverse">
            <div className="uno-bento-stack">
              <div className="uno-bento-small uno-player-card uno-card-bg-blue">
                <img src={imgBrazil} alt="Players in Brazil" className="uno-player-img" />
                <div className="uno-location-pill uno-pill-yellow">
                  <span className="uno-pin">📍</span> Rio de Janeiro, Brazil
                </div>
              </div>
              
              <div className="uno-bento-small uno-player-card uno-card-bg-yellow">
                <img src={imgRome} alt="Players in Rome" className="uno-player-img" />
                <div className="uno-location-pill uno-pill-green">
                  <span className="uno-pin">📍</span> Rome, Italy
                </div>
              </div>
            </div>

            <div className="uno-bento-main uno-player-card uno-card-bg-green">
              <img src={imgKorea} alt="Players in Seoul" className="uno-player-img" />
              <div className="uno-location-pill uno-pill-red">
                <span className="uno-pin">📍</span> Seoul, South Korea
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Section */}
      <section className="uno-section uno-section-persona">
        <div className="uno-section-container">
          <div className="uno-persona-card">
            <div className="uno-persona-avatar">
              <span>T</span>
            </div>
            <div className="uno-persona-content">
              <span className="uno-persona-label">Meet Our Player</span>
              <h3 className="uno-persona-name">Teddy, 10</h3>
              <p className="uno-persona-bio">
                "I love playing UNO with my family every Friday night! My favorite 
                move is saving my Wild Draw 4 until someone's about to win. 
                The look on their face is SO funny!"
              </p>
              <div className="uno-persona-interests">
                <span className="uno-interest">🎮 Roblox</span>
                <span className="uno-interest">🎬 MrBeast</span>
                <span className="uno-interest">🎯 Challenges</span>
              </div>
            </div>
          </div>
          
          <div className="uno-persona-quote">
            <blockquote>
              "UNO isn't just a game—it's where memories happen."
            </blockquote>
          </div>
        </div>
      </section>

      {/* House Rules Widget Section */}
      <section className="uno-section uno-section-widget">
        <div className="uno-section-container">
          <div className="uno-widget-intro">
            <h2>{t('uno.createPerfect')}</h2>
            <p>
              {t('uno.standardRules')}
            </p>
          </div>
          
          <UnoHouseRulesWidget />
        </div>
      </section>

      {/* Meetup Countdown Section */}
      <section className="uno-section uno-section-meetup">
        <div className="uno-section-container">
          <div className="uno-meetup-header">
            <span className="uno-meetup-eyebrow">NEXT UNO COMMUNITY MEETUP</span>
          </div>
          
          <div className="uno-countdown">
            <div className="uno-countdown-item">
              <span className="uno-countdown-number">12</span>
              <span className="uno-countdown-label">DAYS</span>
            </div>
            <span className="uno-countdown-separator">:</span>
            <div className="uno-countdown-item">
              <span className="uno-countdown-number">08</span>
              <span className="uno-countdown-label">HOURS</span>
            </div>
            <span className="uno-countdown-separator">:</span>
            <div className="uno-countdown-item">
              <span className="uno-countdown-number">45</span>
              <span className="uno-countdown-label">MINUTES</span>
            </div>
            <span className="uno-countdown-separator">:</span>
            <div className="uno-countdown-item">
              <span className="uno-countdown-number">21</span>
              <span className="uno-countdown-label">SECONDS</span>
            </div>
          </div>
          
          <div className="uno-meetup-cities">
            <a href="https://www.meetup.com/uno-game-night-los-angeles/" target="_blank" rel="noopener noreferrer" className="uno-city-card">
              <span className="uno-city-icon">📍</span>
              <div className="uno-city-info">
                <h4>Los Angeles, CA</h4>
                <span>Dec 18 @ 7:00 PM</span>
              </div>
              <span className="uno-city-badge">Meetup</span>
            </a>
            <a href="https://www.eventbrite.com/e/uno-championship-night-nyc-tickets" target="_blank" rel="noopener noreferrer" className="uno-city-card">
              <span className="uno-city-icon">📍</span>
              <div className="uno-city-info">
                <h4>New York City, NY</h4>
                <span>Dec 20 @ 6:30 PM</span>
              </div>
              <span className="uno-city-badge uno-city-badge-eb">Eventbrite</span>
            </a>
            <a href="https://www.meetup.com/chicago-uno-players/" target="_blank" rel="noopener noreferrer" className="uno-city-card">
              <span className="uno-city-icon">📍</span>
              <div className="uno-city-info">
                <h4>Chicago, IL</h4>
                <span>Dec 22 @ 8:00 PM</span>
              </div>
              <span className="uno-city-badge">Meetup</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Content Section */}
      <section className="uno-section uno-section-videos">
        <div className="uno-section-container">
          <div className="uno-section-header">
            <h2>Community Highlights</h2>
            <p>Watch how players around the world are making UNO their own.</p>
          </div>
          
          <div className="uno-bento-grid">
            <div className="uno-bento-main uno-video-card uno-card-bg-red">
              <iframe
                src="https://www.youtube.com/embed/gOhDPwxzKFg"
                title="Sidemen UNO Showdown"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="uno-video-pill uno-pill-white">
                <span>🏆</span> Tournament
              </div>
            </div>
            
            <div className="uno-bento-stack">
              <div className="uno-bento-small uno-video-card uno-card-bg-blue">
                <iframe
                  src="https://www.youtube.com/embed/q0bNRPVgNvE"
                  title="UNO Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="uno-video-pill uno-pill-white">
                  <span>🎰</span> Vegas
                </div>
              </div>
              
              <div className="uno-bento-small uno-video-card uno-card-bg-yellow">
                <iframe
                  src="https://www.youtube.com/embed/NFnXep4pGOk"
                  title="Family Game Night"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="uno-video-pill uno-pill-dark">
                  <span>🎲</span> Game Night
                </div>
              </div>
            </div>
          </div>
          
          <p className="uno-video-note">
            📺 Videos curated from YouTube creators 
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-content">
          <div className="landing-footer-brand">
            <span className="landing-footer-logo">{t('footer.mattelAiLab')}</span>
            <p>{t('footer.empowering')}</p>
          </div>
          <div className="landing-footer-note">
            <p>{t('footer.educationalPrototype')}</p>
          </div>
        </div>
      </footer>

      {/* Community Modal */}
      {showCommunityModal && (
        <div className="uno-modal-overlay" onClick={() => setShowCommunityModal(false)}>
          <div className="uno-modal" onClick={(e) => e.stopPropagation()}>
            <button className="uno-modal-close" onClick={() => setShowCommunityModal(false)}>×</button>
            
            {!formSubmitted ? (
              <>
                <div className="uno-modal-header">
                  <img src={unoCardIcon} alt="UNO" className="uno-modal-icon" />
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
                  
                  <button type="submit" className="uno-modal-submit">
                    🎴 Join Now
                  </button>
                </form>
                
                <p className="uno-modal-privacy">
                  We respect your privacy. No spam, ever!
                </p>
              </>
            ) : (
              <div className="uno-modal-success">
                <span className="uno-success-icon">🎉</span>
                <h2>Welcome to the Family!</h2>
                <p>Thanks for joining, {communityForm.name}! Check your inbox for a welcome surprise.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalWebsiteUnoExperience;
