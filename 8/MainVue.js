let app = new Vue({
    el: "#app",
    data: {
        iteamDataMain: null
    },
    mounted(){
        axios
        .get('https://isidea.ru/rgups_data.json')
        .then(respose => this.iteamDataMain = respose.data)
    } 
  });