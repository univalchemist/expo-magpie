import React from 'react';
import AppContainer from './src/router/index'

const ReduxApp = ({ }) => {
    console.log('Hello World')
    return [
        <AppContainer key={1} uriPrefix="/app" />,
    ]
}

export default ReduxApp
