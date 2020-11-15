import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {ModalTriggerDirective} from './common/modalTrigger.directive';
import {SimpleModalComponent} from './common/simpleModal.component';
import {Error404Component} from './errors/404.component';

import { EventsAppComponent } from './events-app.component';
import {CreateSessionComponent} from './events/event-details/create-session.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {SessionListComponent} from './events/event-details/session-list.component';
import {UpvoteComponent} from './events/event-details/upvote.component';
import {VoterService} from './events/event-details/voter.service';
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import {DurationPipe} from './events/shared/duration.pipe';
import { NavbarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {CreateEventComponent} from "./events/create-event.component";
import {AuthService} from './user/auth.service';
import { JQ_TOKEN } from './common';
import {UserModule} from './user/user.module';

let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    AuthService,
    { provide: JQ_TOKEN, useValue: jQuery},
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
