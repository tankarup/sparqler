let found_list = [];
let vs = [];
let sort_to = 1;

function init(){
    console.log('init');
    init_menu();
    //query_from_sparql('http://schema.org/member', 'https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko')
}

function init_menu(){
    const type_list = [
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Event",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Production",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Staff",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Introduction",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Facility",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Idol",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Unit",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Clothes",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Live",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Communication",
        "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#SetlistNumber",
        //"https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#ScriptText",
        "http://schema.org/MusicAlbum",
        "http://schema.org/MusicRelease",
        "http://schema.org/MusicComposition",
        "http://schema.org/MusicRecording",
        ];

    let html = '';
    //html += '<ul>';
    for (let schema of type_list){
        html += ` <button type="button" class="btn btn-secondary btn-sm" onclick="query_from_sparql('http://www.w3.org/1999/02/22-rdf-syntax-ns#type', '${schema}');"> ${simple_label(schema)} </button> `;
    }
    //html += '</ul>';
    document.getElementById('menu').innerHTML = html;

}

function text_to_label(text){
    const lbl = id_to_label[text];
    if (lbl) return lbl;
    return text;
}

/* こういうデータからKizaki_Renの部分を取り出す
{
    "type": "uri",
    "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kizaki_Ren"
}
*/
function simple_label(item){
    //console.log(item);
    if(Array.isArray(item)){
        return item.map(function(item){
            return simple_label(item);
        }).join(', ');
    }

    const uri = item;
    let label = item;
    const matched = uri.match(/http.*[/#]([^\/]*)$/);
    if (matched){
        label = `${decodeURI(matched[1])}`;
    }
    return text_to_label(label);

}

function link_label(item){
    if(Array.isArray(item)){
        return item.map(function(item){
            return link_label(item);
        }).join(', ');
    }

    const uri = item;
    let label = item;
    const matched = uri.match(/http.*[/#]([^\/]*)$/);
    if (matched){
        label = `<a href="${uri}" target="_blank">${decodeURI(matched[1])}</a>`;
    }
    return text_to_label(label);
}

function is_uri(text){
    return text.match(/^http/);
}
//テキストをクリックしたら新しく検索するリンクを付ける
function query_label(category, item){
    //受取るアイテムは基本は配列なので、リンクを作ってあとでつなげる。
    if(Array.isArray(item)){
        return item.map(function(item){
            return query_label(category, item);
        }).join(', ');
    }

    const uri = item.value;
    let label = item.value;
    let link_html = '';


    //受取った文字列がURI形式だったら、/か#以降の文字だけを抽出してラベルに使う
    const matched = uri.match(/http.*[/#]([^\/]*)$/);
    if (matched){
        label = decodeURI(matched[1]);
    }


    //クリックしたらquery_from_sparql関数を実行させる
    //link_html = `<span class="query" onclick="query_from_sparql('${category}', '${uri}${item["xml:lang"] ? '@' + item["xml:lang"] :"" }');">${text_to_label(label)}</span>`;
    link_html = `<span class="query" onclick="query_from_sparql('${category}', '${uri}');">${text_to_label(label)}</span>`;
    //受取った文字列がURI形式だったら、後ろに外部リンクを追加
    if (matched){
        link_html += `<a href="${uri}" target="_blank" style="font-size: x-small;">🔗</a>`;
    }
    return link_html

}

function prepare_data(results){
    let data = {};
    vs = [];

    for (let item of results.results.bindings){
        const s = item.s.value;
        const v = item.v.value;
        const o = item.o.value;

        if (!data[s]) data[s] = {};
        if (!data[s][v]) data[s][v] = [];
        data[s][v].push(item.o);
        //html += `<li>${label(item.s)}, ${label(item.v)}, ${label(item.o)}</li>`;

        if (vs.indexOf(v) < 0) vs.push(v);
    }

    //vの順番を入れ替えて、typeとnameが先に来るようにする
    vs.sort(function(a,b){
        if (a.endsWith('type') && b.endsWith('name')) return -1;
        if( a.endsWith('type')) return -1;
        if (b.endsWith('type')) return 1;
        if( a.endsWith('name') ) return -1;
        if( b.endsWith('name') ) return 1;
        return 0;
    });


    //dataをリスト形式に
    let list_data = [];
    let i = 0;
    for (let key in data){
        list_data[i] = {};
        list_data[i].data = data[key];
        list_data[i].key = key;
        i++;
    }

    found_list = list_data;
    console.log(JSON.stringify(found_list, null, 2));
}

function click_to_sort(key){
    sort_to = sort_to * -1;
    table_sort(key);
    update_table();
}

function table_sort(key){
    //引数が空だったらタイトルでソートする。
    if (!key){
        found_list.sort(function(a,b){
            if( simple_label(a.key) < simple_label(b.key) ) return -1;
            if( simple_label(a.key) > simple_label(b.key) ) return 1;
            return 0;
        });
    } else {
        console.log('sort:', key);
        //空でなかったらうけとったキーでソート
        found_list.sort(function(a,b){
            let a_value = '';
            if (a.data[key]){
                if (a.data[key][0]){
                    if (a.data[key][0].value){
                        a_value = a.data[key][0].value;
                    }
                }
            }
            let b_value = '';
            if (b.data[key]){
                if (b.data[key][0]){
                    if (b.data[key][0].value){
                        b_value = b.data[key][0].value;
                    }
                }
            }

            if( simple_label(a_value) < simple_label(b_value) ) return -1* sort_to;
            if( simple_label(a_value) > simple_label(b_value) ) return 1*sort_to;
            return 0;
        });
    }

}
function update_table(){

    let html = '';
    html += '<table class="table table-striped" style="max-width: 100%;">';
    html += '<thead class="thead-dark"><tr>';
    html += '<th>Data</th>'
    for (let v of vs){
        html += `<th><span class="table_head">${link_label(v)}</span><span class="query" onclick="click_to_sort('${v}');">[↕]</span></th>`;
    }
    html += '</tr></thead>';
    html += '<tbody>';
    //
    for (let i = 0; i < found_list.length; i++){
        const key =found_list[i].key;
        const unit = found_list[i].data;
        html += '<tr>';
        const a_link = is_uri(key) ? `<a href="${key}" target="_blank" style="font-size: x-small;">🔗</a>` : '';
        html += `<td>${simple_label(key)}${a_link}</td>`
        for (let v of vs){
            let vlabel = '';
            let bgcolor = '';
            if (unit[v]){
                vlabel = query_label(v, unit[v]);
                if (v == "https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Color"){
                    bgcolor = unit[v][0].value;
                    //console.log(v, unit[v]);
                }
            }

            html += `<td style="background-color: #${bgcolor};"><div class="cell_content">${vlabel}</div></td>`;
        }

        html += '</tr>';

    }

    html += '</tbody>';
    html += '</table>';
    document.getElementById('results').innerHTML = html;
}

function show_results(results){
    prepare_data(results);
    table_sort('')
    update_table();

}

function query_from_sparql(sparql_v, sparql_o){
    console.log('v:', sparql_v, ' o: ', sparql_o);
    //検索簡易式をタイトルの所に表示
    let obj_str = simple_label(sparql_o);
    if (obj_str.length > 20) obj_str = obj_str.slice(0,20) + '...';
    document.getElementById('query_str').innerText = ` ${simple_label(sparql_v)} = ${obj_str}`;

    //タイトルの大きさを控えめに
    document.getElementById('title').style.fontSize = "small";
    //show_results(units);
    
    const format_v = `<${sparql_v}>`;
    let format_o = `<${sparql_o}>`;
    let query = `
        select ?s ?v ?o
        where{
            ?s ${format_v} ${format_o}.
        ?s ?v ?o.
        }
    `;
    //目的語がuri形式でない場合はフィルターをかける
    if (!is_uri(sparql_o)){
        format_o = `"${sparql_o}"`;
        query = `
        select  ?s ?v ?o
        where { 
            ?s ${format_v} ?oo 
            FILTER(regex(str(?oo), ${format_o} )).
            ?s ?v ?o.
        }
        `;
        
    }

    const URL = "https://sparql.crssnky.xyz/spql/imas/query?query=";


    const request = new XMLHttpRequest();
    request.addEventListener("load", (e) => {
        if (e.target.status != 200) {
            console.log(e.target.status + ':' + e.target.statusText);
            return;
        }
        const json = JSON.parse(e.target.responseText);
        //console.log(JSON.stringify(json, null, 4));
        show_results(json);

    });
    request.addEventListener("error", () => {
        console.log("Http Request Error");
    });

    request.open("GET", URL + encodeURIComponent(query));
    //request.open("GET", URL + encodeURIComponent(Query[0] + strings[0] + Query[1] + strings[strings.length - 1] + Query[2]));
    request.send();
    
    
}

window.onload = function (){
    init();
}