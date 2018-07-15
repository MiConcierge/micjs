export default function composeM (method) {
  return (...ms) => ms.reduce((f, g) => x => g(x)[method](f))
}
