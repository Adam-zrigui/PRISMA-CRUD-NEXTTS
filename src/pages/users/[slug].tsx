// pages/users/[slug].tsx

import { FindById, getUsers } from '@/components/controller';
import React from 'react';
import { User } from '@/pages/pages';

interface UserDetailProps {
  user: User;
}
export async function getStaticPaths() {
  const { users, error } = await getUsers();
  if (error) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const paths = users?.map(user => ({
    params: { slug: user.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context : any) {
  const { params } = context;
  const { slug } = params;
  const { user ,error } = await FindById(slug);

  if (error) {
    return {
      props: {
        error: error.toString(),
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}

export default function UserDetail({ user }: UserDetailProps) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.age}</p>
    </div>
  );
}

