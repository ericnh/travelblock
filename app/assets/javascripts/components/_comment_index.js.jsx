class CommentIndex extends React.Component {

  userName(comment) {
    if (comment.user) {
     return comment.user.first_name + " " + comment.user.last_name;
    } else {
      return "";
    }
  }
    
  render() {
    const comments = this.props.comments.map((comment) => {
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
