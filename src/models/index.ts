import { Sequelize } from "sequelize";
import config from "../config/config";

const sequelzie = new Sequelize(
	config.development.database,
	config.development.username,
	config.development.password,
	{
		host: config.development.host,
		dialect: "mysql",
		timezone: "+09:00", //한국시 맞추기
		pool: {
			max: 10,
			min: 0,
			acquire: 5000,
			idle: 10000,
		},
		dialectOptions: {
			supportBigNumbers: true,
			bigNumberStrings: true,
		},
		define: {
			underscored: true,
		},
	}
);

export default sequelzie;
