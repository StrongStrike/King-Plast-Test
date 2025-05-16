import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core'
import { MotionService } from './motion.service'

@Directive({
	selector: '[motionTrigger]',
})
export class MotionDirective implements AfterViewInit {
	@Input('motionTrigger') className!: string

	constructor(private el: ElementRef, private motion: MotionService) {}

	ngAfterViewInit() {
		const nativeEl = this.el.nativeElement
		nativeEl.classList.add(
			'opacity-0',
			'transform',
			'transition-all',
			'duration-1000'
		)
		this.motion.observe(nativeEl, this.className)
	}
}
