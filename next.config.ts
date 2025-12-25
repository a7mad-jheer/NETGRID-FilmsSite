/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'], // ضع هنا الدومين الخاص بالصور
  },
   theme: {
    extend: {
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },


}

module.exports = nextConfig;

// const nextConfig: NextConfig = {
//   /* config options here */

//     images : {
//       domains : ['image.tmdb.org']
//     }
  
// };

export default nextConfig;
