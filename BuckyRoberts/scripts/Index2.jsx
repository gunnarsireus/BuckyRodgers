var Comment = React.createClass({
    render: function() {
        var converter = new Showdown.converter();
        var rawMarkup = converter.makeHtml("� � � � � � ");
        return (
          <h3> <span dangerouslySetInnerHTML={{__html: rawMarkup}} /></h3>
    );
}
});
ReactDOM.render(
<Comment />, document.getElementById("example"));


//var Bacon = React.createClass({
//    render: function() {
//        return <h3>Detta �r en enkel komponent</h3>;
//    }
//});

//ReactDOM.render(
//<Bacon/>, document.getElementById("example"));