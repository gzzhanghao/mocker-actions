import { action } from '../utils'

export default action(json => (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  res.end(JSON.stringify(json))
  return false
})