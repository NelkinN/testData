let widget = document.getElementById('table-widget')
widget.innerHTML = `
	<table id="table-task2" style="width:100%">
	  <tr>
		<th>Менеджер</th>
		<th>Продажи план</th>
		<th>Продажи факт</th>
		<th>Выполнение плана, %</th>
	  </tr>
	</table>
`

let table_task2 = document.getElementById('table-task2')

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
	table_task2.insertRow()
	for (let j=0; j<4; j++){
		table_task2.rows[i+1].insertCell()
		table_task2.rows[i+1].cells[j].innerText = tableSeries[i][j]
	}
}

