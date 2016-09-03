/**
 * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
			Todo.find().exec(function(err, todos) {
				if(err) throw err;
				res.view('todo/index', {todos: todos});
			});
    },
		new: function(req, res) {
			res.view('todo/new');
		},
    create: function(req, res) {
			Todo.create(req.body).exec(function(err, todo) {
				if(err) throw err;
				res.redirect('/');
			});
    },
};
