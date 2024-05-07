import { Module } from '@nestjs/common';
import { tasksModule } from "./tasks/tasks.module";
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ tasksModule, ProjectsModule ],
})
export class AppModule {}
