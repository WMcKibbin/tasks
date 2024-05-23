"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskService = void 0;
const getTaskService = ({ prisma, }) => {
    // Task List functions
    const getTaskList = (taskListId) => __awaiter(void 0, void 0, void 0, function* () {
        const taskList = yield prisma.tasklist.findUnique({
            where: {
                id: taskListId,
            },
            include: {
                tasks: true,
            },
        });
        return taskList;
    });
    const createTaskList = (name) => __awaiter(void 0, void 0, void 0, function* () {
        const taskList = yield prisma.tasklist.create({
            data: {
                name,
            },
        });
        return taskList;
    });
    const deleteTaskList = (taskListId) => __awaiter(void 0, void 0, void 0, function* () {
        const taskList = yield prisma.tasklist.delete({
            where: {
                id: taskListId,
            },
        });
        return taskList;
    });
    // Task functions
    const moveTask = (taskId, taskListId) => __awaiter(void 0, void 0, void 0, function* () {
        const task = yield prisma.task.update({
            where: {
                id: taskId,
            },
            data: {
                taskListId,
            },
        });
        return task;
    });
    const deleteTask = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
        const task = yield prisma.task.delete({
            where: {
                id: taskId,
            },
        });
        return task;
    });
    const createTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
        const newTask = yield prisma.task.create({
            data: {
                title: task.title,
                description: task.description,
                taskListId: task.taskListId,
            },
        });
        return newTask;
    });
    return {
        getTaskList,
        createTaskList,
        deleteTaskList,
        moveTask,
        deleteTask,
        createTask,
    };
};
exports.getTaskService = getTaskService;
