import React, {useEffect, useState} from "react";

// const tabs = ['posts', 'comments', 'albums']
//
// // 1 callback luon dc goi sau khi component mounted
// function Effect() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')
//     const [showGoToTop, setShowGoToTop] = useState(false)
//     useEffect(() => {
//         // document.title = title
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])
//
//     useEffect(() => {
//         const handleScroll = () => {
//             // if (window.scrollY >= 200) {
//             //     setShowGoToTop(true)
//             // } else {
//             //     setShowGoToTop(false)
//             // }
//             setShowGoToTop(window.scrollY >= 200)
//         }
//         window.document.addEventListener('scroll', handleScroll)
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, []);
//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button
//                     style={type === tab ? {color: "white", backgroundColor: 'gray',} : {}}
//                     onClick={() => setType(tab)}
//                     key={tab}>
//                     {tab}
//                 </button>
//             ))}
//             <input value={title} onChange={e => setTitle(e.target.value)}/>
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//                 {showGoToTop && (
//                     <button style={{position: "fixed", right: 20, bottom: 20,}}> Go to Top</button>
//                 )}
//             </ul>
//         </div>
//     )
// }

// function Effect() {
//     const [width, setWidth] = useState(window.innerWidth)
//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }
//         window.addEventListener('resize', handleResize)
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, []);
//     return (
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )
// }

//Dong ho dem nguoc
// function Effect() {
//     const [countdown, setCountdown] = useState(180)
//
//     useEffect(() => {
//         const timeID = setInterval(() => {
//             setCountdown(prevState => prevState - 1)
//         }, 1000)
//         return () => {
//             clearInterval(timeID)
//         }
//     }, []);
//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }

// preview avata
// function Effect() {
//     const [avatar, setAvatar] = useState()
//     useEffect(() => {
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     }, [avatar]);
//     const handlePreviewAvata = (e) => {
//         const file = e.target.files[0]
//         file.preview = URL.createObjectURL(file)
//         setAvatar(file)
//         e.target.value = null
//     }
//     return (
//         <div>
//             <input type="file"
//                    onChange={handlePreviewAvata}
//             />
//             {avatar && (<img src={avatar.preview} alt="" width='80%'/>)}
//         </div>
//     )
// }
//
// export default Effect