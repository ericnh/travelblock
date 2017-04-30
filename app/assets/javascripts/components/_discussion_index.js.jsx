class DiscussionIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      discussions: [],
      editing: false
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.createDiscussion = this.createDiscussion.bind(this);
  }

  componentDidMount() {
    $.getJSON('/api/v1/trips/' + this.props.trip_id + '/discussions.json', (response) => { this.setState({discussions: response}) });
  }

  createDiscussion(discussion) {
    const discussions = this.state.discussions.concat(discussion);
    this.setState({discussions: discussions, editing: false});
  }

  toggleForm(e) {
    e.preventDefault();
    this.setState({editing: !this.state.editing});
  }

  render() {
    const editing = this.state.editing;
    const discussions = this.state.discussions.map((discussion) => {
      return (
        <div key={discussion.id}>
          <h3>{ discussion.title }</h3>
        </div>
      )
    });
    if (!editing) {
      return (
          <div>
            { discussions }
            <h3><a onClick={this.toggleForm}>Create New Discussion</a></h3>
          </div>
      )
    } else {
      return (
          <DiscussionForm goBack={this.toggleForm} handleSubmit={ this.createDiscussion } trip_id={ this.props.trip_id } />
      )
    }
  }
}
