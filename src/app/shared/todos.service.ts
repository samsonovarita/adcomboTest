import { Injectable } from '@angular/core';

export interface Todo {
    id: number
    title: string
    completed: boolean
    date?: any
}

@Injectable({ providedIn: 'root' })
export class TodosService {
    public todos: Todo[] = [
        { id: 1, title: 'Сделать тестовое задание', completed: false, date: new Date() },
        { id: 2, title: 'Сделать проверку', completed: true, date: new Date() },
        { id: 3, title: 'Отправить результат в Adcombo', completed: false, date: new Date() },
    ]

    onToggle(id: number) {
        const idx = this.todos.findIndex(t => t.id === id)
        this.todos[idx].completed = !this.todos[idx].completed
    }

    removeTodo(id:number) {
        this.todos = this.todos.filter(t => t.id !== id)
    }

    addTodo(todo: Todo) {
       this.todos.push(todo) 
    }
}