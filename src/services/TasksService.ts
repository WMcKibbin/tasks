import { PrismaClient, Task, Tasklist } from "@prisma/client";

import { CreateTaskDTO } from "../dto/Task";

export type TaskService = {
  getTaskList: (taskListId: number) => Promise<Tasklist | null>;
  createTaskList: (name: string) => Promise<Tasklist>;
  deleteTaskList: (taskListId: number) => Promise<Tasklist>;
  moveTask: (taskId: number, taskListId: number) => Promise<Task>;
  deleteTask: (taskId: number) => Promise<Task>;
  createTask: (task: CreateTaskDTO) => Promise<Task>;
};

export const getTaskService = ({
  prisma,
}: {
  prisma: PrismaClient;
}): TaskService => {
  // Task List functions

  const getTaskList = async (taskListId: number) => {
    const taskList = await prisma.tasklist.findUnique({
      where: {
        id: taskListId,
      },
      include: {
        tasks: true,
      },
    });
    return taskList;
  };

  const createTaskList = async (name: string) => {
    const taskList = await prisma.tasklist.create({
      data: {
        name,
      },
    });
    return taskList;
  };

  const deleteTaskList = async (taskListId: number) => {
    const taskList = await prisma.tasklist.delete({
      where: {
        id: taskListId,
      },
    });
    return taskList;
  };

  // Task functions

  const moveTask = async (taskId: number, taskListId: number) => {
    const task = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        taskListId,
      },
    });
    return task;
  };

  const deleteTask = async (taskId: number) => {
    const task = await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    return task;
  };

  const createTask = async (task: CreateTaskDTO) => {
    const newTask = await prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
        taskListId: task.taskListId,
      },
    });
    return newTask;
  };

  return {
    getTaskList,
    createTaskList,
    deleteTaskList,
    moveTask,
    deleteTask,
    createTask,
  };
};
