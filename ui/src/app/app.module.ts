import { SemanticMapComponent } from './components/term-processing/semantic-map/semantic-map.component';
import { WordsSimilarityComponent } from './components/term-processing/words-similarity/words-similarity.component';
import { TermProcessingComponent } from './components/term-processing/term-processing/term-processing.component';
import { AboutProcessingComponent } from './components/term-processing/about-processing/about-processing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Shared:
import { MatModule } from './mat.module';

// Components:
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { TabNavigationComponent } from './components/tab-nav/tab-nav.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TabNavigationComponent,
    AboutProcessingComponent,
    TermProcessingComponent,
    AboutComponent,
    WordsSimilarityComponent,
    SemanticMapComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
