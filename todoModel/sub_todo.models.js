import mongoose from "mongoose";

const SubTodoSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    todoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
    title: {
      type: String,
      required: [true, "Please provide a title."],
    },
    description: {
      type: String,
      required: [true, "Please provide a description."],
    },
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", SubTodoSchema);
