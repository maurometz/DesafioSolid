/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const changedUser = this.turnUserAdminUseCase.execute({user_id});
      return response.status(200).json(changedUser);
    } catch (error) {
      return response.status(404).json({ error: "falhou fi"})
    }

  }
}

export { TurnUserAdminController };
