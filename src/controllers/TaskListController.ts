import { FastifyReply, FastifyRequest } from "fastify";
import { TaskService } from "../services/TasksService";
import { CreateTaskListDTO, DeleteTaskListDTO } from "../dto/TaskList";
import { CreateTaskDTO } from "../dto/Task";

export type TaskListController = {
  getTaskList: (request: FastifyRequest, reply: FastifyReply) => void;
  createTaskList: (request: FastifyRequest, reply: FastifyReply) => void;
  deleteTaskList: (request: FastifyRequest, reply: FastifyReply) => void;
  moveTask: (request: FastifyRequest, reply: FastifyReply) => void;
  deleteTask: (request: FastifyRequest, reply: FastifyReply) => void;
  createTask: (request: FastifyRequest, reply: FastifyReply) => void;
  updateTask: (request: FastifyRequest, reply: FastifyReply) => void;
};

export const getTaskListController = ({
  taskService,
}: {
  taskService: TaskService;
}) => {
  // Task List functions

  const getTaskList = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const params = request.params as { taskListId: number }; // fastify types suck rn
      console.log(taskService);

      const taskList = await taskService.getTaskList(params.taskListId);
      if (!taskList) {
        reply.status(404).send({ message: "Task List not found" });
        return;
      }
      reply.send({ data: taskList });
    } catch (error) {
      console.error(error);
      reply.status(500).send({ message: "Internal Server Error" });
    }
  };
  const createTaskList = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const body = request.body as CreateTaskListDTO;
    try {
        const taskList = await taskService.createTaskList(body.name);
        reply.send({ data: taskList });
    } catch (error) {
        console.error(error);
        reply.status(500).send({ message: "Internal Server Error" });
    }
  };

  const deleteTaskList = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const params = request.params as DeleteTaskListDTO; // fastify types suck rn
      const taskList = await taskService.deleteTaskList(params.taskListId);
      if (!taskList) {
        reply.status(404).send({ message: "Task List not found" });
        return;
      }
      reply.send({ data: taskList });
    } catch (error) {
      console.error(error);
      reply.status(500).send({ message: "Internal Server Error" });
    }

  };

  // Task functions
  const createTask = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = request.body as CreateTaskDTO;
      const params = request.params as { taskListId: number };
      const task = await taskService.createTask({
        title: body.title,
        description: body.description,
        taskListId: params.taskListId,
      });
      reply.send({ data: task });
    } catch (error) {
      console.error(error);
      reply.status(500).send({ message: "Internal Server Error" });
    }

  };


  const moveTask = async (request: FastifyRequest, reply: FastifyReply) => {};

  const deleteTask = async (request: FastifyRequest, reply: FastifyReply) => {};


  const updateTask = async (request: FastifyRequest, reply: FastifyReply) => {};

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
