class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.currentComment) {
      this.state = {
        comment: this.props.currentComment
      }
    } else {
      this.state = {
        comment: { 
          body: '', 
          commentable_type: this.props.commentableType,
          commentable_id: this.props.commentableID
        }
      }
    }
    this.submit = this.submit.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.resetBody = this.resetBody.bind(this);
  }

  userName(user) {
    if (user) {
     return user.first_name + " " + user.last_name;
    } else {
      return "";
    }
  }

  changeBody(event) {
    let comment = this.state.comment;
    comment.body = event.target.value;
    this.setState({ comment: comment });
  }

  submit(event) {
    event.preventDefault();
    if (this.state.comment.id) {
      $.ajax({
        url: '/api/v1/comments/' + this.state.comment.id,
        type: 'PUT',
        data: { comment: this.state.comment },
        success: (response) => {
          this.props.onUpdate(response);
        }
      });
    } else {
      $.ajax({
        url: '/api/v1/comments',
        type: 'POST',
        data: { comment: this.state.comment },
        success: (response) => {
          this.resetBody();
          this.props.onSubmit(response);
        }
      });
    }
  }

  resetBody() {
    const comment = this.state.comment;
    comment.body = '';
    this.setState({ comment: comment });
  }
    
  render() {
    return (
      <div className="row comment-row">
        <div className="col-md-2 user-information border-right">
          <p>{ this.userName(this.props.currentUser) }</p>
          <p>05/05/2017</p>
          <button className="btn btn-sm btn-default" onClick={ this.submit }>Submit</button>
        </div>
        <div className="col-md-10 form-group">
          <textarea className="form-control comment-body"
                    value={ this.state.comment.body }
                    onChange={ this.changeBody }>
          </textarea>
        </div>
      </div>
    )
  }
}
