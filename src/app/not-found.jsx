const { default: Link } = require("next/link")

const NotFoundPage=()=>{
    return(
        <div>
            <h1>Page not found</h1>
            <Link href='/'>return to home</Link>
        </div>
    )
}

export default NotFoundPage;