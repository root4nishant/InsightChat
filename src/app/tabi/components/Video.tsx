"use client";
import Section from "@/components/custom/reusables/Section";
import React, { useEffect, useRef, useState } from "react";
import Animation from "../animation/Animation";
import AnimatedText from "./TextAnimation";

const VideoWithMessages = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Keep track of how much of the video is visible
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  // Keep track of whether the video has loaded
  const [videoHasLoaded, setVideoHasLoaded] = useState(false);
  // Control when to show animations
  const [showAnimation, setShowAnimation] = useState(false);
  // If you want to lazy-load the video only when in view
  const [isInView, setIsInView] = useState(false);

  // 1) Listen for video load event
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedData = () => {
      setTimeout(() => {
        setVideoHasLoaded(true);
      }, 1000);
    };

    videoElement.addEventListener("loadeddata", handleLoadedData);

    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  // 2) Use IntersectionObserver to track how much of the video is visible
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        setIntersectionRatio(entry.intersectionRatio);
      },
      {
        // Track changes at 0%, 10%, 60%, 100%
        threshold: [0, 0.1, 0.6, 1],
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  // 3) Show animation only if video is at least 60% visible AND loaded
  useEffect(() => {
    if (intersectionRatio >= 0.6 && videoHasLoaded) {
      setShowAnimation(true);
    }
  }, [intersectionRatio, videoHasLoaded]);

  return (
    <Section>
      <div className="relative w-full h-auto items-start justify-start overflow-hidden rounded-md">
        <video
          ref={videoRef}
          className="w-full h-auto object-cover"
          // Lazy-load the video only if it's in view
          src={
            isInView
              ? "https://storage.googleapis.com/cs-website-assets/tabi/tabi-hero-dd.webm"
              : undefined
          }
          autoPlay={isInView}
          loop
          muted
        />

        {showAnimation && (
          <div className="absolute lg:top-6 top-2 lg:left-6 left-2 flex flex-col gap-2">
            <AnimatedText />
            <Animation />
          </div>
        )}
      </div>
    </Section>
  );
};

export default VideoWithMessages;
