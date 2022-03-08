import { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']

function Content() {
    // Callback alway call after component mounted

    // 1. useEffect(callback)
    // - Call callback when component re-render
    // - Call callback after component added DOM element

    // 2. useEffect(callback, [])
    // - Only call callback one time after component is mounted

    // 3. useEffect(callback, [deps])
    // - Call callback after dependencies changed



    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    console.log(type)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])    

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            {posts.map(post => (
                <li key={post.id}>{ post.title }</li>
            ))}

            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to Top
                </button>
            )}
        </div>
    )
}

export default Content