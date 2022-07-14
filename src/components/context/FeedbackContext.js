import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../services/configURL";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  // Fetch Feedback API
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`${BASE_URL}`, { method: "GET" });
    const data = await response.json();
    setFeedback(data);
  };

  // Handle Add new Feedback
  const handleAddFeedback = async (newFeedback) => {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    // console.log(newFeedback);
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  // Handle Delete Feedback
  const handleDeleteFeedback = async (idFeedback) => {
    await fetch(`${BASE_URL}/${idFeedback}`, { method: "DELETE" });
    // console.log(idFeedback);
    setFeedback(
      feedback.filter((item) => {
        return item.id !== idFeedback;
      })
    );
  };

  // Handle Edit Feedback
  const handleEditFeedback = (currentFeedback) => {
    setEditFeedback({
      item: currentFeedback,
      edit: true,
    });
  };

  // Handle Update Feedback
  const handleUpdateFeedback = async (idFeedback, updateFeedback) => {
    // console.log(idFeedback, updateFeedback);
    const response = await fetch(`${BASE_URL}/${idFeedback}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFeedback),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => {
        return item.id === idFeedback ? data : item;
      })
    );

    // Set to be able to add new feedback
    setEditFeedback({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        handleAddFeedback,
        handleDeleteFeedback,
        handleEditFeedback,
        handleUpdateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
