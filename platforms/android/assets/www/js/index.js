document.addEventListener('deviceready', this.onDeviceReady, false);
var db;

function onDeviceReady() {
  db = window.openDatabase("TodoDB", "1.0", "To Do List Database", 200000);

  if (db) {

  } else {
    db.transaction(createDB, errorCB, successCB);
  }
}

function createDB(tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS TODO (id INTEGER PRIMARY KEY, titulo, descricao)');
  //  tx.executeSql('INSERT INTO DEMO (id, data) VALUES (3, "First row")');
  //  tx.executeSql('INSERT INTO DEMO (id, data) VALUES (4, "Second row")');
}

function errorCB(err) {
  alert("Error processing SQL: " + err);
}

function successCreate() {
  alert("Banco de Dados Criado com Sucesso!");
}

function  ConfirmaStatus(e) {
  navigator.notification.confirm('Deseja marcar essa tarefa como concluída ?', marcaConcluido, 'Concluir', ['Sim','Não']);
}

function  ConfirmaExcluir() {
  navigator.notification.confirm('Deseja excluir essa tarefa ?', excluir, 'Excluir', ['Sim','Não']);
}

function marcaConcluido(btn) {

}

function excluir(btn) {

}
