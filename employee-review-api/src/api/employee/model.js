import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    fullname: {
      type: String
    },
    email: {
      type: String,
      unique: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      }
    }
  }
);

employeeSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      fullname: this.fullname,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };

    return full
      ? {
          ...view
          // add properties for a full view
        }
      : view;
  }
};

const model = mongoose.model("Employee", employeeSchema);

export const schema = model.schema;
export default model;
