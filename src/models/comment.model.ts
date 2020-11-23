import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Post, PostWithRelations} from './post.model';
import {User, UserRelations} from './user.model';

@model()
export class Comment extends Entity {
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
  body: string;

  @belongsTo(() => Post)
  postId: number;

  @belongsTo(() => User)
  userId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Comment>) {
    super(data);
  }
}

export interface CommentRelations {
  // describe navigational properties here
  user?: UserRelations;
  post?: PostWithRelations;
}

export type CommentWithRelations = Comment & CommentRelations;
