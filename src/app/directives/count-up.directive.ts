import {
	Directive,
	ElementRef,
	Input,
	AfterViewInit,
	Renderer2,
} from '@angular/core'

@Directive({
	selector: '[countUp]',
})
export class CountUpDirective implements AfterViewInit {
	@Input() endVal = 0
	private duration = 1500

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit(): void {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					this.animate()
					observer.disconnect()
				}
			},
			{ threshold: 0.4 }
		)

		observer.observe(this.el.nativeElement)
	}

	private animate(): void {
		let start = 0
		const step = Math.ceil(this.endVal / (this.duration / 16))

		const update = () => {
			start += step
			if (start >= this.endVal) {
				start = this.endVal
			}
			this.renderer.setProperty(
				this.el.nativeElement,
				'textContent',
				start.toLocaleString()
			)
			if (start < this.endVal) {
				requestAnimationFrame(update)
			}
		}

		requestAnimationFrame(update)
	}
}
