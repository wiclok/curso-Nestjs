import { TaskService } from './task.service';
import { Controller, Get } from "@nestjs/common";

@Controller({})
export class taskController{

  constructor(private taskService: TaskService){}

  @Get('/tasks')
  getAllTasks(){

    return this.taskService.getTasks();

  }

}
