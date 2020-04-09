import React from 'react';
import './header.styles.scss';


//create header
class Header extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    //render header title
    render() {
        return(
            <div>
                Flash Cards App By Steve!
            </div>
        );
    }
}

export default Header;