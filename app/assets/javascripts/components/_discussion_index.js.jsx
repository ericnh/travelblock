class DiscussionIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      discussions: []
    };
  }

  componentDidMount() {
    $.getJSON('/api/v1/trips/' + this.props.trip_id + '/discussions.json', (response) => { this.setState({discussions: response}) });
  }

  render() {
    discussions = this.state.discussions.map((discussion) => {
      return (
        <div>
          <h3>{ discussion.title }</h3>
          <p>{ discussion.body }</p>
        </div>
      )
    });
    return (
        <div>
          { discussions }
        </div>
    )
  }
}
