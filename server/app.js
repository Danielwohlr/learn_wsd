import { Hono } from "jsr:@hono/hono@4.6.5";
import { logger } from "jsr:@hono/hono/logger";
const app = new Hono();

app.use(logger());

app.get("/courses", (c) => {
  const wsd = {id: 1,
  name: "Web Software Development",
  }
  const dad = {id: 2,
  name: "Device-Agnostic Design",
  }
  return c.json({courses: [wsd, dad]});
});
app.get("/", (c) => c.text(`Hello world!`));

app.get("/courses/:id", (c) => {
  const course_id = c.req.param("id");
  const course = {
      id: course_id,
      name: "Course Name"
  };
  return c.json({course: course})
});

app.post("/courses", async (c) => {
  // curl -X POST -H "Content-Type: application/json" -d '{"name": "Course Name"}' localhost:8000
  const course_name = await c.req.json();
  const course_json ={id: 3, name: course_name.name};
  return c.json({course: course_json})
});

app.get("/courses/:id/topics", (c) => {
  const course_id = c.req.param("id");
  const topic1 = {
    id: 1,
    name: "Topic 1"
  };
  const topic2 = {
    id: 2,
    name: "Topic 2"
  };
  return c.json({topics: [topic1, topic2]})
});

app.get("/courses/:cId/topics/:tId/posts", (c) => {
  const post1 = {
    id: 1,
    title: "Post 1"
  };
  const post2 = {
    id: 2,
    title: "Post 2"
  };
  return c.json({posts: [post1, post2]})
});

app.get("/courses/:cId/topics/:tId/posts/:pId", (c) => {
  const pId = c.req.param("pId");
  const post_json = {
    id: pId,
    title: "Post Title"
  }
  const answer1 = {
    id: 1,
    content: "Answer 1"
  };
  const answer2 = {
    id: 2,
    content: "Answer 2"
  };
  return c.json({
    post: post_json,
    answers: [answer1, answer2]
  })
});





export default app;


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
 //   if (input.property) {
 //     const returning = input.property;
 //     return c.json(returning)

 //   } else {
 //     return c.json({})


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