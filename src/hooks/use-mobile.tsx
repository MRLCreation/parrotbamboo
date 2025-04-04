
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to check if current viewport is mobile
    const checkIsMobile = () => {
      const width = window.innerWidth
      setIsMobile(width < MOBILE_BREAKPOINT)
    }
    
    // Throttle function to prevent excessive resize callbacks
    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (resizeTimeout === null) {
        resizeTimeout = window.setTimeout(() => {
          resizeTimeout = null;
          checkIsMobile();
        }, 150); // Wait 150ms between resize checks
      }
    }
    
    // Initial check
    checkIsMobile()
    
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

  // Return boolean instead of possibly undefined
  return !!isMobile
}
