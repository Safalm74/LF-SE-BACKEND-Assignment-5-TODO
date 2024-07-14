import request from "supertest";

import express from "express";
import router from "../../routes";
import { IUser } from "../../interface/user";
import {users} from "../../models/user"

describe("User Integration Test Suite", () => {
  const app = express();

  const user: IUser = {
    id: "1",
    name: "test",
    email: "test@test.com",
    password: "test password",
    role: "user",
    permissions: [],
  };

  app.use(router);

  describe("createUser API test", () => {
    it('shopuld create user id',async()=>{
    const response = await request(app).post("/user").send(user);
    console.log(users);
    })
  });
});
