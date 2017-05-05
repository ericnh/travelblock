class CommentIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    $.getJSON('/api/v1/' + this.props.commentableType + '/' + this.props.commentableID + '/comments.json', (response) => { this.setState({comments: response}) });
  }

  userName(comment) {
    if (comment.user) {
     return comment.user.first_name + " " + comment.user.last_name;
    } else {
      return "";
    }
  }
    
  render() {
    const comments = this.state.comments.map((comment) => {
      return (
        <div className="row comment-row" key={ comment.id }>
          <div className="col-md-2 user-information border-right">
            <p>{ this.userName(comment) }</p>
            <p>{ comment.created }</p>
          </div>
          <p className="show-line-breaks col-md-10">{ comment.body }</p>
        </div>
      )
    });
    return (
      <div>
        { comments }
      </div>
    )
  }
}
