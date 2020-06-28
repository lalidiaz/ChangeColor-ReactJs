import React from 'react'
import '../Button/Button.css';


class Button extends React.Component{
    constructor(props){
        super(props);

        this.state={
            color:'black'
        }
    }

    handleClick(){
        if( this.state.color != 'black'){
            this.setState({
                color:'black'
            }) 
        }else {
            this.setState({
            color:'white'
            })
            
        }
    }


    render(){
        return(
            <div>
                <p className={this.state.color}>“Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.”
                ― Carl Sagan, Cosmos</p>
                <button className='Boton' onClick={()=> this.handleClick()}>Change color</button>
            </div>
        )
    }
}

export default Button