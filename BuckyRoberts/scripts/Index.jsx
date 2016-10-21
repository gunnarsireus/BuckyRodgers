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
            val: this.props.val,
            val1: this.props.val1,
            val2: this.props.val2,
            val3: this.props.val3
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
            val: (Number(this.state.val) + 1),
            val1: (Number(this.state.val1) + 1),
            val2: (Number(this.state.val2) + 1),
            val3: (Number(this.state.val3) + 1)
        });
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
    componentDidUpdate: function () {
        //$('#3').val(this.state.val3);
        //$('#2').val(this.state.val2);
        //$('#1').val(this.state.val1);
        //$('#0').val(this.state.val);

        document.getElementById('3').value = this.state.val3;
        document.getElementById('2').value = this.state.val2;
        document.getElementById('1').value = this.state.val1;
        //document.getElementById('0').value = this.state.val;
    },
    render() {
        return (
        <div>
            <button className="btn-info" onClick={this.add.bind(null, "Default text")}>Add New</button>
            <div className="board">{ this.state.comments.map(this.eachComment) }
            </div>
            <Input val={this.state.val} />
            <Panels val1={this.state.val1} val2={this.state.val2} val3={this.state.val3} />
            <button className="btn-info" onClick={this.setValues}>Set values</button>
        </div>
        );
    }

});

var Input = React.createClass({
    getInitialState: function () {
        return {typed: '', val: this.props.val};
    },
    onChange: function(event) {
        this.setState({ typed: event.target.value, val: event.target.value });
    },
    componentDidUpdate: function(){
    },
    render: function () {
        console.log('Input rendered val: ' + this.state.val)
        return <div>
            <input type="text" onChange={this.onChange} value={this.state.val} id={this.props.val} />
            You typed: <code>{this.state.typed}</code>
        </div>
    }
});

var Panels = React.createClass({
    getInitialState: function () {
        return {
            val1: this.props.val1,
            val2: this.props.val2,
            val3: this.props.val3
        };
    },
    componentDidUpdate: function () {
    },
    render: function () {
        return <div>
            <Input val={this.state.val1} />
            <Input val={this.state.val2} />
            <Input val={this.state.val3} />
        </div>
    }
});

ReactDOM.render(<Board val={0}
                       val1={1}
                       val2={2}
                       val3={3} /> , document.getElementById("example"));

//ReactDOM.render(<CheckBox />, document.getElementById("example"));



