import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default props => {
  return (
    <View style={styles.container, props?.containerStyle}>
      <MapView
        style={{ ...styles.map, ...props?.mapStyle }}
        region={{
          latitude: props.latitude,
          longitude: props.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        loadingEnabled={false}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsBuildings={false}
        minZoomLevel={13}
        maxZoomLevel={17}
      // onRegionChangeComplete={region => {
      //   setZoom(Math.round(Math.log(360 / region.latitudeDelta) / Math.LN2))
      // }}
      ></MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
  },
});