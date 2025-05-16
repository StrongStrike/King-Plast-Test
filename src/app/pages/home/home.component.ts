import { Component } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['../../../styles.scss'],
})
export class HomeComponent {
	reviews = [
		{
			text: 'Отличное качество панелей и быстрая доставка. Рекомендую!',
			author: 'Ирина К.',
		},
		{
			text: 'Дизайн на высоте! Панели превзошли мои ожидания.',
			author: 'Максим Л.',
		},
		{
			text: 'Понравилось обслуживание и материалы. Будем брать ещё.',
			author: 'Гульнара Т.',
		},
	]
}
