# Web掲示板
## 手順書
### 
**1**:https://github.com/kaneko4257/zenki_kadai.git

　でSSHの方をコピーして以下のコマンド打ってリポジトリを登録

 <ins>git remote add origin (git@github.com:～.git)</ins>

**2**:<ins>git push origin main</ins>でリモートリポジトリに反映させる


**3**:Docker Compose で起動

**4**:<ins>docker build up</ins>(念のため)・<ins>docker compose up</ins>をする


**5**:ブラウザから <ins>http://(あなたのip)/bbsimagetest.php</ins> にアクセス
