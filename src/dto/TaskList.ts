import { Type } from "@sinclair/typebox";
import { TaskDTO } from "./Task";

export type CreateTaskListDTO = {
  name: string;
};

export type TaskListDTO = {
  id: number;
  name: string;
  tasks: Array<TaskDTO>;
};


export type DeleteTaskListDTO = {
  taskListId: number;
};

export const createTaskListSchema = {
  body: Type.Object({
    name: Type.String(),
  }),
};

export const deleteTaskListSchema = {
  params: Type.Object({
    taskListId: Type.Number(),
  }),
};
export const getTaskListSchema = {
  params: Type.Object({
    taskListId: Type.Number(),
  }),
};
