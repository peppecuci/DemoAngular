import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StockComponent} from "./stock/stock.component";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {PremiereComponent} from "./premiere/premiere.component";
import {PariteComponent} from "./components/parite/parite.component";
import {ContactComponent} from "./components/contact/contact.component";
import {InfoComponent} from "./components/info/info.component";

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'stock', component: StockComponent },
  { path: 'premiere', component: PremiereComponent },
  { path: 'parite/:nbr', component: PariteComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'info/:id', component: InfoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
