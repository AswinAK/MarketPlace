import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import {StuffService} from "./stuff.service";
import { ItemDisplayComponent } from './item-display/item-display.component';
import { SellItemComponent } from './sell-item/sell-item.component'


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ItemDisplayComponent,
        SellItemComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [StuffService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
