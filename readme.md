# myNgrok

## gir clone後にやること

1. 設定ファイルのコピー
```
cp setting.json.sample setting.json
```

1. 設定ファイルの書き換え
vim setting.json


1. サービス登録
```
ln module_ssh/myNgrokSsh.service /etc/systemd/system/myNgrokSsh.service
ln module_redmine/myNgrokRedmine.service /etc/systemd/system/myNgrokRedmine.service
ln module_jenkins/myNgrokJenkins.service /etc/systemd/system/myNgrokJenkins.service
```

## 仕組み
1. nodejs の ngrok を利用して公開する

1. 作成されたurlは slackに通知(incoming webhookを利用)

1. 起動はsystemctlを利用

1. sshは無料アカウント内で接続

1. httpは8時間で接続が切れてしまうのでjenkinsで8時間おきにrestartする



