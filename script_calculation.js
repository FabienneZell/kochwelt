let calc = [];

function calculation() {
  document.getElementById('table').innerHTML = '';
  let input = +document.getElementById('input').value;

  for (let i = 0; i < amouth.length; i++) {
    calc.splice(i, 1);

    if (amouth[i] < 0) {
      document.getElementById('table').innerHTML += `
      <tr>
        <td>
          ${ingredient[i]} 
        </td>
      </tr>`;
    } else {
      let x = amouth[i] * input;
      document.getElementById('table').innerHTML += `
      <tr>
        <td>
          ${x}${ingredient[i]} 
        </td>
      </tr>`;
    }
  }
}
