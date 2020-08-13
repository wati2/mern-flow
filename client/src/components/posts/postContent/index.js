import React, { Component } from 'react';

class PostContent extends Component {

    render(){
        return(
                <b>내용 : {this.props.content} </b>
        )
    }
}

export default PostContent;