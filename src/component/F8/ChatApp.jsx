import React, {useEffect, useState} from "react";

const lessons = [
    {
        id: 1,
        name: 'React la j?'
    },
    {
        id: 2,
        name: 'SPA/MPA la j?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function ChatApp() {
    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId]);
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{color: lessonId === lesson.id ? 'red' : '#333', cursor: 'pointer'}}
                        onClick={() => setLessonId(lesson.id)}
                    >{lesson.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ChatApp