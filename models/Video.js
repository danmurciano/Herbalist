import mongoose from "mongoose";

const { String, Number } = mongoose.Schema.Types;

const VideoSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: true
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  }
});

export default mongoose.models.Video ||
  mongoose.model("Video", VideoSchema);
