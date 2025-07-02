'use client'
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © { new Date().getFullYear() } Mini Blog. All rights reserved. 
        </p>
        <p className="text-xs">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
