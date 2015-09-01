##教你设计物联网

> 电子书《一步步搭建物联网系统》的APP版。

<a href="https://play.google.com/store/apps/details?id=com.phodal.designiot">
  <img alt="Get it on Google Play"
       src="https://developer.android.com/images/brand/zh-cn_generic_rgb_wo_60.png" />
</a>

附加配置

Add AndroidManifest.xml

      <!-- Accept chrome links -->
      <intent-filter>
          <action android:name="android.intent.action.VIEW" />
          <category android:name="android.intent.category.DEFAULT" />
          <category android:name="android.intent.category.BROWSABLE" />
          <data android:host="designiot.phodal.com" android:pathPrefix="/" android:scheme="http" />
      </intent-filter>
      <!-- Accept adb data flag -->
      <intent-filter>
          <action android:name="android.intent.action.VIEW" />
          <category android:name="android.intent.category.DEFAULT" />
          <category android:name="android.intent.category.BROWSABLE" />
          <data android:host="designiot.phodal.com" android:scheme="http" />
      </intent-filter>
