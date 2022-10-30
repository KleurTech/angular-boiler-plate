import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-lib-grid',
  templateUrl: './lib-grid.component.html',
  styleUrls: ['./lib-grid.component.scss']
})
export class LibGridComponent implements OnInit {
  @Input() rowData: any;
  @Input() rowDataCopy: any;
  @Input() columnDefs: any;
  @Output() onRowSelected: EventEmitter<any> = new EventEmitter<any>();
  gridApi: any;
  gridOptions: any;
  rowSelection: string;
  defaultColDef = { resizable: true };
  gridColumnApi: any;

  constructor() {
    this.rowSelection = 'single';
  }
  ngOnInit(): void {
  }

  getSelectedRowData() {
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node: { data: any }) => node.data);
    if (selectedData.length) {
      this.onRowSelected.emit([this.rowData.find((n: { id: any; }) => n.id === selectedData[0].id)]);
    }
  }

  autoSizeAll(skipHeader: any) {
    const allColumnIds: any[] = [];
    this.gridColumnApi.getAllColumns().forEach((column: { colId: any }) => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.autoSizeAll(false);
    let allColumnIds: any[] = [];
    this.gridOptions?.columnApi
      .getAllColumns()
      .forEach((column: { getId: () => any }) => {
        allColumnIds.push(column.getId());
      });

    this.gridOptions?.columnApi.autoSizeColumns(allColumnIds, params);
  }
  
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }
}
