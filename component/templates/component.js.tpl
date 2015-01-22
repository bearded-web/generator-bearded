var React = require('react');

var <%= className %> = React.createClass({
    render: function() {
        return (
            <div className="<%= name %>">
                This is a <%= name %> component, fill render method with cool stufff.
            </div>
        );
    }
});

module.exports = <%= className %>;
