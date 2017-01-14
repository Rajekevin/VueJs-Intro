new Vue({
    el:'#app', //Element sur l'id app

    data:{ /*Tableau qui injecte les donnees sur notre vue*/
        message:"salut, je m'appelle Rajekevin",
        link : "www.mdr.fr",
        success: false,
        persons: ['Jonathan','Jon', 'Joe']
    },

    methods:{
        close:function(){
            this.success = false
        },
    }
})