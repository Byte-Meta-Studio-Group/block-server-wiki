function calcss() {
  var sc = prompt("请输入收购价格:");
  var prc = sc * 1.5;
  alert("购买价格为:" + prc);
}

function seeerbaidu(question) {
  if (question == undefined) {
    var question = prompt("请输入您的问题");
  }
  if (question != null) {
    location.replace("https://www.baidu.com/s?wd=" + question);
  }
}

function loadBanList() {
  var banlistTable = document.getElementById('banlist');

  if (banlistTable) {
    // 初始化表格
    banlistTable.innerHTML = '<table id="banlist"><thead><tr><th>用户名</th><th>原因</th><th>开始时间</th><th>结束时间</th></tr></thead><tbody></tbody></table>';
    fetch('https://api.yuxiangwang0525.com/bmss/bansapijson.php')
      .then(response => response.json())
      .then(data => {
        // Iterate through banlist data
        data.forEach(entry => {
          // Extract fields from each entry
          const { Username, reason, Start, end } = entry;

          // Create table row
          const row = document.createElement('tr');

          // Create table cells for each field
          const usernameCell = document.createElement('td');
          usernameCell.textContent = Username;
          row.appendChild(usernameCell);

          const reasonCell = document.createElement('td');
          reasonCell.textContent = reason;
          row.appendChild(reasonCell);

          const startCell = document.createElement('td');
          startCell.textContent = Start;
          row.appendChild(startCell);

          const endCell = document.createElement('td');
          endCell.textContent = end;
          row.appendChild(endCell);

          // Append row to tbody
          const tbody = banlistTable.querySelector('tbody');
          tbody.appendChild(row);
        });
      })

      .catch(error => {
        // Handle error
        console.error(error);
      });
  }
}