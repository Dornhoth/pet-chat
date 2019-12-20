import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogItemComponent } from './components/dog-item/dog-item.component';
import { MembersListComponent } from './components/members-list/members-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogItemComponent,
    MembersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
