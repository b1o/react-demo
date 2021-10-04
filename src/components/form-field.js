import React, { useEffect, useState } from "react";

export default function FormField({ type, label, onChange }) {
  const [elementId, setElementId] = useState();
  useEffect(() => {
    setElementId(Math.random());
  }, []);

  return (
    <div className="form-field">
      <label htmlFor={elementId}>{label}</label>
      <input onChange={onChange} id={elementId} type={type} />
    </div>
  );
}
