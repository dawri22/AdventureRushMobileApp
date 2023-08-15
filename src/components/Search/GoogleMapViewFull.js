import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContex";
import PlaceMarker from "../Home/PlaceMarker";

export default function GoogleMapViewFull({placeList}) {
    const [mapRegion, setmapRegion] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location && location.coords.latitude && location.coords.longitude) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);
  return (
    <View>
      {location?<MapView
          style={{
            width: Dimensions.get("screen").width ,
            height: Dimensions.get("screen").height * 0.90,
          }}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="Me" coordinate={mapRegion} />

          {placeList.map(
            (item, index) =>
              index <= 5 && <PlaceMarker item={item} key={index} />
          )} 

        </MapView>:null}
    </View>
  )
}