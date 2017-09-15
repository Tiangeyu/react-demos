import React from 'react'
import BodyChild from './bodyChild'
import PropTypes from 'prop-types'

class IndexBody extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 123,
            sex: "man"
        }
        this.handlerChangeName = this.handlerChangeName.bind(this)
        this.handlerChangeSex = this.handlerChangeSex.bind(this)
    }

    handlerChangeName (setName) {
        this.setState({
            name: setName
        })
        // 此处输出的name还没有经过渲染呢 我擦
        // console.log(this.state.name)
    }   
    
    handlerChangeSex (setSex) {
        this.setState({
            sex: setSex
        })
        // console.log(this.state.sex)
    }


    render (){
        // console.log(this.state.name)
        // console.log(this.state.sex)
        return (
            <div>
                <BodyChild {...this.state} handlerChangeName={this.handlerChangeName}  handlerChangeSex={this.handlerChangeSex}></BodyChild>
            </div>
        )
    }
}

//  咋个不起作用呢 我日
IndexBody.PropTypes = {
    name : PropTypes.number.isRequired,
    sex : PropTypes.string.isRequired
}

export default IndexBody;