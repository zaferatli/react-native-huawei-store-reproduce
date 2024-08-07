package com.reproducerapp;
import com.facebook.react.ReactPackage;
import android.util.Log;
import com.huawei.hms.rn.map.HMSMapPackage;

public class MapPackageChecker {

  public static ReactPackage getMapPackage() {
    return new HMSMapPackage();
  }

}