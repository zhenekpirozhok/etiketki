import { useState } from "react";

export default function useLabelsSpent() {
  const [sizeData, setSizeData] = useState([]);
  const [defectData, setDefectData] = useState([]);
  const [defectId, setDefectId] = useState(0);

  const handleInputChange = (size, quantity) => {
    const newData = { size, quantity };
    const updatedData = sizeData.map((item) =>
      item.size === size ? newData : item
    );
    if (!updatedData.some((item) => item.size === size)) {
      updatedData.push(newData);
    }
    setSizeData(updatedData);
  };

  const handleAddDefect = (size, quantity) => {
    const newData = { size, quantity, id: defectId };
    setDefectId(id => id + 1);
    const updatedData = defectData.map((item) =>
      item.size === size ? newData : item
    );
    if (!updatedData.some((item) => item.size === size)) {
      updatedData.push(newData);
    }
    setDefectData(updatedData);
  };

  const handleDeleteDefect = (id) => {
    const updatedData = defectData.filter((item) => item.id !== id);
    setDefectData(updatedData);
  }

  return {sizeData, defectData, handleInputChange, handleAddDefect, handleDeleteDefect};
}
