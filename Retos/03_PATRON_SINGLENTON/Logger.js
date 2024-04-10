class Messages  {
  static errorInstance = "You can only create one instance of Logger!"
  static instanceMissing = "You need create one instance of Logger!"
  static succesData = "You log was saved successfully"
  static errorDataFormat = "You log has the incorrect format only string"
}

class Logger {
  static #NAMELOGGER = undefined;
  static #LOGS = []
  #log
  
  constructor(loggerName) {
    if (Logger.#NAMELOGGER) throw new Error(Messages.errorInstance);
    this.#log = loggerName
  }

  static createLogger(name) {
    if (!Logger.#NAMELOGGER) Logger.#NAMELOGGER = new Logger(name)
    return Logger.#NAMELOGGER
  }

  static seeLogger() {
    return this.#LOGS
  }
  
  static newDataLogger(type , value){
    if (typeof value !== "string") throw new Error(Messages.errorDataFormat);
    if (!Logger.#NAMELOGGER) throw new Error(Messages.instanceMissing);
    this.#LOGS.push({[type]: value})
    return Messages.succesData
  }

  get log() {
    return this.#log
  }
}
function LoggerElements() {
  const consoleLogger = Logger.createLogger("Console");
  Logger.newDataLogger('WARNING' , 'LOG-1')
  Logger.newDataLogger('DANGEROUS','LOG-2')
  Logger.newDataLogger('NORMAL', 'LOG-3')
  console.log(consoleLogger)
  console.log(Logger.seeLogger())
  console.log('_'.repeat(10))
  console.log( consoleLogger.log)
}
LoggerElements();
