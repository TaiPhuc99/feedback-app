import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";
import FeedbackContext from "./context/FeedbackContext";

export default function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  // Check Data
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  // Animation
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((itemContent, index) => (
          <motion.div
            key={`id-${itemContent.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={index} itemContent={itemContent} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
