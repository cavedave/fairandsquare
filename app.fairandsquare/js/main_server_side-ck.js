function outputFunc(){var e=new Array;e[0]="Scully";e[1]="Curran";var t=new Array;t[0]="Cash";t[1]="Shares";t[2]="Pension";var n=new Array;n[0]="Cat";n[1]="Snake";n[2]="Pen";var r="65|~ 2 x[1,1] 0.5 0 |~ 3 x[2,1] 0.5 0 |~ 4 x[1,2] 1 0 |~ 5 x[2,2] 0 0 |~ 6 x[1,3] 1 0 |~ 7 x[2,3] 0 0 |~ 8 y[1,1] * 0 0 1 |~ 9 y[2,1] * 1 0 1 |~ 10 y[1,2] * 0 0 1 |~ 11 y[2,2] * 1 0 1 |~ 12 y[1,3] * 1 0 1 |~ 13 y[2,3] * 0 0 1 |~",s=r.split("|~");$("#outputresults").text("");$("#outputresults").append("minimum satisfaction is: "+s[0]);for(var o=1;o<=e.length;o++){$("#outputresults").append("<table border='1'><tr>");$("#outputresults").append("<BR><th>"+e[o-1]+"</th></tr>");for(i=1;i<s.length-1;i++){var u=s[i].split("["),a=s[i].split("]"),f=u[1].split("]"),l=f[0].split(","),c=a[1].split(" "),h=e[l[0]-1];if(l[0]==o)if(u[0].indexOf("x")!==-1){var p=t[l[1]-1];c[1]>0&&(c[1]<1?$("#outputresults").append("<tr><td>"+p+" "+c[1]+"</td></tr>"):$("#outputresults").append("<tr><td>"+p+"</td></tr>"))}else{var p=n[l[1]-1];c[2]>0&&$("#outputresults").append("<tr><td>"+p+"</td></tr>")}}$("#outputresults").append("</table>")}}function People(e){if(people.length!=0&&indivItem.length+divisItem.length!=0&&!(e>people.length)){if($("#tab-preferences .output input").size()==indivItem.length+divisItem.length){var t=new Array;$("#tab-preferences .output input").each(function(){t.push(Number($(this).val()))});interPreferences.push(t)}var n=divisItem.length+indivItem.length;$("#tab-preferences .output").html("          <h2>"+people[e]+"</h2>\n          <p>divide your 100 points between the "+n+" items listed below</p>");sum=0;allocation=100;$("#tab-preferences .output").append("<label id='allocationLabel'></label>");$("#allocationLabel").text("Remaining allocation: ");$("#allocationLabel").append(allocation+"<br></br>");for(var r=0;r<divisItem.length;r++){var i="divisItem"+r;$("#tab-preferences .output").append(divisItem[r]+"</br><input type='range' min='0' max='100' step='5' id='preference' onkeyup='check(this)' onmouseup='updateSlider(this.value,"+i+")' name='itemnamedivis' value='0' class='alloc'>");$("#tab-preferences .output").append("<label id='"+i+"'>0</label></br>")}for(var r=0;r<indivItem.length;r++){var i="indivItem"+r;$("#tab-preferences .output").append(indivItem[r]+"</br><input type='range' min='0' max='100' step='5' id='preference' onkeyup='check(this)' onmouseup='updateSlider(this.value,"+i+")' name='itemnameindiv' value='0' class='alloc'>");$("#tab-preferences .output").append("<label id='"+i+"'>0</label></br>")}if(++personStage>people.length){$("#tabs").tabs("enable",4);$("#tabs").tabs("disable",3);main();$("#tabs").tabs("option","active",$("#tabs").tabs("option","active")+1)}}}function updateSlider(e,t){$(t).text(e)}function check(e){var t=0;e.value>100||e.value<0?e.value=t:t=e.value;return t}function removeA(e,t){t.splice(e,1);if(t==people){$("#tab-poeple .output ul").text("");for(i=0;i<t.length;i++)$("#tab-poeple .output ul").append("<li>"+t[i]+"<input type='submit' id='x' value='x' onclick='removeA("+i+",people)'>"+"</li>")}else if(t==indivItem){$("#tab-rooms .output ul").text("");for(i=0;i<divisItem.length;i++)$("#tab-rooms .output ul").append("<li>"+divisItem[i]+"<input type='submit' id='x' value='x' onclick='removeA("+i+",divisItem)'>"+"</li>");for(i=0;i<t.length;i++)$("#tab-rooms .output ul").append("<li>"+t[i]+"<input type='submit' id='x' value='x' onclick='removeA("+i+",indivItem)'>"+"</li>")}else if(t==divisItem){$("#tab-rooms .output ul").text("");for(i=0;i<t.length;i++)$("#tab-rooms .output ul").append("<li>"+t[i]+"<input type='submit' id='x' value='x' onclick='removeA("+i+",divisItem)'>"+"</li>");for(i=0;i<indivItem.length;i++)$("#tab-rooms .output ul").append("<li>"+indivItem[i]+"<input type='submit' id='x' value='x' onclick='removeA("+i+",indivItem)'>"+"</li>")}}function createData(e,t){var n=Vector.create([]),r="data;\nparam people := "+people.length+";\nparam divi := "+divisItem.length+";\nparam indiv := "+indivItem.length+";\n";r+="param divItems :";for(var i=1;i<=divisItem.length;i++)r=r+i+" ";r+=":=\n";if(divisItem.length>0){for(var i=1;i<=people.length;i++){r="\n"+r+i+" ";n=e.row(i);n.each(function(e,t){r=r+e+" "});r+="\n"}r+="\n"}r+=";\nparam indivItems :";for(var i=1;i<=indivItem.length;i++)r=r+i+" ";r+=":=\n";if(indivItem.length>0)for(var i=1;i<=people.length;i++){r="\n"+r+i+" ";n=t.row(i);n.each(function(e,t){r=r+e+" "});r+="\n"}r+=";\nend\n;";return r}function glpkTest(e){var t=glp_mpl_alloc_wksp();try{model=document.getElementById("fair2.mod").textContent;model+=e;glp_mpl_read_model_from_string(t,"MathProg Model",model)}catch(n){return null}try{glp_mpl_generate(t,null,model);var r=glp_create_prob();glp_mpl_build_prob(t,r)}catch(n){return null}var i=new SMCP({presolve:GLP_ON});glp_simplex(r,i);glp_intopt(r);if(r){glp_mpl_postsolve(t,r,GLP_MIP);$("#outputresults").text("Minimum satisfaction is: ");$("#outputresults").append(glp_mip_obj_val(r).toFixed(2).toString());$("#outputresults").append("<p></p>");$("#outputresults").append("The FairAndSquare allocation is: ");$("#outputresults").append("<p></p>");for(var s=2;s<=glp_get_num_cols(r);s++)if(glp_mip_col_val(r,s).toFixed(2)>.001){var o=glp_get_col_name(r,s);if(o.charAt(0)=="x"){if(glp_mip_col_val(r,s).toFixed(2)<1){$("#outputresults").append(" ");$("#outputresults").append(glp_mip_col_val(r,s).toFixed(2)+" of ").toString()}$("#outputresults").append(divisItem[o.charAt(4).toString()-1])}o.charAt(0)=="y"&&$("#outputresults").append(indivItem[o.charAt(4).toString()-1]);$("#outputresults").append(" goes to ");$("#outputresults").append(people[o.charAt(2).toString()-1]);$("#outputresults").append("<p></p>")}}else displayError((isMIP()?"MILP":"LP")+" failed. Consult GLPK Log.")}$("#tabs").on("tabsbeforeactivate",function(e,t){var n=divisItem.length+indivItem.length;if(t.newTab.text()=="Values "&&people.length!=0&&divisItem.length+indivItem.length!=0&&!(personStage>=people.length)){sum=0;$("#tab-preferences .output").html("          <h2>"+people[personStage]+"</h2>\n          <p>divide your 100 points between the "+n+" items listed below</p>");$("#tab-preferences .output").append("<label id='allocationLabel'></label>");$("#allocationLabel").text("Remaining allocation: ");$("#allocationLabel").append(allocation+"<br></br>");for(var r=0;r<divisItem.length;r++){var i="divisItem"+r;$("#tab-preferences .output").append(divisItem[r]+"</br><input type='range' min='0' max='100' step='5' id='preference' onkeyup='check(this)' onmouseup='updateSlider(this.value,"+i+")' name='itemnamedivis' value='0' class='alloc'>");$("#tab-preferences .output").append("<label id='"+i+"'>0</label></br>")}for(var r=0;r<indivItem.length;r++){var i="indivItem"+r;$("#tab-preferences .output").append(indivItem[r]+"</br><input type='range' min='0' max='100' step='5' id='preference' onkeyup='check(this)' onmouseup='updateSlider(this.value,"+i+")' name='itemnameindiv' value='0' class='alloc'>");$("#tab-preferences .output").append("<label id='"+i+"'>0</label></br>")}++personStage>=people.length}});$(".next-page-button").click(function(){if(tabsStage==1&&people.length<2)$("#tabs").tabs("option","disabled");else if(tabsStage==2&&divisItem.length+indivItem.length<1)$("#tabs").tabs("option","disabled");else{var e=$("#tabs").tabs("option","active");if(e==3){$("#tabs").tabs("enable",e+1);$("#tabs").tabs("option","active",$("#tabs").tabs("option","active")+1);tabsStage++}else{$("#tabs").tabs("enable",e+1);$("#tabs").tabs("option","active",$("#tabs").tabs("option","active")+1);tabsStage++;$("#tabs").tabs("disable",e)}}});$(".last-page-button").click(function(){var e=$("#tabs").tabs("option","active");$("#tabs").tabs("enable",e-1);$("#tabs").tabs("option","active",$("#tabs").tabs("option","active")-1);tabsStage--;$("#tabs").tabs("disable",e)});$("#tab-poeple .output ul").keyup(function(e){e.preventDefault()});$("#preference").keyup(function(e){if(e.keyCode==13){e.preventDefault();$("#btn_nextPerson").click()}});$("#btn_nextPerson").unbind();$("#btn_nextPerson").click(function(){var e=0;$(".alloc").each(function(){e+=Number($(this).val())});e==100&&People(personStage)});$("#input_tennant").keypress(function(e){if(e.keyCode==13){if($("html").hasClass("lt-ie9"))return!1;e.preventDefault();$("#btn_addTennant").click()}});$("#btn_addTennant").click(function(){if($("#input_tennant").val()!=""&&people.length!=2){people.push($("#input_tennant").val());var e=people.length-1;$("#tab-poeple .output ul").append("<li>"+$("#input_tennant").val()+"<input type='button' id='x' value='x' onclick='removeA("+e+",people)'>"+"</li>");$("#input_tennant").val("")}});$("#input_roomname").keypress(function(e){if(e.keyCode==13){if($("html").hasClass("lt-ie9"))return!1;e.preventDefault();$("#btn_addRoom").click()}});$("#btn_addRoom").click(function(){if($("#input_roomname").val()!=""){var e=document.getElementById("select1"),t=e.options[e.selectedIndex].value;if(t=="divisible"){divisItem.push($("#input_roomname").val());var n=divisItem.length-1;$("#tab-rooms .output ul").append("<li>"+$("#input_roomname").val()+"   (Divisible)"+"<input type='button' id='x' value='x' onclick='removeA("+n+",divisItem)'>"+"</li>")}else{indivItem.push($("#input_roomname").val());var n=indivItem.length-1;$("#tab-rooms .output ul").append("<li>"+$("#input_roomname").val()+""+"<input type='button' id='x' value='x' onclick='removeA("+n+",indivItem)'>"+"</li>")}$("#input_roomname").val("")}});-$("#tab-preferences").on("focus",".alloc",function(){$(this).val()==0&&$(this).val("")});$("#tab-preferences").on("focusout",".alloc",function(){var e=0,t=100;$(".alloc").each(function(){e+=Number($(this).val())});var t=t-e;if(e==100){$("#allocationLabel").text("Remaining allocation is: ");$("#allocationLabel").append(t+"<br></br>")}else{$("#allocationLabel").text("Remaining allocation is: ");$("#allocationLabel").append(t+"<br></br>")}});$("#tab-preferences").on("mouseup",".alloc",function(){var e=0,t=100;$(".alloc").each(function(){e+=Number($(this).val())});var t=t-e;if(e==100){$("#allocationLabel").text("Remaining allocation is: ");$("#allocationLabel").append(t+"<br></br>")}else{$("#allocationLabel").text("Remaining allocation is: ");$("#allocationLabel").append(t+"<br></br>")}});