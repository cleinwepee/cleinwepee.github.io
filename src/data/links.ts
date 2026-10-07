export interface Link {
  icon: string,
  name: string,
  url: string
}

export interface Social {
  name: string,
  url: string
}

export const links: Link[] = [
  { icon: 'fa-house', name: 'Home', url: '/' },
  { icon: 'fa-code', name: 'Projects', url: '/#projects' }
]

export const socials: Social[] = [
  { name: 'Facebook', url: 'https://www.facebook.com/Cleinentine/' },
  { name: 'GitHub', url: 'https://github.com/cleinwepee' }
]
