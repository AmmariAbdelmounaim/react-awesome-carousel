import { useState } from 'react';
import { photoType } from '../utils/types';

export function useCarousel(photos: photoType[]) {
  const [imageIndex, setImageIndex] = useState(0);

  function goToNextImage() {
    setImageIndex((index) => (index === photos.length - 1 ? 0 : index + 1));
  }

  function goToPrevImage() {
    setImageIndex((index) => (index === 0 ? photos.length - 1 : index - 1));
  }

  function goToImage(index: number) {
    setImageIndex(index);
  }

  return { imageIndex, goToNextImage, goToPrevImage, goToImage };
}
