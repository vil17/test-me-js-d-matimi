dót sem ég notaði og gerði til að fá shit til að virka

https://webpack.js.org/loaders/style-loader/
notast með 
https://webpack.js.org/loaders/css-loader/

fyrir TTT Tharf ad hafa inject to body til ad losna vid MIME errors

eins fyrir my JS to work tharf bootstrap import i index

//// shit sem e´g er að profa
npm install bootstrap (liklegast vantar save herna lika)

set inn npm install nodemon -g til ad vera ekki alltaf ad stoppa og starta

================== css og lodash ======================
setti file.js
import css from 'file.css';
í index.js

í index skránni er ennþá það sem þurfti til að fá lodash til að virka.. sé svosum ekki 100% afhverju það 
notað í verkefninu nema bara for fun..

bætti þessu við í webpack (sjá)
module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  	}

 það þarf ekki að gera variable fyrir css-loader

 !!!!! eins til að fá JS til að actually fucking loadast á síðunni þurfti ég að skilgreina hvar skrárnar væru
 það hlýtur að vera betri leið til að gera þetta og láta þá bara skila ALLRI DIST SKRÁNNI !!!!!!!


==================== CircleCI =============

uuuu bara moddaði settings fælinn og setti á réttan stað.. setti svo upp þessar commands sem sjást í skránni
sem eru þær basic sem við erum að nota í testin..

heroku á ekki að samþykkja build nema það fari í gegnum CircleCI.. hinsvegar ef það stoppar á því 
varstu að pusha skíta kóða noob.

en ég veit EKKERT hvernig við testum svo þennan´JS kóða minn.. það eru bara.. like 2 return..
svo þurfum við einhvernvegin kannski að reyna gera hann meira loosly coupled? þótt þetta sé nátturulega
allt eitt function einhvernvegin (muna að þetta loadast eingöngnu þegar document er ready),




===================== Heroku ===== 

honestly ekki alveg viss hvernig ég gerði með Heroku
vann það eiginlega ekkert úr command line í raun bara af síðunni.. 
ég nenni ekki að láta Heroku vera á sér heroku branch en kemur í ljós hvað við gerum
en einhverjar skipanir eru t.d. heroku create og heroku login ofc

====================== TTT MODS ====================

rename-aði skrárnar í samhengi við TTT og setti inn TTT HTML

tók út allt sem vísaði í djös þarna .... JS skránna þar úr HTML skránni og færði þá virkni yfir í webpack
