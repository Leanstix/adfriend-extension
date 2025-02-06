// Load saved settings when the options page is opened
chrome.storage.sync.get(['widgetType', 'frequency'], (data) => {
    document.getElementById('widgetType').value = data.widgetType || 'quote';
    document.getElementById('frequency').value = data.frequency || '5';
  });
  
  // Save settings when the user clicks the Save button
  document.getElementById('saveBtn').addEventListener('click', () => {
    const widgetType = document.getElementById('widgetType').value;
    const frequency = document.getElementById('frequency').value;
  
    chrome.storage.sync.set({ widgetType, frequency }, () => {
      alert('Settings saved!');
    });
  });
  