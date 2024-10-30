import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'purepng.com', 
      'example.com', 
      'freedesignfile.com', 
      'i.dailymail.co.uk',
      'th.bing.com', 
      'static.vecteezy.com' // Add the new external image domain here
    ],
  },
};

export default nextConfig;
