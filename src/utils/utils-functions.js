export function handleScrollIntoView(e, onClose){
    const el = e.target
    const href = el.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({behavior: 'smooth'})
    onClose()
  }
