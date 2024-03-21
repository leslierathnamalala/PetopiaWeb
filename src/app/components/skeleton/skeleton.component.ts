import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  @Input() columnsIds: string[] = [];
  @Input() columnsNames: string[] = [];
  @Input() rows: Number = 1;
  rowsArray: number[] = [];
  columns: any[] = [];
  columnIds: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.rowsArray = Array.from({ length: Number(this.rows) }, (_, i) => i + 1);

    for (let i = 0; i < this.columnsIds.length; i++) {
      this.columns.push({ id: this.columnsIds[i], header: this.columnsNames[i] });
    }
    
    this.columnIds = this.columns.map(column => column.id);
  }
}
