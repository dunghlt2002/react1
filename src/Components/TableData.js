import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    
    // sao phuong phap nay khong works, phai dung phuong phap map ngay trong body //
    //mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
        //<TableDataRow key={key} stt={value.id} userName={value.name} tel={value.tel} permission={value.permission}></TableDataRow>
        //))
    

        deleteButtonClick = (idUser) => {
            ///console.log('xoa o table data a? ' + idUser);
            this.props.deleteUser(idUser);

        }

    render() {

        //console.log(this.props.dataUserProps);
        
        return (
        <div className="col">
            <table className="table table-striped table-inverse table-hover">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>Dien Thoai</th>
                    <th>Quyen</th>
                    <th>Thao tac</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.dataUserProps.map((value,key) => {
                            return (
                            <TableDataRow 
                                deleteButtonClick = {(idUser) => {this.deleteButtonClick(idUser)}}
                                editFunClick={(user) => this.props.editFun(value)}
                                changeEditUserStatus = {() => {this.props.changeEditUserStatus()}}
                                key={key} 
                                id={value.id}
                                // stt lay bang key thi uuid chay dung kho load data vao table
                                //con stt lay bang id la uuid khong theo so trong dulieu.json
                                stt={key}
                                userName={value.name}
                                tel={value.tel}
                                permission={value.permission}
                            /> 
                            
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        );
    }
}

export default TableData;