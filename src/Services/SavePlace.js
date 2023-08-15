import React, { useState } from 'react';
import { View, Button } from 'react-native';

const SavePlace = ( place ) => {
  const [placeData, setPlaceData] = useState(null);

  // Función para guardar los datos del lugar en un objeto
  const savePlaceToObject = () => {
    // Crear un objeto con los datos del lugar
    const data = {
      name: place.name,
      direction: place.vicinity || place.formatted_address
    };

    console.log(data);

    // Guardar el objeto en el estado del componente
    setPlaceData(data);
  };
}

export default SavePlace;
