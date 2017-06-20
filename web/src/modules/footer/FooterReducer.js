import $ from 'jquery'

export default function(state = {light:'/'},action){

    let resetState = JSON.parse(JSON.stringify(state));

    console.log("resetState=",resetState,"action.type=",action.type)

    switch(action.type){
        case '/' : ;
        case '/index' : ;
                $('.isLight1').css('color','#DB5A70')
                break;
        case '/goodslist' : ;
        case '/list' : ;
        case '/search' : ;
                $('.isLight2').css('color','#DB5A70');
                break;
        case '/personal' :
                $('.isLight4').css('color','#DB5A70');     
    }
    return resetState;
}