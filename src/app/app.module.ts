import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { CachedHttpModule } from '../modules/cached-http/cached-http.module';


@NgModule({
	imports: [
    CommonModule,
    HttpModule,
    CachedHttpModule,
		RouterModule.forRoot([
			{ path: '', component: HomeView, pathMatch: 'full'},
			// { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'} // Currently seems broken
		])
	],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
	declarations: [ AppComponent, HomeView ],
  exports: [ AppComponent ]
})
export class AppModule {}
