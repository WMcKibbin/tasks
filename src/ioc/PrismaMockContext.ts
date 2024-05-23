import { PrismaClient } from '@prisma/client'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'

import * as awilix from 'awilix';

import { getTaskService } from '../services/TasksService';

import { getTaskListController } from '../controllers/TaskListController';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
  strict: true,
})


// Register the prisma client
container.register({
  prisma: awilix.asValue(mockDeep<PrismaClient>()),
})


// Register the services

container.register({
    taskService: awilix.asFunction(getTaskService),
  })
// Register the controllers
container.register({
    taskListController: awilix.asFunction(getTaskListController),
})


// Export the container
export default container;