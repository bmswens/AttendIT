import pwa from 'next-pwa'

const withPWA = pwa({
    dest: 'public'
  })

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    }
};

export default withPWA(nextConfig);
