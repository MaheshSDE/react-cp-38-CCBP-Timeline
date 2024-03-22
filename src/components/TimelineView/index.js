// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimeLineCard from '../ProjectTimelineCard'
import CourseTimeLineCard from '../CourseTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimeLineCard courseDetails={item} key={item.id} />
  }

  return (
    <div className="time-line-view-container">
      <h1 className="heading1">MY JOURNEY OF CCBP 4.0 </h1>
      <Chrono
        theme={{secondary: 'white'}}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
      </Chrono>
    </div>
  )
}
export default TimeLineView
