const CACHE_KEY = 'task_saved';

function checkForStorage() {
  return typeof Storage !== 'undefined';
}

function saveTask(data) {
  if (checkForStorage()) {
      let historyData = null;
      if (localStorage.getItem(CACHE_KEY) === null) {
          historyData = [];
      } else {
          historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
      }

      historyData.unshift(data);

      if (historyData.length > 5) {
          historyData.pop();
      }

      localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
  }
}

function showHistory() {
  if (checkForStorage()) {
      return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
      return [];
  }
}