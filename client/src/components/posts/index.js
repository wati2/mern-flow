import React, { Component } from 'react';
import axios from 'axios';
import Post from './post'



class Posts extends Component {
    state = {
        postList: []
    };

    componentDidMount(){
        this.getPostList();
    }

    getPostList = () => {
        axios
            .get("http://localhost:3001/post")
            .then(response => {
                console.log(response.data)
                if(response.data) {
                    const posts = response.data;
                    const postList = posts.map((item, i) =>(
                        
                         <Post 
                            key = {i}
                            id = {item.id}
                            title = {item.title}
                            content = {item.content}
                            comment = {item.comment}>
                        </Post>
                    )
                    );
                    this.setState({postList: postList})
                    console.log(this.state.postList)
                } else {
                    alert("포스트 없음")
                }
            })
            
    }
    render(){
       
        return(
            <div>
                <b>결과</b>
                <table>
                    <tbody>
                        {this.state.postList}
                        <hr/>
                    </tbody>
                </table>
               
                <b>끝</b>
            </div>
        );
    }
}

export default Posts;