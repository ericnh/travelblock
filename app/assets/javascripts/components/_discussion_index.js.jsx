class DiscussionIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      discussions: [],
      editing: false,
      currentDiscussion: null
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.hideDetail = this.hideDetail.bind(this);
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

  showDetail(id) {
    const discussions = this.state.discussions;
    const currentDiscussion = discussions.find( (discussion) => {
        return discussion.id === id;
    });
    this.setState({currentDiscussion: currentDiscussion});
  }
  
  hideDetail(e) {
    e.preventDefault();
    this.setState({ currentDiscussion: null });
  }

  render() {
    const editing = this.state.editing;
    const currentDiscussion = this.state.currentDiscussion;
    const discussions = this.state.discussions.map((discussion) => {
      return (
        <div key={discussion.id} onClick={ this.showDetail.bind(this, discussion.id) }>
          <h3>
            <a className="no-underline"><span className="glyphicon glyphicon-arrow-right"> </span> </a>
            { discussion.title }
          </h3>
        </div>
      )
    });
    if (currentDiscussion) {
      return <DiscussionDetail discussion={ currentDiscussion } goBack={ this.hideDetail } />
    } else if (!editing) {
      return (
          <div>
            { discussions }
            <h3><a onClick={this.toggleForm}>Create New Discussion</a></h3>
          </div>
      )
    } else {
      return <DiscussionForm goBack={this.toggleForm} handleSubmit={ this.createDiscussion } trip_id={ this.props.trip_id } />
    }
  }
}
