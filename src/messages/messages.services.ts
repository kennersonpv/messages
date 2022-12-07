import { MessagesRepository } from "./messages.repository";
export class MessagesService{
  messagesRespository: MessagesRepository

  constructor(){
    this.messagesRespository = new MessagesRepository();
  }

  async findOne(id:string){
    return await this.messagesRespository.findOne(id);
  }

  async findAll(){
    return await this.messagesRespository.findAll();
  }

  async create(content: string) {
    return await this.messagesRespository.create(content);
  }
}