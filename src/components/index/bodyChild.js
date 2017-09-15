import React from 'react';
import '../../common/css/index/bodyChild.css'

class BodyChild extends React.Component{
    constructor(props){
        super();
        this.handlerChangeNameChild = this.handlerChangeNameChild.bind(this)
        this.handlerChangeSexChild = this.handlerChangeSexChild.bind(this)
    }

    handlerChangeNameChild(e){
        this.props.handlerChangeName(e.target.value)
    }
    handlerChangeSexChild (e) {
        this.props.handlerChangeSex(e.target.value)
    }

    render() {
        const inputStyle = {
            display: 'block',
            fontSize : '20px',
            height: '30px',
            lineHeight: '30px',
            border: '1px solid #ccc',
            borderRadius: "3px",
            padding: '5px',
            marginTop: '10px'
        }

        let name = this.props.name;
        let sex = this.props.sex;

        return (
            <div>
                <input style={inputStyle} value={name} onChange={this.handlerChangeNameChild} />
                <p>{this.props.name}</p>
                <input style={inputStyle} value={sex} onChange={this.handlerChangeSexChild}/>
                <p>{this.props.sex}</p>
                {/* <button >状态提升</button> */}
            </div>
        )
    }
}

export default BodyChild;