/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    mytheme: {
          
      "primary": "#b53056",
               
      "secondary": "#db29d2",
               
      "accent": "#80ef7f",
               
      "neutral": "#272c35",
               
      "base-100": "#2b2b46",
               
      "info": "#a9c6ea",
               
      "success": "#1fd1b9",
               
      "warning": "#e3b80d",
               
      "error": "#dc2837",
               },
    extend: {}
  },
  plugins: [
    require('daisyui')
  ]
};