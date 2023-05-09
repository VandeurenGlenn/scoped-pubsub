import one from './one.js'
import two from './two.js'

two.subscribe('wohooo', data => console.log(data))

one.publish('wohooo', true)

