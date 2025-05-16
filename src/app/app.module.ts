// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes, ExtraOptions } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { SharedModule } from './shared/shared.module'
import { CategoriesComponent } from './pages/categories/categories.component' // ✅ можно оставить

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'категории', component: CategoriesComponent }, // ❗️если standalone, можно использовать напрямую
]

const routerOptions: ExtraOptions = {
	scrollPositionRestoration: 'enabled',
	anchorScrolling: 'enabled',
	scrollOffset: [0, 0],
}

@NgModule({
	declarations: [AppComponent, HomeComponent], // ❌ НЕ добавляй CategoriesComponent сюда
	imports: [
		BrowserModule,
		SharedModule,
		RouterModule.forRoot(routes, routerOptions),
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
