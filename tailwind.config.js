/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#1e8c5c',
        mainColorLight1: '#54981f',
        mainColorDark1: '#4c891c',
        secondaryColor: '#D9B343',
        secondaryColorLight1: '#e7c54a',
        secondaryColorDark1: '#cdab31',
        grayShade1: '#D9D9D9',
        grayShade2: '#C3C3C3',
        grayShade3: '#AEAEAE',
        gold: "#e0b315",
        thirdColor1: '#1e8c5c',
        thirdColor2: '#06a26c',
      },
      spacing: {
        'home-section-gap': '16px',
        'home-section-margin': '20px',
        'home-section-padding': '40px',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        // 🔽 هنا ضيفنا الـ floating
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        rotate: 'rotate 30s linear infinite',
        'fade-in': 'fadeIn 0.7s ease-in-out',
        // 🔽 هنا ضيفنا أنيميشن جديدة
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

