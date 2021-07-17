import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import request from '../utils/request'
export default function Home({results}) {
  
  return (
    <div>
     <Head>
      <title>Hulu 2.0</title>
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
     </Head>
     <Header/>
     <Nav/>
     <Results results={results}/>
    </div>
  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const res = await fetch(`https://api.themoviedb.org/3${request[genre]?.url|| request.fetchTrending.url}`)
  const data  =  await res.json();
  return {
    props : {
     results : data.results
    }
  }
  
}
