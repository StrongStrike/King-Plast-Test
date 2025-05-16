import { Component } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'

@Component({
	standalone: true,
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
	imports: [SharedModule], // ✅ добавили, чтобы использовать директивы и компоненты
})
export class CategoriesComponent {}
