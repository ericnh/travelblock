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

  userName() {
    if (this.props.discussion.user) {
     return this.props.discussion.user.first_name + " " + this.props.discussion.user.last_name;
    } else {
      return "";
    }
  }

  showEditButton() {
    if (this.props.currentUser.id == this.props.discussion.user.id) {
      return <button className="btn btn-default" type="button" onClick={ this.props.handleEdit }>Edit</button>;
    }
  }

  showDeleteButton() {
    if (this.props.currentUser.id == this.props.discussion.user.id) {
      return <button className="btn btn-danger pull-right" type="button" onClick={ this.handleDelete }>Delete</button>;
    }
  }

  render() {
    return (
        <div>
          <h3 className="subheader-fullwidth">
            <a onClick={ this.props.goBack }><span className="glyphicon glyphicon-arrow-left"> </span> </a>
            { this.props.discussion.title }
            { this.showDeleteButton() }
          </h3>
          <div className="row">
            <div className="col-md-2 user-information">
              <p>{ this.userName() }</p>
              <p>{ this.props.discussion.created }</p>
              { this.showEditButton() }
            </div>
            <p className="show-line-breaks col-md-10">{ this.props.discussion.body }</p>
          </div>
          <CommentIndex commentableID={ this.props.discussion.id } commentableType="Discussion" currentUser={ this.props.currentUser } />
        </div>
    )
  }
}
