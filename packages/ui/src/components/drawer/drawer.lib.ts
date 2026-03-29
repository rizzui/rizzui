import { MouseEvent, useCallback, useEffect, useRef } from 'react';
import { isPlacementOnYAxis } from './drawer';

export type ResizeProps = {
  placement: 'left' | 'right' | 'top' | 'bottom';
  customSize?: number;
};

export function useResizeHandler({ placement }: ResizeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizingRef = useRef(false);
  const startPositionRef = useRef<number>(0);
  const startSizeRef = useRef<number>(0);
  const placementRef = useRef<'left' | 'right' | 'top' | 'bottom'>(placement);
  const rafIdRef = useRef<number | null>(null);
  const originalTransitionRef = useRef<string>('');

  // Update placement ref when it changes
  placementRef.current = placement;

  // Stable event handlers that don't change between renders
  const handleMouseMoveRef = useRef((e: globalThis.MouseEvent) => {
    if (!isResizingRef.current || !containerRef.current) return;

    // Cancel any pending animation frame
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // Use requestAnimationFrame for smooth updates
    rafIdRef.current = requestAnimationFrame(() => {
      if (!containerRef.current || !isResizingRef.current) return;

      const currentPlacement = placementRef.current;
      const isYAxis = isPlacementOnYAxis(currentPlacement);
      const startPosition = startPositionRef.current;
      const startSize = startSizeRef.current;

      let movement = 0;
      let newSize = 0;

      if (currentPlacement === 'right') {
        movement = e.clientX - startPosition;
        newSize = Math.max(100, startSize - movement); // Min width/height of 100px
      } else if (currentPlacement === 'left') {
        movement = e.clientX - startPosition;
        newSize = Math.max(100, startSize + movement);
      } else if (currentPlacement === 'top') {
        movement = e.clientY - startPosition;
        newSize = Math.max(100, startSize + movement);
      } else if (currentPlacement === 'bottom') {
        movement = e.clientY - startPosition;
        newSize = Math.max(100, startSize - movement);
      }

      // Directly update DOM for smooth performance (no React re-render during drag)
      const element = containerRef.current;
      
      if (isYAxis) {
        element.style.height = `${newSize}px`;
        element.style.maxHeight = `${newSize}px`;
        element.style.minHeight = '0';
      } else {
        element.style.width = `${newSize}px`;
        element.style.maxWidth = `${newSize}px`;
        element.style.minWidth = '0';
      }
    });
  });

  const handleMouseUpRef = useRef(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    
    if (isResizingRef.current) {
      isResizingRef.current = false;
      
      // Restore transitions if element still exists
      if (containerRef.current) {
        containerRef.current.style.transition = originalTransitionRef.current;
      }
      
      // Restore body styles
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
      
      // Remove event listeners
      document.removeEventListener('mousemove', handleMouseMoveRef.current);
      document.removeEventListener('mouseup', handleMouseUpRef.current);
    }
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMoveRef.current);
      document.removeEventListener('mouseup', handleMouseUpRef.current);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!containerRef.current) return;

    const currentPlacement = placementRef.current;
    const isYAxis = isPlacementOnYAxis(currentPlacement);
    const element = containerRef.current;

    // Get initial size from computed styles or element dimensions
    const computedStyle = window.getComputedStyle(element);
    let initialSize = 0;
    
    if (isYAxis) {
      initialSize = element.clientHeight || parseInt(computedStyle.height, 10) || 400;
    } else {
      initialSize = element.clientWidth || parseInt(computedStyle.width, 10) || 400;
    }

    const initialPosition = isYAxis ? e.clientY : e.clientX;

    // Store initial values
    startSizeRef.current = initialSize;
    startPositionRef.current = initialPosition;
    isResizingRef.current = true;

    // Store and disable transitions for smooth resizing
    originalTransitionRef.current = element.style.transition || computedStyle.transition;
    element.style.transition = 'none';

    // Prevent text selection and set cursor during resize
    document.body.style.userSelect = 'none';
    document.body.style.cursor = isYAxis ? 'ns-resize' : 'ew-resize';

    // Add event listeners (using refs for stable references)
    document.addEventListener('mousemove', handleMouseMoveRef.current, { passive: false });
    document.addEventListener('mouseup', handleMouseUpRef.current, { passive: false });

    // Trigger initial move to start resize immediately
    handleMouseMoveRef.current(e.nativeEvent);
  }, []);

  return { handleMouseDown, containerRef };
}
