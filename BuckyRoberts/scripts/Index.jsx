var Comment = React.createClass({
    getInitialState() {
        return { editing: false }
    },
    edit() {
        this.setState({ editing: true })
    },
    remove() {
        console.log("Removing comment");
        this.props.deleteFromBoard(this.props.index);
    },
    save() {
        this.props.updateCommentText(this.refs.newText.value,this.props.index);
        this.setState({ editing: false });
    },

    renderNormal() {  
        return (
            <div className="commentContainer">
               <div className="commentText">{this.props.children}</div>
               <button onClick={this.edit}   className="btn-primary">Edit</button>
               <button onClick={this.remove}  className="btn-danger">Remove</button>
            </div>
        );
    },

    renderForm() {  
        return (
            <div className="commentContainer">
                <textArea ref="newText"  defaultValue={this.props.children}></textArea>
               <button onClick={this.save}   className="btn-success">Save</button>
            </div>
    );
    },

    render() {
         if (this.state.editing) {
             return this.renderForm();
         }
         else {
             return this.renderNormal();
         }
    }
});


var CheckBox = React.createClass({

    getInitialState() {
        return {checked: true}
    },
    handleChecked() {
        this.setState({checked: !this.state.checked})  
    },
    render() {
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
    getInitialState() {
        return {
            comments: []
        }
    },

    eachComment(text,i) {
        return (<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard = {this.removeComment}>
                    {text}
               </Comment>);
    },
    add(text) {
        var arr = this.state.comments;
        arr.push(text);
        this.setState({ comments: arr });
    },
    updateComment(newText,i) {
        console.log("Updating comment " + i);
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({ comments: arr });
    },

    removeComment(i) {
        console.log("Removing comment " + i);
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({ comments: arr });
    },
    render() {
        return (
        <div>
            <button className="btn-info" onClick={this.add.bind(null, "Default text")}>Add New</button>
            <div className="board">
                { this.state.comments.map(this.eachComment) }
            </div>
        </div>
        );
    }

});


ReactDOM.render(<Board /> , document.getElementById("example"));

//ReactDOM.render(<CheckBox/>, document.getElementById("example"));



