import { DataTypes, Model } from "sequelize"; 
import sequelize from "./index";

interface UsersAttributes{
  index?: number;
  userName: string;
  userDesc: string;
  hasCat: boolean;
}

export class Users extends Model<UsersAttributes>{
  public readonly index!: number;
  public userName!: string;
  public userDesc!: string;
  public hasCat!:boolean;
  public static associations: {
  };
}
Users.init(
  {
    index: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    userDesc:{
        type: DataTypes.TEXT,
    },
    hasCat:{
        type: DataTypes.BOOLEAN
    }
    
  },
  {
    sequelize,
    modelName: "User",
  }
)
