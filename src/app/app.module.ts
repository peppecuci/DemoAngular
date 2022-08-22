import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremiereComponent } from './premiere/premiere.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { StockComponent } from './stock/stock.component';
import { AvailablePipe } from './pipes/available.pipe';
import { MinmaxPipe } from './pipes/minmax.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PremiereComponent,
    StockComponent,
    AvailablePipe,
    MinmaxPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
