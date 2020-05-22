import React, { Component } from 'react';

class TableDataRow extends Component {

    deleteButtonClick = (idUser) => {
        //console.log('muon xoa ' + id);
        this.props.deleteButtonClick(idUser)
    }

    permissionShow = () => {
        if(this.props.permission === 1) {return "Admin ";}
        else if (this.props.permission === 2) {return "Moderator ";}
        else {return "Regular user ";}
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    render() {
        //console.log("o day co gi " + this.props.stt)

        return (
            
                <tr>
                    <td>{this.props.stt+1}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.tel}</td>
                    <td>{this.permissionShow()}</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" 
                        onClick={() => this.editClick()}><i className="fa fa-edit" />Sua</div>
                        <div onClick={(idUser) => this.deleteButtonClick(this.props.id)} className="btn btn-danger xoa"><i className="fa fa-delete" />Xoa</div>
                    </div>
                    </td>
                </tr>
            
        );
    }
}

export default TableDataRow;