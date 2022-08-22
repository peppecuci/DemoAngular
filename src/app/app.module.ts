import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremiereComponent } from './premiere/premiere.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { StockComponent } from './stock/stock.component';
import { AvailablePipe } from './pipes/available.pipe';
import { MinmaxPipe } from './pipes/minmax.pipe';
import {AppRoutingModule} from "./app-routing-module";
import { AccueilComponent } from './components/accueil/accueil.component';
import { PariteComponent } from './components/parite/parite.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';
import { FilterByIdPipe } from './pipes/filter-by-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PremiereComponent,
    StockComponent,
    AvailablePipe,
    MinmaxPipe,
    AccueilComponent,
    PariteComponent,
    ContactComponent,
    InfoComponent,
    FilterByIdPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
