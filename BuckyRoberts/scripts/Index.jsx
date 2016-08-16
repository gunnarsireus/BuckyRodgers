var Comment = React.createClass({
    edit: function () {
        alert("Edit alert");
    },
    remove: function () {
        alert("Remove alert");
    },
    render: function () {
        return (
            <div className="commentContainer">
               <div className="commentText">
                 {this.props.children}
               </div>
               <button onClick={this.edit}   className="btn-primary">
                Edit
               </button>
              <button onClick={this.remove}  className="btn-danger">
                  Remove
               </button>
            </div>
        );
    }
});
ReactDOM.render(<div className="board">
    <Comment>Hej now</Comment>
        <Comment>AAAAA</Comment>
        <Comment>BGBB</Comment>
</div>
,

document.getElementById("example"));


