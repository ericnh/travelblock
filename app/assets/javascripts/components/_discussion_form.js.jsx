class DiscussionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'foo',
      body: 'bar'
    }
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeTitle(event) {
    this.setState({ title: event.target.value });
  }

  changeBody(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const discussion = {
      title: this.state.title,
      body: this.state.body,
      trip_id: this.props.trip_id
    };
    $.ajax({
        url: '/api/v1/discussions',
        type: 'POST',
        data: { discussion: discussion },
        success: (response) => {
          this.props.handleSubmit(response);
        }
    });
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
                 value={ this.state.title } 
                 onChange={ this.changeTitle }>
          </input>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" 
                    id="body" 
                    value={ this.state.body } 
                    onChange={ this.changeBody }>
          </textarea>
        </div>
        <a onClick={ this.props.goBack }>Back</a>
        <button className="btn btn-primary pull-right" onClick={ this.handleSubmit }>Submit</button>
      </form>
    )
  }
}
