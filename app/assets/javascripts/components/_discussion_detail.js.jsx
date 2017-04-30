class DiscussionDetail extends React.Component {
  render() {
    return (
        <div>
          <h3>{ this.props.discussion.title }</h3>
          <p>{ this.props.discussion.body }</p>
          <a onClick={ this.props.goBack }>back</a>
        </div>
    )
  }
}
