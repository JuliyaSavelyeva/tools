export const createLogger = (name) => {
  const logs = [];

  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },

    error(textError) {
      logs.push(`error - ${name} - ${textError}`);
    },

    getLogs() {
      return logs;
    },
  };
};
