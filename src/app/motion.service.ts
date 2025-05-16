import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class MotionService {
	observe(element: Element, className: string) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					element.classList.add(className)
					element.classList.remove('opacity-0', 'translate-y-10') // убираем начальные стили
					observer.unobserve(entry.target) // безопаснее, чем disconnect()
				}
			},
			{ threshold: 0.15 }
		)

		observer.observe(element)
	}
}
