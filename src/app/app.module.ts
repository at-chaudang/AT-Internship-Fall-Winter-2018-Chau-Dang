import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HealthServicesComponent } from './pages/health-services/health-services.component';
import { ItemServiceComponent } from './pages/health-services/item-service/item-service.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { HoverItemDirective } from './shared/directives/hover-item.directive';
import { LimitTextPipe } from './shared/pipes/limit-text.pipe';
import { ItemServiceOtherComponent } from './pages/health-services/item-service-other/item-service-other.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TemplateDrivenComponent } from './pages/forms/template-driven/template-driven.component';
import { ReactiveFormComponent } from './pages/forms/reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HealthServicesComponent,
    ItemServiceComponent,
    SidebarComponent,
    BreadcrumbComponent,
    HoverItemDirective,
    LimitTextPipe,
    ItemServiceOtherComponent,
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
