import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Comment, CommentWithRelations} from './comment.model';
import {User, UserRelations} from './user.model';

@model()
export class Post extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  body?: string;

  @belongsTo(() => User)
  userId: number;

  @hasMany(() => Comment)
  comments: Comment[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Post>) {
    super(data);
  }
}

export interface PostRelations {
  // describe navigational properties here
  user?: UserRelations;
  comments?: CommentWithRelations[];
}

export type PostWithRelations = Post & PostRelations;
