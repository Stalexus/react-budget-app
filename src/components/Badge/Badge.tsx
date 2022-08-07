import { useState } from "react"

export const Badge = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  return (
    <div>
      {isEditMode ? (
        <>
          <button onClick={handleSave}>Save</button>
          <input />
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <p>3000$</p>
        </>)}
    </div>
  )
}
