import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core@1.1.0';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule.forRoot({
      apikey : 'AIzaSyB7OIRyXg5sDXgDAMPXkE_fTUUusLNBTc4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

