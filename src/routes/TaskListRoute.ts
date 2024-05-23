import { FastifyInstance } from 'fastify'

import AppContext from "../ioc/AppContext"
import { createTaskListSchema, getTaskListSchema } from '../dto/TaskList'
import { TaskListController } from '../controllers/TaskListController'
import { log } from 'console'
import { createTaskSchema } from '../dto/Task'



async function taskListRouter(fastify: FastifyInstance) {

    const taskListController = AppContext.resolve('taskListController') as TaskListController

    console.log('taskListController', taskListController)


    fastify.route({
        method: 'GET',
        url: '/tasklist/:taskListId',
        schema: getTaskListSchema,
        handler: taskListController.getTaskList
    })

    fastify.route({
        method: 'PUT',
        url: '/tasklist',
        schema: createTaskListSchema,
        handler: taskListController.createTaskList
    })

    fastify.route({
        method: 'PUT',
        url: '/tasklist/:taskListId',
        schema: createTaskSchema,
        handler: taskListController.createTask
    })
}

export default taskListRouter