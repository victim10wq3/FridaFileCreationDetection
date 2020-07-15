This script will grab the file path arguement when fileOutputStream is called. 

** Example for androids default web browser ## 

`frida -U -f com.android.browser -l fileread.js --no-paus`

The app will start, browse around the app to get it to start opening files. 

Output should look something like this

```
Spawned 'com.android.browser'. Resuming main thread  	
[Samsung SM-G955N::com.android.browser]->   	
Current External storage location is:/storage/emulated/0    
New File Created: /data/user/0/com.android.browser/cache/browser_state.parcel.journal   
New File Created: /data/user/0/com.android.browser/cache/browser_state.parcel.journal   
New File Created: /data/user/0/com.android.browser/cache/browser_state.parcel.journal   
New File Created: /data/user/0/com.android.browser/cache/browser_state.parcel.journal   
New File Created: /data/user/0/com.android.browser/shared_prefs/com.android.browser_preferences.xml   
New File Created: /data/user/0/com.android.browser/shared_prefs/com.android.browser_preferences.xml  
New File Created: /data/user/0/com.android.browser/shared_prefs/com.android.browser_preferences.xml  
New File Created: /data/user/0/com.android.browser/shared_prefs/com.android.browser_preferences.xml  `
```
 

