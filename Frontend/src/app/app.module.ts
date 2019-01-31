import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { environment } from '../environments/environment';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';
import { RegisterComponent } from './register/register.component';
import { FindWorkerComponent } from './find-worker/find-worker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatModelComponent } from './chat-model/chat-model.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RecoveryComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    RatingComponent,
    RegisterComponent,
    FindWorkerComponent,
    DropdownComponent,
    NotificationComponent,
    ChatModelComponent,
    MyJobsComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    NotificationService,
    AuthService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
