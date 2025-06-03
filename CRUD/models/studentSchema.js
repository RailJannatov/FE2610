import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: "This is must" },
  surname: { type: String, required: "This is must" },
  age: { type: Number },
  lesson: { type: String },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
