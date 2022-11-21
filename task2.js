let widget = document.getElementById('table-widget')
widget.innerHTML = `
	<table id="table-task2" style="width:100%">
	  <tr>
		<th>Менеджер</th>
		<th>Продажи план</th>
		<th>Продажи факт</th>
		<th>Выполнение плана</th>
	  </tr>
	</table>
`

let table = document.getElementById('table-task2')

let tableSeries = [[
	'Иванов Егор',
	500,
	350
	],[
	'Левин Михаил',
	800,
	580
	],[
	'Новиков Даниил',
	450,
	120
	],[
	'Кривега Екатерина',
	700,
	700
	],[
	'Глуховцев Владимир',
	350,
	100
	]
]
tableSeries.map(function(elem, index){
	elem.push(Math.round(elem[2] / elem[1] * 100))
})


for (let i=0; i<tableSeries.length; i++){
	tableSeries.insertRow()
	for (let j=0; j<4; j++){
		tableSeries.rows[i+1].insertCell()
		tableSeries.rows[i+1].cells[j].innerText = tableSeries[i][j]
	}
	
}

