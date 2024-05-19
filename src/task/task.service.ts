import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  create(task: Omit<Task, 'id'>): Task {
    const newTask = { id: this.idCounter++, ...task };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, updatedTask: Partial<Task>): Task {
    const task = this.findOne(id);
    const index = this.tasks.indexOf(task);
    this.tasks[index] = { ...task, ...updatedTask };
    return this.tasks[index];
  }

  remove(id: number): void {
    const task = this.findOne(id);
    console.log(task);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
