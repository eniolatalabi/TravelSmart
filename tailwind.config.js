module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4FB0C6',
          DEFAULT: '#0F7A9E',
          dark: '#0A4F69',
        },
        accent: {
          yellow: '#FFB703',
          orange: '#FB8500',
        },
        neutral: {
          light: '#F8F9FA',
          DEFAULT: '#E9ECEF',
          dark: '#343A40',
        },
        text: {
          primary: '#212529',
          secondary: '#6C757D',
        },
        success: '#28A745',
        warning: '#FFC107',
        danger: '#DC3545',
      },
      backgroundImage: theme => ({
        'gradient-primary': 'linear-gradient(135deg, #4FB0C6, #0A4F69)',
        'gradient-sunset': 'linear-gradient(135deg, #FFB703, #FB8500)',
        'gradient-ocean': 'linear-gradient(135deg, #4FB0C6, #0F7A9E, #0A4F69)',
        'gradient-neutral': 'linear-gradient(135deg, #F8F9FA, #E9ECEF)',
        'gradient-dark': 'linear-gradient(135deg, #343A40, #212529)',
      }),
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        fadeInOut: 'fadeInOut 6s ease-in-out infinite', 
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(15, 122, 158, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(15, 122, 158, 0.5)' },
          '100%': { boxShadow: '0 0 5px rgba(15, 122, 158, 0.2)' },
        },
        fadeInOut: {
          '0%': { opacity: 0 },
          '10%': { opacity: 1 },
          '50%': { opacity: 1 },
          '90%': { opacity: 0 },
          '100%': { opacity: 0 },
        },
      },
    },
    screens: {
      'md': '768px',
      'lg': '1024px',
    },
  },
  plugins: [],
};
