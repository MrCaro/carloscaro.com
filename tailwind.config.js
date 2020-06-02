module.exports = {
  purge: [
      './src/*.jsx',
      './src/**/*.jsx'
  ],
  theme: {
    screens: {
      xs: {'min' : '0','max' : '640px'},
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
        colors: {
          cc_magenta: '#ff5c4b',
          cc_gray: {
            dark: 'rgba(255, 255, 255, 0.05)',
            light: '#717480'
          }
        }
      }
    },
    variants: {},
    plugins: [],
}
