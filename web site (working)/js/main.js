              function People(stage) {
              if (people.length == 0 || indivItem.length+divisItem.length == 0) {
                //should probably do something here.
              }
              else{
                if (stage > people.length) {
                }
                else {
                  if ($('#tab-preferences .output input').size() == indivItem.length+divisItem.length) {
                    var arr = new Array();
                    $('#tab-preferences .output input').each(function() {
                      arr.push( Number( $(this).val() ) );
                  });
                      interPreferences.push(arr);
                  }                    
                  $('#tab-preferences .output').html("          <h2>"+people[stage]+"</h2>\n          <p>divide your 100 points between the "+divisItem.length+indivItem.length+" items listed below</p>");
                  sum=0;
                  allocation=100;
                  $('#tab-preferences .output').append("<label id='allocationLabel'></label>");
                  $('#allocationLabel').text("Remaining allocation: ");
                  $('#allocationLabel').append(allocation+"<br></br>");
                 //change here to include divis and indiv
                  for (var i = 0; i<divisItem.length; i++ ) {
                    $('#tab-preferences .output').append(divisItem[i]+"</br><input type='number' min='0' max='100' id='preference' name='itemnamediv' value='0' onFocus=this.value='' class='alloc'></br>");
                    }
                  for (var i = 0; i<indivItem.length; i++ ) {
                    $('#tab-preferences .output').append(indivItem[i]+"</br><input type='number' min='0' max='100' id='preference' name='roomnameindiv' value='0' onFocus=this.value='' class='alloc'></br>");
                  }
                  if (++personStage > people.length) {
                    $( "#tabs" ).tabs('enable', 4);
                    $( "#tabs" ).tabs('disable', 3);
                    main();
                    $( "#tabs" ).tabs( "option", "active", $( "#tabs" ).tabs( "option", "active" )+1 );
                    //$('#btn_nextPerson').hide();
                  }
                }
              }
            }
            
            $('#tabs').on("tabsbeforeactivate", function( event, ui) {
              if (ui.newTab.text() == 3) {
              if (people.length == 0 || divisItem.length+indivItem.length == 0) {
                //should probably do something here.
              }
              else{
                if (personStage >= people.length) {
                }
                else {
                  sum=0;
                  $('#tab-preferences .output').html("          <h2>"+people[personStage]+"</h2>\n          <p>divide your 100 points between the "+divisItem.length+indivItem.length+" items listed below</p>");
                  $('#tab-preferences .output').append("<label id='allocationLabel'></label>");
                  $('#allocationLabel').text ("Remaining allocation: ");
                  $('#allocationLabel').append(allocation+"<br></br>");
                  //div and indiv to go here
                  for (var i = 0; i<divisItem.length; i++ ) {
                    $('#tab-preferences .output').append(divisItem[i]+"</br><input type='number' min='0' max='100' id='preference' name='itemnamediv' value='0' onFocus=this.value='' class='alloc'></br>");
                  }
                  for (var i = 0; i<indivItem.length; i++ ) {
                    $('#tab-preferences .output').append(indivItem[i]+"</br><input type='number' min='0' max='100' id='preference' name='itemnamediv' value='0' onFocus=this.value='' class='alloc'></br>");
                  }
                  if (++personStage >= people.length) {
                  }
                }
              }

              }
              } );
      
           
            $('.next-page-button').click(function(){
              if ( tabsStage==1 && people.length<2){
                $( "#tabs" ).tabs( "option", "disabled" ); 
              }
              else if ( tabsStage==2 && divisItem.length+indivItem.length<1){
                $( "#tabs" ).tabs( "option", "disabled" ); 
              }
              else{
                var selected = $( "#tabs" ).tabs('option', 'active');
                if (selected == 3){
                  $( "#tabs" ).tabs('enable', selected+1);
                  $( "#tabs" ).tabs( "option", "active", $( "#tabs" ).tabs( "option", "active" )+1 );
                  tabsStage++;                  
                }
                else{
                  $( "#tabs" ).tabs('enable', selected+1);
                  $( "#tabs" ).tabs( "option", "active", $( "#tabs" ).tabs( "option", "active" )+1 );
                  tabsStage++;
                  $( "#tabs" ).tabs('disable', selected);
                }
              }
            });

            $('#preference').keyup(function(event){
              if(event.keyCode == 13){
                return false;
                event.preventDefault();
                $('#btn_nextPerson').click();
              }
            });                

            $('#btn_nextPerson').unbind();
            $('#btn_nextPerson').click(function(){
                var sum = 0;
                $('.alloc').each(function() {
                sum += Number($(this).val());
                });
               if ( sum==100){
               People(personStage);
              }
              else{
//                $('#allocationLabel').text("Allocation must total 100: ");
//                $('#allocationLabel').append("<br>");
              }
            });
            $('#input_tennant').keyup(function(event){
              if(event.keyCode == 13){
               return false;
                event.preventDefault();
                $('#btn_addTennant').click();
              }
            });            

            $('#btn_addTennant').click(function(){
              if ($('#input_tennant').val()=='' || people.length==2){ //add here that only 2 names can be entered
              }
              else{
                  people.push($('#input_tennant').val());
                  var a=people.length-1;
                  $('#tab-poeple .output ul').append("<li>"+$('#input_tennant').val()+ "<input type='submit' id='x' value='x' onclick='removeA("+a+",people)'>"+"</li>");
                  $('#input_tennant').val(""); 
              }
            });

            $('#input_roomname').keyup(function(event){
              if(event.keyCode == 13){
              return false;
                event.preventDefault();
                $('#btn_addRoom').click();
              }
            });    
            

            $('#btn_addRoom').click(function(){
              if ($('#input_roomname').val()==''){
              }
              else{
                //rooms.push($('#input_roomname').val());
                //Adds item name to divisble or indivisible array
                var e = document.getElementById("select1");
                var strUser = e.options[e.selectedIndex].value;
                if (strUser=='divisible'){
                  divisItem.push($('#input_roomname').val());
                  var a=divisItem.length-1;
                $('#tab-rooms .output ul').append("<li>"+$('#input_roomname').val()+ "<input type='submit' id='x' value='x' onclick='removeA("+a+",divisItem)'>"+"</li>");
                }
                else {
                  indivItem.push($('#input_roomname').val());
                  var a=indivItem.length-1;
                $('#tab-rooms .output ul').append("<li>"+$('#input_roomname').val()+ "<input type='submit' id='x' value='x' onclick='removeA("+a+",indivItem)'>"+"</li>");
                }
                $('#input_roomname').val("");
              }
            });
             
            $("#tab-preferences").on("focusout", ".alloc", function () {
                var sum = 0;
                var allocation = 100;
                $('.alloc').each(function() {
                sum += Number($(this).val());
                });
              var allocation = allocation-sum;
              if (sum==100){
                $('#allocationLabel').text("Remaining allocation is: ");
                $('#allocationLabel').append(allocation+"<br></br>");                
              }
              else{
                $('#allocationLabel').text("Remaining allocation is: ");
                $('#allocationLabel').append(allocation+"<br></br>");
//                $('#allocationLabel').append("<br>Value of allocation must total 100</br>");
//                checkTotal(sum);
              }
            });

function removeA(pos,arr) {
arr.splice(pos, 1)    
      if(arr==people){
        $('#tab-poeple .output ul').text("");  
        for(i=0;i<arr.length;i++){
          $('#tab-poeple .output ul').append("<li>"+arr[i]+ "<input type='submit' id='x' value='x' onclick='removeA("+i+",people)'>"+"</li>");  
        }                
      }
      else if(arr==indivItem){
        $('#tab-rooms .output ul').text("");  
        for(i=0;i<divisItem.length;i++){
          $('#tab-rooms .output ul').append("<li>"+divisItem[i]+ "<input type='submit' id='x' value='x' onclick='removeA("+i+",divisItem)'>"+"</li>");                
        }
        for(i=0;i<arr.length;i++){
          $('#tab-rooms .output ul').append("<li>"+arr[i]+ "<input type='submit' id='x' value='x' onclick='removeA("+i+",indivItem)'>"+"</li>");                
        }
      }
      else if(arr==divisItem){
        $('#tab-rooms .output ul').text("");
        for(i=0;i<arr.length;i++){
          $('#tab-rooms .output ul').append("<li>"+arr[i]+ "<input type='submit' id='x' value='x' onclick='removeA("+i+",divisItem)'>"+"</li>");                
        }
        for(i=0;i<indivItem.length;i++){
          $('#tab-rooms .output ul').append("<li>"+indivItem[i]+ "<input type='submit' id='x' value='x' onclick='removeA("+i+",indivItem)'>"+"</li>");                
        }
      }
}

function createData(M,N) {
var vec = Vector.create([]);
var data = "data;\nparam people := "+people.length+";\nparam divi := "+divisItem.length+";\nparam indiv := "+indivItem.length+";\n";
data = data + "param divItems :";
//  var data = "data;\nparam m := "+ people.length +";\nparam n := "+ rooms.length+";";
//Make the first line param c :  1 2 3 4 :=
 // data = data + "\nparam c :";
  for(var i=1;i<=divisItem.length;i++){
    data = data +i + ' ';
  }
  data = data +":=\n";
  if(divisItem.length>0){
    for(var i=1;i<=people.length;i++){
      data = "\n"+data +i+ " ";
      vec = M.row(i);
      vec.each(function(x, i) {
        data = data + x + ' ';
      });
      data = data+"\n";  
  }
  data = data+"\n";   
  }
  data = data +";\nparam indivItems :";
  for(var i=1;i<=indivItem.length;i++){
    data = data +i + ' ';
  }
  data = data +":=\n";
  if(indivItem.length>0){
    for(var i=1;i<=people.length;i++){
      data = "\n"+data +i+ " ";
      vec = N.row(i);
      vec.each(function(x, i) {
        data = data + x + ' ';
      });
      data = data+"\n";  
    }
  }
  data = data +";\nend\n;";
  return data;
  }

function glpkTest(data){
      var tran = glp_mpl_alloc_wksp();
      try {
      model = document.getElementById("fair2.mod").textContent;
    model=model+data; console.log("testing testing 12345" + model);
    glp_mpl_read_model_from_string(tran,'MathProg Model',model);
    } catch (err) {
         return null;
      }
      try {
          glp_mpl_generate(tran,null,model);
//may not be model
var lp = glp_create_prob();
          glp_mpl_build_prob(tran,lp);
      } catch (err) {
          return null;
      }
      var smcp = new SMCP({presolve: GLP_ON});
      glp_simplex(lp, smcp);
       glp_intopt(lp);
     if(lp) {
        glp_mpl_postsolve(tran,lp,GLP_MIP);
        $('#outputresults').text("Minimum satisfaction is: "); console.log("testing 123");
        $('#outputresults').append(glp_mip_obj_val(lp).toFixed(2).toString());
 // Create text with jQuery
        $('#outputresults').append("<p></p>")
        $('#outputresults').append("The FairAndSquare allocation is: ");
        $('#outputresults').append("<p></p>");
           for (var i = 2; i <= glp_get_num_cols(lp); i++) {
              if(glp_mip_col_val(lp,i)>0){
              var colname= glp_get_col_name(lp,i);  
                if(colname.charAt(0)=='x'){
                  if(glp_mip_col_val(lp,i)<1){
                    $('#outputresults').append(" ");

                    $('#outputresults').append(glp_mip_col_val(lp,i).toFixed(2)+" of ").toString();
                  }

                  $('#outputresults').append(divisItem[colname.charAt(4).toString()-1]);
                }
                if(colname.charAt(0)=='y'){
                  $('#outputresults').append(indivItem[colname.charAt(4).toString()-1]);
            }

                  $('#outputresults').append(" goes to ");
                  $('#outputresults').append(people[colname.charAt(2).toString()-1]);
                  $('#outputresults').append("<p></p>");
          } 
        }
     } else {
        displayError((isMIP()?'MILP':'LP') + " failed. Consult GLPK Log.");
     }
  } 
