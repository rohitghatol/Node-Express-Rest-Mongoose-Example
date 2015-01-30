/**
 * Created by rohitghatol on 1/13/15.
 */
var todos = require('../controllers/todos.controller');

module.exports=function(app){

  app.route('/api/todos')
    .get(todos.list)
    .post(todos.create);

  app.route('/api/todos/:todoId')
    .get(todos.read)
    .put(todos.update)
    .delete(todos.delete);

  app.param('todoId',todos.todoById);

};