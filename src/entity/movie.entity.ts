import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  duration: number

  @Column({ nullable: false })
  inProduction: boolean
}
