import { TodoItem } from './todoitem';
export class Model {
  items: TodoItem[];
  constructor() {
    this.items = [
      { description: 'Breakfast', done: false, id: Math.random() * 10 , date: 'Tuesday, 10:22' },
      { description: "Check DM's", done: false, id: Math.random() * 10  , date: 'Tuesday, 10:53' },
      { description: 'Pay Bills', done: false, id: Math.random() * 10 , date: 'Tuesday, 10:54' },
    ];
  }
}
