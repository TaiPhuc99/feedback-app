import React, { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "./context/FeedbackContext";

export default function FeedbackItem({ itemContent }) {
  // Pass directly over child component
  const { handleDeleteFeedback, handleEditFeedback } =
    useContext(FeedbackContext);

  return (
    <Card className="card">
      <div className="num-display">{itemContent.rating}</div>

      <button
        className="close"
        onClick={() => {
          handleDeleteFeedback(itemContent.id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <button
        className="edit"
        onClick={() => {
          handleEditFeedback(itemContent);
        }}
      >
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{itemContent.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  itemContent: PropTypes.object,
};
