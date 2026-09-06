import {
  SubscriptionModel,
  type Subscription,
} from "../models/subscription.model";
import type { CreateSubscriptionBody } from "../dtos/subscription.dto";

export const subscriptionRepository = {
  getAll: (): Promise<Subscription[]> => SubscriptionModel.find().lean(),

  create: (data: CreateSubscriptionBody): Promise<Subscription> =>
    SubscriptionModel.create(data).then((doc) => doc.toObject()),
};
