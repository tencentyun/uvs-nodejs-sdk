//var qcloud = require('qcloud_video');
var qcloud = require('../');

qcloud.conf.setAppInfo('10000000', 'AKIDeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 'xsssssssssssssssssssssssssssssss');
var bucket = 'firstBucket';
var coverUrl  = 'http://ceshi-1000027.file.myqcloud.com/0.jpg';
var coverUrl2 = 'http://ceshi-1000027.file.myqcloud.com/1.jpg';

qcloud.video.deleteFile(bucket, 't.mp4', function(ret) {console.log(ret);
    qcloud.video.upload('./test.mp4', bucket, 't.mp4', coverUrl, '0666', function(ret) {console.log(ret);
        qcloud.video.updateFile(bucket, '123/t.mp4', 'title', 'desc', 'bizAttr', coverUrl2, function(ret) {console.log(ret);
            qcloud.video.statFile(bucket, '123/t.mp4', function(ret) {console.log(ret);
                qcloud.video.prefixSearch(bucket, '123', 'z', function(ret) {console.log(ret);
                    qcloud.video.createFolder(bucket, '/123', function(ret) {console.log(ret);
                        qcloud.video.deleteFolder(bucket, '123/', function(ret) {console.log(ret);
                            qcloud.video.upload_slice('./test.mp4', bucket, 'q.mp4', '0666', 'title', 'desc', '', 3*512000);
                        });
                    });
                });
            });
        });
    });
});
