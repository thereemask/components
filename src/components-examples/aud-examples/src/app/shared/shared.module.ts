import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocsViewerComponent} from './docs-viewer/docs-viewer.component';

@NgModule({
  declarations: [DocsViewerComponent],
  imports: [CommonModule],
  exports: [DocsViewerComponent],
})
export class SharedModule {}
