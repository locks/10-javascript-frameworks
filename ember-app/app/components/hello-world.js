import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HelloWorldComponent extends Component {
  @tracked todos = [];
  @tracked todoText = '';

  constructor() {
    super(...arguments);

    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos) || [];
  }

  @action
  addTodo(event) {
    event.preventDefault();
    this.todos = [...this.todos, this.todoText];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
