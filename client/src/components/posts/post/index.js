import React, { Component } from 'react';
import PostContent from '../postContent'
import Comments from '../comments'
class Post extends Component { 
    
    render() {
        return(

            <tr>
            <hr/>
                <tr>
                    <PostContent
                        key = {this.props.key}
                        content = {this.props.content}>
                    </PostContent>
                </tr>
                <tr>
                    <Comments
                        key = {this.props.key}
                        comment = {this.props.comment}>
                    </Comments>
                </tr>
          </tr>
        );
    }
}
export default Post;