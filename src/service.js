export const CreateCosmosClient = async () => {
  const { CosmosClient } = require("@azure/cosmos");

  const endpoint = "https://localhost:8081";
  const key =
    "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";
  const client = new CosmosClient({ endpoint, key });
  const { database } = await client.databases.createIfNotExists({
    id: "Northwind",
  });
  console.log(database.id);

  const { container } = await database.containers.createIfNotExists({
    id: "Products",
  });
  console.log(container.id);

  return container;
};

export const fetchData = async () => {
  const container = await CreateCosmosClient(); // importing the container

  const { resources } = await container.items
    .query("SELECT * from c")
    .fetchAll();
  console.log(resources);
  return resources;
};
