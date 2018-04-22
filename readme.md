# myNgrok

## 仕組み
nodejs の ngrok を利用して公開する

作成されたurlは slackに通知(incoming webhookを利用)

起動はsystemctlを利用

sshは無料アカウント内で接続

httpは8時間で接続が切れてしまうのでjenkinsで8時間おきにrestartする



