import { Module } from '@nestjs/common';
import { tasksModule } from "./tasks/tasks.module";

@Module({
  imports: [ tasksModule ],
})
export class AppModule {}
