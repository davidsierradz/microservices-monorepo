var http = require("http").createServer();
var io = require("socket.io")(http);
var knex = require("knex")({
  client: "postgres",
  connection: {
    host: "db",
    user: "postgres",
    password: "postgres",
    database: "postgres"
  }
});

io.on("connection", function(socket) {
  socket.on("event", async function(data) {
    try {
      await knex.schema.withSchema("public").dropTableIfExists("users");
      await knex.schema
        .withSchema("public")
        .createTable("users", function(table) {
          table.increments();
          table.string("name");
        });
      await knex("users").insert({ name: data.name });
    } catch (e) {
      console.error(e);
    }
  });
  socket.on("disconnect", reason => {
    // console.log("a user disconnected: ", reason);
  });
});

http.listen(3000, function() {
  // console.log("listening on *:3000");
});
