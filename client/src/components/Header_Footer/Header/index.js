import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MyButton from '../../utils/button';
import { logoutUser } from '../../../actions/user_actions';

class Header extends Component {

    state = {
        page:[
            {
                name: 'Home',
                linkTo: '/',
                public: true
            },
            {
                name: 'Guitars',
                linkTo: '/shop',
                public: true
            }
        ],
        user:[
            {
                name: 'My Cart',
                linkTo: '/user/cart',
                public: false
            },
            {
                name: 'My Account',
                linkTo: '/user/dashboard',
                public: false
            },
            {
                name: 'Log in',
                linkTo: '/register_login',
                public: true
            },
            {
                name: 'Log out',
                linkTo: '/user/logout',
                public: false
            },
        ]
    }

    logoutHandler = () =>{
        this.props.dispatch(logoutUser()).then(response =>{
            if(response.payload.success){
                    this.props.history.push('/')
            }
        })
    }

    cartLink = (item, i) => {
        const user = this.props.user.userData;
        return(
            <div  key={i}>
                    <span>{user.cart ? user.cart.length: 0}</span>
                    <MyButton
            type="default"
            title={item.name}
            linkTo={item.linkTo}
            key={i}
            addStyles={{
                display: 'inline-block'
            }}
           />
            </div>
        )
    }
 
    defaultLink = (item,i) =>(
        item.name === 'Log out' ? 
            // <div className="log_out_link"
            //     key={i}
            //     onClick={()=>this.logoutHandler()}
            // >
            // </div>
            <MyButton
            type="default"
            title="Log Out"
            functionIn={()=>this.logoutHandler()}
            key={i}
            
            
        />
        :
            <MyButton
            type="default"
            title={item.name}
            linkTo={item.linkTo}
            key={i}
            
            
        />
             
        
    )

    showLinks = (type) =>{
        let list = [];

        if(this.props.user.userData){
            type.forEach((item)=>{
                if(!this.props.user.userData.isAuth){
                    if(item.public === true){
                        console.log(item);
                        list.push(item)
                    }
                    }else{
                        if(item.name !== 'Log in'){
                            console.log(item);
                            list.push(item)
                        }
                    }
                
            });
        }
        return list.map((item,i)=>{
           if(item.name !== 'My Cart'){
               return this.defaultLink(item,i)
           }else{
               return this.cartLink(item,i)
           }
            
        })
    }

    render() {
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            WAVES
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            {this.showLinks(this.state.user)}
                        </div>
                        <div className="bottom">
                            {this.showLinks(this.state.page)}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(Header));