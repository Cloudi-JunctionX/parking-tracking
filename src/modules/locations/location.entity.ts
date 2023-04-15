import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'locations',
  timestamps: false,
})
export class Location extends Model<Location> {
  @PrimaryKey
  @Column
  id?: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  open_hour: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  close_hour: string;
}
