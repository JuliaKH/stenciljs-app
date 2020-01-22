import {Component , Prop, h } from '@stencil/core';
import { TodoItem } from "../../models/todoItem";


@Component({
  tag: 'todo-list',
  styles:`
  li {list-style-type: none; color: white}
  `
})
export class TodoList {
  @Prop() todoItems: TodoItem[];

  render() {
    return (
      <ul class="todo-list">
        {
          this.todoItems.map((item: TodoItem) => (
            <li>{item.text}</li>
          ))
        }
      </ul>
    );
  }
}
