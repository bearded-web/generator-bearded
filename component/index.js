'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
        this.argument('name', { type: String, required: true });
        this.option('less');
    },

    prompting: function() {
        //var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to ' + chalk.red('Bearded') + ' component generator!'
        ));

        this.withLess = this.options.less;

        //var prompts = [{
        //    type: 'confirm',
        //    name: 'withLess',
        //    message: 'Would you like to add more less?',
        //    default: false
        //}];
        //
        //if (!this.options.less)
        //this.prompt(prompts, function(props) {
        //    this.withLess = props.withLess;
        //
        //    done();
        //}.bind(this));
    },

    writing: {
        component: function() {
            var data = {
                className: this._.capitalize(this._.camelize(this.name)),
                name: this.name,
                withLess: this.withLess
            };

            this.fs.copyTpl(
                this.templatePath('index.js.tpl'),
                this.destinationPath('app/components/' + this.name + '/index.js'),
                data
            );
            this.fs.copyTpl(
                this.templatePath('component.js.tpl'),
                this.destinationPath('app/components/' + this.name + '/' + this.name + '.js'),
                data
            );
            if (this.withLess) {
                this.fs.copyTpl(
                    this.templatePath('component.less.tpl'),
                    this.destinationPath('app/components/' + this.name + '/' + this.name + '.less'),
                    data
                );
            }
        }
    }
});
