import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission


        }
        
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        //const tel =  event.target.tel;
        //const permission =  event.target.permission;
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        //console.log('info o edituser la ' + info.name);
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();

    }

    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col">
                        <form method="post">
                            <div className="card text-white bg-warning mb-3 mt-2">
                                <div className="card-header text-center">Edit user information</div>
                                <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => {this.isChange(event)}} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control form-control-sm" placeholder="Fill user name" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => {this.isChange(event)}} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control form-control-sm"  placeholder="Phone numner" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => {this.isChange(event)}} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" required>
                                    <option value>Select default permission</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Regular user</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-danger" value="Save" onClick={() => this.saveButton()}></input>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;