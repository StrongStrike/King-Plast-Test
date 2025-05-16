document.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const animatedEls = entry.target.querySelectorAll('[data-animate]')
					animatedEls.forEach(el => {
						el.classList.remove('opacity-0')
					})
					observer.unobserve(entry.target)
				}
			})
		},
		{
			threshold: 0.15,
		}
	)

	document.querySelectorAll('[data-observe]').forEach(section => {
		observer.observe(section)
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const toggle = document.getElementById('mobile-menu-toggle')
	const menu = document.getElementById('mobile-menu')

	if (toggle && menu) {
		toggle.addEventListener('click', () => {
			menu.classList.toggle('hidden')
		})
	}
})
  