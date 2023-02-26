class FAJAX {
    open(method, url) {
        this.method = method;
        this.url = url;
    }

    send(obj = {}) {
        this.data = obj;
        network.recieveInformation(this.method, this.url, this.data);
        this.response = network.sendInformation();
        return this.onload();
    }
}