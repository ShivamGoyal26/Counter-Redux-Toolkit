import React from 'react'
import { View, Text } from 'react-native'
import store from './Redux/Store'
import { Provider } from 'react-redux'

import Counter from './Screens/Counter'

const App = props => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App