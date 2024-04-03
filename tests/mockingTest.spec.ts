import { test, expect, chromium } from "@playwright/test";

test.only("Test using mocked data" ,async({page})=>{
    await page.route("https://conduit-api.bondaracademy.com/api/articles**", async route => {
        const json = {
            "articles": [
                         {
                        "slug": "test6-1864",
                        "title": "Alena's test",
                        "description": "Far far away, behind the word mountains, far from.",
                        "body": "Far far away, behind the word mountains, far from.",
                        "tagList": [
                            "Hello",
                            "World"
                        ],
                        "createdAt": "2024-04-01T17:23:32.893Z",
                        "updatedAt": "2024-04-01T17:23:32.893Z",
                        "favorited": false,
                        "favoritesCount": 0,
                        "author": {
                            "username": "Same 6",
                            "bio": null,
                            "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
                            "following": false
                        }
                    },
            ],
            articlesCount: 1

        }
      await route.fulfill({ json });
    });
    await page.goto("https://conduit.bondaracademy.com/login");
    await page.getByPlaceholder("Email").fill("test112345@gmail.com")
    await page.getByPlaceholder("Password").fill("test112345@")
    await page.getByRole("button",{name: "Sign in"}).click()
    await expect(page.getByText("Alena's test")).toBeVisible()
})
