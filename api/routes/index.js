import { json } from 'body-parser'
import setup from './setupRoute'

export default app => {
    app.use(json())
    app.use(setup)

}