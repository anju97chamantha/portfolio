import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: 'achievements', component: AchievementsComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AchievementsComponent, ProjectsComponent]
