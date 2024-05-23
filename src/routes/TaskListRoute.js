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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppContext_1 = __importDefault(require("../ioc/AppContext"));
const TaskList_1 = require("../dto/TaskList");
const Task_1 = require("../dto/Task");
function taskListRouter(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        const taskListController = AppContext_1.default.resolve('taskListController');
        console.log('taskListController', taskListController);
        fastify.route({
            method: 'GET',
            url: '/tasklist/:taskListId',
            schema: TaskList_1.getTaskListSchema,
            handler: taskListController.getTaskList
        });
        fastify.route({
            method: 'PUT',
            url: '/tasklist',
            schema: TaskList_1.createTaskListSchema,
            handler: taskListController.createTaskList
        });
        fastify.route({
            method: 'PUT',
            url: '/tasklist/:taskListId',
            schema: Task_1.createTaskSchema,
            handler: taskListController.createTask
        });
    });
}
exports.default = taskListRouter;
