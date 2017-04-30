class DiscussionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    if (confirm("Are you sure you would like to delete this discussion?")) {
      this.props.handleDelete(this.props.discussion);
    }
  }

  render() {
    return (
        <div>
          <h3 className="subheader-fullwidth">
            <a onClick={ this.props.goBack }><span className="glyphicon glyphicon-arrow-left"> </span> </a>
            { this.props.discussion.title }
            <button className="btn btn-default pull-right" type="button" onClick={ this.props.handleEdit }>Edit</button>
            <button className="btn btn-danger pull-right" type="button" onClick={ this.handleDelete }>Delete</button>
          </h3>
          <p className="show-line-breaks">{ this.props.discussion.body }</p>
        </div>
    )
  }
}
