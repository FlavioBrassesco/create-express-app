import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  name: String,
  value: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => v === "test",
      message: ({ value }) => `${value} is not "test"`,
    },
  },
});

export default mongoose.model("Test", testSchema);
