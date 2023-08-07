const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary':'#31086D',
                'primary-alt':'#5C23AB',
                'secondary':'#25BDEA',
                'secondary-alt':'#7437CC',
                'third':'#2B0B5F',
                'banner':'#25BDEA',
                'border':'#F2F2F2'
            },
        },
        container: {
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '120px',
              '2xl': '6rem',
            },
          },
        
    },

    plugins: [require('@tailwindcss/forms')],
};
