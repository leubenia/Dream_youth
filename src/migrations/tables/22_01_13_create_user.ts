import { Users } from "../../models/users";

const create_table_users = async() => {
    await Users.sync({force : true})
    .then(() => {
        console.log("Success Create user Table");
    })
    .catch((err:Error) => {
        console.log("Error in Create user Table : ", err);
    })
}

create_table_users();