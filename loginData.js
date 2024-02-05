// let loginData = [
//     {
//         username: "standard_user",
//         password: "secret_sauce"
//     },
//     {
//         username: "performance_glitch_user",
//         password: "secret_sauce" 
//     },
//     {
//         username: "visual_user",
//         password: "secret_sauce" 
//     }

// ]

// loginData.forEach((username, password)=>{
//     test("Login to test website with different accunts", async()=>{
//         const browser = await chromium.launch();
//         const page = await browser.newPage();
//         let loginPageLocators = new LoginPageLocators(page);
//         await loginPageLocators.performLogin(username, password);
//         await page.close();
//         await browser.close()
//     })
// })

