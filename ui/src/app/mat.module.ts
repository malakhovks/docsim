import { NgModule } from '@angular/core';

// Angular material imports:
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
// import { MatTabNav } from '@angular/material/tabs';


@NgModule({
  declarations: [],
  exports: [
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    // MatTabNav
  ],
  providers: [],
  bootstrap: []
})
export class MatModule { }
