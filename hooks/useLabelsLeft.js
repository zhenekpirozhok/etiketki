import { useState } from 'react';

export default function useLabelsLeft(radiuses) {
  const [labelsLeft, setLabelsLeft] = useState(0);
  const [selectedSize, setSelectedSize] = useState(radiuses[0].id);
  const [currentRadius, setCurrentRadius] = useState(0);

  const updateLabelsLeft = (selectedSize, currentRadius = 0) => {
    setCurrentRadius(+currentRadius);
    setSelectedSize(selectedSize);

    const sizeObject = radiuses.find((sizeObj) => sizeObj.id === selectedSize);

    if (sizeObject) {
      const labelsLeft = Math.floor(
        (sizeObject.maxQuantity * currentRadius) / sizeObject.maxRadius
      );
      setLabelsLeft(labelsLeft);
    }
  };

  return { labelsLeft, selectedSize, currentRadius, updateLabelsLeft };
}