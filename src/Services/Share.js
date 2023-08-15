import { Share } from "react-native"

const SharePlace=(place)=>{
    Share.share({
        title: 'Compartir Negocio',
        message: "Nombre de Negocio:"+place.name+"\n"+"Direccion"+place.vicinity?place.vicinity:place.formatted_address,
        url: place.icon
    })
}

export default{
    SharePlace
}