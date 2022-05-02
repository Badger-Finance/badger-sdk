import { LogLevel } from './api/enums';

/* eslint-disable @typescript-eslint/no-explicit-any */
export class Logger {
  constructor(public level: LogLevel) {}

  log(message?: any, ...optionalParams: any[]): void {
    this.info(message, optionalParams);
  }

  debug(message?: any, ...optionalParams: any[]): void {
    this.#_log(LogLevel.Debug, message, optionalParams);
  }

  info(message?: any, ...optionalParams: any[]): void {
    this.#_log(LogLevel.Info, message, optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]): void {
    this.#_log(LogLevel.Warn, message, optionalParams);
  }

  error(message?: any, ...optionalParams: any[]): void {
    this.#_log(LogLevel.Error, message, optionalParams);
  }

  #_log(level: LogLevel, message?: any, ...optionalParams: any[]): void {
    if (level < this.level) {
      return;
    }
    switch (level) {
      case LogLevel.Debug:
        console.debug(message, optionalParams);
        return;
      case LogLevel.Info:
        console.info(message, optionalParams);
        return;
      case LogLevel.Warn:
        console.warn(message, optionalParams);
        return;
      case LogLevel.Error:
        console.error(message, optionalParams);
        return;
      default:
        return;
    }
  }
}
