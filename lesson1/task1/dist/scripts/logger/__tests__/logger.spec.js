import { createLogger } from "../logger";

it("should return stored logs", () => {
  const logger = createLogger("userLogin");
  expect(logger.getLogs()).toEqual([]);
});

it("should save log messages", () => {
  const logger = createLogger("userLogin");
  logger.log("login success");
  expect(logger.getLogs()).toEqual(["log - userLogin - login success"]);
});

it("should save errors", () => {
  const logger = createLogger("userLogin");
  logger.error("login failed");
  expect(logger.getLogs()).toEqual(["error - userLogin - login failed"]);
});
