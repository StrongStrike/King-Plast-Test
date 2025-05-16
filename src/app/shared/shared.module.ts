// 📁 src/app/shared/shared.module.ts
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Директивы
import { ScrollRevealDirective } from '../scroll-reveal.directive'
import { MotionDirective } from '../motion.directive'
import { CountUpDirective } from '../directives/count-up.directive'

// Компоненты
import { ChatWidgetComponent } from '../components/chat-widget/chat-widget.component'

@NgModule({
	declarations: [
		ScrollRevealDirective,
		MotionDirective,
		CountUpDirective,
		ChatWidgetComponent,
	],
	imports: [CommonModule],
	exports: [
		ScrollRevealDirective,
		MotionDirective,
		CountUpDirective,
		ChatWidgetComponent,
		CommonModule,
	],
})
export class SharedModule {}
