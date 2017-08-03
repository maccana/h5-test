var Note = React.createClass({
  edit: function() {
    alert('editing note');
  },
  remove: function() {
    alert('removing note');
  },
  render: function() {
    return (
      <div className="note">
      <p>{this.props.children}</p>
        <span>
          <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
          <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
        </span>
      </div>
    );
  }
});

React.render(<Note>Hello Note World</Note>,
  document.getElementById('note-container'));
