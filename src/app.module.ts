import { Module } from '@nestjs/common';
import { tasksModule } from "./tasks/tasks.module";
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ tasksModule, ProjectsModule, AuthModule, UsersModule ],
})
export class AppModule {}
