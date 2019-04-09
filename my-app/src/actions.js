export const LOG_MESSAGE = 'LOG_MESSAGE';
export const RESET_LOGS = 'RESET_LOGS';

export const logMessage = message => {
  return { type: LOG_MESSAGE, message };
};

export const resetLogs = () => {
  return { type: RESET_LOGS };
};