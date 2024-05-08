import { Module } from '@nestjs/common';
import { taskController } from "./task.controller";
import { TaskService } from './task.service';

@Module({
  controllers: [taskController],
  providers: [TaskService]
})
export class tasksModule {}
