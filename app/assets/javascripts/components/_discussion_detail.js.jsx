class DiscussionDetail extends React.Component {
  render() {
    return (
        <div>
          <h3 className="subheader-fullwidth">
            <a onClick={ this.props.goBack }><span className="glyphicon glyphicon-arrow-left"> </span> </a>
            { this.props.discussion.title }
          </h3>
          <p className="show-line-breaks">{ this.props.discussion.body }</p>
        </div>
    )
  }
}
