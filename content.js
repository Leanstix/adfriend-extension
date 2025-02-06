// Function to find and replace ads
function replaceAds() {
    chrome.storage.sync.get(['widgetType', 'frequency'], (data) => {
      const widgetType = data.widgetType || 'quote'; // Default to quote if not set
      const frequency = data.frequency || '5'; // Default to 5 seconds if not set
  
      const adSelectors = [
        'iframe[src*="ads"]',
        'div[id*="ad"]',
        'div[class*="ad"]',
        'ins.adsbygoogle',
        '[aria-label="Advertisement"]'
      ];
  
      adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(ad => {
          const widget = createWidget(widgetType);
          ad.replaceWith(widget);
        });
      });
  
      // Set the interval based on the user's frequency choice
      setInterval(replaceAds, frequency * 1000);
    });
  }
  
  // Function to create a motivational widget
  function createWidget(type) {
    let widgetContent;
  
    if (type === 'reminder') {
      widgetContent = "Have you moved today? Remember to stretch!";
    } else {
      // Default to motivational quotes
      const messages = [
        "Stay focused and never give up!",
        "Believe in yourself!",
        "Take a deep breath and keep going!",
        "Success is built one step at a time!"
      ];
      widgetContent = messages[Math.floor(Math.random() * messages.length)];
    }
  
    const widget = document.createElement("div");
    widget.textContent = widgetContent;
    widget.style.cssText = `
      background: #f9a826;
      color: white;
      padding: 10px;
      font-size: 16px;
      border-radius: 8px;
      text-align: center;
      max-width: 300px;
      margin: 10px auto;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    `;
  
    return widget;
  }
  
  // Run script when the page loads
  replaceAds();
  
  // Run periodically to catch dynamically loaded ads
  setInterval(replaceAds, 3000);
  