import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContex";
import PlaceMarker from "./PlaceMarker";

export default function GoogleMapView({placeList}) {
  const [mapRegion, setmapRegion] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location && location.coords.latitude && location.coords.longitude) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View>
      <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "600" }}>
        Top Lugares Cercanos
      </Text>
      <View
        style={{
          marginTop: 20,
          overflow: "hidden",
          borderRadius: 20,
        }}
      >
        {location?<MapView
          style={{
            width: Dimensions.get("screen").width * 0.89,
            height: Dimensions.get("screen").height * 0.23,
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
    </View>
  );
}
