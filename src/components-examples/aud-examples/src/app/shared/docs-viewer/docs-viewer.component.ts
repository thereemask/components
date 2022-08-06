import {Component, Input} from '@angular/core';
import {DocsViewer} from './docs-viewer.model';

@Component({
  selector: 'app-docs-viewer',
  templateUrl: './docs-viewer.component.html',
  styleUrls: ['./docs-viewer.component.scss'],
})
export class DocsViewerComponent {
  @Input() dataSource = [];

  tableConfigs: DocsViewer.TableConfig[] = [
    {field: 'name', header: 'Name'},
    {field: 'description', header: 'Descrition'},
    {field: 'default', header: 'Default'},
  ];
}
