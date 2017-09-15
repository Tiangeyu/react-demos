import React from 'react';
import {Link} from 'react-router'

export default class IndexHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: new Date()
        }
    }
    componentWillMount() {
        fetch('/wxshop/base/queryAllMessages')
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            this.setState({
                data:data.data[0].title
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
                <div>{this.state.data}</div>
                <ul>
                    <li><Link to={'/'}>首页</Link></li>
                    <li><Link to={'/list'}>列表页</Link></li>
                    <li><Link to={'/RouterPart'}>嵌套版块</Link></li>
                </ul>
            </header>
        )
    }
}