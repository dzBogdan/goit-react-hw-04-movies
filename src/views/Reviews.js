export default function Reviews({ reviews }) { 
    return (
        <>
            <ul>
                {reviews.map(item => (
                    <li>
                        <h1>{item.author}</h1>
                        <p>{ item.content}</p>
                    </li>    
                ))}
            </ul> 
        </>    
   )

}