export function debounceWithQueue(func, maxRate = 500) {
  const getms = () => +new Date();

  let queueTrigger = null;
  let queueItem = null;

  const createQueue = () => {
    queueTrigger = setTimeout(() => {
      if (queueItem != null) {
        queueItem();
        queueItem = null;
        createQueue();
      } else {
        queueTrigger = null;
      }
    }, maxRate);
  };

  return (...args) => {
    if (queueTrigger == null) {
      func(...args);
      createQueue();
    } else {
      queueItem = () => func(...args);
    }
  };
}
