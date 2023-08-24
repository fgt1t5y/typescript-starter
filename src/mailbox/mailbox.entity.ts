import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Mailbox {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.mailboxs)
  uid: number;

  @Column()
  name: string;

  @Column({ type: 'datetime', default: () => new Date() })
  created_at: Date;
}
