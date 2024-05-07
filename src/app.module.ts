import { Module } from '@nestjs/common';
import { tasksModule } from "./tasks/tasks.module";
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ tasksModule, ProjectsModule, AuthModule ],
})
export class AppModule {}
