package io.lyve;


import android.app.Application;

import android.content.Intent;
import android.content.res.Configuration;

import androidx.annotation.NonNull;

import expo.modules.ApplicationLifecycleDispatcher;
import expo.modules.ReactNativeHostWrapper;

import com.facebook.react.ReactNativeHost;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import io.lyve.launchapplication.LaunchApplicationPackage;;
import io.lyve.videoplayer.VideoPlayerPackage;
import com.facebook.react.ReactPackage;

import com.facebook.soloader.SoLoader;

import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHostWrapper(
    this,
    new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();

      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());
        packages.add(new VideoPlayerPackage());
        packages.add(new LaunchApplicationPackage());

      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  });

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    ApplicationLifecycleDispatcher.onApplicationCreate(this);
  }

  @Override
  public void onConfigurationChanged(@NonNull Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    Intent intent = new Intent("onConfigurationChanged");
    intent.putExtra("newConfig", newConfig);
    sendBroadcast(intent);
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig);
  }
}
