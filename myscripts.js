let length = 7;
for (let i = 0; i < length; i++) {
  console.log(i);
  document.getElementById(
    "flow-box"
  ).innerHTML += `<div class="grid-colum" style="grid-template-columns: ${Array(
    length + 3
  )
    .fill(0)
    .reduce((accumulator, currentValue) => accumulator + " auto", "")}">
				<div class="title-box green" style="grid-column: ${i + 2} / span 2">
					<p>This is box${i + 1}</p>
				</div>
			</div>
		`;
}
