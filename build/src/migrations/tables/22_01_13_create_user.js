"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../models/users");
const create_table_users = async () => {
    await users_1.Users.sync({ force: true })
        .then(() => {
        console.log("Success Create user Table");
    })
        .catch((err) => {
        console.log("Error in Create user Table : ", err);
    });
};
create_table_users();
//# sourceMappingURL=22_01_13_create_user.js.map