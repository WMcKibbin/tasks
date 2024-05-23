import { describe, expect, test } from "@jest/globals";
import AppContext from "../../src/ioc/PrismaMockContext";
import { TaskService } from "../../src/services/TasksService";
import { PrismaClient } from "@prisma/client";
import { DeepMockProxy } from "jest-mock-extended";

describe("Task Service Unit Tests --> Task List", () => {
  const taskService: TaskService = AppContext.resolve("taskService");
  const prisma: DeepMockProxy<PrismaClient> = AppContext.resolve("prisma");

  //getTaskList unit tests
  test("Execute findUnique and return value", () => {
    const tasklist = {
      id: 1,
      name: "Task List 1",
      tasks: [],
    };
    prisma.tasklist.findUnique.mockResolvedValue(tasklist);
    taskService.getTaskList(1).then((result) => {
      expect(result).toBe(tasklist);
    });
  });

  test("Execute findUnique and return null", () => {
    prisma.tasklist.findUnique.mockResolvedValue(null);
    taskService.getTaskList(1).then((result) => {
      expect(result).toBe(null);
    });
  });

  test("Execute findUnique and include tasks", () => {
    const tasklist = {
      id: 1,
      name: "Task List 1",
      tasks: [],
    };
    //spy on the findUnique method and check if include is used
    prisma.tasklist.findUnique.mockResolvedValue(tasklist);
    const spy = jest.spyOn(prisma.tasklist, "findUnique");
    taskService.getTaskList(1).then(() => {
      expect(spy).toHaveBeenCalledWith({
        where: {
          id: 1,
        },
        include: {
          tasks: true,
        },
      });
    });
  });
});
