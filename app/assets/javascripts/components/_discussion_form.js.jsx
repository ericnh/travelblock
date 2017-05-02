class DiscussionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.currentDiscussion) {
      this.state = {
        discussion: this.props.currentDiscussion
      }
    } else {
      this.state = {
        discussion: { 
          title: '', 
          body: '', 
          trip_id: this.props.trip_id
        }
      }
    }
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeTitle(event) {
    let discussion = this.state.discussion;
    discussion.title = event.target.value;
    this.setState({ discussion: discussion });
  }

  changeBody(event) {
    let discussion = this.state.discussion;
    discussion.body = event.target.value;
    this.setState({ discussion: discussion });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.discussion.id) {
      $.ajax({
          url: '/api/v1/discussions/' + this.state.discussion.id,
          type: 'PUT',
          data: { discussion: this.state.discussion },
          success: (response) => {
            this.props.handleUpdate(response);
          }
      });
    } else {
      $.ajax({
          url: '/api/v1/discussions',
          type: 'POST',
          data: { discussion: this.state.discussion },
          success: (response) => {
            this.props.handleSubmit(response);
          }
      });
    }
  }

  render() {
    return (
      <form>
        <h3>Create New Discussion</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" 
                 className="form-control" 
                 id="title" 
                 value={ this.state.discussion.title } 
                 onChange={ this.changeTitle }>
          </input>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" 
                    id="body" 
                    value={ this.state.discussion.body } 
                    onChange={ this.changeBody }>
          </textarea>
        </div>
        <a onClick={ this.props.goBack }>Back</a>
        <button className="btn btn-primary pull-right" onClick={ this.handleSubmit }>Submit</button>
      </form>
    )
  }
}
