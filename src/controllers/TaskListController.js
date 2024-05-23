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
exports.getTaskListController = void 0;
const getTaskListController = ({ taskService, }) => {
    // Task List functions
    const getTaskList = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const params = request.params; // fastify types suck rn
            console.log(taskService);
            const taskList = yield taskService.getTaskList(params.taskListId);
            if (!taskList) {
                reply.status(404).send({ message: "Task List not found" });
                return;
            }
            reply.send({ data: taskList });
        }
        catch (error) {
            console.error(error);
            reply.status(500).send({ message: "Internal Server Error" });
        }
    });
    const createTaskList = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const body = request.body;
        try {
            const taskList = yield taskService.createTaskList(body.name);
            reply.send({ data: taskList });
        }
        catch (error) {
            console.error(error);
            reply.status(500).send({ message: "Internal Server Error" });
        }
    });
    const deleteTaskList = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const params = request.params; // fastify types suck rn
            const taskList = yield taskService.deleteTaskList(params.taskListId);
            if (!taskList) {
                reply.status(404).send({ message: "Task List not found" });
                return;
            }
            reply.send({ data: taskList });
        }
        catch (error) {
            console.error(error);
            reply.status(500).send({ message: "Internal Server Error" });
        }
    });
    // Task functions
    const createTask = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const body = request.body;
            const params = request.params;
            const task = yield taskService.createTask({
                title: body.title,
                description: body.description,
                taskListId: params.taskListId,
            });
            reply.send({ data: task });
        }
        catch (error) {
            console.error(error);
            reply.status(500).send({ message: "Internal Server Error" });
        }
    });
    const moveTask = (request, reply) => __awaiter(void 0, void 0, void 0, function* () { });
    const deleteTask = (request, reply) => __awaiter(void 0, void 0, void 0, function* () { });
    const updateTask = (request, reply) => __awaiter(void 0, void 0, void 0, function* () { });
    return {
        getTaskList,
        createTaskList,
        deleteTaskList,
        moveTask,
        deleteTask,
        createTask,
        updateTask,
    };
};
exports.getTaskListController = getTaskListController;
