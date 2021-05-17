import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default props => {
  return (
    <View style={styles.container, props?.containerStyle}>
      <MapView
        style={{ ...props?.mapStyle }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: props.latitude,
          longitude: props.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}

        loadingEnabled={false}
        // showsUserLocation={true}
        // showsMyLocationButton={true}
        showsBuildings
        minZoomLevel={13}
        maxZoomLevel={17}
      // onRegionChangeComplete={region => {
      //   setZoom(Math.round(Math.log(360 / region.latitudeDelta) / Math.LN2))
      // }}
      >
        {props?.latitude && <Marker coordinate={{
          latitude: props.latitude,
          longitude: props.longitude,
        }} />}

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});