import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { VinosComponent } from './pages/vinos/vinos.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { CtaComponent } from './shared/cta/cta.component';
import { FactsComponent } from './shared/facts/facts.component';
import { SponsorsComponent } from './shared/sponsors/sponsors.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    VinosComponent,
    ContactFormComponent,
    CtaComponent,
    FactsComponent,
    SponsorsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
