import { View, Text, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Home/Header";
import GoogleMapView from "../../components/Home/GoogleMapView";
import CategoryList from "../../components/Home/CategoryList";
import GlobalApi from "../../Services/GlobalApi.js";
import PlaceList from "../../components/Home/PlaceList";
import { UserLocationContext } from "../../Context/UserLocationContex";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      GetNearBysearchPlace('tourist_attraction');
    }
  }, [location]);

  const GetNearBysearchPlace = (value) => {
    GlobalApi.nearByPlace(
      location.coords.latitude,
      location.coords.longitude,
      value
    ).then((resp) => {
      setPlaceList(resp.data.results);
      console.log(resp.data.results);
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
    });
  };
  return (
    <ScrollView style={{ padding: 30 }}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => GetNearBysearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}
