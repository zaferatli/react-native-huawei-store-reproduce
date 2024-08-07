import HMSMap, {
  Gravity,
  HMSMarker,
  MapTypes,
} from '@hmscore/react-native-hms-map';
import {Platform, View} from 'react-native';
import BuildConfig from 'react-native-build-config';
import React from 'react';

const App = () => {
  const flavorString = Platform.OS === 'android' ? BuildConfig.FLAVOR : '';
  const isFlavorHuawei = flavorString.includes('Huawei');

  const googleMap = () => {
    return (
      <View>
        <MapView provider={PROVIDER_GOOGLE} initialRegion={region}></MapView>
      </View>
    );
  };
  isFlavorHuawei && HMSMap.module.initializer('HUAWEI-API-KEY-HERE', 'DE');
  const huaweiMap = () => {
    return (
      <View>
        <HMSMap
          mapType={MapTypes.NORMAL}
          darkMode={false}
          logoPosition={Gravity.TOP | Gravity.START}
          logoPadding={{
            paddingStart: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingEnd: 0,
          }}
          camera={{
            target: {
              latitude: region.latitude,
              longitude: region.longitude,
            },
            zoom: 12,
          }}></HMSMap>
      </View>
    );
  };
  return isFlavorHuawei ? huaweiMap() : googleMap();
};

export default App;
