$(document).ready(function() {
    var matrix1_rows = 1;
    var matrix2_rows = 1;
  
    function addRow(tableId) {
      var table = $("#" + tableId);
      var tbody = table.find("tbody");
      var row = $("<tr>");
      row.append("<td><input type='text' class='row' /></td>");
      row.append("<td><input type='text' class='column' /></td>");
      row.append("<td><input type='text' class='value' /></td>");
      tbody.append(row);
    }
  
    function removeRow(tableId) {
      var table = $("#" + tableId);
      var tbody = table.find("tbody");
      var rows = tbody.find("tr");
      if (rows.length > 1) {
        rows.last().remove();
      }
    }
  
    $("#add_row1").click(function() {
      addRow("matrix1_table");
      matrix1_rows++;
    });
  
    $("#remove_row1").click(function() {
      removeRow("matrix1_table");
      matrix1_rows--;
    });
  
    $("#add_row2").click(function() {
      addRow("matrix2_table");
      matrix2_rows++;
    });
  
    $("#remove_row2").click(function() {
      removeRow("matrix2_table");
      matrix2_rows--;
    });
  
    $("#calculate").click(function() {
      var matrix1 = [];
      $("#matrix1_table tbody tr").each(function() {
        var row = $(this).find(".row").val();
        var column = $(this).find(".column").val();
        var value = $(this).find(".value").val();
        for (var i = 0; i < row; i++) {
          for (var j = 0; j < column; j++) {
            if (!matrix1[i]) {
              matrix1[i] = [];
            }
            matrix1[i][j] = value;
          }
        }
      });
  
      var matrix2 = [];
      $("#matrix2_table tbody tr").each(function() {
        var row = $(this).find(".row").val();
        var column = $(this).find(".column").val();
        var value = $(this).find(".value").val();
        for (var i = 0; i < row; i++) {
          for (var j = 0; j < column; j++) {
            if (!matrix2[i]) {
              matrix2[i] = [];
            }
            matrix2[i][j] = value;
          }
        }
      });
  
      var result = [];
      for (var i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrix2[0].length; j++) {
          var sum = 0;
          for (var k = 0; k < matrix1[0].length; k++) {
            sum += matrix1[i][k] * matrix2[k][j];
          }
          result[i][j] = sum;
        }
      }
  
      var html = "";
      for (var i = 0; i < result.length; i++) {
        html += "<p>";
        for (var j = 0; j < result[i].length; j++) {
          html += result[i][j] + " ";
        }
        html += "</p>";
      }
      $("#result").html(html);
    });
  });