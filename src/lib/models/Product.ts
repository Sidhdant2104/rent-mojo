import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  category: "furniture" | "appliance";
  subCategory?: string;
  monthlyPrice: number;
  securityDeposit: number;
  imageUrl: string;
  isAvailable: boolean;
  stockQuantity: number;
  specifications: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    category: {
      type: String,
      enum: ["furniture", "appliance"],
      required: [true, "Please specify a category"],
    },
    subCategory: {
      type: String,
      trim: true,
    },
    monthlyPrice: {
      type: Number,
      required: [true, "Please provide a monthly price"],
      min: [0, "Price cannot be negative"],
    },
    securityDeposit: {
      type: Number,
      required: [true, "Please provide a security deposit amount"],
      min: [0, "Deposit cannot be negative"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide an image URL"],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
      default: 1,
      min: [0, "Stock cannot be negative"],
    },
    specifications: {
      type: Map,
      of: String,
      default: {},
    },
  },
  { timestamps: true }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
