#getUserMedia-Universal
最近のOperaとChrome18以降とFirefox16(2012年現在nightlyだけ)以降とWebRTCプラギンをインストールしたIEで動作します．
大事なことなので繰り返しますが事実上全てのブラウザでクロスブラウザしてます．とてもCool．

Firefox で動作させる場合はユーザプロファイルの pref.js に以下の記述を追加する必要があります．（本来であればabout:configから設定可能な筈ですが…）

    user_pref("media.navigator.enabled", true);

インスペクタでWebRTCのMediaStreamの実装状況を手軽にチェックするために作りました．

![ss](/udonchan/getUserMedia-Universal/raw/master/doc/ss.png)
