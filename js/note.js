var Note = React.createClass({
  render: function() {
    return (
      <div className="note">
        <span>
          <button className="btn btn-danger glyphicon glyphicon-trash"/>
          <button className="btn btn-primary glyphicon glyphicon-pencil" />
        </span>
      </div>
    );
  }
});

React.render(<Note>Hello Note World</Note>,
  document.getElementById('note-container'));
