import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
	observe(element: Element, callback: () => void) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					callback()
					observer.disconnect()
				}
			},
			{ threshold: 0.1 }
		)

		observer.observe(element)
	}
}
