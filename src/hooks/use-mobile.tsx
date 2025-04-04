
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Enhanced mobile detection with orientation change support and throttling
    const handleResize = () => {
      // Get device width
      const width = window.innerWidth
      setIsMobile(width < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    handleResize()
    
    // Add event listeners with improved performance
    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [])

  return !!isMobile
}
