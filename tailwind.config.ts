import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated custom colors for ParrotBamboo brand
				neon: {
					yellow: "#F2B705", // Brand yellow - more prominent
					blue: "#0083CA",   // Brand blue - more prominent
					purple: "#8B5CF6",
					cyan: "#22D3EE"
				},
				dark: {
					DEFAULT: "#0F172A",
					lighter: "#1E293B"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'gradient-move': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'blockchain-float': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(5px, -10px) rotate(2deg)' },
					'50%': { transform: 'translate(0, -20px) rotate(0deg)' },
					'75%': { transform: 'translate(-5px, -10px) rotate(-2deg)' }
				},
				'data-flow': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'10%, 90%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'rotate-3d': {
					'0%, 100%': { transform: 'rotate3d(1, 1, 1, 0deg)' },
					'50%': { transform: 'rotate3d(1, 1, 1, 180deg)' }
				},
				'cube-rotate': {
					'0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
					'50%': { transform: 'rotateX(180deg) rotateY(180deg)' },
					'100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(242, 183, 5, 0.5), 0 0 10px rgba(242, 183, 5, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(242, 183, 5, 0.8), 0 0 20px rgba(242, 183, 5, 0.5)' 
					}
				},
				'circle-expand': {
					'0%': { 
						transform: 'scale(0.8)', 
						opacity: '0.6' 
					},
					'50%': { 
						transform: 'scale(1.1)', 
						opacity: '0.9' 
					},
					'100%': { 
						transform: 'scale(0.8)', 
						opacity: '0.6' 
					}
				},
				'wave': {
					'0%': { transform: 'translateY(0)' },
					'25%': { transform: 'translateY(-5px)' },
					'50%': { transform: 'translateY(0)' },
					'75%': { transform: 'translateY(5px)' },
					'100%': { transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'gradient-move': 'gradient-move 8s ease infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'blockchain-float': 'blockchain-float 8s ease-in-out infinite',
				'data-flow': 'data-flow 4s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'rotate-3d': 'rotate-3d 8s ease-in-out infinite',
				'cube-rotate': 'cube-rotate 12s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 3s infinite alternate',
				'circle-expand': 'circle-expand 4s infinite',
				'wave': 'wave 4s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'circuit-pattern': "url('/circuit-pattern.svg')",
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
				'neon-glow': 'radial-gradient(circle at center, rgba(242, 183, 5, 0.2) 0%, rgba(15, 23, 42, 0) 70%)'
			},
			screens: {
				'xs': '480px',
			},
			spacing: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
			},
			zIndex: {
				'mobile-nav': '100',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
