##教你设计物联网

这是一本书，确切地说是电子书《一步步搭建物联网系统》的APP版，并且我们在其中提供了实验室功能，当前允许模拟简单的http请求。


设计物联网系统是件有意思的事，它需要考虑到软件、硬件、通讯等多个方面。通过探索不同的语言、不同的框架，从而形成不同的解决方案。

在这里，我们将向您介绍物联网系统设计，并将带领您一步步搭建物联网系统。

<a href="https://play.google.com/store/apps/details?id=com.phodal.designiot">
  <img alt="Get it on Google Play"
       src="https://developer.android.com/images/brand/zh-cn_generic_rgb_wo_60.png" />
</a>

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
