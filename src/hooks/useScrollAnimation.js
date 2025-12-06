import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Root margin for observer, default '-50px'
 * @param {boolean} options.triggerOnce - Only trigger once, default true
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '-50px',
    triggerOnce = true
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

/**
 * Hook for staggered children animations
 * @param {number} childCount - Number of children to animate
 * @param {number} staggerDelay - Delay between each child in ms
 * @param {boolean} isParentVisible - Parent visibility state
 * @returns {boolean[]} - Array of visibility states for each child
 */
export const useStaggerAnimation = (childCount, staggerDelay = 100, isParentVisible = false) => {
  const [visibleChildren, setVisibleChildren] = useState(
    Array(childCount).fill(false)
  );

  useEffect(() => {
    if (!isParentVisible) {
      setVisibleChildren(Array(childCount).fill(false));
      return;
    }

    const timeouts = [];
    for (let i = 0; i < childCount; i++) {
      timeouts.push(
        setTimeout(() => {
          setVisibleChildren(prev => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * staggerDelay)
      );
    }

    return () => timeouts.forEach(clearTimeout);
  }, [isParentVisible, childCount, staggerDelay]);

  return visibleChildren;
};

export default useScrollAnimation;

