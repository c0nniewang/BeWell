import React from 'react'
import { Progress } from 'semantic-ui-react'

class MainGoalCard extends React.Component {
  render() {
  let today = new Date()
  today = today.setMinutes(today.getMinutes() - today.getTimezoneOffset())

  const created = new Date(this.props.goal.created_at)
  const createdMin = created.setMinutes(created.getMinutes() - created.getTimezoneOffset())

  const targetDate = this.props.goal.target_date
  const formattedDate = `${targetDate.slice(0, 4)}, ${targetDate.slice(5, 7)}, ${targetDate.slice(8, 10)}`
  const target = new Date(formattedDate) //WHY DOESN"T THIS WORK????
  const targetMinutes = target.setMinutes(target.getMinutes() - target.getTimezoneOffset())

  const days = Math.round((today - createdMin) / (24*60*60*1000))
  const totalDays = Math.round((targetMinutes - createdMin) / (24*60*60*1000))
  const daysLeft = totalDays - days

  const percent = Math.round((daysLeft / totalDays))

  // console.log(formattedDate, new Date(formattedDate), target)

    return (
      <div className="item">
        <div className="content">
          <div className="header">Title: {this.props.goal.title}</div>
          <div className="meta">Date created: {created.toDateString()}</div>
          <div className="description">
            <b>Your 3 action steps you'll take to reaching this goal: </b><br />
            1. {this.props.goal.action1} <br />
            2. {this.props.goal.action2} <br />
            3. {this.props.goal.action3} <br />
            <p></p>
            <b>How will you track your goal? When will you know you've reached your goal?</b><br />
            {this.props.goal.attainable}<br />
            <p></p>
            <b>Why do you want to reach this goal?</b><br />
            {this.props.goal.relevance}<br />
            <p></p>
            <b>Your target date for achieving this goal:</b><br />
            {new Date(formattedDate).toDateString()}<br />
            <p></p>
            <Progress color='olive' percent={percent} label={`${daysLeft} days until your target date for goal completion!`}/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainGoalCard;