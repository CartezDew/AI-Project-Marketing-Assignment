import React, { useEffect, useState, useRef } from 'react';
import './Avatar3D.css';

/**
 * 3D Interactive Avatar
 * Matches the specific visual style: Green blazer, glasses, black hair
 */
const Avatar3D = ({ mousePos = { x: 0, y: 0 } }) => {
  const svgRef = useRef(null);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [headPos, setHeadPos] = useState({ x: 0, y: 0, rotate: 0 });
  
  // Physics-based hair movement state
  const [hairPhysics, setHairPhysics] = useState({ sway: 0, bounce: 0, isSettling: false });
  const prevHeadPos = useRef({ x: 0, y: 0 });
  const resetTimeout = useRef(null);

  // Colors from the reference code
  const colors = {
    skin: "#EBC8A6",
    skinShadow: "#D4A682",
    blush: "#E88E8E",
    hair: "#1F1A1C",
    hairHighlight: "#3E3438",
    hairShine: "rgba(255, 255, 255, 0.2)",
    eyeWhite: "#FFFFFF",
    iris: "#4A3228",
    pupil: "#0D0D0D",
    lip: "#D67878",
    lipHighlight: "rgba(255, 255, 255, 0.4)",
    glassesFrame: "#1A1A1A", 
    glassesLens: "rgba(255, 255, 255, 0.1)",
    glassesHighlight: "rgba(255, 255, 255, 0.3)",
    // Clothing
    blazer: "#2F5233", // Deep Hunter Green
    blazerShadow: "#1E3521",
    blazerHighlight: "#3F6B45",
    innerTop: "#18181B", // Zinc 900
    necklace: "#FCD34D", // Amber 300 (Gold)
  };

  useEffect(() => {
    if (!svgRef.current) return;
    
    const rect = svgRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    
    const maxEyeMove = 14;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const factor = distance === 0 ? 0 : Math.min(distance, 500) / 500;
    
    const angle = Math.atan2(dy, dx);
    
    const eyeX = Math.cos(angle) * maxEyeMove * factor;
    const eyeY = Math.sin(angle) * maxEyeMove * factor;
    
    const maxHeadMove = 15;
    const maxHeadRotate = 8;
    const headX = Math.cos(angle) * maxHeadMove * factor;
    const headY = Math.sin(angle) * maxHeadMove * factor;
    const headRotate = (dx / window.innerWidth) * maxHeadRotate;
    
    setEyePos({ x: eyeX, y: eyeY });
    setHeadPos({ x: headX, y: headY, rotate: headRotate });

    // Hair Physics Logic
    const velocityX = headX - prevHeadPos.current.x;
    const velocityY = headY - prevHeadPos.current.y;
    
    // Apply drag/sway based on velocity
    const newSway = Math.max(-40, Math.min(40, -velocityX * 4));
    const newBounce = Math.max(0, Math.min(30, Math.abs(velocityY) * 3));
    
    setHairPhysics({
      sway: newSway,
      bounce: newBounce,
      isSettling: false
    });
    
    prevHeadPos.current = { x: headX, y: headY };

    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    
    resetTimeout.current = setTimeout(() => {
      setHairPhysics({ sway: 0, bounce: 0, isSettling: true });
    }, 50);
  }, [mousePos]);

  const getStrandStyle = (rotateFactor, bounceFactor, originX, originY, settleDuration, delay = '0ms') => {
    const rotation = hairPhysics.sway * rotateFactor;
    const verticalBounce = hairPhysics.bounce * bounceFactor;
    
    const currentDuration = hairPhysics.isSettling ? settleDuration : '300ms';
    const ease = hairPhysics.isSettling ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-out';
    
    return {
      transform: `rotate(${rotation}deg) translateY(${verticalBounce}px)`,
      transformOrigin: `${originX}px ${originY}px`,
      transitionProperty: 'transform',
      transitionDuration: currentDuration,
      transitionTimingFunction: ease,
      transitionDelay: hairPhysics.isSettling ? delay : '0ms'
    };
  };

  return (
    <div className="avatar-3d-container">
      <svg
        ref={svgRef}
        viewBox="0 0 400 550"
        xmlns="http://www.w3.org/2000/svg"
        className="avatar-3d-svg"
      >
        <defs>
          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* LAYER 1: Background Elements (Hair Back & Neck) */}
        <g transform={`translate(${headPos.x}, ${headPos.y - 50}) rotate(${headPos.rotate}, 200, 380)`}>
           {/* Hair Back */}
           <path 
              d="M 60 180 C 40 250, 10 380, 50 460 C 100 500, 300 500, 350 460 C 390 380, 360 250, 340 180 C 320 100, 280 60, 200 60 C 120 60, 80 100, 60 180 Z" 
              fill={colors.hair} 
          />
          {/* Neck */}
          <path d="M 175 300 L 175 390 L 225 390 L 225 300 Z" fill={colors.skin} />
          <path d="M 175 300 L 175 340 Q 200 350 225 340 L 225 300 Z" fill={colors.skinShadow} opacity="0.4"/>
        </g>

        {/* LAYER 2: Body Group (Slight Parallax) */}
        <g transform={`translate(${headPos.x * 0.15}, ${headPos.y * 0.15})`}>
           {/* Blazer / Shoulders / Torso */}
           <path 
              d="M 120 340 L 150 330 L 250 330 L 280 340 Q 350 350 360 420 L 370 600 H 30 L 40 420 Q 50 350 120 340 Z" 
              fill={colors.blazer} 
          />
          
          {/* Shoulder definition */}
           <path d="M 120 340 Q 90 350 60 420" stroke={colors.blazerShadow} strokeWidth="1" fill="none" opacity="0.5" />
           <path d="M 280 340 Q 310 350 340 420" stroke={colors.blazerShadow} strokeWidth="1" fill="none" opacity="0.5" />

          {/* Inner Top */}
          <path 
              d="M 150 330 L 170 380 Q 200 390 230 380 L 250 330 L 200 330 Z" 
              fill={colors.innerTop} 
          />

          {/* Blazer Lapels */}
          <path d="M 150 330 L 155 380 L 200 580 L 100 580 L 120 450 Z" fill={colors.blazer} />
          <path d="M 250 330 L 245 380 L 200 580 L 300 580 L 280 450 Z" fill={colors.blazer} />
          
          {/* Lapel details */}
           <path d="M 150 330 L 155 380 L 200 580" stroke={colors.blazerHighlight} strokeWidth="1" fill="none" />
           <path d="M 250 330 L 245 380 L 200 580" stroke={colors.blazerHighlight} strokeWidth="1" fill="none" />
           
           {/* Necklace */}
           <path d="M 175 365 Q 200 385 225 365" stroke={colors.necklace} strokeWidth="1.5" fill="none" />
           <circle cx="200" cy="378" r="3" fill={colors.necklace} />
        </g>

        {/* LAYER 3: Head Group (Face & Front Hair) */}
        <g transform={`translate(${headPos.x}, ${headPos.y - 50}) rotate(${headPos.rotate}, 200, 380)`}>
          {/* Face Shape */}
          <path 
            d="M 125 180 C 125 100, 275 100, 275 180 C 275 240, 260 320, 200 320 C 140 320, 125 240, 125 180 Z" 
            fill={colors.skin}
          />
          
          {/* Blush */}
          <ellipse cx="155" cy="235" rx="18" ry="12" fill={colors.blush} opacity="0.3" filter="url(#soft-glow)" />
          <ellipse cx="245" cy="235" rx="18" ry="12" fill={colors.blush} opacity="0.3" filter="url(#soft-glow)" />

          {/* Facial Features */}
          <g transform={`translate(${eyePos.x * 0.25}, ${eyePos.y * 0.25})`}>
            
            {/* Eyebrows */}
            <path d="M 140 168 Q 160 155 180 168" stroke="#2D1F18" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M 220 168 Q 240 155 260 168" stroke="#2D1F18" strokeWidth="3.5" fill="none" strokeLinecap="round" />

            {/* Nose */}
            <path d="M 200 220 Q 196 235 200 242 Q 204 235 200 220" fill={colors.skinShadow} opacity="0.5" />
            
            {/* Mouth */}
            <g style={{ transformOrigin: "200px 285px" }}>
                <path d="M 182 285 Q 200 298 218 285" fill={colors.lip} />
                <path d="M 190 286 Q 200 290 210 286" stroke={colors.lipHighlight} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
            </g>

            {/* Eyes */}
            {/* Left Eye */}
            <g className="eye-left">
               <path d="M 140 185 Q 135 175 132 170" stroke="#1a1a1a" strokeWidth="1.5" />
               <path d="M 142 182 Q 138 172 136 168" stroke="#1a1a1a" strokeWidth="1.5" />
               
               <ellipse cx="160" cy="190" rx="22" ry="15" fill={colors.eyeWhite} />
               <path d="M 142 182 Q 160 165 178 182" stroke={colors.skinShadow} strokeWidth="1.5" fill="none" opacity="0.6"/>

              {/* Left Pupil */}
              <g transform={`translate(${eyePos.x}, ${eyePos.y})`}>
                <circle cx="160" cy="190" r="9" fill={colors.iris} />
                <circle cx="160" cy="190" r="3.5" fill={colors.pupil} />
                <circle cx="162" cy="187" r="2.5" fill="white" opacity="0.7" />
              </g>
              
              <path d="M 139 188 Q 160 172 181 188" stroke="#1a1a1a" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
            </g>

            {/* Right Eye */}
            <g className="eye-right">
               <path d="M 260 185 Q 265 175 268 170" stroke="#1a1a1a" strokeWidth="1.5" />
               <path d="M 258 182 Q 262 172 264 168" stroke="#1a1a1a" strokeWidth="1.5" />
               <ellipse cx="240" cy="190" rx="22" ry="15" fill={colors.eyeWhite} />
               <path d="M 222 182 Q 240 165 258 182" stroke={colors.skinShadow} strokeWidth="1.5" fill="none" opacity="0.6"/>

              {/* Right Pupil */}
              <g transform={`translate(${eyePos.x}, ${eyePos.y})`}>
                <circle cx="240" cy="190" r="9" fill={colors.iris} />
                <circle cx="240" cy="190" r="3.5" fill={colors.pupil} />
                <circle cx="242" cy="187" r="2.5" fill="white" opacity="0.7" />
              </g>
              
              <path d="M 219 188 Q 240 172 261 188" stroke="#1a1a1a" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
            </g>

            {/* Glasses */}
            <g className="glasses" opacity="0.95">
              <path 
                d="M 130,178 C 130,162 145,155 160,155 C 180,155 190,165 190,178 L 190,205 C 190,222 175,225 160,225 C 140,225 130,220 130,205 Z"
                fill={colors.glassesLens}
                stroke={colors.glassesFrame}
                strokeWidth="3.5"
              />
              <path 
                 d="M 210,178 C 210,165 220,155 240,155 C 255,155 270,162 270,178 L 270,205 C 270,220 260,225 240,225 C 225,225 210,222 210,205 Z"
                 fill={colors.glassesLens}
                 stroke={colors.glassesFrame}
                 strokeWidth="3.5"
              />
              <path d="M 190 178 Q 200 170 210 178" stroke={colors.glassesFrame} strokeWidth="3.5" fill="none"/>
              <path d="M 138 165 L 150 165" stroke={colors.glassesHighlight} strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
              <path d="M 218 165 L 230 165" stroke={colors.glassesHighlight} strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
            </g>
          </g>

           {/* Hair Front / Bangs */}
           <g>
             <path d="M 200 60 C 170 60, 120 80, 110 170 C 105 210, 90 280, 50 320" stroke={colors.hair} strokeWidth="0" fill={colors.hair} />
             <path d="M 200 60 C 230 60, 280 80, 290 170 C 295 210, 310 280, 350 320" stroke={colors.hair} strokeWidth="0" fill={colors.hair} />
             {/* Shine */}
             <path d="M 140 90 Q 200 70 260 90" stroke={colors.hairShine} strokeWidth="5" fill="none" strokeLinecap="round" />
             <path d="M 115 120 C 100 150, 110 180, 95 220" stroke={colors.hairShine} strokeWidth="2" fill="none" />
             <path d="M 285 120 C 300 150, 290 180, 305 220" stroke={colors.hairShine} strokeWidth="2" fill="none" />
             
             <path d="M 110 170 Q 115 200 80 250" stroke={colors.hair} strokeWidth="2" fill="none"/>
             <path d="M 290 170 Q 285 200 320 250" stroke={colors.hair} strokeWidth="2" fill="none"/>
           </g>

           {/* Dynamic Front Hair Strands */}
           {/* Left Side */}
           <g style={getStrandStyle(0.6, 0.4, 50, 220, '1200ms', '150ms')}>
             <path d="M 50 220 C 20 280, 50 360, 30 460 C 28 475, 38 475, 40 460 C 65 360, 30 280, 60 220 Z" fill={colors.hair} />
             <path d="M 50 220 C 20 280, 50 360, 30 430" stroke={colors.hairShine} strokeWidth="1" fill="none" opacity="0.4"/>
           </g>
           <g style={getStrandStyle(0.8, 0.5, 60, 240, '1000ms', '50ms')}>
             <path d="M 70 200 C 40 260, 90 340, 50 470 C 48 485, 58 485, 60 470 C 100 340, 55 260, 80 200 Z" fill={colors.hair} />
             <path d="M 70 200 C 40 260, 90 340, 50 440" stroke={colors.hairShine} strokeWidth="1" fill="none" opacity="0.3"/>
           </g>
           <g style={getStrandStyle(0.8, 0.4, 120, 200, '900ms', '50ms')}>
             <path d="M 60 260 C 40 320, 70 380, 50 460 C 48 475, 58 475, 60 460 C 80 380, 50 320, 60 260 Z" fill={colors.hair} />
             <path d="M 70 300 C 60 350, 85 400, 75 450 C 73 465, 83 465, 85 450 C 95 400, 70 350, 80 300 Z" fill={colors.hair} />
             <path d="M 60 260 C 40 320, 70 380, 50 420" stroke={colors.hairShine} strokeWidth="1" fill="none" opacity="0.3"/>
           </g>
           <g style={getStrandStyle(1.2, 0.6, 120, 220, '700ms', '0ms')}>
             <path d="M 80 250 C 60 310, 95 370, 75 450 C 73 465, 83 465, 85 450 C 105 370, 70 310, 90 250 Z" fill={colors.hair} />
             <path d="M 95 245 C 80 300, 110 360, 95 440 C 93 455, 103 455, 105 440 C 120 360, 90 300, 105 245 Z" fill={colors.hair} />
             <path d="M 80 250 C 60 310, 95 370, 75 430" stroke={colors.hairShine} strokeWidth="1.5" fill="none" opacity="0.5"/>
             <path d="M 95 245 C 80 300, 110 360, 95 420" stroke={colors.hairShine} strokeWidth="1.5" fill="none" opacity="0.5"/>
           </g>
           <g style={getStrandStyle(1.5, 0.3, 130, 200, '500ms', '0ms')}>
             <path d="M 110 240 C 100 300, 125 360, 110 430 C 108 445, 118 445, 120 430 C 135 360, 110 300, 120 240 Z" fill={colors.hair} />
             <path d="M 110 240 C 100 300, 125 360, 110 410" stroke={colors.hairShine} strokeWidth="1.5" fill="none" opacity="0.5"/>
           </g>
           <g style={getStrandStyle(2.0, 0.8, 120, 300, '600ms', '100ms')}>
             <path d="M 115 280 C 110 330, 130 380, 120 420 C 118 435, 128 435, 130 420 C 140 380, 120 330, 125 280 Z" fill={colors.hair} />
             <path d="M 100 320 C 90 360, 115 400, 105 440 C 103 455, 113 455, 115 440 C 125 400, 100 360, 110 320 Z" fill={colors.hair} />
             <path d="M 115 280 C 110 330, 130 380, 120 410" stroke={colors.hairShine} strokeWidth="1.5" fill="none" opacity="0.5"/>
           </g>

           {/* Right Side */}
           <g style={getStrandStyle(0.6, 0.4, 350, 220, '1250ms', '150ms')}>
             <path d="M 350 220 C 380 280, 350 360, 370 460 C 372 475, 362 475, 360 460 C 335 360, 370 280, 340 220 Z" fill={colors.hair} />
             <path d="M 350 220 C 380 280, 350 360, 370 430" stroke={colors.hairShine} strokeWidth="1" fill="none" opacity="0.4"/>
           </g>
           <g style={getStrandStyle(0.8, 0.5, 340, 240, '1050ms', '50ms')}>
             <path d="M 330 200 C 360 260, 310 340, 350 470 C 352 485, 342 485, 340 470 C 300 340, 345 260, 320 200 Z" fill={colors.hair} />
             <path d="M 330 200 C 360 260, 310 340, 350 440" stroke={colors.hairShine} strokeWidth="1" fill="none" opacity="0.3"/>
           </g>
           <g style={getStrandStyle(0.8, 0.4, 280, 200, '950ms', '50ms')}>
             <path d="M 340 260 C 360 320, 330 380, 350 460 C 352 475, 342 475, 340 460 C 320 380, 350 320, 340 260 Z" fill={colors.hair} />
             <path d="M 330 300 C 340 350, 315 400, 325 450 C 327 465, 317 465, 315 450 C 305 400, 330 350, 320 300 Z" fill={colors.hair} />
             <path d="M 340 260 C 360 320, 330 380, 350 420" stroke={colors.hairShine} strokeWidth="1" fill="none" opacity="0.3"/>
           </g>
           <g style={getStrandStyle(1.2, 0.6, 280, 220, '750ms', '0ms')}>
             <path d="M 320 250 C 340 310, 305 370, 325 450 C 327 465, 317 465, 315 450 C 295 370, 330 310, 310 250 Z" fill={colors.hair} />
             <path d="M 305 245 C 320 300, 290 360, 305 440 C 307 455, 297 455, 295 440 C 280 360, 310 300, 295 245 Z" fill={colors.hair} />
             <path d="M 320 250 C 340 310, 305 370, 325 430" stroke={colors.hairShine} strokeWidth="1.5" fill="none" opacity="0.5"/>
             <path d="M 305 245 C 320 300, 290 360, 305 420" stroke={colors.hairShine} strokeWidth="1.5" fill="none" opacity="0.5"/>
           </g>
           <g style={getStrandStyle(1.5, 0.3, 270, 200, '550ms', '0ms')}>
             <path d="M 290 240 C 300 300, 275 360, 290 430 C 292 445, 282 445, 280 430 C 265 360, 290 300, 280 240 Z" fill={colors.hair} />
             <path d="M 290 240 C 300 300, 275 360, 290 410" stroke={colors.hairShine} strokeWidth="1.5" fill="none" opacity="0.5"/>
           </g>
           <g style={getStrandStyle(2.0, 0.8, 280, 300, '650ms', '100ms')}>
             <path d="M 285 280 C 290 330, 270 380, 280 420 C 282 435, 272 435, 270 420 C 260 380, 280 330, 275 280 Z" fill={colors.hair} />
             <path d="M 300 320 C 310 360, 285 400, 295 440 C 297 455, 287 455, 285 440 C 275 400, 300 360, 290 320 Z" fill={colors.hair} />
             <path d="M 285 280 C 290 330, 270 380, 280 410" stroke={colors.hairShine} strokeWidth="1.5" fill="none" opacity="0.5"/>
           </g>
        </g>
      </svg>
    </div>
  );
};

export default Avatar3D;
