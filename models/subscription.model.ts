import { Schema, model, type InferSchemaType } from "mongoose";

const subscriptionSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    type: {
      type: String,
      enum: ["yearly", "monthly"],
      required: true,
    },
    billingDayOfMonth: { type: Number, required: true, min: 1, max: 31 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export type Subscription = InferSchemaType<typeof subscriptionSchema>;

export const SubscriptionModel = model("Subscription", subscriptionSchema);
