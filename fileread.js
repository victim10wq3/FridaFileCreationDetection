//Usage: frida -U -f <app name here> -l fileread.js --no-paus

Java.perform(function() {   	
		//Importing classes
		
		var Environment = Java.use("android.os.Environment");
		var File = Java.use("java.io.File");
		var fileOutputStream = Java.use("java.io.FileOutputStream");
		//Intent activity detection planned for the future...
		
		//var Activity = Java.use("android.app.Activity");
		//var Intent = Java.use ("android.content.Intent");
		
		//Grabbing the name of the default external storage location
		var baseDir = Environment.getExternalStorageDirectory().getAbsolutePath();
		console.log("\n" + "Current External storage location is:" + baseDir);
		
		
		
		//Grabbing the file path each time "new fileOutputStream" is called. 
		fileOutputStream.$init.overload('java.io.File').implementation = function(x) {
			console.log("New File Created: " + x);
		 }
		
		fileOutputStream.$init.overload('java.io.File','boolean').implementation = function(x) {
			console.log("New File Created: " + x);
		 }
		 
		fileOutputStream.$init.overload('java.io.FileDescriptor').implementation = function(x) {
			console.log("New File Created: " + x);
		 }
		 
		fileOutputStream.$init.overload('java.io.FileDescriptor','boolean').implementation = function(x) {
			console.log("New File Created: " + x);
		 }
		
		fileOutputStream.$init.overload('java.lang.String').implementation = function(x) {
			console.log("New File Created: " + x);
		 }
		
		fileOutputStream.$init.overload('java.lang.String','boolean').implementation = function(x) {
			console.log("New File Created: " + x);
		 }

});
