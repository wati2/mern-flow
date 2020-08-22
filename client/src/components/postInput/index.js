import React, { Component } from 'react';

class PostPut extends Component {
    state = {
        authur:'',
        content:''
    }
    contentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    authorChange = (e) => {
        this.setState({
            authur: e.target.value
        })
    }
    btnPost = () => {
        alert("작성자 : " + this.state.authur + " \n내용 : " + this.state.content)
    }

    render(){
        return(
            <form>
                <input
                placeholder ="작성자"
                value = {this.state.authur}
                onChange={this.authorChange}>
                </input><br/>
                <input
                placeholder ="내용"
                value = {this.state.content}
                onChange={this.contentChange}>
                </input>
                <button onClick={this.btnPost}>로그인</button>
                <div>안녕하세요</div>
            </form>
        )
    }
}
export default PostPut