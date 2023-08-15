import { Share } from "react-native"

const SharePhotos=(photo)=>{
    Share.share({
        url: photo,
        title: 'Compartir Foto',
        message: 'Compartir con',
        
    })
}

export default{
    SharePhotos
}