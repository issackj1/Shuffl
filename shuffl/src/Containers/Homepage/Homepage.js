import React, { Component } from 'react';
import logo from '../../shuffl_logo_white.png';
import TopBar from '../../components/TopBar';
import Banner from './Banner';
// import Button from 'react-bootstrap/Button';

class Homepage extends Component {

    componentDidMount(){

    }

    render() {
        return (
                
           
            <div className='parent'>
                <Banner />
                <div className='bottom'>
                
                </div>
            </div>
        )
    }
}

export default Homepage