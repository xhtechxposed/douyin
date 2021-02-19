
Java.perform(function(){var a = Java.use("com.ss.sys.ces.a");a.meta.implementation = function(cmdid,conte,data)
 {var ret = this.meta(cmdid,conte,data);

 if(ret!=null)
 {
         var String_java = Java.use('java.lang.String');
         var JavaByte = Java.use("[B");
          var base64 = Java.use('android.util.Base64');

var buffer = Java.array('byte', ret);

         var r =  Java.cast(ptr(ret.$handle), JavaByte);
          Java.send({'msg':buffer,'cmdid':cmdid});
 }

        return ret;
    }
});