import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { OtherComponent } from './other/other.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
    declarations: [AppComponent, TestComponentComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TestComponent,
        OtherComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
