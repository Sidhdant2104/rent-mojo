import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOrderItem {
  product: mongoose.Types.ObjectId;
  quantity: number;
  tenureMonths: number;
  monthlyPriceAtBooking: number;
}

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  items: IOrderItem[];
  status: "pending" | "approved" | "active" | "completed" | "cancelled";
  totalMonthlyRent: number;
  totalDeposit: number;
  deliveryAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  deliveryDate?: Date;
  returnDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
    tenureMonths: {
      type: Number,
      required: true,
      min: 1,
    },
    monthlyPriceAtBooking: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const OrderSchema: Schema<IOrder> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [OrderItemSchema],
    status: {
      type: String,
      enum: ["pending", "approved", "active", "completed", "cancelled"],
      default: "pending",
    },
    totalMonthlyRent: {
      type: Number,
      required: true,
    },
    totalDeposit: {
      type: Number,
      required: true,
    },
    deliveryAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
    deliveryDate: {
      type: Date,
    },
    returnDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
