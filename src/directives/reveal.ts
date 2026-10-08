import type { Directive } from 'vue'

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    el.classList.add('opacity-0')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return

        el.style.animationDelay = `${binding.value ?? 0}ms`
        el.classList.remove('opacity-0')
        el.classList.add('animate-fade-in-down')

        observer.disconnect()
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    observers.set(el, observer)
  },

  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}
