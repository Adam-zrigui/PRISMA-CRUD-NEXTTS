// components/Sidebar.tsx

import { getUsers } from '@/components/controller';
import Link from 'next/link';
import React from 'react';
import { User } from '@/pages/pages';

interface SidebarProps {
  users: User[];
}

export default function Sidebar({ users }: SidebarProps) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const { users, error } = await getUsers();
  if (error) {
    return {
      props: {
        error: error.toString(),
      },
    };
  }

  return {
    props: {
      users,
    },
  };
}
