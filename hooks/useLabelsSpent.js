import { useState } from "react";

export default function useLabelsSpent() {
  const [sizeData, setSizeData] = useState([]);
  const [defectData, setDefectData] = useState([]);

  const handleAddData = (size, quantity, callback, data) => {
    const newData = { size, quantity };
    const updatedData = data.map((item) =>
      item.size === size ? newData : item
    );
    if (!updatedData.some((item) => item.size === size)) {
      updatedData.push(newData);
    }
    callback(updatedData);
  };

  const handleInputChange = (size, quantity) => {
    handleAddData(size, quantity, setSizeData, sizeData);
  };

  const handleAddDefect = (size, quantity) => {
    handleAddData(size, quantity, setDefectData, defectData);
  };

  return {sizeData, defectData, handleInputChange, handleAddDefect};
}
