import request from "supertest";
import app from "../src/app"; // Adjust path to your Express app

describe("Authentication API", () => {
  it("should register a new user", async () => {
    const response = await request(app).post("/api/register").send({
      email: "testuser@example.com",
      password: "password123",
      name: "Test User",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });
});
