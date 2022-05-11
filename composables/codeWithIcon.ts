const icons: ILangs = {
  js: 'i-simple-icons-javascript',
  ts: 'i-simple-icons-typescript',
  html: 'i-simple-icons-html5',
  css: 'i-simple-icons-css3',
  sh: 'i-simple-icons-gnubash',
  vue: 'i-simple-icons-vuedotjs',
  svelte: 'i-simple-icons-svelte',
}

const withIcon = (_: string, p1: string) => {
  const split = p1.split('.')
  const format = split[split.length - 1]
  return `
    <div flex gap-2 style="padding: 5px 10px">
      <div op70 class="${icons[format as keyof ILangs]}"></div>
      <span op80>${p1}</span>
    </div>`
}

export const addIcons = (html: string) => {
  html = html.replaceAll(/<s>(.*)<\/s>/g, withIcon)
  return html
}

