const PROD_URL = 'https://erianvc.dev/'
const DEV_URL = 'http://localhost:3000/'
const dev = process.env.NODE_ENV === 'development'

const getBaseURL = () => (!dev ? PROD_URL : DEV_URL)

export default getBaseURL
