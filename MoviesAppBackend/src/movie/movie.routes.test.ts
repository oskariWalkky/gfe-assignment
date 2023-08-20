import request from "supertest";

import app from "../../src/app";
import movies from "../assets/movies-compact.json";

describe("movie routes", () => {
  test("Get all movies", async () => {
    const res = await request(app).get("/movies");
    expect(res.body).toEqual(movies);
  });
});