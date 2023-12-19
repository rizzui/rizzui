import React from 'react';

export function useRePositioningActiveTab({ ref, activeTab }: any) {
  React.useEffect(() => {
    const tabListEl = ref?.current;

    function handleScrollLeft() {
      // activeTab + 1 is to prevent 0 index case
      if (ref.current && activeTab + 1) {
        const tabElement = ref.current.children[activeTab] as HTMLElement;
        const containerWidth = ref.current.offsetWidth;
        const tabWidth = tabElement.offsetWidth;
        const tabOffsetLeft = tabElement.offsetLeft;
        const currentScrollLeft = ref.current.scrollLeft;

        let newScrollLeft = currentScrollLeft;

        // If the tab is partially or fully outside the container's right edge
        if (tabOffsetLeft + tabWidth > currentScrollLeft + containerWidth) {
          // Scroll to the right to fully reveal the tab
          newScrollLeft = tabOffsetLeft + tabWidth - containerWidth;
        } else if (tabOffsetLeft < currentScrollLeft) {
          // Scroll to the left to fully reveal the tab
          newScrollLeft = tabOffsetLeft;
        }

        // Set the new scroll position
        ref.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      }

      handleScrollShadow();
    }
    handleScrollLeft();

    function handleScrollShadow() {
      if (ref.current) {
        const containerWidth = ref.current.offsetWidth;
        const containerScrollWidth = ref.current.scrollWidth;
        const currentScrollLeft = ref.current.scrollLeft;

        let newScrollLeft = currentScrollLeft;

        if (containerScrollWidth > containerWidth) {
          // reach to the right
          if (
            Math.floor(containerWidth) >=
            Math.floor(containerScrollWidth) - Math.floor(newScrollLeft)
          ) {
            ref.current.classList.remove('end-shadow');
          } else {
            ref.current.classList.add('end-shadow');
          }

          // reach to the left
          if (newScrollLeft !== 0) {
            ref.current.classList.add('start-shadow');
          } else {
            ref.current.classList.remove('start-shadow');
          }
        } else {
          ref.current.classList.remove('start-shadow');
          ref.current.classList.remove('end-shadow');
        }
      }
    }

    window.addEventListener('resize', handleScrollLeft);
    tabListEl.addEventListener('scroll', handleScrollShadow);
    // clear event
    return () => {
      window.removeEventListener('resize', handleScrollLeft);
      tabListEl.removeEventListener('scroll', handleScrollShadow);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
}
