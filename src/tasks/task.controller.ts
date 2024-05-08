import { TaskService } from './task.service';
import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param } from "@nestjs/common";

@Controller('/tasks')
export class taskController{

  constructor(private taskService: TaskService){}

  @Get()
  getAllTasks(@Query() query: any){
    console.log(query)
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTasks(@Param('id') id: string){
    console.log(id)
    return this.taskService.getTasks(parseInt(id));
  }

  @Post()
  createTask(@Body() task: any){
    return this.taskService.createTasks(task);
  }

  @Put()
  updateTask(){
    return this.taskService.updateTask();
  }

  @Delete()
  deleteTask(){
    return this.taskService.deleteTask();
  }
  @Patch()
  updateTaskStatus(){
    return this.taskService.updateTaskStatus();
  }

}
