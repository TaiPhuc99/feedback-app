import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "./context/FeedbackContext";

export default function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  // Handle selected rating when edit
  const { editFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedback.edit) {
      setSelected(editFeedback.item.rating);
    }
  }, [editFeedback]);

  // Handle change number selected
  const handleChange = (e) => {
    // currentTarget use for number Select
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => {
        return (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        );
      })}
    </ul>
  );
}
