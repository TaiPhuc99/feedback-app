import React from "react";
import FeedbackForm from "../FeedbackForm";
import FeedbackList from "../FeedbackList";
import FeedbackStats from "../FeedbackStats";

export default function HomePage() {
  return (
    <div className="container">
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  );
}
