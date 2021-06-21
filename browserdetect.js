let ua = detect.parse(navigator.userAgent);

document.getElementById('name').innerText = ua.browser.name;
document.getElementById('device').innerText = ua.device.type;
document.getElementById('os').innerText = ua.os.name;

