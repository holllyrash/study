import { test,expect } from "@playwright/test";

test.describe("Test API on test site", ()=>{
    test("GET the user with id 1", async ({request})=>{
        let result = await request.get("https://reqres.in/api/users/1")
        let data = await result.json()
        expect(result.ok()).toBeTruthy()
        console.log(data)
}),
test("PUT new first name for user with id 2", async({request})=>{
    let result = await request.put("https://reqres.in/api/users/2", {
        data: {
            first_name:"Alena"
        }
    })
    let data = await result.json()
    expect(result.ok()).toBeTruthy()
    expect(data.first_name).toContain("Alena")
    console.log(data)
}),
test("POST test: login and expect specific token value", async({request})=>{
    let result = await request.post("https://reqres.in/api/login", {
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
        }
    })
    let data = await result.json()
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual(expect.objectContaining(({
        "token": "QpwL5tke4Pnpja7X4"
      })));
      console.log(data)
})

})
