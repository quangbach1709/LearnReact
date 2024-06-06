import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import config from "bootstrap/js/src/util/config";

// function ToDuList() {
//
//     const [jobs, setJobs] = useState(() => {
//         const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//         if (storageJobs === null) {
//             return []
//         } else {
//             return storageJobs
//         }
//     })
//     const [job, setJob] = useState('')
//     const handleSubmit = () => {
//         setJobs(prevState => {
//             const newJob = [...prevState, job]
//             // Lu du lieu vao localStorage
//             const jsonJob = JSON.stringify(newJob)
//             localStorage.setItem('jobs', jsonJob)
//             return newJob
//         })
//         setJob('')
//     }
//
//
//     return (
//         <div className={'position-absolute top-50 start-50 translate-middle'}>
//             <h1 className={'text-center'}>To Do List</h1>
//             <input
//                 className={'border border-black'}
//                 type={"text"} value={job}
//                 onChange={event => setJob(event.target.value)}/>
//             <button onClick={handleSubmit} className={'btn btn-info'}>Add</button>
//             <ul className={''}>
//                 {jobs.map((job, index) => (
//                         <li key={index}>
//                             {job}
//
//                         </li>
//
//                     )
//                 )}
//
//
//             </ul>
//         </div>
//     )
// }

// function ToDuList() {
//     const [jobs, setJobs] = useState(() => {
//         const storageJobs = JSON.parse(localStorage.getItem('jobs'));
//         return storageJobs ? storageJobs : [];
//     });
//     const [job, setJob] = useState('');
//     const [show, setShow] = useState(false);
//     // Luu chu du lieu vao localStorage moi khi co thay doi
//     useEffect(() => {
//         localStorage.setItem('jobs', JSON.stringify(jobs));
//     }, [jobs]);
//
//     const handleAddNote = () => {
//         if (show && job.trim() !== '') {
//             const newJobs = [...jobs, {name: job, isCompleted: false}];
//             setJobs(newJobs);
//             setJob('');
//         }
//         setShow(true);
//     };
//
//     const toggleJobCompletion = (index) => {
//         const newJobs = jobs.map((item, i) => {
//             if (index === i) {
//                 return {
//                     ...item,
//                     isCompleted: !item.isCompleted
//                 };
//             }
//             return item;
//         });
//         setJobs(newJobs);
//     };
//
//     return (
//         <div className='container mt-5'>
//             <h1 className='text-center'>To Do List</h1>
//             <div className='row'>
//                 <div className='col-8'>
//                     <ul className='list-group'>
//                         {jobs.map((job, index) => (
//                             <li
//                                 className='list-group-item d-flex justify-content-between align-items-center mb-2'
//                                 key={index}
//                                 onClick={() => toggleJobCompletion(index)}
//                                 style={{cursor: 'pointer'}}
//                             >
//                                 {job.isCompleted ? <del>{job.name}</del> : job.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className='col-4'>
//                     <div className='input-group mb-3'>
//                         {show && (
//                             <input
//                                 type='text'
//                                 className='form-control'
//                                 placeholder='Enter your job'
//                                 value={job}
//                                 onChange={(e) => setJob(e.target.value)}
//                             />
//                         )}
//                         <button
//                             className='btn btn-primary'
//                             onClick={handleAddNote}
//                         >
//                             Add Note
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ToDuList