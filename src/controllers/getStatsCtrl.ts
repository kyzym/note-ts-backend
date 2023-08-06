import { Request, Response } from 'express';
import { getStats } from '../services/getStats.js';

export const getStatsCtrl = async (_: Request, res: Response) => {
  const stats = await getStats();

  res.json({
    status: 'success',
    code: 200,
    data: {
      stats,
    },
  });
};
