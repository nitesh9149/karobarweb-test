// plugins/operating-system.js

export default (context, inject) => {
    const getOperatingSystem = () => {
      const userAgent = process.client ? window.navigator.userAgent : '';
      const platform = process.client ? window.navigator.platform : '';
      console.log("platform",platform)
      if (/Win/i.test(platform)) {
        return 'Windows';
      }
  
      if (/Mac/i.test(platform)) {
        return 'macOS';
      }
  
      if (/Linux/i.test(platform)) {
        return 'Linux';
      }
  
      if (/Android/i.test(userAgent)) {
        return 'Android';
      }
  
      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return 'iOS';
      }
  
      return 'Unknown';
    };
  
    inject('getOperatingSystem', getOperatingSystem);
  };