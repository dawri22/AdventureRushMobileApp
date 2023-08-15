import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GoogleMapViewFull from "../../components/Search/GoogleMapViewFull";
import SearchBar from "../../components/Search/SearchBar";
import { UserLocationContext } from "../../Context/UserLocationContex";
import GlobalApi from "../../Services/GlobalApi";
import BussinessList from "../../components/Search/BussinessList";

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    GetNearbySearchPlace('restaurant');
  }, []);

  const GetNearbySearchPlace = (value) => {
    GlobalApi.searchByText(value).then((resp) => {
      setPlaceList(resp.data.results);
    });
  };

  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 20,
          marginTop: 5,
        }}
      >
        <SearchBar setSearchText={(value)=>GetNearbySearchPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View style={{position: 'absolute', zIndex: 20, bottom: 0}}>
        <BussinessList placeList={placeList} />
      </View>
    </View>
  );
}
