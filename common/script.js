const navToggler = document.querySelectorAll('.toggler')
const topEl = document.querySelector('.top')
const navLinkToggler = document.querySelectorAll('.header-nav .main-link')
const navLinksEl = document.querySelectorAll('.nav-links')

navToggler.forEach((el) =>
	el.addEventListener('click', () => {
		topEl.classList.toggle('active')
	})
)

navLinkToggler.forEach((el, togglerIndex) =>
	el.addEventListener('click', () => {
		navLinksEl[togglerIndex].classList.toggle('active')
	})
)
