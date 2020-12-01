import { SemanticMapComponent } from './semantic-map/semantic-map.component';
import { TermProcessingComponent } from './term-processing/term-processing.component';
import { BrowserModule } from '@angular/platform-browser';
import { AboutProcessingComponent } from './about-processing/about-processing.component';
import { MatModule } from './../../mat.module';
import { TermProcessingRoutingModule } from './term-processing-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    TermProcessingRoutingModule,
    MatModule,
    CommonModule,
  ],
  declarations: [
    AboutProcessingComponent,
    TermProcessingComponent,
    SemanticMapComponent
  ],
  exports: [
    TermProcessingModule
  ]
})
export class TermProcessingModule { }
