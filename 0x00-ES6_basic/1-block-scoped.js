export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true; //not overridden during execution
      const task2 = false; // not overriden during execution
    }
  
    return [task, task2];
  }