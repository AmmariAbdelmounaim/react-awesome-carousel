import React, { useEffect, useState } from 'react';
import { NextButton, PrevButton } from './carousel-arrow-buttons';
import DotButton from './carousel-dot-buttons';
import { photoType } from '../../utils/types';
import { useFetchPhotos } from '../../hooks/useFetchPhotos';
import { useCarousel } from '../../hooks/useCarousel';
import Loader from '../loader';

export default function Carousel() {
  const { photos, loading } = useFetchPhotos();
  const { imageIndex, goToNextImage, goToPrevImage, goToImage } =
    useCarousel(photos!);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="mx-auto w-[55rem]" aria-label="Image Slider">
      {/* Slider */}
      <div className="mb-2 overflow-hidden rounded-[1.8rem]">
        <div className="flex ">
          {photos!.map((photo, index) => (
            <div
              key={photo.id}
              className="w-full flex-none pl-[1rem] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${-100 * imageIndex}%)` }}
            >
              <img
                src={photo.url}
                className="z-0 h-[25rem] w-full rounded-[1.8rem] object-cover"
                alt={photo.description}
                aria-hidden={imageIndex !== index}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation */}
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-[0.6rem]">
          <PrevButton onClick={goToPrevImage}  />
          <NextButton onClick={goToNextImage} />
        </div>
        <div className="flex items-center gap-1">
          {photos!.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => goToImage(index)}
              className={`${
                imageIndex === index && 'shadow-inset-active-dot-enabled'
              }`}
              aria-label={`View Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
