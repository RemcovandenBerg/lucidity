import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    public model: { email: string; wachtwoord: string; rememberme: boolean; };

    public loginForm: FormControl;

    ngOnInit(): void {
        this.model = { email: 'em', wachtwoord: 'ww', rememberme: true};
    }

    public onSubmit(): void {
        alert('YUUUUUUUUUUUUPPPP!!!');
        this.loginForm.reset();
    }
}
