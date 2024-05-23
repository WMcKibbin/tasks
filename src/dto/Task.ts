import { Type } from '@sinclair/typebox'


export type TaskDTO = {
    id: number;
    title: string;
    description: string;
    taskListId: number;
};

export type CreateTaskDTO = {
    title: string;
    description: string;
    taskListId: number;
};

export type UpdateTaskDTO = {
    title: string;
    description: string;
};

export type MoveTaskDTO = {
    targetTaskList: number;
};


export const createTaskSchema = {
    body: Type.Object({
        title: Type.String(),
        description: Type.String()
    
    }),
    params: Type.Object({
        taskListId: Type.Number()
    })
}

export const updateTaskSchema = {
    body: Type.Object({
        title: Type.String(),
        description: Type.String()
    }),
    params: Type.Object({
        taskId: Type.Number(),
        taskListId: Type.Number()
    }),
}


export const deleteTaskSchema = {
    params: Type.Object({
        taskId: Type.Number()
    }),
}

export const moveTaskSchema = {
    body: Type.Object({
        targetTaskList: Type.Number()
    }),
    params: Type.Object({
        taskId: Type.Number(),
        taskListId: Type.Number()
    }),
}