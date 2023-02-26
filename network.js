class Network {
 recieveInformation(method, url, data){
    this.method = method;
    this.url = url;
    this.data = data;
}
sendInformation(){
     return server.serving(this.method, this.url);
 }

}