/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  disableStaticImages: true,
};

module.exports = withTM(withFonts(withImages(nextConfig)));
