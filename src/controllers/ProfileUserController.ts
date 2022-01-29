import { Request, response, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";
// import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

class profileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const service = new ProfileUserService();

    const result = await service.execute(user_id);

    return res.json(result);
  }
}

export { profileUserController };
