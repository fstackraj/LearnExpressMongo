import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", TodoSchema);
