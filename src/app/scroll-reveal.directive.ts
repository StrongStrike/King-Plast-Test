import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core'
import { ScrollRevealService } from './scroll-reveal.service'

@Directive({
	selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit {
	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
		private scrollService: ScrollRevealService
	) {}

	ngAfterViewInit() {
		const nativeEl = this.el.nativeElement
		const animateType = nativeEl.getAttribute('data-animate')

		// Явно указываем, что cls — это строка
		const delayClass =
			(Array.from(nativeEl.classList) as string[]).find(cls =>
				cls.startsWith('delay-')
			) || ''

		this.renderer.addClass(nativeEl, 'opacity-0')

		this.scrollService.observe(nativeEl, () => {
			this.renderer.removeClass(nativeEl, 'opacity-0')

			if (animateType) {
				this.renderer.addClass(nativeEl, `animate-${animateType}`)
			}

			if (delayClass) {
				this.renderer.addClass(nativeEl, delayClass)
			}
		})
	}
}
