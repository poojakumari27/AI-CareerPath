"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      VanillaTilt.init(imageElement, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement?.classList.add("scrolled");
      } else {
        imageElement?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-24 md:pt-32 pb-16 px-4 bg-white dark:bg-black transition-colors">
      <div className="space-y-10 text-center">
        <div className="space-y-4 mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white">
            <span className="block">Empower Your Future</span>
            <span className="block">With AI Career Coaching</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg lg:text-xl">
            Take control of your career with AI-powered support, confidence-building prep, and personalized growth strategies.
          </p>
        </div>

        <div className="hero-image-wrapper mt-4">
          <div ref={imageRef} className="hero-image transition-transform duration-500">
            <Image
              src="/bannerai.jpg"
              width={960}
              height={540}
              alt="AI Coaching Preview"
              className="rounded-xl shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>

        <div className="mt-10 bg-black dark:bg-white p-1 rounded-xl shadow-lg w-fit mx-auto">
          <div className="bg-white dark:bg-black p-6 rounded-xl flex gap-4 flex-wrap justify-center">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="px-6 py-4 text-base bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow-md"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-4 text-base border-black text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-900"
              >
                Explore Insights
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
