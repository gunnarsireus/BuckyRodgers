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
               <button onClick={this.edit} className="btn-primary">Edit</button>
               <button onClick={this.remove} className="btn-danger">Remove</button>
            </div>
        );
    },

    renderForm() {
        return (
            <div className="commentContainer">
                <textArea ref="newText" defaultValue={this.props.children}></textArea>
               <button onClick={this.save} className="btn-success">Save</button>
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
            <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
            <h3>Checkbox is {msg}</h3>

        </div>);
}
});

var Board = React.createClass({
    getInitialState() {
        return {
            comments: [],
            value: this.props.value,
            value1: this.props.value1,
            value2: this.props.value2,
            value3: this.props.value3
        }
    },

    eachComment(text,i) {
        return (<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>{text}
        </Comment>);
    },
    add(text) {
        var arr = this.state.comments;
        arr.push(text);
        this.setState({ comments: arr });
    },
    setValues(text) {
        this.setState({
            value: (Number(this.state.value) + 1),
            value1: (Number(this.state.value1) + 1),
            value2: (Number(this.state.value2) + 1),
            value3: (Number(this.state.value3) + 1)
        });
        console.log('value: ' + this.state.value + ' value1: ' + this.state.value1 + ' value2: '+ this.state.value2 + ' value3: ' + this.state.value3);
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
        console.log('Bord is rendered');
        return (
        <div>
            <button className="btn-info" onClick={this.add.bind(null, "Default text")}>Add New</button>
            <div className="board">{ this.state.comments.map(this.eachComment) }
            </div>
            <Input value={this.state.value} />
            <Panels value1={this.state.value1} value2={this.state.value2} value3={this.state.value2} />
            <button className="btn-info" onClick={this.setValues}>Set values</button>
        </div>
        );
    }

});

var Input = React.createClass({
    getInitialState: function() {
        return {typed: '', value: this.props.value};
    },
    componentDidUpdate() {
        console.log('componentDidUpdate value:' + this.state.value);
    },
    onChange: function(event) {
        this.setState({ typed: event.target.value, value: event.target.value });
    },
    render: function () {
        console.log('Input is rendered');
        return <div>
            <input type="text" onChange={this.onChange} value={this.state.value} />
            You typed: <code>{this.state.typed}</code>
        </div>
    }
});

var Panels = React.createClass({
    getInitialState: function() {
        return {
            value1: this.props.value1,
            value2: this.props.value2,
            value3: this.props.value3
        };
    },

    render: function () {
        console.log('Panels is rendered');
        return <div>
            <Input value={this.state.value1} />
            <Input value={this.state.value2} />
            <Input value={this.state.value3} />
        </div>
    }
});

ReactDOM.render(<Board value={'0'}
                       value1={'1'}
                       value2={'2'}
                       value3={'3'} /> , document.getElementById("example"));

//ReactDOM.render(<CheckBox />, document.getElementById("example"));



