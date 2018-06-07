/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ClarityModule } from '@clr/angular';
import { DashboardComponent } from "./dashboard.component";



describe('DashboardComponent', () => {

    let expectedMsg: string = 'nothing to show you yet';

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent
            ],
            imports: [
                ClarityModule.forRoot()
            ]
        });

        fixture = TestBed.createComponent(DashboardComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the home page', async(() => {
        expect(compiled).toBeTruthy();
    }));

    it(`should contain: "${expectedMsg}"`, async(() => {
        let allp = '';
        compiled.querySelectorAll("p").forEach(a=> allp += a.textContent);
        expect(allp).toContain(expectedMsg);
    }));


});
