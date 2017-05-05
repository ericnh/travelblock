class CommentIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    $.getJSON('/api/v1/' + this.props.commentableType + '/' + this.props.commentableID + '/comments.json', (response) => { this.setState({comments: response}) });
  }

  addComment(comment) {
    const comments = this.state.comments.concat(comment);
    this.setState({ comments: comments });
  }

  userName(user) {
    if (user) {
     return user.first_name + " " + user.last_name;
    } else {
      return "";
    }
  }
    
  render() {
    const comments = this.state.comments.map((comment) => {
      return (
        <div className="row comment-row" key={ comment.id }>
          <div className="col-md-2 user-information border-right">
            <p>{ this.userName(comment.user) }</p>
            <p>{ comment.created }</p>
          </div>
          <p className="show-line-breaks col-md-10">{ comment.body }</p>
        </div>
      )
    });
    return (
      <div>
        { comments }
        <CommentForm onSubmit={ this.addComment }
                     currentUser={ this.props.currentUser } 
                     commentableID={ this.props.commentableID }
                     commentableType= { this.props.commentableType } />
      </div>
    )
  }
}
