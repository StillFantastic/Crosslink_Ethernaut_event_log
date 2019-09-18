function get_info() {
    var xml = new XMLHttpRequest;
    xml.open("get", "./get_info");
    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
            rank_sort(JSON.parse(xml.responseText));
        }
    }
    xml.send();
}

function rank_sort(obj) {
    for (var i = 1; i < obj.length; i++) {
        if ((obj[i].user_level_total == obj[i - 1].user_level_total) && (obj[i].time < obj[i - 1].time)) {
            [obj[i], obj[i - 1]] = [obj[i - 1], obj[i]];
        }
    }
    rank_show(obj);
    console.log(obj);
}

function rank_show(obj) {
    for (var i = 0, rank = 1; i < obj.length; i++, rank++) {

        var th = document.createElement('th');
        var th_text = document.createTextNode(rank);
        th.appendChild(th_text);

        var td_add = document.createElement('td');
        var td_add_text = document.createTextNode(obj[i].user_add);
        td_add.appendChild(td_add_text);

        var td_lv = document.createElement('td');
        var td_lv_text = document.createTextNode(obj[i].user_level_total);
        td_lv.appendChild(td_lv_text);

        var td_date = document.createElement('td');
        var td_date_text = document.createTextNode(obj[i].date);
        td_date.appendChild(td_date_text);

        var tr = document.createElement('tr');
        tr.appendChild(th);
        tr.appendChild(td_add);
        tr.appendChild(td_lv);
        tr.appendChild(td_date);
        document.getElementById('tbody').appendChild(tr);

    }
}