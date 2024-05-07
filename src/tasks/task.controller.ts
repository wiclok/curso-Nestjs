import { Controller, Get } from "@nestjs/common";

@Controller({})
export class taskController{

  @Get('/tasks')
  getAllTasks(){
    // Buscar en una bd
    // petición a otro backend o api

    return "Obteniendo todas las tareas";
  }

}
