
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with the current window width if available (client-side)
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    // Default to false for server-side rendering
    return false
  })

  React.useEffect(() => {
    // Function to check if current viewport is mobile
    const checkIsMobile = () => {
      const width = window.innerWidth
      setIsMobile(width < MOBILE_BREAKPOINT)
    }
    
    // More aggressive throttle function to prevent excessive resize callbacks
    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (resizeTimeout === null) {
        resizeTimeout = window.setTimeout(() => {
          resizeTimeout = null;
          checkIsMobile();
        }, 250); // Wait 250ms between resize checks (increased from 150ms)
      }
    }
    
    // Add event listeners with improved performance
    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", checkIsMobile)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", checkIsMobile)
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
    }
  }, [])

  return isMobile
}
