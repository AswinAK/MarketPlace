/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { SellItemComponent } from './sell-item/sell-item.component';

import { HomeComponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'sellpage', component: SellItemComponent},
    {path: 'exchange', component: ExchangeComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
