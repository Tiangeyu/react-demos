import React from 'react';

export default class IndexHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: new Date(),
            data: {}
        }
    }
    componentWillMount() {
        fetch('/wxshop/base/queryAllMessages')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                data:data
            })
        })
        .catch((e)=>console.log(e))
    }

    componentDidMount() {

       
                        
        this.timerId = setInterval(() => this.tick(),1000)

        
    }

    componentWillUnmount() {
        alert(111)
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            title: new Date()
        })
    }

    render (){
        return(
            <header>
                <p>hello world, my type is {this.state.title.toLocaleTimeString()}</p>
                <a href="https://www.baidu.com">百度</a>
                <div>{this.state.data.result}</div>
                <div>{this.state.data.data[0].title}</div>
            </header>
        )
    }
}