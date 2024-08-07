package com.reproducerapp;
import com.facebook.react.ReactPackage;
import com.airbnb.android.react.maps.MapsPackage;
import android.util.Log;

public class MapPackageChecker {

  public static ReactPackage getMapPackage() {
    return new MapsPackage();
  }

}