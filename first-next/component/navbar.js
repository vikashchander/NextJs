import Link from 'next/link';
const Navbar = ()=>{
    const styles ={
        display:'flex',
        justifyContent: 'space-between',
        padding:'1rem',
        background:'aqua'
    }
    return(
        <div style={styles}>
        <Link href='/about'>
        <a>About</a> 
        </Link>
        <Link href='/'>
         <a>Index</a>
        </Link>
        <Link href='/contact'>
         <a>Contact</a>
        </Link>
        </div>
    )
}

export default Navbar;