import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class LinkItem {
  @Field({ nullable: true })
  readonly text?: string;

  @Field()
  readonly rel: string;

  @Field()
  readonly href: string;
}

@ObjectType()
export class Link {
  @Field()
  readonly link: LinkItem;
}
