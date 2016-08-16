var Comment = React.createClass({
    getInitialState: function () {
        return { editing: false }
    },
    edit: function () {
        this.setState({ editing: true })
    },
    remove: function () {
        console.log("Removing comment");
        this.props.deleteFromBoard(this.props.index);
    },
    save: function () {
        this.props.updateCommentText(this.refs.newText.value,this.props.index);
        this.setState({ editing: false });
    },

    renderNormal: function () {  
        return (
            <div className="commentContainer">
               <div className="commentText">{this.props.children}</div>
               <button onClick={this.edit}   className="btn-primary">Edit</button>
               <button onClick={this.remove}  className="btn-danger">Remove</button>
            </div>
        );
    },

    renderForm: function () {  
        return (
            <div className="commentContainer">
                <textArea ref="newText"  defaultValue={this.props.children}></textArea>
               <button onClick={this.save}   className="btn-success">Save</button>
            </div>
    );
    },

    render: function() {
         if (this.state.editing) {
             return this.renderForm();
         }
         else {
             return this.renderNormal();
         }
    }
});


var CheckBox = React.createClass({

    getInitialState: function() {
        return {checked: true}
    },
    handleChecked: function() {
        this.setState({checked: !this.state.checked})  
    },
    render: function() {
        var msg;
        if (this.state.checked) {
            msg = "checked";
        } else {
            msg = "unchecked";
        }
        return (
        <div>
            <input type="checkbox"  onChange={this.handleChecked} defaultChecked={this.state.checked}/>
            <h3>Checkbox is {msg}</h3 >
   
        </div>);
}
});

var Board = React.createClass({
    getInitialState: function() {
        return {
            comments:
            [
                "I like bacon",
                "Want to get ic Cream",
                "Ok, we have enought comments now"
            ]
        }
    },

    eachComment: function(text,i) {
        return (<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard = {this.removeComment}>
                    {text}
               </Comment>);
    },
    updateComment:function(newText,i) {
        console.log("Updating comment " + i);
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({ comments: arr });
    },

    removeComment: function(i) {
        console.log("Removing comment " + i);
        var arr = this.state.comments;
        arr.plice(i, 1);
        this.setState({ comments: arr });
    },
    render: function() {
        return (
            <div className="board">
                { this.state.comments.map(this.eachComment) }
            </div>
        );
    }

});


ReactDOM.render(<Board /> , document.getElementById("example"));

//ReactDOM.render(<CheckBox/>, document.getElementById("example"));



