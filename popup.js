document.getElementById('quoteBtn').addEventListener('click', () => {
    // Save the selected widget type in Chrome storage
    chrome.storage.sync.set({ widgetType: 'quote' }, () => {
      console.log('Widget type set to: Quote');
    });
  });
  
  document.getElementById('reminderBtn').addEventListener('click', () => {
    // Save the selected widget type in Chrome storage
    chrome.storage.sync.set({ widgetType: 'reminder' }, () => {
      console.log('Widget type set to: Reminder');
    });
  });
  