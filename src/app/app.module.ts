import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


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
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
