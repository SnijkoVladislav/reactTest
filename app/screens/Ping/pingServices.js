import axios from 'axios';

export {ping};

function request_image(url) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(url);
        img.src = url + '?random-no-cache=' + Math.floor((1 + Math.random()) * 0x10000).toString(16);
    });
}

function ping(url, multiplier) {
    return axios.get(url).then(() => {
        return new Promise((resolve, reject) => {
            var start = (new Date()).getTime();
            var response = () => {
                var delta = ((new Date()).getTime() - start);
                delta *= (multiplier || 1);
                resolve(delta);
            };
            request_image(url).then(response).catch(response);
            setTimeout(() => {
                reject(Error('Timeout'));
            }, 5000);
        });
    })
}
