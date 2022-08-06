export namespace DocsViewer {
  export interface DataSource {
    name: string;
    description: string;
    default: string;
  }

  export interface TableConfig {
    field: string;
    header: string;
  }
}
