import React from 'react'
import {useRouter} from "next/router";

export default function Home() {

    const router = useRouter();

    return (
    <div>
      <h2>Hey</h2>
            <div onClick={() => router.push('/numbers')} style={{cursor: 'pointer'}}>
                Go TO NUMBERS PAGE
            </div>
             <div onClick={() => router.push('/dsfssd')} style={{cursor: 'pointer'}}>
            Go TO NOT FOUND PAGE
        </div>
    </div>
  )
}


Home.getInitialProps = () => {
    console.log("HOME INITIAL PROPS");
}
