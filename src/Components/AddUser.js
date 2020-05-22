import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }
    
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            [name]: value
        });
        // package item - dinh dong goi vao item o day, nhung sau do dong goi o APP daddy
        //var item = {};
        //item.id = this.state.id;
        //item.name = this.state.name;
        //item.tel = this.state.tel;
        //item.permission = this.state.permission;

        
    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="col">
                <form method="post">
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Add new user</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" onChange={(event) => {this.isChange(event)}} name="name" className="form-control form-control-sm" placeholder="Fill user name" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={(event) => {this.isChange(event)}} name="tel" className="form-control form-control-sm"  placeholder="Phone numner" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" onChange={(event) => {this.isChange(event)}} name="permission" required>
                            <option value>Select default permission</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Regular user</option>
                            </select>
                            <div className="invalid-feedback">Example invalid custom select feedback</div>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,permission) => this.props.add(this.state.name,this.state.tel,this.state.permission)} value="Them Moi"></input>
                        </div>
                        </div>
                    </div>
                </form>
                </div>
            )
        }
    }
    render() {
        //console.log(this.state);
        return (
            <div>
                {
                    this.kiemTraTrangThai()
                }
            </div>
            


        );
    }
}

export default AddUser;