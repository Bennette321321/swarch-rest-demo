import type { Subscription } from "../models/subscription.model";
import type { APIResponse } from "./response.dto";

export type GetAllSubscriptionResponse = APIResponse<Subscription[]>;

export interface CreateSubscriptionBody {
  name: string;
  description?: string;
  price: number;
  type: "yearly" | "monthly";
  billingDayOfMonth: number;
}

export type CreateSubscriptionResponse = APIResponse<Subscription>;

export interface UpdateSubscriptionBody {
  name?: string;
  description?: string;
  price?: number;
  type?: "yearly" | "monthly";
  billingDayOfMonth?: number;
}

export type UpdateSubscriptionResponse = APIResponse<Subscription>;
