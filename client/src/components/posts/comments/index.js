import React, { Component } from 'react';

class Comments extends Component {
    render(){
        return(
            <b>코멘트 : {this.props.comment} </b>
        )
    }
}
export default Comments;