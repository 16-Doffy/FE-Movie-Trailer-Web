/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Cập nhật để Tailwind quét các tệp trong src
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url("/src/assets/wakiki.jpg")'  // Đảm bảo đường dẫn chính xác
      }
    },
  },
  plugins: [],
}