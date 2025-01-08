// import { Hono } from "@hono/hono";
// import { cors } from "@hono/hono/cors";
// import { logger } from "@hono/hono/logger";
// import postgres from "postgres";
// 
// const app = new Hono();
// const sql = postgres();
// 
// app.use("/*", cors());
// app.use("/*", logger());
// 
// app.get("/", (c) => c.json({ message: "Hello, World!" }));
// app.get("/todos", async (c) => {
//     const todos = await sql`SELECT * FROM todos`;
//     return c.json(todos);
// });
// 
// export default app;


//import { Hono } from "jsr:@hono/hono@4.6.5";

//const app = new Hono();


//const handleRequest = (c) => {
    //const operation = c.req.query('operation');
    //const number1 = c.req.query("number1") ?? "0";
    //const number2 = c.req.query("number2") ?? "0";

    //if (operation === 'difference') {
      //return c.text(Number(number1) - Number(number2));
    //} else if (operation === 'sum') {
        //return c.text(Number(number1) + Number(number2));
    //} else {
        //return c.text("Invalid operation.");
    //}
//};

//app.get("/", handleRequest);

//export default app;

//import { Hono } from "jsr:@hono/hono@4.6.5";

//const app = new Hono();
//const handleRequest = (c) => {
  //const name = c.req.query("name") ? c.req.query("name").toUpperCase() : "Jane";
  //return c.text(`Hi ${name}`);
//};

//app.get("/*", handleRequest);

//export default app;
import { Hono } from "jsr:@hono/hono@4.6.5";
import { logger } from "jsr:@hono/hono/logger";
const app = new Hono();

app.use(logger());

app.get("/", (c) => c.text(`Hello world!`));




 //   if (input.property) {
 //     const returning = input.property;
 //     return c.json(returning)

 //   } else {
 //     return c.json({})

export default app;

// const app = new Hono();

// app.get("/restaurants", (c) => c.text("Listing restaurants."));
// app.post("/restaurants", (c) => c.text("Adding a restaurant."));
// app.get("/restaurants/:id", (c) => {
    // const restId = c.req.query("id");
    // return c.text(`Showing restaurant with ${restId}.`)
// });

// app.get("/restaurants/:id/reviews", (c) => {
    // const restId = c.req.query("id");
    // return c.text(`Listing reviews for restaurant with id ${restId}.`)
// });

// app.post("/restaurants/:id/reviews", (c) => {
    // const restId = c.req.query("id");
    // return c.text(`Adding a review for restaurant with id ${restId}.`)
// });

// app.on("delete","/restaurants/:id/reviews/:rid", (c) => {
    // const restId = c.req.query("id");
    // const reviewId = c.req.query("rid");
    // return c.text(`Removing review ${reviewId} from restaurant with id ${restId}.`)
// });


// export default app;

// //const app = new Hono();
// //app.get(
  // //"/products/:id",
  // //(c) => c.text(`Information on product ${c.req.param("id")}`),
// //);


// //export default app;