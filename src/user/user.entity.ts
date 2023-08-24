import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Mailbox } from 'src/mailbox/mailbox.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: 'He' })
  bio: string;

  @Column()
  introduction: string;

  @Column({ type: 'datetime', default: () => new Date() })
  created_at: Date;

  @OneToMany((type) => Mailbox, (mailbox) => mailbox.uid)
  mailboxs: Mailbox[];
}
