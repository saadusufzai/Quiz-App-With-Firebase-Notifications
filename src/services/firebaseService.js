import firebase from 'firebase'

export const configureNootification = ()=>{
    Notification.requestPermission().then((permision)=>{
        console.log(permision)
        if(permission === 'granted'){
            massaging.getToken().then((currentToken)=>{
                if(currentToken){
                    console.log('TOKEN => ', correntToken)
                } else {
                    console.log(' No Instance ID token available. Request permission to generate one.')
                }
            }).catch((err)=>{
                console.log('An Error occured while retreving token. ', err)
            })
        }
    })
}