import React from 'react'

export default function withContainer (Component, Container) {
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
