import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers in Your email</h1>
            <p>Subscribe & stay updated!</p>
            <div>
                <input type="email" placeholder='john@doe.com' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter