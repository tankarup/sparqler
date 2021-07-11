/* https://sparql.crssnky.xyz/imas/
SELECT ?s ?label ?brand
WHERE {
 ?s <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Idol>.
 ?s <http://www.w3.org/2000/01/rdf-schema#label> ?label.
 ?s <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Brand> ?brand.
}
*/

const sparql_labels = {
	"head": {
	  "vars": [ "s" , "label" , "brand" ]
	} ,
	"results": {
	  "bindings": [
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" } ,
		  "label": { "type": "literal" , "value": "大石泉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hanazono_Momohito" } ,
		  "label": { "type": "literal" , "value": "花園百々人" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" } ,
		  "label": { "type": "literal" , "value": "双葉杏" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" } ,
		  "label": { "type": "literal" , "value": "相葉夕美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" } ,
		  "label": { "type": "literal" , "value": "柊志乃" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" } ,
		  "label": { "type": "literal" , "value": "村上巴" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togoji_Reika" } ,
		  "label": { "type": "literal" , "value": "東豪寺麗華" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "Other" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" } ,
		  "label": { "type": "literal" , "value": "浜口あやめ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" } ,
		  "label": { "type": "literal" , "value": "ライラ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" } ,
		  "label": { "type": "literal" , "value": "一ノ瀬志希" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hanamura_Shoma" } ,
		  "label": { "type": "literal" , "value": "華村翔真" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" } ,
		  "label": { "type": "literal" , "value": "結城晴" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" } ,
		  "label": { "type": "literal" , "value": "西島櫂" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" } ,
		  "label": { "type": "literal" , "value": "萩原雪歩" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichikawa_Hinana" } ,
		  "label": { "type": "literal" , "value": "市川雛菜" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" } ,
		  "label": { "type": "literal" , "value": "月宮雅" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" } ,
		  "label": { "type": "literal" , "value": "東郷あい" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yukoku_Kiriko" } ,
		  "label": { "type": "literal" , "value": "幽谷霧子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Arisugawa_Natsuha" } ,
		  "label": { "type": "literal" , "value": "有栖川夏葉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" } ,
		  "label": { "type": "literal" , "value": "野々村そら" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" } ,
		  "label": { "type": "literal" , "value": "永吉昴" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" } ,
		  "label": { "type": "literal" , "value": "若林智香" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Amana" } ,
		  "label": { "type": "literal" , "value": "大崎甘奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Ryu" } ,
		  "label": { "type": "literal" , "value": "木村龍" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" } ,
		  "label": { "type": "literal" , "value": "関裕美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" } ,
		  "label": { "type": "literal" , "value": "早坂美玲" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fuyumi_Jun" } ,
		  "label": { "type": "literal" , "value": "冬美旬" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" } ,
		  "label": { "type": "literal" , "value": "本田未央" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" } ,
		  "label": { "type": "literal" , "value": "涼宮星花" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" } ,
		  "label": { "type": "literal" , "value": "木下ひなた" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" } ,
		  "label": { "type": "literal" , "value": "星輝子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" } ,
		  "label": { "type": "literal" , "value": "古澤頼子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiyosumi_Kuro" } ,
		  "label": { "type": "literal" , "value": "清澄九郎" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Uzuki_Makio" } ,
		  "label": { "type": "literal" , "value": "卯月巻緒" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuwayama_Chiyuki" } ,
		  "label": { "type": "literal" , "value": "桑山千雪" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" } ,
		  "label": { "type": "literal" , "value": "木場真奈美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" } ,
		  "label": { "type": "literal" , "value": "財前時子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" } ,
		  "label": { "type": "literal" , "value": "伊吹翼" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" } ,
		  "label": { "type": "literal" , "value": "小松伊吹" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" } ,
		  "label": { "type": "literal" , "value": "白石紬" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" } ,
		  "label": { "type": "literal" , "value": "柳清良" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" } ,
		  "label": { "type": "literal" , "value": "ジュリア" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" } ,
		  "label": { "type": "literal" , "value": "ヘレン" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" } ,
		  "label": { "type": "literal" , "value": "キャシー・グラハム" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" } ,
		  "label": { "type": "literal" , "value": "道明寺歌鈴" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" } ,
		  "label": { "type": "literal" , "value": "仙崎恵磨" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shingen_Seiji" } ,
		  "label": { "type": "literal" , "value": "信玄誠司" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" } ,
		  "label": { "type": "literal" , "value": "宮尾美也" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Izumi_Mei" } ,
		  "label": { "type": "literal" , "value": "和泉愛依" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizutani_Eri" } ,
		  "label": { "type": "literal" , "value": "水谷絵理" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "DearlyStars" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitsumine_Yuika" } ,
		  "label": { "type": "literal" , "value": "三峰結華" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" } ,
		  "label": { "type": "literal" , "value": "依田芳乃" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" } ,
		  "label": { "type": "literal" , "value": "野々原茜" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sunazuka_Akira" } ,
		  "label": { "type": "literal" , "value": "砂塚あきら" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" } ,
		  "label": { "type": "literal" , "value": "桜守歌織" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" } ,
		  "label": { "type": "literal" , "value": "舞浜歩" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" } ,
		  "label": { "type": "literal" , "value": "神崎蘭子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" } ,
		  "label": { "type": "literal" , "value": "成宮由愛" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Hokuto" } ,
		  "label": { "type": "literal" , "value": "伊集院北斗" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurosaki_Chitose" } ,
		  "label": { "type": "literal" , "value": "黒埼ちとせ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okamura_Nao" } ,
		  "label": { "type": "literal" , "value": "岡村直央" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinonome_Soichiro" } ,
		  "label": { "type": "literal" , "value": "東雲荘一郎" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Mamimi" } ,
		  "label": { "type": "literal" , "value": "田中摩美々" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" } ,
		  "label": { "type": "literal" , "value": "百瀬莉緒" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" } ,
		  "label": { "type": "literal" , "value": "五十嵐響子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" } ,
		  "label": { "type": "literal" , "value": "八神マキノ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" } ,
		  "label": { "type": "literal" , "value": "水木聖來" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" } ,
		  "label": { "type": "literal" , "value": "市原仁奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" } ,
		  "label": { "type": "literal" , "value": "天海春香" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" } ,
		  "label": { "type": "literal" , "value": "藤原肇" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Tenka" } ,
		  "label": { "type": "literal" , "value": "大崎甜花" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" } ,
		  "label": { "type": "literal" , "value": "高峯のあ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" } ,
		  "label": { "type": "literal" , "value": "松本沙理奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" } ,
		  "label": { "type": "literal" , "value": "新田美波" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" } ,
		  "label": { "type": "literal" , "value": "櫻井桃華" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" } ,
		  "label": { "type": "literal" , "value": "七尾百合子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" } ,
		  "label": { "type": "literal" , "value": "神谷奈緒" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mayuzumi_Fuyuko" } ,
		  "label": { "type": "literal" , "value": "黛冬優子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" } ,
		  "label": { "type": "literal" , "value": "緒方智絵里" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" } ,
		  "label": { "type": "literal" , "value": "輿水幸子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" } ,
		  "label": { "type": "literal" , "value": "池袋晶葉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" } ,
		  "label": { "type": "literal" , "value": "松山久美子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuzunoha_Amehiko" } ,
		  "label": { "type": "literal" , "value": "葛之葉雨彦" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" } ,
		  "label": { "type": "literal" , "value": "所恵美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" } ,
		  "label": { "type": "literal" , "value": "北条加蓮" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurono_Genbu" } ,
		  "label": { "type": "literal" , "value": "黒野玄武" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" } ,
		  "label": { "type": "literal" , "value": "高山紗代子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" } ,
		  "label": { "type": "literal" , "value": "南条光" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikaruga_Luca" } ,
		  "label": { "type": "literal" , "value": "斑鳩ルカ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" } ,
		  "label": { "type": "literal" , "value": "春日未来" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" } ,
		  "label": { "type": "literal" , "value": "中野有香" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" } ,
		  "label": { "type": "literal" , "value": "岡崎泰葉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kazano_Hiori" } ,
		  "label": { "type": "literal" , "value": "風野灯織" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" } ,
		  "label": { "type": "literal" , "value": "浅野風香" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Enjoji_Michiru" } ,
		  "label": { "type": "literal" , "value": "円城寺道流" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" } ,
		  "label": { "type": "literal" , "value": "北上麗花" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Yukihiro" } ,
		  "label": { "type": "literal" , "value": "神谷幸広" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" } ,
		  "label": { "type": "literal" , "value": "佐々木千枝" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakazato_Haruna" } ,
		  "label": { "type": "literal" , "value": "若里春名" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" } ,
		  "label": { "type": "literal" , "value": "アナスタシア" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" } ,
		  "label": { "type": "literal" , "value": "槙原志保" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" } ,
		  "label": { "type": "literal" , "value": "鷺沢文香" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" } ,
		  "label": { "type": "literal" , "value": "大原みちる" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" } ,
		  "label": { "type": "literal" , "value": "前川みく" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" } ,
		  "label": { "type": "literal" , "value": "水本ゆかり" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" } ,
		  "label": { "type": "literal" , "value": "周防桃子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" } ,
		  "label": { "type": "literal" , "value": "安斎都" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" } ,
		  "label": { "type": "literal" , "value": "佐竹美奈子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" } ,
		  "label": { "type": "literal" , "value": "杉坂海" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asselin_BB_2" } ,
		  "label": { "type": "literal" , "value": "アスラン=BBⅡ世" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" } ,
		  "label": { "type": "literal" , "value": "白菊ほたる" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saijo_Juri" } ,
		  "label": { "type": "literal" , "value": "西城樹里" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" } ,
		  "label": { "type": "literal" , "value": "沢田麻理菜" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Juney" } ,
		  "label": { "type": "literal" , "value": "ジュニー" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuzuki_Kei" } ,
		  "label": { "type": "literal" , "value": "都築圭" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" } ,
		  "label": { "type": "literal" , "value": "江上椿" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" } ,
		  "label": { "type": "literal" , "value": "中谷育" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" } ,
		  "label": { "type": "literal" , "value": "北川真尋" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" } ,
		  "label": { "type": "literal" , "value": "的場梨沙" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" } ,
		  "label": { "type": "literal" , "value": "箱崎星梨花" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" } ,
		  "label": { "type": "literal" , "value": "並木芽衣子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" } ,
		  "label": { "type": "literal" , "value": "三好紗南" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" } ,
		  "label": { "type": "literal" , "value": "間中美里" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" } ,
		  "label": { "type": "literal" , "value": "乙倉悠貴" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" } ,
		  "label": { "type": "literal" , "value": "真鍋いつき" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" } ,
		  "label": { "type": "literal" , "value": "横山奈緒" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirase_Sakuya" } ,
		  "label": { "type": "literal" , "value": "白瀬咲耶" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akai_Suzaku" } ,
		  "label": { "type": "literal" , "value": "紅井朱雀" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" } ,
		  "label": { "type": "literal" , "value": "棟方愛海" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanakusa_Nichika" } ,
		  "label": { "type": "literal" , "value": "七草にちか" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" } ,
		  "label": { "type": "literal" , "value": "安部菜々" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukioka_Kogane" } ,
		  "label": { "type": "literal" , "value": "月岡恋鐘" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" } ,
		  "label": { "type": "literal" , "value": "松田亜利沙" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" } ,
		  "label": { "type": "literal" , "value": "上条春菜" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" } ,
		  "label": { "type": "literal" , "value": "堀裕子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" } ,
		  "label": { "type": "literal" , "value": "星井美希" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maita_Rui" } ,
		  "label": { "type": "literal" , "value": "舞田類" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsujino_Akari" } ,
		  "label": { "type": "literal" , "value": "辻野あかり" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" } ,
		  "label": { "type": "literal" , "value": "氏家むつみ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryoo_Haena" } ,
		  "label": { "type": "literal" , "value": "リュ・ヘナ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" } ,
		  "label": { "type": "literal" , "value": "四条貴音" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" } ,
		  "label": { "type": "literal" , "value": "大槻唯" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hachimiya_Meguru" } ,
		  "label": { "type": "literal" , "value": "八宮めぐる" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" } ,
		  "label": { "type": "literal" , "value": "龍崎薫" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" } ,
		  "label": { "type": "literal" , "value": "榊原里美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" } ,
		  "label": { "type": "literal" , "value": "森久保乃々" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" } ,
		  "label": { "type": "literal" , "value": "我那覇響" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" } ,
		  "label": { "type": "literal" , "value": "渋谷凛" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" } ,
		  "label": { "type": "literal" , "value": "向井拓海" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Kyosuke" } ,
		  "label": { "type": "literal" , "value": "蒼井享介" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hisakawa_Hayate" } ,
		  "label": { "type": "literal" , "value": "久川颯" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" } ,
		  "label": { "type": "literal" , "value": "佐藤心" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" } ,
		  "label": { "type": "literal" , "value": "ナターリア" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" } ,
		  "label": { "type": "literal" , "value": "奥山沙織" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" } ,
		  "label": { "type": "literal" , "value": "福山舞" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" } ,
		  "label": { "type": "literal" , "value": "豊川風花" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" } ,
		  "label": { "type": "literal" , "value": "瀬名詩織" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" } ,
		  "label": { "type": "literal" , "value": "高橋礼子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" } ,
		  "label": { "type": "literal" , "value": "浅利七海" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" } ,
		  "label": { "type": "literal" , "value": "相川千夏" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" } ,
		  "label": { "type": "literal" , "value": "秋月律子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" } ,
		  "label": { "type": "literal" , "value": "相馬夏美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" } ,
		  "label": { "type": "literal" , "value": "塩見周子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" } ,
		  "label": { "type": "literal" , "value": "有浦柑奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" } ,
		  "label": { "type": "literal" , "value": "小日向美穂" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" } ,
		  "label": { "type": "literal" , "value": "篠原礼" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" } ,
		  "label": { "type": "literal" , "value": "伊集院惠" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" } ,
		  "label": { "type": "literal" , "value": "岸部彩華" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sonoda_Chiyoko" } ,
		  "label": { "type": "literal" , "value": "園田智代子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komiya_Kaho" } ,
		  "label": { "type": "literal" , "value": "小宮果穂" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" } ,
		  "label": { "type": "literal" , "value": "高坂海美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" } ,
		  "label": { "type": "literal" , "value": "横山千佳" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" } ,
		  "label": { "type": "literal" , "value": "持田亜里沙" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" } ,
		  "label": { "type": "literal" , "value": "太田優" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Yumeko" } ,
		  "label": { "type": "literal" , "value": "桜井夢子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "DearlyStars" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" } ,
		  "label": { "type": "literal" , "value": "橘ありす" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" } ,
		  "label": { "type": "literal" , "value": "高森藍子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asakura_Toru" } ,
		  "label": { "type": "literal" , "value": "浅倉透" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amamine_Shu" } ,
		  "label": { "type": "literal" , "value": "天峰秀" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" } ,
		  "label": { "type": "literal" , "value": "黒川千秋" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" } ,
		  "label": { "type": "literal" , "value": "土屋亜子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" } ,
		  "label": { "type": "literal" , "value": "北沢志保" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" } ,
		  "label": { "type": "literal" , "value": "栗原ネネ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" } ,
		  "label": { "type": "literal" , "value": "小早川紗枝" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akiyama_Hayato" } ,
		  "label": { "type": "literal" , "value": "秋山隼人" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamashita_Jiro" } ,
		  "label": { "type": "literal" , "value": "山下次郎" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Taiga_Takeru" } ,
		  "label": { "type": "literal" , "value": "大河タケル" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" } ,
		  "label": { "type": "literal" , "value": "城ヶ崎莉嘉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amagase_Toma" } ,
		  "label": { "type": "literal" , "value": "天ヶ瀬冬馬" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" } ,
		  "label": { "type": "literal" , "value": "矢吹可奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuzora_Kohaku" } ,
		  "label": { "type": "literal" , "value": "奥空心白" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "Other" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" } ,
		  "label": { "type": "literal" , "value": "首藤葵" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Shiro" } ,
		  "label": { "type": "literal" , "value": "橘志狼" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" } ,
		  "label": { "type": "literal" , "value": "藤居朋" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yumemi_Riamu" } ,
		  "label": { "type": "literal" , "value": "夢見りあむ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" } ,
		  "label": { "type": "literal" , "value": "桐野アヤ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" } ,
		  "label": { "type": "literal" , "value": "真壁瑞希" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" } ,
		  "label": { "type": "literal" , "value": "木村夏樹" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakaki_Natsuki" } ,
		  "label": { "type": "literal" , "value": "榊夏来" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akuno_Hideo" } ,
		  "label": { "type": "literal" , "value": "握野英雄" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" } ,
		  "label": { "type": "literal" , "value": "宮本フレデリカ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morino_Rinze" } ,
		  "label": { "type": "literal" , "value": "杜野凛世" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Higuchi_Madoka" } ,
		  "label": { "type": "literal" , "value": "樋口円香" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" } ,
		  "label": { "type": "literal" , "value": "最上静香" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" } ,
		  "label": { "type": "literal" , "value": "徳川まつり" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitarai_Shota" } ,
		  "label": { "type": "literal" , "value": "御手洗翔太" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" } ,
		  "label": { "type": "literal" , "value": "衛藤美紗希" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" } ,
		  "label": { "type": "literal" , "value": "相原雪乃" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hazama_Michio" } ,
		  "label": { "type": "literal" , "value": "硲道夫" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" } ,
		  "label": { "type": "literal" , "value": "桐生つかさ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" } ,
		  "label": { "type": "literal" , "value": "松永涼" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" } ,
		  "label": { "type": "literal" , "value": "島原エレナ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" } ,
		  "label": { "type": "literal" , "value": "海老原菜帆" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" } ,
		  "label": { "type": "literal" , "value": "小室千奈美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" } ,
		  "label": { "type": "literal" , "value": "篠宮可憐" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" } ,
		  "label": { "type": "literal" , "value": "椎名法子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" } ,
		  "label": { "type": "literal" , "value": "大沼くるみ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" } ,
		  "label": { "type": "literal" , "value": "速水奏" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" } ,
		  "label": { "type": "literal" , "value": "城ヶ崎美嘉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" } ,
		  "label": { "type": "literal" , "value": "綾瀬穂乃香" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" } ,
		  "label": { "type": "literal" , "value": "小関麗奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Iseya_Shiki" } ,
		  "label": { "type": "literal" , "value": "伊瀬谷四季" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Serizawa_Asahi" } ,
		  "label": { "type": "literal" , "value": "芹沢あさひ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" } ,
		  "label": { "type": "literal" , "value": "井村雪菜" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" } ,
		  "label": { "type": "literal" , "value": "水野翠" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" } ,
		  "label": { "type": "literal" , "value": "天空橋朋花" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" } ,
		  "label": { "type": "literal" , "value": "田中琴葉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" } ,
		  "label": { "type": "literal" , "value": "楊菲菲" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" } ,
		  "label": { "type": "literal" , "value": "鷹富士茄子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" } ,
		  "label": { "type": "literal" , "value": "日下部若葉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_876" } ,
		  "label": { "type": "literal" , "value": "秋月涼" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "DearlyStars" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takajo_Kyoji" } ,
		  "label": { "type": "literal" , "value": "鷹城恭二" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nekoyanagi_Kirio" } ,
		  "label": { "type": "literal" , "value": "猫柳キリオ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kizaki_Ren" } ,
		  "label": { "type": "literal" , "value": "牙崎漣" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" } ,
		  "label": { "type": "literal" , "value": "菊地真" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aketa_Mikoto" } ,
		  "label": { "type": "literal" , "value": "緋田美琴" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mayumi_Eishin" } ,
		  "label": { "type": "literal" , "value": "眉見鋭心" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" } ,
		  "label": { "type": "literal" , "value": "ケイト" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuragi_Mano" } ,
		  "label": { "type": "literal" , "value": "櫻木真乃" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" } ,
		  "label": { "type": "literal" , "value": "片桐早苗" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" } ,
		  "label": { "type": "literal" , "value": "十時愛梨" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" } ,
		  "label": { "type": "literal" , "value": "喜多見柚" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" } ,
		  "label": { "type": "literal" , "value": "荒木比奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" } ,
		  "label": { "type": "literal" , "value": "西園寺琴歌" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" } ,
		  "label": { "type": "literal" , "value": "斉藤洋子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" } ,
		  "label": { "type": "literal" , "value": "梅木音葉" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" } ,
		  "label": { "type": "literal" , "value": "エミリー" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuraba_Kaoru" } ,
		  "label": { "type": "literal" , "value": "桜庭薫" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" } ,
		  "label": { "type": "literal" , "value": "赤西瑛梨華" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" } ,
		  "label": { "type": "literal" , "value": "水瀬伊織" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Watanabe_Minori" } ,
		  "label": { "type": "literal" , "value": "渡辺みのり" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" } ,
		  "label": { "type": "literal" , "value": "メアリー・コクラン" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asahina_Rin" } ,
		  "label": { "type": "literal" , "value": "朝比奈りん" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "Other" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Leon" } ,
		  "label": { "type": "literal" , "value": "玲音" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "Other" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" } ,
		  "label": { "type": "literal" , "value": "吉岡沙紀" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" } ,
		  "label": { "type": "literal" , "value": "冴島清美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" } ,
		  "label": { "type": "literal" , "value": "松原早耶" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himeno_Kanon" } ,
		  "label": { "type": "literal" , "value": "姫野かのん" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" } ,
		  "label": { "type": "literal" , "value": "如月千早" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" } ,
		  "label": { "type": "literal" , "value": "柳瀬美由紀" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" } ,
		  "label": { "type": "literal" , "value": "姫川友紀" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" } ,
		  "label": { "type": "literal" , "value": "及川雫" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" } ,
		  "label": { "type": "literal" , "value": "双海亜美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" } ,
		  "label": { "type": "literal" , "value": "丹羽仁美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzuki_Ayane" } ,
		  "label": { "type": "literal" , "value": "サイネリア" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "DearlyStars" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" } ,
		  "label": { "type": "literal" , "value": "大西由里子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" } ,
		  "label": { "type": "literal" , "value": "桃井あずき" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" } ,
		  "label": { "type": "literal" , "value": "西川保奈美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" } ,
		  "label": { "type": "literal" , "value": "高槻やよい" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" } ,
		  "label": { "type": "literal" , "value": "望月聖" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" } ,
		  "label": { "type": "literal" , "value": "工藤忍" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tendo_Teru" } ,
		  "label": { "type": "literal" , "value": "天道輝" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" } ,
		  "label": { "type": "literal" , "value": "脇山珠美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" } ,
		  "label": { "type": "literal" , "value": "佐久間まゆ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukumaru_Koito" } ,
		  "label": { "type": "literal" , "value": "福丸小糸" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "ShinyColors" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" } ,
		  "label": { "type": "literal" , "value": "三村かな子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukumo_Kazuki" } ,
		  "label": { "type": "literal" , "value": "九十九一希" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" } ,
		  "label": { "type": "literal" , "value": "望月杏奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hisakawa_Nagi" } ,
		  "label": { "type": "literal" , "value": "久川凪" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" } ,
		  "label": { "type": "literal" , "value": "赤城みりあ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Im_Yujin" } ,
		  "label": { "type": "literal" , "value": "イム・ユジン" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" } ,
		  "label": { "type": "literal" , "value": "松尾千鶴" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" } ,
		  "label": { "type": "literal" , "value": "双海真美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" } ,
		  "label": { "type": "literal" , "value": "福田のり子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" } ,
		  "label": { "type": "literal" , "value": "服部瞳子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koron_Chris" } ,
		  "label": { "type": "literal" , "value": "古論クリス" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" } ,
		  "label": { "type": "literal" , "value": "三船美優" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitamura_Sora" } ,
		  "label": { "type": "literal" , "value": "北村想楽" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" } ,
		  "label": { "type": "literal" , "value": "高垣楓" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" } ,
		  "label": { "type": "literal" , "value": "諸星きらり" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirayuki_Chiyo" } ,
		  "label": { "type": "literal" , "value": "白雪千夜" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" } ,
		  "label": { "type": "literal" , "value": "佐城雪美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_315" } ,
		  "label": { "type": "literal" , "value": "秋月涼" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kashiwagi_Tsubasa" } ,
		  "label": { "type": "literal" , "value": "柏木翼" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" } ,
		  "label": { "type": "literal" , "value": "古賀小春" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" } ,
		  "label": { "type": "literal" , "value": "ロコ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kagura_Rei" } ,
		  "label": { "type": "literal" , "value": "神楽麗" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" } ,
		  "label": { "type": "literal" , "value": "村松さくら" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" } ,
		  "label": { "type": "literal" , "value": "浜川愛結奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" } ,
		  "label": { "type": "literal" , "value": "難波笑美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" } ,
		  "label": { "type": "literal" , "value": "二階堂千鶴" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" } ,
		  "label": { "type": "literal" , "value": "馬場このみ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" } ,
		  "label": { "type": "literal" , "value": "長富蓮実" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" } ,
		  "label": { "type": "literal" , "value": "白坂小梅" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" } ,
		  "label": { "type": "literal" , "value": "二宮飛鳥" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" } ,
		  "label": { "type": "literal" , "value": "藤本里奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" } ,
		  "label": { "type": "literal" , "value": "クラリス" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Yusuke" } ,
		  "label": { "type": "literal" , "value": "蒼井悠介" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" } ,
		  "label": { "type": "literal" , "value": "大神環" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "MillionLive" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Riina" } ,
		  "label": { "type": "literal" , "value": "多田李衣菜" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizushima_Saki" } ,
		  "label": { "type": "literal" , "value": "水嶋咲" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shika" } ,
		  "label": { "type": "literal" , "value": "詩花" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "Other" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hidaka_Ai" } ,
		  "label": { "type": "literal" , "value": "日高愛" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "DearlyStars" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" } ,
		  "label": { "type": "literal" , "value": "喜多日菜子" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" } ,
		  "label": { "type": "literal" , "value": "今井加奈" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" } ,
		  "label": { "type": "literal" , "value": "三浦あずさ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "765AS" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" } ,
		  "label": { "type": "literal" , "value": "島村卯月" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" } ,
		  "label": { "type": "literal" , "value": "兵藤レナ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sanjo_Tomomi" } ,
		  "label": { "type": "literal" , "value": "三条ともみ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "Other" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" } ,
		  "label": { "type": "literal" , "value": "和久井留美" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Pierre" } ,
		  "label": { "type": "literal" , "value": "ピエール" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" } ,
		  "label": { "type": "literal" , "value": "愛野渚" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kabuto_Daigo" } ,
		  "label": { "type": "literal" , "value": "兜大吾" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "SideM" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" } ,
		  "label": { "type": "literal" , "value": "大和亜季" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" } ,
		  "label": { "type": "literal" , "value": "遊佐こずえ" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" } ,
		  "label": { "type": "literal" , "value": "矢口美羽" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" } ,
		  "label": { "type": "literal" , "value": "日野茜" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" } ,
		  "label": { "type": "literal" , "value": "イヴ・サンタクロース" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" } ,
		  "label": { "type": "literal" , "value": "原田美世" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" } ,
		  "label": { "type": "literal" , "value": "上田鈴帆" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		} ,
		{
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" } ,
		  "label": { "type": "literal" , "value": "川島瑞樹" } ,
		  "brand": { "type": "literal" , "xml:lang": "en" , "value": "CinderellaGirls" }
		}
	  ]
	}
  };
const sparql_uri_labels = sparql_labels.results.bindings;
let id_to_label = {};
let uri_to_brand = {};
let brand_list = [];
for (let item of sparql_uri_labels){
    const matched = item.s.value.match(/http.*[/#]([^\/]*)$/);
    if (matched){
        id_to_label[matched[1]] = item.label.value;
    }
    uri_to_brand[item.s.value] = item.brand.value;

    if (brand_list.indexOf(item.brand.value) < 0) brand_list.push(item.brand.value);
}