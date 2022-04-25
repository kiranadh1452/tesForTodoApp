class TodoHome{

  constructor(){
    this.url = "http://localhost";
    this.headerSelector = "#header-part";
    this.newTodoSelector = "#new-todo-item";
    this.newTodoBtnSelector = "#todo-item-submit";
    this.latestTodoSelector = "#pending-item-container > list-item:nth-last-child(1) > span";
    this.latestTodoDeleteBtnSelector = "#pending-item-container>list-item:nth-last-child(1)>div>button";
  }

  async browseHomePage(){
    await page.goto(this.url);

    const headerLocator = await page.locator(this.headerSelector);
    await expect(headerLocator).toBeVisible();
  }

  async addNewTodo(text){
    await page.fill(this.newTodoSelector,text);
    
    const newTodoBtnLocator = await page.locator(this.newTodoBtnSelector);
    await newTodoBtnLocator.click();
  }

  async checkForNewTodo(text){
    const latestTodoLocator = await page.locator(this.latestTodoSelector);
    const todoText = await latestTodoLocator.innerText();

    if(todoText !== text){
      return [false,`Expected value: ${text}\nReceived value: ${todoText}`];
    }

    return [true,null];
  }

  async deleteLatestTodo(){
    const deleteBtnLocator = await page.locator("#pending-item-container>list-item:nth-last-child(1)>div>button");
    await deleteBtnLocator.click();

    page.pause();
  }

}

module.exports = {TodoHome};