import mongoose from "mongoose";
import formatPrice from "../utils/formatPrice.js";

const { String, Number, Boolean } = mongoose.Schema.Types;

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      set: formatPrice
    },
    shortDesc: {
      type: String
    },
    description: [
      {
        type: String
      }
    ],
    imageURL: {
      type: String
    },

    videos: [
      {
        name: {
          type: String
        },
        runtime: {
          type: Number
        },
        Url: {
          type: String
        }
      }
    ],

    status: {
      type: String,
      enum: [ "active", "hidden" ]
    }
  },
  {
    versionKey: false
  }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
