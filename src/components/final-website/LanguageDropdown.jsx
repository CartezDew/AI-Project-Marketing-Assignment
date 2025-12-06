import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Search, Check } from 'lucide-react';
import { useLanguage, languages } from '../../context/LanguageContext';
import './LanguageDropdown.css';

const LanguageDropdown = () => {
  const { currentLanguage, setCurrentLanguage, t, getCurrentLanguageInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const currentLangInfo = getCurrentLanguageInfo();

  // Filter languages based on search query (maintains popularity order)
  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="lang-dropdown" ref={dropdownRef}>
      {/* Trigger Button */}
      <button 
        className={`lang-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('nav.selectLanguage')}
      >
        <span className="lang-trigger-flag">{currentLangInfo.flag}</span>
        <span className="lang-trigger-code">{currentLangInfo.code.toUpperCase()}</span>
        <ChevronDown 
          size={14} 
          className={`lang-trigger-arrow ${isOpen ? 'rotated' : ''}`} 
        />
      </button>

      {/* Dropdown Panel */}
      <div className={`lang-panel ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="lang-panel-header">
          <div className="lang-panel-title">
            <Globe size={18} />
            <span>{t('nav.selectLanguage')}</span>
          </div>
          <div className="lang-panel-globe">
            <div className="lang-globe-animation">
              <div className="lang-globe-ring lang-globe-ring-1"></div>
              <div className="lang-globe-ring lang-globe-ring-2"></div>
              <div className="lang-globe-ring lang-globe-ring-3"></div>
              <div className="lang-globe-dot"></div>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="lang-search-wrapper">
          <Search size={16} className="lang-search-icon" />
          <input
            ref={searchInputRef}
            type="text"
            className="lang-search-input"
            placeholder="Search languages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="lang-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {/* Languages List - Ordered by most commonly spoken */}
        <div className="lang-list-container">
          {filteredLanguages.length === 0 ? (
            <div className="lang-no-results">
              <span>🔍</span>
              <p>No languages found</p>
            </div>
          ) : (
            <div className="lang-list">
              {filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  className={`lang-option ${currentLanguage === lang.code ? 'selected' : ''}`}
                  onClick={() => handleSelectLanguage(lang.code)}
                  role="option"
                  aria-selected={currentLanguage === lang.code}
                >
                  <span className="lang-option-flag">{lang.flag}</span>
                  <div className="lang-option-info">
                    <span className="lang-option-name">{lang.name}</span>
                    <span className="lang-option-region">{lang.region}</span>
                  </div>
                  {currentLanguage === lang.code && (
                    <Check size={16} className="lang-option-check" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="lang-panel-footer">
          <div className="lang-footer-stats">
            <span className="lang-footer-count">{languages.length}</span>
            <span className="lang-footer-label">Languages Available</span>
          </div>
          <div className="lang-footer-accent">
            <span className="lang-accent-dot lang-dot-red"></span>
            <span className="lang-accent-dot lang-dot-yellow"></span>
            <span className="lang-accent-dot lang-dot-green"></span>
            <span className="lang-accent-dot lang-dot-blue"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;

