import { TaskService } from './task.service';
import { Controller, Get } from "@nestjs/common";

@Controller({})
export class taskController{
  taskService: TaskService;

  constructor(taskService: TaskService){
    this.taskService = taskService
  }

  @Get('/tasks')
  getAllTasks(){

    return this.taskService.getTasks();

  }

}
