import {
  SubscriptionModel,
  type Subscription,
} from "../models/subscription.model";
import type {
  CreateSubscriptionBody,
  UpdateSubscriptionBody,
} from "../dtos/subscription.dto";

export const subscriptionRepository = {
  getAll: (): Promise<Subscription[]> => SubscriptionModel.find().lean(),

  create: (data: CreateSubscriptionBody): Promise<Subscription> =>
    SubscriptionModel.create(data).then((doc) => doc.toObject()),

  update: (
    id: string,
    data: UpdateSubscriptionBody,
  ): Promise<Subscription | null> =>
    SubscriptionModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).lean(),
};
