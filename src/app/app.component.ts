import { Component, HostListener, NgZone, OnInit } from '@angular/core'
import * as AOS from 'aos'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['../styles.scss'],
})
export class AppComponent implements OnInit {
	scrolled = false
	mobileOpen = false
	helpFormOpen = false
	hoveringHelp = false
	screenWidth: number = window.innerWidth
	isDarkMode: boolean = false

	constructor(private ngZone: NgZone) {
		const theme = localStorage.getItem('theme')
		this.isDarkMode = theme === 'dark';
		document.body.classList.toggle('dark', this.isDarkMode);
	}

	ngOnInit() {
		this.updateWidth() // начальное значение

		window.addEventListener('resize', () => {
			this.ngZone.run(() => {
				this.updateWidth()
			})
		})

		AOS.init({ duration: 1000, once: true })
	}

	updateWidth() {
		this.screenWidth = window.innerWidth
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.scrolled = window.scrollY > 40
	}

	toggleMobile() {
		this.mobileOpen = !this.mobileOpen
	}

	closeMobile() {
		this.mobileOpen = false
	}

	toggleHelpForm() {
		this.helpFormOpen = !this.helpFormOpen
	}

	toggleTheme() {
		this.isDarkMode = !this.isDarkMode
		document.body.classList.toggle('dark', this.isDarkMode)
		localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
	}
}
