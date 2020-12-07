const mongoose = require("mongoose");

const FeedbackModel = mongoose.model(
  "feedback",
  mongoose.Schema({
    reg_no: {
      type: Number,
      required: true,
    },
    nov_score: {
      type: Number,
      required: true,
    },
    completion: {
      type: Number,
      required: true,
    },
    project_report: {
      type: Number,
      required: true,
    },
    presentation_skill: {
      type: Number,
      required: true,
    },
    viva: {
      type: Number,
      required: true,
    },
  })
);

module.exports = FeedbackModel;
