const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
      backgroundColor: theme => ({
          'symbol-gold':'#bc924e',
      }),
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      textColor: {
          'symbol-gold': '#bc924e',
      },
        spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
        '200': '50rem',
        '208': '52rem',
        },
        fontSize: {
        'xxxs': '0.55rem',
        'xxs': '0.65rem',
        },
         fontFamily: {
             'tapestry': ['Tapestry', 'sans-serif'],
             },
        screens: {
            'dark-mode': { 'raw': '(prefers-color-scheme: dark)' },
            '2xlmax': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }
                
            'xlmax': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }
                
            'lgmax': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }
                
            'mdmax': {'max': '767px'},
            // => @media (max-width: 767px) { ... }
                
            'smmax': {'max': '639px'},
            // => @media (max-width: 639px) { ... }

            'xsmax': {'max': '450px'},
            // => @media (max-width: 450px) { ... }
        },
        backgroundImage: {
            'service': "url('/img/scroll.png')",
        },
        gridTemplateRows: {
            // Simple 8 row grid
            '7': 'repeat(7, minmax(0, 1fr))',
            '8': 'repeat(8, minmax(0, 1fr))', 
            '9': 'repeat(9, minmax(0, 1fr))',
            '10': 'repeat(10, minmax(0, 1fr))',
            '11': 'repeat(11, minmax(0, 1fr))',
            '12': 'repeat(12, minmax(0, 1fr))'
        }

        },
    variants: {
      extend: {
          backgroundImage: ['hover', 'focus'],
          width: ['hover', 'focus'],
          backgroundColor: ['active'],
          textColor: ['active'],
      },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
};
