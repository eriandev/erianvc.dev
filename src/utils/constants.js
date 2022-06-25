const PROD_URL = 'https://erianvc.dev/'
const DEV_URL = 'http://localhost:3000/'
const dev = process.env.NODE_ENV === 'development'

export const BASE_URL = !dev ? PROD_URL : DEV_URL

export const SOCIALS = {
  DEVTO: 'https://dev.to/eriandev',
  GITHUB: 'https://github.com/eriandev',
  TWITTER: 'https://twitter.com/eriandev',
  LINKEDIN: 'https://www.linkedin.com/in/eriandev',
}

export const QR_DATA = [
  {
    link: 'https://www.linkedin.com/in/eriandev/',
    msg: 'More about me on Linkedin',
  },
  {
    link: 'https://t.me/eriandev/',
    msg: "Let's talk throught Telegram!",
  },
  {
    link: 'mailto:erianvc.dev@gmail.com',
    msg: 'Or send me an email',
  },
]
