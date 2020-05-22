import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">DD Trading Blog</h1>
                    <h4 className="display-5">User Management</h4>
                    <p className="lead"> Su dung React JS - Du lieu Json</p>
                    <hr className="my-2" />
                </div>
            </div>

        );
    }
}

export default Header;
