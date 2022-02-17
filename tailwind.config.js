module.exports = {
  content: ["./public/*.html"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'gray-light' : '#f3f3f3',
        'primary' : '#292929',
        'secondary' : '#a8a8a8'
      },
      fontFamily: {
        'body': ['"Lato"'],
      }
    },
  },
  plugins: [],
}
