import React from 'react'
import Header from './header'
import Body from './body'

class Index extends React.Component{
    render() {
        return(
            <div>
            <Header></Header>
            <Body></Body>
            <div>
                {this.props.children}
            </div>
        </div>
        )
    }
} 

export default Index;