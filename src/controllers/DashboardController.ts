import { Request, Response } from 'express';

import DashboardIndexService from '../services/DashboardService';

class DashBoardController {
  async index(request: Request, response: Response) {
    const dashboardService = new DashboardIndexService();

    const data = await dashboardService.execute();

    return response.status(200).json(data);
  }
}

export default DashBoardController;