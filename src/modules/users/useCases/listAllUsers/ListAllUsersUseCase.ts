/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const list = this.usersRepository.list();

    const userUsed = this.usersRepository.findById(user_id);

    if(!userUsed){
      throw new Error("Mensagem do erro");
    } else if(userUsed.admin === false){
      throw new Error("Mensagem do erro");
    }

    return list;
  }
}

export { ListAllUsersUseCase };
