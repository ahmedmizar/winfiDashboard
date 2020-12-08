// import React, { Component } from 'react';
// import {connect} from "react-redux"
// import {fetchUsers} from "../appRedux/actions/FetchUsers"
// import { Form, Input, Button, Checkbox } from 'antd';
//  const layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
//   };
//   const tailLayout = {
//     wrapperCol: {
//       offset: 8,
//       span: 16,
//     },
//   };
//   const style1 ={
//     borderRadius: "5px"
// }
// const validateMessages = {
//   required: "'${name}' is required!",
  
// };
// class Test extends Component {
//     state = {
//         userName: "",
//         password: ""
//     }
    
//     componentDidMount() {
//         this.props.fetchUsers()
       
//     }
//     onFinish = (values) => {
//         console.log('Success:', values);
//       };
    
//     onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//       };
//       // handleInputChange = (e) => {
//       //   this.setState({userName: e.target.value}, console.log(this.state.userName))
        
//       // }
    
//     render() { 
//         const {users} = this.props
//         console.log(this.state.userName)
//         console.log(this.props)
//         return (
//             <Form
//       {...layout}
//       className="test"
//       name="basic"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={this.onFinish}
//       onFinishFailed={this.onFinishFailed}
//     >
//       <Form.Item
       
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
           
//           },
//           { min: 5, message: 'Username must be minimum 5 characters.' },
          
//         ]}
//         style={{textAlign: "left"}}
//       >
//         <Input style={style1} onChange={(e) => this.setState({userName: e.target.value})} value={this.state.userName} />
//       </Form.Item>

//       <Form.Item
       
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
         
//         ]}
//       >
//         <Input.Password  onChange={(e) => this.setState({userName: e.target.value})} value={this.state.userName} />
//       </Form.Item>

//       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//         );
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         users: state.users
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsers: () => dispatch(fetchUsers())
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Test);