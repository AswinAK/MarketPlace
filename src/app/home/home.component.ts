/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import {StuffService} from '../stuff.service';
import {Item} from "../item"

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [StuffService]
})
export class HomeComponent {

    private items: Item[]=[]

    constructor(private stuffService: StuffService) {
        this.items = stuffService.getAllStuff();
      }

}
