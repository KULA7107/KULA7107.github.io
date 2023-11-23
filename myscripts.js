// const element = document.getElementById("flow-box");
// $(document).on('ready', function() {
	for(let i=0;i<6;i++) {
		document.getElementById("flow-box").innerHTML += 
		`<div class="grid-colum">
				<div class="title-box green space-${i}x">
					<p>This is box${i}</p>
				</div>
			</div>
		`;	

	}

// })
