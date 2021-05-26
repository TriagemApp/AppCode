function acessa() {
    let user = document.getElementById("user").value;
    let senha = document.getElementById("pass").value;
    
    if (user == 'user' && senha == 'senha') {
        		window.location.href = "questions.html";      
    } else{
        alert('Usuário ou senha incorreto!');
        location.reload();
    }
      }
  
/*-------------------------------------------------------------------------------------------*/

 // firebase config (Conexão com o Banco de Dados)
       var firebaseConfig = {
    apiKey: "AIzaSyBVvPiov7g1b7qu4My5QzmV_cxZYB8zcrs",
    authDomain: "tcc-base.firebaseapp.com",
    databaseURL: "https://tcc-base-default-rtdb.firebaseio.com",
    projectId: "tcc-base",
    storageBucket: "tcc-base.appspot.com",
    messagingSenderId: "614509811465",
    appId: "1:614509811465:web:ff274ea1fafdacac2725d8"
  };

firebase.initializeApp(firebaseConfig);
        ////////////////////////////////////
                
                /***************************************************\
                * Processo de captação e criação de dados no Firebase *
                \***************************************************/
                
                $('#new_entry').submit(function(e){
                    e.preventDefault();
                    var Entry = firebase.database().ref('Prontuário');

                    
                    var entry = {};
                    entry.per1 = 'Tem dificuldade para respirar?';
                    entry.res1 = $(this).find('[name="res1"]').val();
                    entry.per2 = 'Tem dor no peito?';
                    entry.res2 = $(this).find('[name="res2"]').val();
                    entry.per3 = 'Tem alguma fratura?';
                    entry.res3 = $(this).find('[name="res3"]').val();
                    entry.per4 = 'Teve desmaio, tontura ou dor de cabeça?';
                    entry.res4 = $(this).find('[name="res4"]').val();
                    entry.per5 = 'Tem algum sangramento?';
                    entry.res5 = $(this).find('[name="res5"]').val();
                    /*entry.unidade = $(this).find('[name="unidade"]').val();*/
                    entry.createdAt = new Date().getTime();

                   
                    
                    
                    
                    Entry.push(entry).then(function(data){
                        window.location.href = 'verificacao.html'
                    }).catch(function(error){
                        alert(error);
                        console.error(error);
                    })
                    
                    return false;
                });              
            ;

/*----------------------------------------------------------------------------------------------*/

                /***************************************************\
             * Processo de leitura dos dados salvos no Realtime Database *
                \***************************************************/


 var Blog = firebase.database().ref('Prontuário').orderByChild('date');

        Blog.on('value', function (r) {

            $('#entries').html('Loading...');
            var html = '';
            r.forEach(function (item) {
                entry = item.val()
                html = '<br />' +
                    '<a href="entry.html?id=' + item.getKey() + ' " style="text-decoration:none!important;color: black">' +
                    '<div class=">' +    
                    '<div style="margin-left=0px;"><br />' +
                    '<h5>' + datetimeFormat(entry.createdAt) + '  ' + '</h5>' +
                    '</div>' +
                    '<div>' +
                    '<small><small>' + ' - ' + entry.per1 + ' | ' + entry.res1 + ' <br /> ' 
                    + '...' +                                   
                    '</small></small>' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>' +
                    '<hr style="width:150%; height:2px; margin-left:0px; border-width:0; color:black; background-color:black"> ' 
                     + html; // prepend the entry because we need to display it in reverse order
            });
            

            $('#entries').html(html);
        });

        /*************\
         * Utilities *
        \*************/

        function strip(html) {
            var tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }

        function excerpt(text, length) {
            text = strip(text);
            text = $.trim(text); //trim whitespace
            if (text.length > length) {
                text = text.substring(0, length - 3) + '...';
            }
            return text;
        }

        function pad2Digit(num) {
            return ('0' + num.toString()).slice(-2);
        }

        function datetimeFormat(timestamp) {
            var dateObj = new Date(timestamp);
            var en_month = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
            return dateObj.getUTCDate() + ' ' + en_month[dateObj.getMonth()] + ' ' + (dateObj.getFullYear()) + ' ' + (dateObj.getHours()) + ':' + (dateObj.getMinutes());
        }

         
            
            ;


/*-------------------------------------------------------------------------------------------------------------*/

        /*********************************\
    * Leitura de uma coluna de dados específica *
        \*********************************/

        var entry_id = $_GET('id');

        if (entry_id) {
            var added_views = false;
            var Entry = firebase.database().ref('Prontuário').child(entry_id);

            Entry.on('value', function (r) {
                var entry = r.val();

                if (entry) {

                    entry['createdAt'] = datetimeFormat(entry.createdAt);

                    $('[data-bind]').each(function () {
                        $(this).html(entry[$(this).data('bind')]);
                    });
                    
                   
                    
                   
                } else { // content not found
                    window.location.href = 'prontuarios.html';
                }
            });
            
            // update button
            $('#update').attr('href','update.html?id='+entry_id);
            
            // delete button
            $('#delete').click(function(){
                if(confirm('Este prontuário será deletado permanentemente. Você tem certeza?')){
                    Entry.remove(); // this will trigger Entry.on('value') immediatly
                }
            });
        } else {
            alert('Este atendimento não exite.');
            window.location.href = 'prontuarios.html';
        }

        /*************\
         * Utilities *
        \*************/

        function $_GET(key) {
            var queries = window.location.href.split('?').pop().split('&');
            var params = {};
            queries.map(function (query) {
                var set = query.split('=');
                params[set[0]] = set[1];
            });

            if (key) {
                return params[key] || null;
            } else {
                return params;
            }

        }

        function pad2Digit(num) {
            return ('0' + num.toString()).slice(-2);
        }

        function datetimeFormat(timestamp) {
            var dateObj = new Date(timestamp);
            var en_month = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
            return ' ' +pad2Digit(dateObj.getUTCDate()) + '/ ' + en_month[dateObj.getMonth()] + ' / ' + (dateObj.getFullYear()) + ' ' + (dateObj.getHours()) + ':' + (dateObj.getMinutes());
        }

/*------------------------------------------------------------------------------------------------------------------------------------------------*/

                /*********************************\
             * Processo de update dos dados existentes *
                \*********************************/
                var entry_id = $_GET('id');

                if (entry_id) {
                    
                    var Entry = firebase.database().ref('Prontuário').child(entry_id);

                    Entry.once('value', function (r) { // once = just this once, no need to actively watch the changes
                        var entry = r.val();

                       
                        
                        $('#update_entry [name="per1"]').val(entry.per1);
                        $('#update_entry [name="res1"]').val(entry.res1);
                        $('#update_entry [name="per2"]').val(entry.per2);
                        $('#update_entry [name="res2"]').val(entry.res2);
                        $('#update_entry [name="per3"]').val(entry.per3);
                        $('#update_entry [name="res3"]').val(entry.res3);
                        $('#update_entry [name="per4"]').val(entry.per4);
                        $('#update_entry [name="res4"]').val(entry.res4);
                        $('#update_entry [name="per5"]').val(entry.per5);                 $('#update_entry [name="res5"]').val(entry.res5);
                        
                    });
                    
                    
                    /**********************\
                     * Save the form data *0
                    \**********************/
                    $('#update_entry').submit(function(e){
                        
                        Entry.transaction(function(entry){
                            
                            entry = entry || {};
                            entry.per1 = $('#update_entry [name="per1"]').val();
                            entry.res1 = $('#update_entry [name="res1"]').val();
                            entry.per2 = $('#update_entry [name="per2"]').val();
                            entry.res2 = $('#update_entry [name="res2"]').val();
                            entry.per3 = $('#update_entry [name="per3"]').val();
                            entry.per3 = $('#update_entry [name="per3"]').val();
                            entry.res4 = $('#update_entry [name="res4"]').val();
                            entry.per4 = $('#update_entry [name="per4"]').val();
                            entry.res5 = $('#update_entry [name="res5"]').val();
                            entry.per5 = $('#update_entry [name="per5"]').val();
                            
                            return entry;
                            
                        }).then(function(){
                            window.location.href = 'entry.html?id='+entry_id;
                        }).catch(function(error){
                            alert(error);
                        });

                        return false;
                    });
                    
                }else{
                    window.location.href = 'prontuarios.html';
                }
                
                
            
        ;
        
        
        /*************\
         * Utilities *
        \*************/

        function $_GET(key) {
            var queries = window.location.href.split('?').pop().split('&');
            var params = {};
            queries.map(function (query) {
                var set = query.split('=');
                params[set[0]] = set[1];
            });

            if (key) {
                return params[key] || null;
            } else {
                return params;
            }

        }
