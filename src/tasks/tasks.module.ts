import { Module } from '@nestjs/common';
import { taskController } from "./task.controller";

@Module({
  controllers: [taskController]
})
export class tasksModule {}
