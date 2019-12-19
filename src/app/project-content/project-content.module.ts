import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectContentComponent } from './project-content.component';

@NgModule({
  declarations: [ProjectContentComponent],
  exports: [ProjectContentComponent],
  imports: [CommonModule],
})
export class ProjectContentModule {}
