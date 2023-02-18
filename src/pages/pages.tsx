import { getUsers } from '@/components/controller';
import React from 'react'
export async function getServerSideProps() {
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
  export interface User {
    name: string
    age: number
    email : string
    about: string
    id: any,
  }
export default function pages({users} : {users : User[]}) {
  return (
    <div>
        {users.map((user , key) => <li key={key}>
            <h1>{user.age}</h1>
            <h3>{user.email}</h3>
        </li>)}
    </div>
  )
}
