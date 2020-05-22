import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import {v1 as uuidv1 } from 'uuid';

//uuid phai nam sau import
//var uuid = require('uuid');
//const uuidv1 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm: false,
      data: [],
      searchText:'',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  componentWillMount() {
    // kiem tra xem localStorage co chua
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData',JSON.stringify(DataUser));
      //localStorage.setItem('userData',[]);
      //console.log('userData la rong');
      //JSON.stringify(DataUser)
    }
    else {
      console.log('userData la dac');
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }

  }

  deleteUser = (idUser) => {
    // try to use filter built-in function
    //var tempData = this.state.data;
    //tempData = tempData.filter(item => item.id != idUser);
    // viet ngan gon lai
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    // day vao du lieu localStorage
    localStorage.setItem('userData',JSON.stringify(tempData));
    console.log('xoa roi');
 }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : ! this.state.editUserStatus
    });
  }

  getUserEditInfoInApp = (info) => {
    console.log(info.name);
    this.state.data.forEach((value,key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  editUser = (user) => {
    console.log('ket noi roi nhe');
    //console.log(user);
    this.setState({
      userEditObject: user
    })

  }

  getNewUserData = (name,tel,permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;

    var items = this.state.data;
    this.setState({
      data: items
    })
    items.push(item)
    localStorage.setItem('userData',JSON.stringify(item));
    //console.log('ok noi roi');
    //console.log(this.state.data);

    // luu du  lieu vao data.json

    
  }
  
  getTextSearch = (dl) => {
    this.setState ({
      searchText: dl
    })
    
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }

  //thongBao = () => {alert("Ket noi thanh cong");}


  render() {

    // test localStorage
    // localStorage.setItem("key1","ha ha");
    // console.log('local ne' + localStorage.getItem("key1"));
    // localStorage.removeItem('key1');
    // // end test local storage


    
    var ketqua = []
    this.state.data.forEach((item)=>{
       if(item.name.indexOf(this.state.searchText) !== -1) {
         ketqua.push(item);
       }
    })
    
    
    //console.log(ketqua)

    //console.log(this.state.data);

    return (
      
      <div>
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              
              <Search
              
              getUserEditInfoInApp = {(info) => {this.getUserEditInfoInApp(info)}}
              userEditObject={this.state.userEditObject}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus = {() => {this.changeEditUserStatus()}}
              checkConnectProps =  {(dlfromChild) => this.getTextSearch(dlfromChild)}
              ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>
              <TableData 
              deleteUser = {(idUser) => {this.deleteUser(idUser)}}
              changeEditUserStatus = {() => {this.changeEditUserStatus()}}
              editFun={(user) => this.editUser(user)} dataUserProps={ketqua}/>
              <AddUser  add={(name,tel,permission) => this.getNewUserData(name,tel,permission)} hienThiForm = {this.state.hienThiForm}/> 
            </div>
          </div>
          </div>  
      </div>
    );
  }
}

  

export default App;