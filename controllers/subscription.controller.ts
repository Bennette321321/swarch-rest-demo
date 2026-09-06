import type { Request, Response } from "express";
import { subscriptionRepository } from "../repositories/subscription.repository";
import type {
  CreateSubscriptionBody,
  CreateSubscriptionResponse,
  DeleteSubscriptionResponse,
  GetAllSubscriptionResponse,
  GetOneSubscriptionResponse,
  UpdateSubscriptionBody,
  UpdateSubscriptionResponse,
} from "../dtos/subscription.dto";

const errMsg = (err: unknown): string =>
  err instanceof Error ? err.message : "unknown error";

export const subscriptionController = {
  getAll: async (
    req: Request,
    res: Response<GetAllSubscriptionResponse>,
  ): Promise<void> => {
    try {
      const subscriptions = await subscriptionRepository.getAll();
      res.status(200).json({ success: true, data: subscriptions, error: null });
    } catch (err) {
      res.status(500).json({ success: false, data: [], error: errMsg(err) });
    }
  },

  create: async (
    req: Request<{}, {}, CreateSubscriptionBody>,
    res: Response<CreateSubscriptionResponse>,
  ): Promise<void> => {
    try {
      const subscription = await subscriptionRepository.create(req.body);
      res.status(201).json({ success: true, data: subscription, error: null });
    } catch (err) {
      res.status(500).json({ success: false, data: null, error: errMsg(err) });
    }
  },

  getOne: async (
    req: Request<{ id: string }>,
    res: Response<GetOneSubscriptionResponse>,
  ): Promise<void> => {
    try {
      const subscription = await subscriptionRepository.getOne(req.params.id);
      if (!subscription) {
        res.status(404).json({
          success: false,
          data: null,
          error: "subscription not found",
        });
        return;
      }
      res.status(200).json({ success: true, data: subscription, error: null });
    } catch (err) {
      res.status(500).json({ success: false, data: null, error: errMsg(err) });
    }
  },

  update: async (
    req: Request<{ id: string }, {}, UpdateSubscriptionBody>,
    res: Response<UpdateSubscriptionResponse>,
  ): Promise<void> => {
    try {
      const subscription = await subscriptionRepository.update(
        req.params.id,
        req.body,
      );
      if (!subscription) {
        res.status(404).json({
          success: false,
          data: null,
          error: "subscription not found",
        });
        return;
      }
      res.status(200).json({ success: true, data: subscription, error: null });
    } catch (err) {
      res.status(500).json({ success: false, data: null, error: errMsg(err) });
    }
  },

  delete: async (
    req: Request<{ id: string }>,
    res: Response<DeleteSubscriptionResponse>,
  ): Promise<void> => {
    try {
      const subscription = await subscriptionRepository.delete(req.params.id);
      if (!subscription) {
        res.status(404).json({
          success: false,
          data: null,
          error: "subscription not found",
        });
        return;
      }
      res.status(200).json({ success: true, data: subscription, error: null });
    } catch (err) {
      res.status(500).json({ success: false, data: null, error: errMsg(err) });
    }
  },
};
