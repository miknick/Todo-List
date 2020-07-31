import { Todo, createTodoDiv } from "./createTodo.js"

const createDefaultProject = () => {
    const electricBill = new Todo("Pay the electic bill", "", "05/08/2020", "High")
    const airport = new Todo("Take Samantha to airport", "1729,First ave,New York,New york",
        "27/07/2020", "Very High")
    const dinner = new Todo("Dinner with Sarah", "Upland,345 Park,Ave S.", "31/07/2020", "High")
    createTodoDiv(airport)
    createTodoDiv(dinner)
    createTodoDiv(electricBill)

}
export { createDefaultProject }
