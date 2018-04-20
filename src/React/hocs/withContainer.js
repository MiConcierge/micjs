const React = require('react')

function withContainer (Component, Container) {
  function WithContainer (props) {
    return <Container {...props}>
      <Component {...props} />
    </Container>
  }

  const wrappedComponentName = Component.displayName ||
    Component.name ||
    'Component'

  WithContainer.displayName = `withContainer(${wrappedComponentName})`
  return WithContainer
}

module.exports = withContainer
