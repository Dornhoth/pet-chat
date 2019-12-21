import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogItemComponent } from './components/dog-item/dog-item.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { CatItemComponent } from './components/cat-item/cat-item.component';
import { MemberItemComponent } from './components/member-item-container/member-item-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersListComponent,
    DogItemComponent,
    CatItemComponent,
    MemberItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    DogItemComponent,
    CatItemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
