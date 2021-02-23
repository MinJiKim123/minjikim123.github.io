import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

function useDocumentScrollThrottled(callback) {
  const [, setScrollPosition] = useState(0);
  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);
  let previousScrollTop = 0;

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);
    
    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled);
  }, []);

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }
  
  
 

}

export default useDocumentScrollThrottled;
