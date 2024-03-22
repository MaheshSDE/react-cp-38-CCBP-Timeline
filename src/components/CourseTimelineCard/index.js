// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails

  return (
    <div className="course-time-line-card-container">
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clockIcon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list-items">
        {tagsList.map(eachItem => (
          <li className="items" key={eachItem.id}>
            <p>{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimeLineCard
