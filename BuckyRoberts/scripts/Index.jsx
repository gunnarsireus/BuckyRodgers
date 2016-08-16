var Comment = React.createClass({
    getInitialState: function () {
        return { editing: false }
    },
    edit: function () {
        this.setState({ editing: true })
    },
    remove: function () {
        console.log("Removing comment");
    },
    save: function () {
        var val = this.refs.newText.value
        console.log("New comment " + val)
        this.setState({ editing: false })
    },

    renderNormal: function () {  
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
    render: function() {
        return (
            <div className="board">
                { this.state.comments.map(function(text, i) {
                     return (<Comment key={i}>{text}</Comment>);
                })
            }
            </div>
        );
    }

});


ReactDOM.render(<Board /> , document.getElementById("example"));

//ReactDOM.render(<CheckBox/>, document.getElementById("example"));



