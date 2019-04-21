import React from 'react';
import MyButton from '../components/utils/button'

const links = [
    {
        name: 'My account',
        linkTo: '/user/dashboard'
    },
    {
        name: 'User information',
        linkTo: '/user/user_profile'
    },
    {
        name: 'My Cart',
        linkTo: '/user/cart'
    },
]

const UserLayout = (props) => {

    const generateLinks = (links) => (
        links.map((item,i)=>(
            <MyButton
                    type="default"
                    title={item.name}
                    linkTo={item.linkTo}
                    key={i}
            />
        ))
    )


    return (
        <div className="container">
            <div className="user_container">
                <div className="user_left_nav">
                    <h2>My account</h2>
                    <div className="links">
                        { generateLinks(links)}
                    </div>
                </div>
                <div className="user_right">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default UserLayout;