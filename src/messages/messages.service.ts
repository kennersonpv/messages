import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService{
  constructor(public messagesRespository: MessagesRepository){
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