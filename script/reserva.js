document.addEventListener('DOMContentLoaded', function() {
    const monthsBr = ['janeiro', 'fevereiro', 'março', 'abril', 'maio','junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const tableDays = document.getElementById('dias');
    function GetDaysCalendar(mes,ano){
        document.getElementById('mes').innerHTML = monthsBr[mes];
        document.getElementById('ano').innerHTML = ano;

        let firstDayofWeek = new Date(ano,mes,1).getDay()-1;
        let getLastDayThisMonth = new Date(ano,mes+1,0).getDate();

        for(var i = -firstDayofWeek,reserva = 0; i < (42-firstDayofWeek); i++,reserva++){
            let dt = new Date(ano,mes,i);
            let dayTable = tableDays.getElementsByTagName('td')[reserva];
            dayTable.classList.remove('mes-anterior');
            dayTable.classList.remove('proximo-mes');
            dayTable.innerHTML = dt.getDate();

            if(i < 1){
                dayTable.classList.add('mes-anterior')
            }
            if(i > getLastDayThisMonth){
                dayTable.classList.add('proximo-mes')
            }
        }


    }

    let now = new Date();
    let mes = now.getMonth();
    let ano = now.getFullYear() 
    GetDaysCalendar(mes,ano);

    const botao_proximo = document.getElementById('btn_prev');
    const botao_anterior = document.getElementById('btn_ant');

    botao_proximo.onclick = function(){
        mes++;
        GetDaysCalendar(mes,ano);
    }
    botao_anterior.onclick = function(){
        mes--;
        GetDaysCalendar(mes,ano);
    }
})