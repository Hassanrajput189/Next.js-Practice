"use server"
import fs from "fs/promises"
export const submitAction = async (e) => {
    console.log("Name : " , e.get("name"))
    console.log("Address : " , e.get("add"))
    let a = await fs.writeFile("data.txt",  `Name is ${e.get("name")} and Address is ${e.get("add")}`) 

  }