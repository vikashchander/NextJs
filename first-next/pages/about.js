import Link from 'next/link';

const aboutPage = () =>{
    return(
        <div>
          
           <h3>this is about page</h3>
           <Link href='/'>
           <a>Go Back</a>
           </Link>
        </div>
    )

}
export default aboutPage;