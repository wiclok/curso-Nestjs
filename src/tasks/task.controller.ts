import { Controller } from "@nestjs/common";

@Controller({})
export class taskController{
  getAllTasks(){
    return "Obteniendo todas las tareas";
  }
}